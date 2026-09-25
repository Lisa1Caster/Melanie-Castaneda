import React from 'react';

/**
 * Editorial Section Heading
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  isLight = false,
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`section-header-block ${className}`}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        marginBottom: 'var(--space-48)',
        maxWidth: isCenter ? '760px' : '720px',
        marginLeft: isCenter ? 'auto' : '0',
        marginRight: isCenter ? 'auto' : '0',
      }}
    >
      {eyebrow && (
        <span className={`section-eyebrow ${isLight ? 'section-eyebrow-light' : ''}`}>
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          style={{
            color: isLight ? '#FFFFFF' : 'var(--color-ink)',
            marginBottom: description ? 'var(--space-16)' : '0',
          }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          style={{
            color: isLight ? 'rgba(255, 255, 255, 0.85)' : 'var(--color-ink-muted)',
            fontSize: '1.05rem',
            lineHeight: 1.65,
            marginLeft: isCenter ? 'auto' : '0',
            marginRight: isCenter ? 'auto' : '0',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
