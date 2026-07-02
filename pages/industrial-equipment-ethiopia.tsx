import Link from 'next/link';

export default function IndustrialEquipmentPage() {
  return (
    <>
      <section className="bg-charcoal py-16"><div className="container-site"><h1 className="text-white text-3xl md:text-4xl font-display font-extrabold mb-4">Industrial Equipment Ethiopia</h1><p className="font-body text-lg text-gunmetal-gray max-w-3xl">Comprehensive range of industrial equipment including generators, compressors, forklifts, and material handling solutions for Ethiopian industry.</p></div></section>
      <section className="section-padding"><div className="container-site"><div className="bg-concrete-secondary p-8"><h2 className="font-display font-bold text-lg mb-4">Industrial Solutions</h2><ul className="space-y-2 mb-6">{['Power generation and distribution equipment', 'Industrial air compressors and pneumatic systems', 'Forklifts, telehandlers, and material handling', 'Fleet vehicles and commercial transport', 'Factory and warehouse equipment'].map(item => <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-safety-orange" /><span className="font-mono text-sm text-charcoal">{item}</span></li>)}</ul><Link href="/contact" className="btn-primary text-sm">Discuss Your Industrial Needs</Link></div></div></section>
    </>
  );
}