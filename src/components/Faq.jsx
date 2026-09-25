import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function Faq() {
  const { faq } = business;
  const [openIndex, setOpenIndex] = useState(0);

  if (!faq || !faq.items || faq.items.length === 0) {
    return null;
  }

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="site-section"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="section-container" style={{ maxWidth: '860px' }}>
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.title}
          description={faq.subtitle}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-control)',
                  backgroundColor: isOpen ? 'var(--color-canvas)' : 'var(--color-surface)',
                  overflow: 'hidden',
                  transition: 'background-color 200ms ease, border-color 200ms ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: 'var(--space-24)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 'var(--space-16)',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem',
                    fontWeight: 500,
                    color: 'var(--color-ink)',
                  }}
                >
                  <span>{item.question}</span>
                  <span
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 200ms ease',
                      flexShrink: 0,
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 var(--space-24) var(--space-24) var(--space-24)',
                      color: 'var(--color-ink-muted)',
                      fontSize: '1rem',
                      lineHeight: 1.65,
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
