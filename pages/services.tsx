import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    { title: 'Preventive Maintenance', slug: '/services/maintenance', description: 'Scheduled maintenance programs tailored to your equipment fleet. Reduce downtime, extend equipment life, and optimize operating costs with our OEM-certified maintenance plans.', stats: ['97% fleet uptime', 'Scheduled oil & filter changes', 'Fluid analysis programs', 'Component wear monitoring'] },
    { title: 'Field Service', slug: '/services/field-service', description: 'Mobile service units with factory-trained engineers who come to your site. 48-hour average response time across all regions of Ethiopia.', stats: ['48 hr avg. response', '135 field engineers', '6 regional bases', 'Mobile workshop units'] },
    { title: 'Workshop Repair', slug: '/services', description: 'Full-service workshop at our Kality Parts & Service Center. Engine overhauls, transmission rebuilds, hydraulic system repairs, and component exchange programs.', stats: ['12 service bays', 'OEM diagnostic tools', 'Component exchange', 'Warranty repairs'] },
    { title: 'Technical Training', slug: '/services', description: 'Operator and technician training programs certified by Caterpillar, Komatsu, Volvo, and JCB. Classroom and hands-on training at our facility or your site.', stats: ['OEM-certified curriculum', 'Operator certification', 'Technician training', 'Safety programs'] },
  ];

  return (
    <>
      <section className="bg-charcoal py-20">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-safety-orange">Services</span>
          </div>
          <h1 className="text-white mb-6">Service & Support</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">
            Keep your equipment operating at peak performance with our comprehensive service programs. 135 factory-trained engineers, 6 branches, nationwide coverage.
          </p>
        </div>
      </section>

      <div className="spec-strip">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><span className="font-mono text-white text-lg font-semibold">135</span><span className="block font-mono text-xs text-gunmetal-gray uppercase mt-1">Engineers</span></div>
            <div><span className="font-mono text-white text-lg font-semibold">48 HRS</span><span className="block font-mono text-xs text-gunmetal-gray uppercase mt-1">Response Time</span></div>
            <div><span className="font-mono text-white text-lg font-semibold">6</span><span className="block font-mono text-xs text-gunmetal-gray uppercase mt-1">Branches</span></div>
            <div><span className="font-mono text-white text-lg font-semibold">97%</span><span className="block font-mono text-xs text-gunmetal-gray uppercase mt-1">Uptime Rate</span></div>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-site space-y-16">
          {services.map((service, i) => (
            <div key={service.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="section-title mb-4">{service.title}</h2>
                <p className="font-body text-gunmetal-gray leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.stats.map((stat) => (
                    <li key={stat} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-safety-orange" />
                      <span className="font-mono text-sm text-charcoal">{stat}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.slug} className="btn-primary text-sm">Learn More</Link>
              </div>
              <div className={`bg-charcoal-secondary aspect-video flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="font-display font-bold text-2xl text-concrete-secondary/20">{service.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-16">
        <div className="container-site text-center">
          <h2 className="font-display font-extrabold text-3xl text-white uppercase mb-4">Need Service Support?</h2>
          <p className="font-body text-gunmetal-gray max-w-xl mx-auto mb-8">Book a service appointment or request a field visit from our team.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/service-booking" className="btn-primary text-base px-8 py-4">Book a Service</Link>
            <Link href="/contact" className="btn-secondary text-base px-8 py-4">Contact Service Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}