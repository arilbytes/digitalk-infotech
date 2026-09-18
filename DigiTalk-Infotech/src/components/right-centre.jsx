export default function HeroArt() {
  return (
    <svg
      viewBox="0 0 560 460"
      className="hero-art"
      role="img"
      aria-label="Illustration of a browser window and a mobile app screen connected to a code panel"
    >
      <defs>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="rgba(253,240,213,0.08)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="560" height="460" fill="url(#grid)" />

      {/* browser window */}
      <g transform="translate(30,26)">
        <rect x="0" y="0" width="330" height="220" rx="6" fill="none" stroke="var(--steel)" strokeWidth="1.6" />
        <line x1="0" y1="34" x2="330" y2="34" stroke="var(--steel)" strokeWidth="1.6" />
        <circle cx="18" cy="17" r="4" fill="var(--brick)" />
        <circle cx="34" cy="17" r="4" fill="none" stroke="var(--steel)" strokeWidth="1.4" />
        <circle cx="50" cy="17" r="4" fill="none" stroke="var(--steel)" strokeWidth="1.4" />
        <rect x="80" y="11" width="200" height="12" rx="3" fill="none" stroke="var(--steel)" strokeWidth="1.2" opacity="0.7" />

        <rect x="18" y="52" width="120" height="90" rx="4" fill="none" stroke="var(--steel)" strokeWidth="1.4" />
        <path d="M40 118 L62 88 L80 104 L110 72" stroke="var(--brick)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="118" r="3" fill="var(--brick)" />
        <circle cx="110" cy="72" r="3" fill="var(--brick)" />

        <rect x="154" y="52" width="158" height="10" rx="2" fill="var(--steel)" opacity="0.85" />
        <rect x="154" y="70" width="158" height="7" rx="2" fill="var(--steel)" opacity="0.45" />
        <rect x="154" y="84" width="130" height="7" rx="2" fill="var(--steel)" opacity="0.45" />
        <rect x="154" y="98" width="140" height="7" rx="2" fill="var(--steel)" opacity="0.45" />

        <rect x="154" y="120" width="76" height="24" rx="3" fill="var(--brick)" />
        <rect x="18" y="166" width="294" height="1.4" fill="var(--steel)" opacity="0.35" />
        <rect x="18" y="182" width="84" height="8" rx="2" fill="var(--steel)" opacity="0.5" />
        <rect x="118" y="182" width="84" height="8" rx="2" fill="var(--steel)" opacity="0.5" />
        <rect x="218" y="182" width="84" height="8" rx="2" fill="var(--steel)" opacity="0.5" />
      </g>

      {/* phone */}
      <g transform="translate(392,10)">
        <rect x="0" y="0" width="116" height="234" rx="16" fill="none" stroke="var(--steel)" strokeWidth="1.6" />
        <rect x="10" y="16" width="96" height="176" rx="3" fill="none" stroke="var(--steel)" strokeWidth="1.2" opacity="0.8" />
        <rect x="10" y="16" width="96" height="36" fill="var(--brick)" opacity="0.9" />
        <rect x="18" y="28" width="46" height="8" rx="2" fill="var(--beige)" opacity="0.85" />
        <rect x="18" y="64" width="80" height="42" rx="4" fill="none" stroke="var(--steel)" strokeWidth="1.2" />
        <rect x="18" y="114" width="80" height="8" rx="2" fill="var(--steel)" opacity="0.5" />
        <rect x="18" y="128" width="60" height="8" rx="2" fill="var(--steel)" opacity="0.5" />
        <circle cx="58" cy="204" r="8" fill="none" stroke="var(--steel)" strokeWidth="1.4" />
      </g>

      {/* connector */}
      <path d="M362 130 C382 130 372 90 400 90" stroke="var(--steel)" strokeWidth="1.4" fill="none" strokeDasharray="3 5" opacity="0.7" />

      {/* code panel */}
      <g transform="translate(30,272)">
        <rect x="0" y="0" width="360" height="150" rx="6" fill="rgba(253,240,213,0.04)" stroke="var(--steel)" strokeWidth="1.2" />
        <text x="20" y="30" fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="var(--steel-soft)">
          const project = {"{"}
        </text>
        <text x="36" y="52" fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="var(--beige)">
          stack: <tspan fill="var(--brick)">"React + Node"</tspan>,
        </text>
        <text x="36" y="74" fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="var(--beige)">
          design: <tspan fill="var(--brick)">"pixel-perfect"</tspan>,
        </text>
        <text x="36" y="96" fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="var(--beige)">
          delivery: <tspan fill="var(--brick)">"on time"</tspan>
        </text>
        <text x="20" y="118" fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="var(--steel-soft)">
          {"}"};
        </text>
        <rect x="278" y="14" width="66" height="20" rx="3" fill="none" stroke="var(--steel)" strokeWidth="1.2" opacity="0.7" />
        <text x="311" y="27.5" fontFamily="IBM Plex Mono, monospace" fontSize="9.5" fill="var(--steel-soft)" textAnchor="middle">
          build.js
        </text>
      </g>
    </svg>
  );
}
