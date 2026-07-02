import Link from 'next/link';

export default function HeavyMachineryEthiopiaPage() {
  return (
    <>
      <section className="bg-charcoal py-16"><div className="container-site"><h1 className="text-white text-3xl md:text-4xl font-display font-extrabold mb-4">Heavy Machinery Ethiopia</h1><p className="font-body text-lg text-gunmetal-gray max-w-3xl">Ethiopia's leading supplier of heavy machinery. Excavators, bulldozers, wheel loaders, graders, dump trucks, generators, and more from world-class manufacturers.</p></div></section>
      <section className="section-padding"><div className="container-site"><div className="bg-concrete-secondary p-8"><h2 className="font-display font-bold text-lg mb-4">Complete Heavy Machinery Solutions</h2><ul className="space-y-2 mb-6">{['1,240+ models in catalog across all categories', '8 authorised OEM brand partnerships', '97% parts availability rate', '135 factory-trained service engineers', '6 branches serving all regions of Ethiopia'].map(item => <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-safety-orange" /><span className="font-mono text-sm text-charcoal">{item}</span></li>)}</ul><Link href="/products" className="btn-primary text-sm">Browse All Machinery</Link></div></div></section>
    </>
  );
}