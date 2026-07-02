import Link from 'next/link';

export default function WorkshopRepairPage() {
  return (
    <>
      <section className="bg-charcoal py-16">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-safety-orange">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link> / Workshop Repair
            </span>
          </div>
          <h1 className="text-white mb-6">Workshop Repair Services</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">Full-service workshop at our Kality Parts & Service Center. Engine overhauls, transmission rebuilds, hydraulic system repairs, and component exchange programs.</p>
        </div>
      </section>
      <div className="spec-strip"><div className="container-site"><span className="font-mono text-xs text-gunmetal-gray">WORKSHOP REPAIR · 12 SERVICE BAYS · OEM DIAGNOSTICS · COMPONENT EXCHANGE · WARRANTY REPAIRS</span></div></div>
      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="section-title mb-6">Our Workshop Capabilities</h2>
              <ul className="space-y-4">
                {[
                  { title: 'Engine Overhauls', desc: 'Complete engine rebuilds including cylinder head reconditioning, crankshaft grinding, and fuel system calibration for all major brands.' },
                  { title: 'Transmission Rebuilds', desc: 'Full transmission and torque converter rebuilds with OEM-specified tolerances and testing procedures.' },
                  { title: 'Hydraulic System Repairs', desc: 'Hydraulic pump, motor, and cylinder rebuilding with pressure testing and flow rate verification.' },
                  { title: 'Component Exchange Program', desc: 'Pre-built exchange units for common components, reducing downtime by up to 70% compared to traditional rebuilds.' },
                  { title: 'Electrical & Electronic Diagnostics', desc: 'Advanced diagnostic equipment for troubleshooting ECMs, sensors, wiring harnesses, and control systems.' },
                  { title: 'Welding & Fabrication', desc: 'Structural welding, attachment fabrication, and equipment modification services for specialized applications.' },
                ].map((item) => (
                  <li key={item.title} className="border border-concrete-secondary p-4">
                    <span className="font-mono text-sm text-charcoal font-semibold">{item.title}</span>
                    <p className="font-body text-xs text-gunmetal-gray mt-1">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-title mb-6">Why Choose Our Workshop</h2>
              <div className="space-y-4">
                {[
                  { stat: '12', label: 'Service Bays' },
                  { stat: '25+', label: 'Years Experience' },
                  { stat: 'OEM', label: 'Diagnostic Tools' },
                  { stat: '70%', label: 'Faster Exchange' },
                ].map((item) => (
                  <div key={item.label} className="bg-charcoal-secondary p-6 flex items-center gap-4">
                    <span className="font-display font-extrabold text-3xl text-safety-orange">{item.stat}</span>
                    <span className="font-mono text-sm text-white">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/service-booking" className="btn-primary text-sm mt-8 inline-block">Schedule Workshop Service</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}