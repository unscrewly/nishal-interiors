import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";

const FIELD =
  "w-full bg-transparent border-0 border-b border-hairline focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass py-3 text-ink placeholder:text-taupe-light";
const LABEL = "label block mb-1";

export default function ContactForm() {
  const navigate = useNavigate();
  const mountedAt = useRef(Date.now());
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    property_type: "",
    size: "",
    scope: "",
    timeline: "",
    message: "",
    consent: false,
    company: "", // honeypot
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const set = (key) => (e) =>
    setForm((f) => ({
      ...f,
      [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please tell us your name.";
    if (!form.phone.trim() && !form.email.trim())
      errs.contact = "Please share a phone number or an email so we can reply.";
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email))
      errs.email = "Please check the email address.";
    if (!form.consent)
      errs.consent = "Please agree to our Privacy Policy so we can respond.";
    if (!form.scope) errs.scope = "Please choose the kind of work you need.";
    if (Date.now() - mountedAt.current < 3000)
      errs.form = "Please take a moment to complete the form.";
    return errs;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    if (form.company) {
      // honeypot filled: pretend success, drop the message
      navigate("/contact/thank-you/");
      return;
    }

    setStatus("sending");
    try {
      await base44.entities.Enquiry.create({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        area: form.area.trim(),
        property_type: form.property_type,
        size: form.size.trim(),
        scope: form.scope,
        timeline: form.timeline,
        message: form.message.trim(),
        consent: true,
      });
      navigate("/contact/thank-you/");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-2xl">
      {errors.form && (
        <p role="alert" className="text-ink border-l-2 border-brass pl-3 mb-6">
          {errors.form}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-ink border-l-2 border-brass pl-3 mb-6">
          We could not send that just now. Please email us at{" "}
          <a href="mailto:nishalinteriors@gmail.com" className="underline decoration-hairline underline-offset-4">
            nishalinteriors@gmail.com
          </a>{" "}
          or reach us on Instagram while we fix it.
        </p>
      )}

      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.company}
        onChange={set("company")}
        className="absolute -left-[9999px] w-px h-px opacity-0"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label htmlFor="cf-name" className={LABEL}>Name</label>
          <input id="cf-name" type="text" required placeholder="Your full name" value={form.name} onChange={set("name")} className={FIELD} />
          {errors.name && <p className="text-ink text-sm mt-2">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-area" className={LABEL}>Area in Mumbai</label>
          <input id="cf-area" type="text" placeholder="For example, Bandra or Powai" value={form.area} onChange={set("area")} className={FIELD} />
        </div>
        <div>
          <label htmlFor="cf-phone" className={LABEL}>Phone</label>
          <input id="cf-phone" type="tel" placeholder="10-digit mobile number" value={form.phone} onChange={set("phone")} className={FIELD} />
        </div>
        <div>
          <label htmlFor="cf-email" className={LABEL}>Email</label>
          <input id="cf-email" type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} className={FIELD} />
          {(errors.contact || errors.email) && (
            <p className="text-ink text-sm mt-2">{errors.contact || errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="cf-type" className={LABEL}>Property type</label>
          <select id="cf-type" value={form.property_type} onChange={set("property_type")} className={FIELD}>
            <option value="">Choose</option>
            <option>Apartment, 1 to 2 bedrooms</option>
            <option>Apartment, 3 bedrooms and above</option>
            <option>Independent house or bungalow</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="cf-size" className={LABEL}>Approximate size</label>
          <input id="cf-size" type="text" placeholder="For example, 640 sq ft or 2 BHK" value={form.size} onChange={set("size")} className={FIELD} />
        </div>
        <div>
          <label htmlFor="cf-scope" className={LABEL}>Scope of work</label>
          <select id="cf-scope" value={form.scope} onChange={set("scope")} className={FIELD}>
            <option value="">Choose</option>
            <option>Full home interior</option>
            <option>Modular kitchen</option>
            <option>Space planning</option>
            <option>3D design</option>
            <option>Turnkey execution</option>
          </select>
          {errors.scope && <p className="text-ink text-sm mt-2">{errors.scope}</p>}
        </div>
        <div>
          <label htmlFor="cf-timeline" className={LABEL}>Timeline</label>
          <select id="cf-timeline" value={form.timeline} onChange={set("timeline")} className={FIELD}>
            <option value="">Choose</option>
            <option>As soon as possible</option>
            <option>Within 3 months</option>
            <option>Within 6 months</option>
            <option>Still planning</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="cf-message" className={LABEL}>Tell us about the project</label>
        <textarea id="cf-message" rows="5" value={form.message} onChange={set("message")} className={FIELD} />
      </div>

      <div className="mt-8 flex items-start gap-3">
        <input
          id="cf-consent"
          type="checkbox"
          required
          checked={form.consent}
          onChange={set("consent")}
          className="mt-1 w-5 h-5 min-w-5 accent-[#2A2622]"
        />
        <label htmlFor="cf-consent" className="text-taupe leading-relaxed">
          I agree that Nishal Interiors may use these details to respond to my
          enquiry, as described in the{" "}
          <Link to="/privacy-policy/" className="underline decoration-hairline underline-offset-4 hover:decoration-brass">
            Privacy Policy
          </Link>
          .
        </label>
      </div>
      {errors.consent && <p className="text-ink text-sm mt-2">{errors.consent}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-solid mt-8"
      >
        {status === "sending" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}