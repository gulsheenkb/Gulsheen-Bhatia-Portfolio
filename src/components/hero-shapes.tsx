export function HeroShapes() {
  const rays = Array.from({ length: 18 }, (_, i) => i);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-[16%] -left-[8%] -right-[26%] -top-[18%] z-0"
    >
      <svg
        viewBox="0 0 420 360"
        className="h-full w-full overflow-visible"
        fill="none"
      >
        <defs>
          <filter id="lilac-soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <g className="animate-sun-spin">
          <circle cx="292" cy="210" r="128" fill="#F4D56A" />
          {rays.map((i) => (
            <polygon
              key={i}
              points="292,210 276,78 308,78"
              fill="#FF9FBE"
              transform={`rotate(${i * 20} 292 210)`}
            />
          ))}
        </g>

        <g className="animate-blob-float">
          <circle cx="132" cy="108" r="92" fill="#1A9B74" />
          <ellipse
            cx="132"
            cy="108"
            rx="62"
            ry="28"
            fill="#D9B4F0"
            transform="rotate(-32 132 108)"
            filter="url(#lilac-soft)"
            opacity="0.95"
          />
        </g>

        <g className="animate-star-twinkle">
          <circle cx="92" cy="278" r="52" fill="#F7E7B8" />
          <path
            d="M92 236 L104 266 L136 278 L104 290 L92 320 L80 290 L48 278 L80 266 Z"
            fill="#F0A31A"
          />
        </g>
      </svg>
    </div>
  );
}
