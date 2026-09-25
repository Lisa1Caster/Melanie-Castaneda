import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function About() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="about"
      className="site-section"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="section-container">
        <div
          className="about-two-col"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-64)',
            alignItems: 'center',
          }}
        >
          {/* Column 1: Image */}
          <div
            className="media-frame"
            style={{
              borderRadius: 'var(--radius-card)',
              aspectRatio: '4 / 3',
              boxShadow: 'var(--shadow-resting)',
              border: '1px solid var(--color-border)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {!imageFailed && business.about.image ? (
              <img
                src={business.about.image}
                alt={business.about.imageAlt}
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={() => setImageFailed(true)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            ) : (
              <div className="media-fallback" style={{ minHeight: '380px' }}>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginBottom: '12px', opacity: 0.9 }}
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-secondary)' }}>
                  77 Silverhill Road, Bristol BS10 7NS
                </span>
              </div>
            )}
          </div>

          {/* Column 2: Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SectionHeading
              eyebrow={business.about.eyebrow}
              title={business.about.title}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
              {business.about.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    color: 'var(--color-ink-muted)',
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Quiet metadata details (Zero-pill text list) */}
            <div
              style={{
                marginTop: 'var(--space-32)',
                paddingTop: 'var(--space-24)',
                borderTop: '1px solid var(--color-border)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 'var(--space-16)',
              }}
            >
              {business.about.details.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-ink-muted)',
                      marginBottom: 'var(--space-4)',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: 'var(--color-ink)',
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-two-col {
            grid-template-columns: 1fr !important;
            gap: var(--space-32) !important;
          }
        }
      `}</style>
    </section>
  );
}
