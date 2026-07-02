import Link from 'next/link';

export default function FleetVehiclesPage() {
  return (
    <>
      <section className="bg-charcoal py-16"><div className="container-site"><h1 className="text-white text-3xl md:text-4xl font-display font-extrabold mb-4">Fleet Vehicles Ethiopia</h1><p className="font-body text-lg text-gunmetal-gray max-w-3xl">Commercial vehicles and fleet solutions for construction, logistics, government, and commercial operations. Dump trucks, fuel tankers, flatbeds, and utility vehicles.</p></div></section>
      <section className="section-padding"><div className="container-site"><div className="bg-concrete-secondary p-8"><h2 className="font-display font-bold text-lg mb-4">Fleet Solutions</h2><ul className="space-y-2 mb-6">{['Dump trucks and tipper vehicles', 'Fuel tankers and liquid transport', 'Flatbed and cargo trucks', 'Utility and service vehicles', 'Fleet management and maintenance programs', 'Bulk purchase and government tender support'].map(item => <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-safety-orange" /><span className="font-mono text-sm text-charcoal">{item}</span></li>)}</ul><Link href="/contact" className="btn-primary text-sm">Discuss Fleet Requirements</Link></div></div></section>
    </>
  );
}