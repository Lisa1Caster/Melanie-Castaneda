import React, { useState, useEffect } from 'react';
import { business } from '../config/business';
import Button from './ui/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(18, 23, 34, 0.96)' : 'rgba(22, 27, 38, 0.90)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'background-color 200ms ease, box-shadow 200ms ease',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.25)' : 'none',
      }}
    >
      <div
        className="section-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
        }}
      >
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          onClick={closeMenu}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.35rem',
            fontWeight: 500,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
          }}
        >
          {business.name}
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'var(--space-32)',
          }}
        >
          {business.navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.85)',
                transition: 'color 150ms ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-16)',
          }}
        >
          <div className="desktop-cta">
            <Button
              as="a"
              href={business.navigation.primaryCta.href}
              variant="light"
              style={{
                fontSize: '0.875rem',
                padding: '10px 20px',
                minHeight: '42px',
                fontWeight: 600,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{business.navigation.primaryCta.label}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              borderRadius: 'var(--radius-control)',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            backgroundColor: '#161B26',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: 'var(--space-24)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-16)',
          }}
        >
          {business.navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontSize: '1.05rem',
                fontWeight: 500,
                color: '#FFFFFF',
                paddingTop: 'var(--space-8)',
                paddingBottom: 'var(--space-8)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: 'var(--space-8)' }}>
            <Button
              as="a"
              href={business.navigation.primaryCta.href}
              variant="light"
              onClick={closeMenu}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {business.navigation.primaryCta.label} ({business.contact.phoneDisplay})
            </Button>
          </div>
        </div>
      )}

      {/* Responsive styles for Navbar layout */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .desktop-cta {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
