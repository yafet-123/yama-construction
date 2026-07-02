import Link from 'next/link';

export default function TechnicalTrainingPage() {
  return (
    <>
      <section className="bg-charcoal py-16">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-safety-orange">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link> / Technical Training
            </span>
          </div>
          <h1 className="text-white mb-6">Technical Training Programs</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">Operator and technician training programs certified by Caterpillar, Komatsu, Volvo, and JCB. Classroom and hands-on training at our facility or your site.</p>
        </div>
      </section>
      <div className="spec-strip"><div className="container-site"><span className="font-mono text-xs text-gunmetal-gray">TECHNICAL TRAINING · OEM-CERTIFIED · OPERATOR CERTIFICATION · TECHNICIAN TRAINING · SAFETY PROGRAMS</span></div></div>
      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="section-title mb-6">Training Programs Offered</h2>
              <ul className="space-y-4">
                {[
                  { title: 'Operator Certification', desc: 'Comprehensive operator training for excavators, loaders, dozers, graders, and cranes. Includes safety protocols, efficient operation techniques, and OEM-specific controls.' },
                  { title: 'Technician Training', desc: 'Advanced technical training for equipment technicians covering engine systems, hydraulics, transmissions, electrical systems, and electronic diagnostics.' },
                  { title: 'Safety & Compliance', desc: 'OSHA-aligned safety training programs including lockout/tagout, confined space entry, heavy equipment safety, and site hazard awareness.' },
                  { title: 'Fleet Management', desc: 'Training for fleet supervisors on preventive maintenance scheduling, telematics utilization, fuel management, and lifecycle cost optimization.' },
                  { title: 'Custom Programs', desc: 'Tailored training programs developed specifically for your organization\'s equipment mix, operational requirements, and skill gap analysis.' },
                ].map((item) => (
                  <li key={item.title} className="border border-concrete-secondary p-4">
                    <span className="font-mono text-sm text-charcoal font-semibold">{item.title}</span>
                    <p className="font-body text-xs text-gunmetal-gray mt-1">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-title mb-6">Training Formats</h2>
              <div className="space-y-4 mb-8">
                {[
                  { format: 'On-Site Training', duration: '1-5 days', desc: 'Training conducted at your facility using your equipment. Minimizes travel costs and allows hands-on practice with your specific machinery.' },
                  { format: 'Classroom Sessions', duration: '1-3 days', desc: 'Theory-based training at our Addis Ababa training center with modern classroom facilities, simulators, and demonstration equipment.' },
                  { format: 'Blended Learning', duration: 'Flexible', desc: 'Combination of online theory modules followed by hands-on practical sessions for maximum flexibility and retention.' },
                ].map((item) => (
                  <div key={item.format} className="border border-concrete-secondary p-4">
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-sm text-charcoal font-semibold">{item.format}</span>
                      <span className="font-mono text-xs text-safety-orange">{item.duration}</span>
                    </div>
                    <p className="font-body text-xs text-gunmetal-gray mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary text-sm">Request Training Information</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}