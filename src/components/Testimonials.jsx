import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * Rendered ONLY if real testimonials exist in business.js.
 * Strictly adheres to the rule: "If none provided, omit this section entirely — do not replace it with filler."
 */
export default function Testimonials() {
  const testimonials = business.testimonials || [];

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="site-section"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Client Words"
          title="Reflections from Homeowners"
          description="Direct feedback from residents across Bristol."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-32)',
          }}
        >
          {testimonials.map((t, idx) => (
            <blockquote
              key={idx}
              className="luxury-card"
              style={{
                padding: 'var(--space-32)',
                backgroundColor: 'var(--color-canvas)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  lineHeight: 1.6,
                  color: 'var(--color-ink)',
                  marginBottom: 'var(--space-24)',
                  fontStyle: 'italic',
                }}
              >
                "{t.quote}"
              </p>
              <footer style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
                <cite
                  style={{
                    fontStyle: 'normal',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-ink)',
                  }}
                >
                  {t.author}
                </cite>
                {t.location && (
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>
                    · {t.location}
                  </span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
