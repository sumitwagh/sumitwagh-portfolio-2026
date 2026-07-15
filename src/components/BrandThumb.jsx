// Renders a project's brand lockup (glyph + wordmark) on a branded gradient,
// used as the thumbnail on listing pages instead of a UI screenshot.

const glyphs = {
  chat: (
    <path d="M12 3C7 3 3 6.2 3 10.3c0 2.2 1.2 4.2 3.1 5.5-.1 1-.6 2.3-1.6 3.4 1.7-.2 3.3-.8 4.5-1.7 1 .2 2 .3 3 .3 5 0 9-3.2 9-7.2S17 3 12 3z" />
  ),
  heart: (
    <path d="M12 20.5S3.5 15 3.5 9.2C3.5 6.4 5.7 4.5 8.1 4.5c1.7 0 3.1.9 3.9 2.3.8-1.4 2.2-2.3 3.9-2.3 2.4 0 4.6 1.9 4.6 4.7 0 5.8-8.5 11.3-8.5 11.3z" />
  ),
  spark: (
    <path d="M12 2l2.2 6.1L20 10l-5.8 1.9L12 18l-2.2-6.1L4 10l5.8-1.9L12 2z" />
  ),
  bolt: (
    <path d="M13 2L4.5 13.2h6L10 22l9-11.5h-6.2L13 2z" />
  ),
  spine: (
    <path d="M6 4h12v3H6V4zm2 5.5h8v3H8v-3zM6 15h12v3H6v-3z" />
  ),
  glasses: (
    <path d="M2.5 9h19v1.6h-1l-.3.2A4.2 4.2 0 0 1 12 12a4.2 4.2 0 0 1-8.2-1.2l-.3-.2h-1V9zm4.3 1.6a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0zm6.4 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0z" />
  ),
  cross: (
    <path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7V3z" />
  ),
}

export default function BrandThumb({ brand, className = '' }) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${className}`}
      style={{ background: brand.bg }}
    >
      {/* soft radial highlight for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: 'radial-gradient(120% 100% at 30% 15%, rgba(255,255,255,0.18), transparent 60%)' }}
      />
      <div className="relative flex flex-col items-center gap-4">
        <svg viewBox="0 0 24 24" className="h-10 w-10 md:h-12 md:w-12" fill={brand.fg} aria-hidden="true">
          {glyphs[brand.glyph]}
        </svg>
        <p className="text-[clamp(1.5rem,3vw,2.25rem)]" style={{ color: brand.fg }}>
          {brand.name}
          {brand.accent && <span style={{ color: brand.accentColor }}>{brand.accent}</span>}
        </p>
      </div>
    </div>
  )
}
