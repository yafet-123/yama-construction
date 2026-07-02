import Link from 'next/link';
import { SITE_NAME, SITE_PHONE, SITE_EMAIL, SITE_ADDRESS, SITE_WHATSAPP, categories, brands, industries } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-charcoal-secondary">
      {/* Spec strip footer divider */}
      <div className="spec-strip">
        <div className="container-site flex flex-wrap items-center justify-between gap-4">
          <span className="text-white font-mono text-xs uppercase tracking-widest">
            <span className="text-safety-orange">■</span>  YAMA CONSTRUCTION — EST. 2000
          </span>
          <span className="font-mono text-xs text-gunmetal-gray">
            MODELS IN CATALOG · 1,240+   AVG. PARTS LEAD TIME · 48HRS   SERVICE ENGINEERS · 135
          </span>
        </div>
      </div>

      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-safety-orange flex items-center justify-center">
                <span className="font-display font-extrabold text-white text-sm">YC</span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg uppercase tracking-wider block leading-tight">{SITE_NAME}</span>
              </div>
            </Link>
            <p className="font-body text-sm text-gunmetal-gray leading-relaxed mb-6">
              Ethiopia's leading supplier of heavy industrial machinery, serving construction, mining, agriculture, government, and commercial sectors since 2000.
            </p>
            <div className="space-y-2">
              <a href={`tel:${SITE_PHONE.replace(/[^+\d]/g, '')}`} className="block font-mono text-sm text-safety-orange hover:text-white transition-colors">
                {SITE_PHONE}
              </a>
              <a href={`mailto:${SITE_EMAIL}`} className="block font-mono text-sm text-gunmetal-gray hover:text-white transition-colors">
                {SITE_EMAIL}
              </a>
              <span className="block font-mono text-sm text-gunmetal-gray">
                {SITE_ADDRESS}
              </span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Equipment</h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/products/${cat.slug}`} className="font-mono text-sm text-gunmetal-gray hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="font-mono text-sm text-gunmetal-gray hover:text-white transition-colors">
                  View All Equipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Brands & Industries */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Brands</h4>
            <ul className="space-y-3 mb-8">
              {brands.slice(0, 6).map((b) => (
                <li key={b.slug}>
                  <Link href={`/brands/${b.slug}`} className="font-mono text-sm text-gunmetal-gray hover:text-white transition-colors">
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Industries</h4>
            <ul className="space-y-3">
              {industries.slice(0, 4).map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="font-mono text-sm text-gunmetal-gray hover:text-white transition-colors">
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="font-mono text-sm text-gunmetal-gray hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="font-mono text-sm text-gunmetal-gray hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/parts" className="font-mono text-sm text-gunmetal-gray hover:text-white transition-colors">Spare Parts</Link></li>
              <li><Link href="/projects" className="font-mono text-sm text-gunmetal-gray hover:text-white transition-colors">Project Portfolio</Link></li>
              <li><Link href="/procurement" className="font-mono text-sm text-gunmetal-gray hover:text-white transition-colors">Tender & Procurement</Link></li>
              <li><Link href="/resources/brochures" className="font-mono text-sm text-gunmetal-gray hover:text-white transition-colors">Brochures & Downloads</Link></li>
              <li><Link href="/resources/blog" className="font-mono text-sm text-gunmetal-gray hover:text-white transition-colors">Blog & Resources</Link></li>
              <li><Link href="/service-booking" className="font-mono text-sm text-gunmetal-gray hover:text-white transition-colors">Book a Service</Link></li>
              <li><Link href="/contact" className="font-mono text-sm text-gunmetal-gray hover:text-white transition-colors">Contact & Branches</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-secondary">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs text-gunmetal-gray">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/" className="font-mono text-xs text-gunmetal-gray hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="font-mono text-xs text-gunmetal-gray hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}