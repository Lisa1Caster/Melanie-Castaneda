import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = business.services.items;

  return (
    <section id="services" className="site-section" style={{ backgroundColor: 'var(--color-canvas)' }}>
      <div className="section-container">
        {/* Section Heading */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <SectionHeading
            eyebrow={business.services.eyebrow}
            title={business.services.title}
            description={business.services.description}
          />
        </div>

        {/* Elevated Services Grid: 3 across on desktop, 2 on tablet, 1 on mobile */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--space-32)',
            marginTop: 'var(--space-16)',
          }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onSelectService}
            />
          ))}
        </div>

        {/* Quiet support note */}
        <div
          style={{
            marginTop: 'var(--space-48)',
            padding: 'var(--space-24)',
            backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius-card)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-16)',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-4)' }}>
              Require immediate diagnostic assistance in {business.city}?
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
              Direct telephone line open for urgent repairs and scheduled inspections.
            </p>
          </div>
          <a
            href={business.contact.phoneHref}
            className="btn btn-primary"
            style={{ fontSize: '0.9rem', padding: '10px 20px', minHeight: '44px' }}
          >
            {business.navigation.primaryCta.label}: {business.contact.phoneDisplay}
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
