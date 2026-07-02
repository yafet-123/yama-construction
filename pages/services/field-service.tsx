import Link from 'next/link';

export default function FieldServicePage() {
  return (
    <>
      <section className="bg-charcoal py-16">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-safety-orange"><Link href="/services" className="hover:text-white transition-colors">Services</Link> / Field Service</span>
          </div>
          <h1 className="text-white mb-6">Field Service — Mobile Technicians</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">Our mobile service units with factory-trained engineers come to your site. 48-hour average response time across all regions of Ethiopia.</p>
        </div>
      </section>
      <div className="spec-strip"><div className="container-site"><span className="font-mono text-xs text-gunmetal-gray">FIELD SERVICE · 48 HR RESPONSE · 135 ENGINEERS · 6 BASES · MOBILE WORKSHOPS</span></div></div>
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title mb-6">Coverage & Response</h2>
            <div className="space-y-4">
              {[
                { region: 'Addis Ababa & Surrounding', response: 'Within 24 hours', bases: '2 bases' },
                { region: 'Oromia Region', response: 'Within 24-48 hours', bases: '1 base' },
                { region: 'Amhara Region', response: 'Within 48 hours', bases: '1 base (Bahir Dar)' },
                { region: 'SNNPR & Sidama', response: 'Within 24-48 hours', bases: '1 base (Hawassa)' },
                { region: 'Tigray Region', response: 'Within 48-72 hours', bases: '1 base (Mekelle)' },
                { region: 'Dire Dawa & Harar', response: 'Within 24-48 hours', bases: '1 base (Dire Dawa)' },
              ].map((item) => (
                <div key={item.region} className="border border-concrete-secondary p-4 flex justify-between items-center">
                  <div><span className="font-mono text-sm text-charcoal font-semibold">{item.region}</span><span className="font-mono text-xs text-gunmetal-gray block">{item.bases}</span></div>
                  <span className="font-mono text-xs text-industrial-green">{item.response}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-title mb-6">Services We Provide On-Site</h2>
            <ul className="space-y-4">
              {['Emergency breakdown repair', 'Scheduled preventive maintenance', 'Hydraulic system diagnostics', 'Engine performance testing', 'Electrical system troubleshooting', 'Component replacement', 'Warranty inspections', 'Operator support & training'].map((s) => (
                <li key={s} className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-safety-orange" /><span className="font-mono text-sm text-charcoal">{s}</span></li>
              ))}
            </ul>
            <Link href="/service-booking" className="btn-primary text-sm mt-8 inline-block">Request Field Service</Link>
          </div>
        </div>
      </section>
    </>
  );
}