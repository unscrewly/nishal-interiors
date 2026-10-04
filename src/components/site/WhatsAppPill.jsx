/**
 * Labelled WhatsApp pill (desktop): soft shadow, gentle scale on hover.
 * The mobile sticky bar already carries WhatsApp, so this is md+ only.
 */
export default function WhatsAppPill({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2.5 min-h-[48px] px-5 bg-ivory text-espresso hover:scale-[1.05] transition-transform duration-300 [box-shadow:0_10px_30px_rgba(28,21,18,0.35)]"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.51 14.93L2 22l5.2-1.5A9.93 9.93 0 1 0 12.04 2Zm0 1.67a8.26 8.26 0 1 1-4.2 15.37l-.3-.18-3.08.89.9-3-.2-.31a8.26 8.26 0 0 1 6.88-12.77Zm-3.3 4.06c-.16 0-.43.06-.65.3-.23.23-.87.85-.87 2.07 0 1.22.89 2.4 1 2.56.13.17 1.75 2.79 4.25 3.8 2.1.86 2.53.69 2.99.65.46-.04 1.48-.6 1.69-1.19.2-.58.2-1.08.15-1.19-.06-.1-.23-.17-.48-.3s-1.48-.73-1.7-.81c-.23-.09-.4-.13-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.73-.14-.25-.01-.39.11-.51.11-.12.25-.3.37-.45.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48Z" />
      </svg>
      <span className="text-[11px] font-medium uppercase tracking-[0.14em]">Chat with us</span>
    </a>
  );
}