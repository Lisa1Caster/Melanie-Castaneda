import React from 'react';

/**
 * Reusable Button component that handles both anchor tags and button elements
 */
export default function Button({
  as = 'button',
  href,
  variant = 'primary',
  children,
  className = '',
  onClick,
  type = 'button',
  target,
  rel,
  ...props
}) {
  const baseClasses = `btn btn-${variant} ${className}`.trim();

  if (as === 'a' || href) {
    const isExternal = href?.startsWith('http') || href?.startsWith('tel:') || href?.startsWith('mailto:');
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        target={target || (href?.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href?.startsWith('http') ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
