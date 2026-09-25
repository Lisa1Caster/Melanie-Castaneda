import React from 'react';
import { business } from '../config/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#121722',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: 'var(--space-64)',
        paddingBottom: 'var(--space-48)',
      }}
    >
      <div className="section-container">
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: 'var(--space-48)',
            marginBottom: 'var(--space-48)',
          }}
        >
          {/* Brand Info */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 500,
                color: '#FFFFFF',
                display: 'block',
                marginBottom: 'var(--space-12)',
              }}
            >
              {business.name}
            </span>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.65)',
                maxWidth: '44ch',
                marginBottom: 'var(--space-16)',
                lineHeight: 1.6,
              }}
            >
              {business.footer.note}
            </p>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-secondary)',
              }}
            >
              {business.footer.locationText}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.5)',
                display: 'block',
                marginBottom: 'var(--space-16)',
              }}
            >
              Quick Links
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
              {business.navigation.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.75)',
                      transition: 'color 150ms ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.5)',
                display: 'block',
                marginBottom: 'var(--space-16)',
              }}
            >
              Direct Line
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
              <a
                href={business.contact.phoneHref}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-8)',
                }}
              >
                <span>{business.contact.phoneDisplay}</span>
              </a>

              {business.contact.whatsapp && (
                <a
                  href={business.contact.whatsappHref}
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-secondary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-8)',
                  }}
                >
                  <span>WhatsApp Message</span>
                </a>
              )}

              <a
                href={business.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.85rem',
                  color: 'rgba(255, 255, 255, 0.65)',
                }}
              >
                Directions on Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Sub-Footer */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: 'var(--space-24)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 'var(--space-16)',
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <span>
            &copy; {currentYear} {business.name}. {business.footer.copyright}
          </span>
          <span>
            {business.address.city}, {business.address.country} ({business.address.postcode})
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-32) !important;
          }
        }
      `}</style>
    </footer>
  );
}
