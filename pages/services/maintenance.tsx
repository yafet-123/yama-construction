import Link from 'next/link';

export default function MaintenancePage() {
  return (
    <>
      <section className="bg-charcoal py-16">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-safety-orange">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link> / Preventive Maintenance
            </span>
          </div>
          <h1 className="text-white mb-6">Preventive Maintenance Plans</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">Scheduled maintenance programs tailored to your equipment fleet. Reduce downtime, extend equipment life, and optimize operating costs.</p>
        </div>
      </section>
      <div className="spec-strip"><div className="container-site"><span className="font-mono text-xs text-gunmetal-gray">PREVENTIVE MAINTENANCE · SCHEDULED SERVICE · FLUID ANALYSIS · COMPONENT MONITORING</span></div></div>
      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Basic Plan', freq: '250 hrs / Monthly', includes: ['Oil & filter change', 'Visual inspection', 'Fluid sample collection', 'Operator report review'] },
              { title: 'Standard Plan', freq: '500 hrs / Quarterly', includes: ['Basic plan items', 'Full system inspection', 'Hydraulic analysis', 'Brake & clutch check', 'Track/tyre wear report'] },
              { title: 'Comprehensive Plan', freq: '1000 hrs / Bi-annual', includes: ['Standard plan items', 'Engine performance test', 'Transmission analysis', 'Structural integrity check', 'Component life forecast'] },
            ].map((plan) => (
              <div key={plan.title} className="border border-concrete-secondary p-8 bg-white">
                <h3 className="font-display font-bold text-lg text-charcoal mb-2">{plan.title}</h3>
                <span className="font-mono text-xs text-safety-orange">{plan.freq}</span>
                <ul className="mt-6 space-y-3">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-industrial-green mt-1.5 flex-shrink-0" /><span className="font-mono text-sm text-gunmetal-gray">{item}</span></li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary text-xs py-3 mt-6 inline-block">Request Plan Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}