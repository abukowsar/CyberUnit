export function Emblem({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Cyber Police Unit emblem">
      <path d="M32 3 7 12v18c0 16 10.6 26.6 25 31 14.4-4.4 25-15 25-31V12L32 3Z" fill="var(--emblem-bg)" stroke="var(--emblem-ring)" strokeWidth="2.5" />
      <path d="M32 9.5 13 16.4V30c0 12.3 7.8 20.8 19 24.6C43.2 50.8 51 42.3 51 30V16.4L32 9.5Z" fill="none" stroke="var(--emblem-line)" strokeWidth="1.2" opacity=".7" />
      <g stroke="var(--emblem-line)" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M20 26h6l3 3" />
        <path d="M44 26h-6l-3 3" />
        <path d="M20 38h6l3-3" />
        <path d="M44 38h-6l-3-3" />
      </g>
      <g fill="var(--emblem-line)">
        <circle cx="19" cy="26" r="1.8" />
        <circle cx="45" cy="26" r="1.8" />
        <circle cx="19" cy="38" r="1.8" />
        <circle cx="45" cy="38" r="1.8" />
      </g>
      <rect x="26" y="27" width="12" height="10" rx="2" fill="var(--emblem-accent)" />
      <path d="M28.5 27v-3a3.5 3.5 0 0 1 7 0v3" fill="none" stroke="var(--emblem-accent)" strokeWidth="2" />
      <circle cx="32" cy="32" r="1.6" fill="var(--emblem-bg)" />
    </svg>
  );
}
