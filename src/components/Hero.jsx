import React, { useState } from 'react';
import { business } from '../config/business';
import Button from './ui/Button';

export default function Hero() {
  const [bgFailed, setBgFailed] = useState(false);

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(76px + var(--space-64))',
        paddingBottom: 'var(--space-64)',
        backgroundColor: '#161B26',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* Background Media with Tonal Overlay */}
      {!bgFailed && business.hero.backgroundImage && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        >
          <img
            src={business.hero.backgroundImage}
            alt={business.hero.imageAlt}
            referrerPolicy="no-referrer"
            onError={() => setBgFailed(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
            }}
          />
        </div>
      )}

      {/* Measured Dark Tonal Scrim for High Contrast & Text Legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(180deg, rgba(18, 23, 34, 0.78) 0%, rgba(18, 23, 34, 0.88) 100%)',
        }}
      />

      {/* Content Container */}
      <div
        className="section-container"
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '960px',
        }}
      >
        {/* Eyebrow */}
        <div style={{ marginBottom: 'var(--space-16)' }}>
          <span
            className="section-eyebrow"
            style={{
              color: 'var(--color-secondary)',
              letterSpacing: '0.14em',
              fontSize: '0.85rem',
            }}
          >
            {business.hero.eyebrow}
          </span>
        </div>

        {/* H1 Headline */}
        <h1
          style={{
            color: '#FFFFFF',
            marginBottom: 'var(--space-24)',
            maxWidth: '22ch',
          }}
        >
          {business.hero.title}
        </h1>

        {/* Supporting Line */}
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.88)',
            fontSize: '1.2rem',
            lineHeight: 1.65,
            maxWidth: '56ch',
            marginBottom: 'var(--space-32)',
          }}
        >
          {business.hero.subtitle}
        </p>

        {/* Action CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 'var(--space-16)',
            marginBottom: 'var(--space-48)',
          }}
        >
          <Button
            as="a"
            href={business.hero.primaryCta.href}
            variant="light"
            style={{
              fontSize: '1rem',
              padding: '14px 28px',
              fontWeight: 600,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{business.hero.primaryCta.label}</span>
          </Button>

          <Button
            as="a"
            href={business.hero.secondaryCta.href}
            variant="outline-light"
            style={{
              fontSize: '1rem',
              padding: '14px 28px',
            }}
          >
            <span>{business.hero.secondaryCta.label}</span>
            <span aria-hidden="true">&darr;</span>
          </Button>

          {business.contact.whatsappHref && (
            <Button
              as="a"
              href={business.contact.whatsappHref}
              variant="outline-light"
              style={{
                fontSize: '0.95rem',
                padding: '14px 24px',
                borderColor: 'rgba(184, 216, 216, 0.4)',
                color: 'var(--color-secondary)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>WhatsApp Message</span>
            </Button>
          )}
        </div>

        {/* Quiet Trust Line Below */}
        {business.hero.trustBadge && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-12)',
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.72)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: 'var(--space-24)',
              maxWidth: '520px',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-secondary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ shrink: 0 }}
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{business.hero.trustBadge}</span>
          </div>
        )}
      </div>
    </section>
  );
}
