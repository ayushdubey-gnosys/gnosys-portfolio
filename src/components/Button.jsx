import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  icon: Icon,
  iconRight: IconRight,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 select-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-[15px] gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  const variants = {
    primary:
      'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 border border-transparent hover:-translate-y-0.5',
    secondary:
      'bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/15 hover:shadow-lg hover:-translate-y-0.5',
    outline:
      'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow hover:-translate-y-0.5',
    ghost:
      'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-transparent',
  };

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />}
      <span>{children}</span>
      {IconRight && (
        <IconRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
