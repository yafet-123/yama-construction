import Link from 'next/link';

export default function PartsPage() {
  return (
    <>
      <section className="bg-charcoal py-20">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-safety-orange">Spare Parts</span>
          </div>
          <h1 className="text-white mb-6">Genuine Spare Parts</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">100% OEM-certified genuine parts with full warranty. 1,240+ models covered. 97% availability rate.</p>
        </div>
      </section>
      <div className="spec-strip"><div className="container-site"><div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"><div><span className="font-mono text-white text-lg font-semibold">97%</span><span className="block font-mono text-xs text-gunmetal-gray uppercase mt-1">Availability</span></div><div><span className="font-mono text-white text-lg font-semibold">48 HRS</span><span className="block font-mono text-xs text-gunmetal-gray uppercase mt-1">Lead Time</span></div><div><span className="font-mono text-white text-lg font-semibold">1,240+</span><span className="block font-mono text-xs text-gunmetal-gray uppercase mt-1">Models</span></div><div><span className="font-mono text-white text-lg font-semibold">8</span><span className="block font-mono text-xs text-gunmetal-gray uppercase mt-1">OEM Brands</span></div></div></div></div>

      <section className="section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title mb-6">Parts Guarantee</h2>
            <ul className="space-y-4 mb-8">
              {['100% OEM certified genuine parts no aftermarket imitations', 'Full manufacturer warranty on all parts supplied', 'Comprehensive inventory covering 1,240+ equipment models', '48 hour average lead time for stocked items', 'Express ordering for critical breakdown parts', 'Bulk order discount programs for fleet operators', 'Parts interchangeability support and cross referencing', 'Nationwide delivery to any branch or site'].map((item) => (
                <li key={item} className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-industrial-green flex-shrink-0" /><span className="font-mono text-sm text-charcoal">{item}</span></li>
              ))}
            </ul>
            <Link href="/contact?inquiry=parts" className="btn-primary text-sm">Request Parts Quote</Link>
          </div>
          <div>
            <h2 className="section-title mb-6">Parts Categories</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Engine Components', 'Hydraulic Systems', 'Transmission & Drivetrain', 'Undercarriage & Tracks', 'Electrical Systems', 'Filters & Fluids', 'Ground Engaging Tools', 'Structural Components'].map((cat) => (
                <div key={cat} className="border border-concrete-secondary p-4 text-center"><span className="font-mono text-xs text-charcoal font-semibold">{cat}</span></div>
              ))}
            </div>
            <div className="mt-8 bg-concrete-secondary p-6">
              <h3 className="font-display font-bold text-base mb-3">Need Help Finding a Part?</h3>
              <p className="font-body text-sm text-gunmetal-gray mb-4">Send us your equipment model and serial number, and our parts team will identify the correct OEM part numbers.</p>
              <Link href="/contact" className="font-mono text-xs text-safety-orange">Submit Parts Inquiry →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}