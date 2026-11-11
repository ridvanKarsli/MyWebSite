export default function Monogram({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="monogram">
      <rect width="32" height="32" rx="3" fill="var(--mono-bg, var(--petrol))" />
      <g fill="none" stroke="var(--mono-fg, var(--paper))" strokeWidth="2.4" strokeLinejoin="miter">
        <path d="M8 24V8h5a4 4 0 0 1 0 8H8" />
        <path d="M12.2 16 16 24" />
        <path d="M19.5 8v16" />
        <path d="M26 8l-6.3 8L26 24" />
      </g>
    </svg>
  );
}
