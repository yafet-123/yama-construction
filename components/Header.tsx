'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SITE_NAME, SITE_PHONE, categories, brands } from '@/lib/data';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = [
    { label: 'Products', href: '/products', dropdown: categories.map(c => ({ label: c.name, href: `/products/${c.slug}` })) },
    { label: 'Brands', href: '/brands', dropdown: brands.map(b => ({ label: b.name, href: `/brands/${b.slug}` })) },
    { label: 'Services', href: '/services', dropdown: [
      { label: 'Overview', href: '/services' },
      { label: 'Maintenance', href: '/services/maintenance' },
      { label: 'Field Service', href: '/services/field-service' },
    ]},
    { label: 'Parts', href: '/parts' },
    { label: 'Industries', href: '/industries' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/resources/blog'},
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (item: typeof navItems[number]): boolean => {
    if (!pathname) return false;
    if (pathname === item.href) return true;
    if (pathname.startsWith(item.href + '/')) return true;
    if (item.dropdown) {
      return item.dropdown.some(d => pathname === d.href || pathname.startsWith(d.href + '/'));
    }
    return false;
  };

  return (
    <header className="bg-charcoal border-b border-charcoal-secondary sticky top-0 z-50">
      {/* Top bar with phone */}
      <div className="bg-charcoal-secondary border-b border-charcoal-secondary/50">
        <div className="container-site flex items-center justify-between py-1.5">
          <span className="font-mono text-xs text-gunmetal-gray">
            {SITE_NAME} — Established {new Date().getFullYear() - 25}
          </span>
          <a href={`tel:${SITE_PHONE.replace(/[^+\d]/g, '')}`} className="font-mono text-xs text-safety-orange hover:text-white transition-colors">
            {SITE_PHONE}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-site">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-safety-orange flex items-center justify-center">
              <span className="font-display font-extrabold text-white text-sm">YC</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-white text-lg uppercase tracking-wider block leading-tight">{SITE_NAME}</span>
              <span className="font-mono text-[10px] text-gunmetal-gray uppercase tracking-widest">Heavy Equipment & Machinery</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${isActive(item) ? 'text-safety-orange' : 'text-gunmetal-gray hover:text-white'}`}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className={`absolute top-full left-0 bg-charcoal-secondary border border-charcoal-secondary/50 min-w-[220px] py-2 transition-all duration-200 ${activeDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.label}
                        href={d.href}
                        className={`block px-4 py-2 font-mono text-xs transition-colors ${pathname && (pathname === d.href || pathname.startsWith(d.href + '/')) ? 'text-safety-orange' : 'text-gunmetal-gray hover:text-white hover:bg-charcoal'}`}
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" className="ml-4 btn-primary text-xs py-2 px-4">
              Request Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-secondary border-t border-charcoal-secondary/50">
          <div className="container-site py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 font-mono text-sm transition-colors ${isActive(item) ? 'text-safety-orange' : 'text-gunmetal-gray hover:text-white'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-6 space-y-1">
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.label}
                        href={d.href}
                        className={`block px-3 py-1.5 font-mono text-xs transition-colors ${isActive(item) && pathname === d.href ? 'text-safety-orange' : 'text-gunmetal-gray hover:text-white'}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" className="block mt-4 btn-primary text-center text-sm py-3" onClick={() => setMobileMenuOpen(false)}>
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}