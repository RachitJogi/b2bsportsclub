/**
 * Layered, floodlit-turf hero artwork. Each layer is its own element so the
 * scroll-driven parallax (see home.css) can move them at different speeds.
 * Pure SVG/CSS: no network request, no client JS.
 */
const TOWERS = [140, 430, 1010, 1300];
const STARS = Array.from({ length: 46 }, (_, i) => ({
  x: (i * 337) % 1440,
  y: (i * 191) % 380,
  r: 0.6 + ((i * 7) % 5) * 0.28,
}));

export default function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg className="hero-art__layer hero-art__sky" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#060b1c" />
            <stop offset="0.55" stopColor="#0b132b" />
            <stop offset="1" stopColor="#12306b" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="78%" r="55%">
            <stop offset="0" stopColor="#00b8d4" stopOpacity="0.55" />
            <stop offset="0.5" stopColor="#00e5ff" stopOpacity="0.16" />
            <stop offset="1" stopColor="#00e5ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#sky)" />
        <rect width="1440" height="900" fill="url(#glow)" />
        {STARS.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#fff" opacity={0.25 + (i % 4) * 0.12} />
        ))}
      </svg>

      <svg className="hero-art__layer hero-art__lights" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#bff7ff" stopOpacity="0.5" />
            <stop offset="1" stopColor="#00e5ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {TOWERS.map((x, i) => {
          const dir = x < 720 ? 1 : -1;
          return (
            <g key={x}>
              <polygon
                points={`${x - 26},210 ${x + 26},210 ${x + dir * 330 + 190},760 ${x + dir * 330 - 190},760`}
                fill="url(#beam)"
                opacity={i % 2 ? 0.7 : 1}
              />
              <rect x={x - 3} y="214" width="6" height="340" fill="#1c2541" />
              <rect x={x - 34} y="176" width="68" height="40" rx="4" fill="#243055" />
              {[-22, -7, 8, 23].map((dx) => (
                <circle key={dx} cx={x + dx} cy="196" r="5" fill="#bff7ff" />
              ))}
            </g>
          );
        })}
      </svg>

      <svg className="hero-art__layer hero-art__stands" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice">
        <path d="M0 560 Q720 470 1440 560 L1440 900 L0 900 Z" fill="#080e22" />
        <path d="M0 600 Q720 520 1440 600" fill="none" stroke="#00b8d4" strokeOpacity="0.35" strokeWidth="2" />
        {Array.from({ length: 70 }, (_, i) => (
          <circle
            key={i}
            cx={20 + i * 20.5}
            cy={590 - Math.sin((i / 70) * Math.PI) * 62 + ((i * 13) % 17)}
            r="2"
            fill={i % 3 ? "#00e5ff" : "#00e5ff"}
            opacity={0.35 + (i % 5) * 0.1}
          />
        ))}
      </svg>

      <svg className="hero-art__layer hero-art__field" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="turf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0e3a4a" />
            <stop offset="1" stopColor="#137a8c" />
          </linearGradient>
        </defs>
        <path d="M0 640 Q720 570 1440 640 L1440 900 L0 900 Z" fill="url(#turf)" />
        {Array.from({ length: 9 }, (_, i) => (
          <path
            key={i}
            d={`M${720 + (i - 4) * 18} 610 L${720 + (i - 4) * 300} 900 L${720 + (i - 4) * 300 + 150} 900 L${720 + (i - 4) * 18 + 9} 610 Z`}
            fill="#fff"
            opacity={i % 2 ? 0.05 : 0}
          />
        ))}
        <polygon points="676,625 764,625 920,900 520,900" fill="#7fd6e6" opacity="0.5" />
        <g stroke="#bff7ff" strokeWidth="3" opacity="0.8">
          <line x1="702" y1="640" x2="702" y2="672" />
          <line x1="720" y1="640" x2="720" y2="672" />
          <line x1="738" y1="640" x2="738" y2="672" />
        </g>
        <rect x="0" y="860" width="1440" height="40" fill="#060b1c" opacity="0.5" />
      </svg>

      <div className="hero-art__vignette" />
    </div>
  );
}
