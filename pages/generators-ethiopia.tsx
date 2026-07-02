import Link from 'next/link';
import { featuredProducts } from '@/lib/data';

export default function GeneratorsEthiopiaPage() {
  const gens = featuredProducts.filter(p => p.categorySlug === 'power-solutions');
  return (
    <>
      <section className="bg-charcoal py-16"><div className="container-site"><h1 className="text-white text-3xl md:text-4xl font-display font-extrabold mb-4">Generators Ethiopia</h1><p className="font-body text-lg text-gunmetal-gray max-w-3xl">Industrial diesel generators from Cummins and Perkins. Prime and standby power solutions for construction sites, commercial buildings, and industrial facilities across Ethiopia.</p></div></section>
      <section className="section-padding"><div className="container-site"><div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">{gens.map(p => (<Link key={p.id} href={`/products/${p.categorySlug}/${p.slug}`} className="border border-concrete-secondary p-6 bg-white hover:border-safety-orange transition-all"><h3 className="font-display font-bold text-base text-charcoal mb-2">{p.name}</h3><span className="font-mono text-xs text-muted-brass">{p.brand}</span><div className="mt-4 space-y-1">{p.powerOutput && <span className="font-mono text-xs text-gunmetal-gray block">Power: {p.powerOutput}</span>}{p.engine && <span className="font-mono text-xs text-gunmetal-gray block">Engine: {p.engine}</span>}</div></Link>))}</div><div className="bg-concrete-secondary p-8"><h2 className="font-display font-bold text-lg mb-4">Generator Sizing & Support</h2><p className="font-body text-sm text-gunmetal-gray mb-4">Our team provides free generator sizing and load calculation for your specific application. Contact us for a technical consultation.</p><Link href="/contact" className="btn-primary text-sm">Get Generator Quote</Link></div></div></section>
    </>
  );
}