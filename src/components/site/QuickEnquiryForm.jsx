import { useState } from "react";
import { base44 } from "@/api/base44Client";

const FIELD =
  "w-full bg-transparent border-0 border-b border-ivory/25 focus:border-brass focus:outline-none py-3 text-ivory placeholder:text-ivory/40";
const LABEL = "label text-ivory/60 block mb-1";

/**
 * Short enquiry form for the final CTA section. Submits to the same
 * Enquiries store as the contact page; the budget range is recorded in
 * the message field so the data model stays unchanged.
 */
export default function QuickEnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", property: "", budget: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Please tell us your name.";
    if (!form.phone.trim())
      errs.phone = "Please share a phone number so we can call you back.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus("sending");
    try {
      await base44.entities.Enquiry.create({
        name: form.name.trim(),
        phone: form.phone.trim(),
        property_type: form.property.trim(),
        message: form.budget.trim() ? `Budget range: ${form.budget.trim()}` : "",
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-ivory/20 p-8">
        <p className="label text-brass mb-3">Enquiry received</p>
        <p className="font-display text-3xl text-ivory" style={{ lineHeight: 1.1 }}>
          Thank you. We will call you within 24 hours.
        </p>
        <p className="text-ivory/70 mt-3 leading-relaxed">
          No obligation — just a conversation about your home.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="qe-name" className={LABEL}>Name</label>
        <input id="qe-name" type="text" placeholder="Your full name" value={form.name} onChange={set("name")} className={FIELD} />
        {errors.name && <p className="text-ivory/80 text-sm mt-2">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="qe-phone" className={LABEL}>Phone</label>
        <input id="qe-phone" type="tel" placeholder="10-digit mobile number" value={form.phone} onChange={set("phone")} className={FIELD} />
        {errors.phone && <p className="text-ivory/80 text-sm mt-2">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="qe-property" className={LABEL}>Property type &amp; area</label>
        <input id="qe-property" type="text" placeholder="For example, 3 BHK in Powai" value={form.property} onChange={set("property")} className={FIELD} />
      </div>
      <div>
        <label htmlFor="qe-budget" className={LABEL}>Budget range</label>
        <input id="qe-budget" type="text" placeholder="For example, 8-12 lakh" value={form.budget} onChange={set("budget")} className={FIELD} />
      </div>
      {status === "error" && (
        <p role="alert" className="text-ivory/80 text-sm">
          We could not send that just now. Please call 9702019905 or WhatsApp us.
        </p>
      )}
      <button type="submit" disabled={status === "sending"} className="btn-brass w-full">
        {status === "sending" ? "Sending…" : "Book a Free Consultation"}
      </button>
      <p className="label text-ivory/50">Free. No obligation. Reply within 24 hours.</p>
    </form>
  );
}