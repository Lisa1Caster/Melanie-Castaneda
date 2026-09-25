import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function WhyChooseUs() {
  const { eyebrow, title, subtitle, points } = business.whyChooseUs;

  return (
    <section
      id="why-choose-us"
      className="site-section"
      style={{
        backgroundColor: 'var(--color-canvas)',
      }}
    >
      <div className="section-container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={subtitle}
        />

        <div
          className="why-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-32)',
            marginTop: 'var(--space-16)',
          }}
        >
          {points.map((pt) => (
            <div
              key={pt.number}
              className="luxury-card"
              style={{
                padding: 'var(--space-32)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                backgroundColor: 'var(--color-surface)',
              }}
            >
              {/* Editorial numeral */}
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--space-16)',
                  lineHeight: 1,
                }}
              >
                {pt.number}
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--color-ink)',
                  marginBottom: 'var(--space-12)',
                }}
              >
                {pt.title}
              </h3>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--color-ink-muted)',
                  lineHeight: 1.65,
                }}
              >
                {pt.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-24) !important;
          }
        }
      `}</style>
    </section>
  );
}
