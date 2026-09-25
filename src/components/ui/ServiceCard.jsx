import React, { useState } from 'react';
import { business } from '../../config/business';

export default function ServiceCard({ service, onSelect }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article
      className="luxury-card service-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      {/* Media container with fixed 16:10 aspect ratio */}
      <div
        className="media-frame"
        style={{
          aspectRatio: '16 / 10',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#E5E9F0',
        }}
      >
        {!imageFailed && service.image ? (
          <img
            src={service.image}
            alt={`${service.title} in Bristol`}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImageFailed(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        ) : (
          <div className="media-fallback">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginBottom: '8px', opacity: 0.9 }}
            >
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
            <span style={{ fontSize: '0.85rem', letterSpacing: '0.05em', color: 'var(--color-secondary)' }}>
              Melanie Castaneda Plumbing
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: 'var(--space-24)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 500,
              color: 'var(--color-ink)',
              marginBottom: 'var(--space-8)',
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--color-ink-muted)',
              lineHeight: 1.6,
              marginBottom: 'var(--space-16)',
            }}
          >
            {service.description}
          </p>
        </div>

        <div
          style={{
            paddingTop: 'var(--space-16)',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href={business.contact.phoneHref}
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
            onClick={() => onSelect && onSelect(service)}
          >
            <span>Inquire for {service.title}</span>
            <span aria-hidden="true" style={{ transition: 'transform 200ms ease' }}>&rarr;</span>
          </a>
        </div>
      </div>
    </article>
  );
}
