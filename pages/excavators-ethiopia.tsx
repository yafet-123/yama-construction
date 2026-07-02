import Link from 'next/link';
import { featuredProducts } from '@/lib/data';

export default function ExcavatorsEthiopiaPage() {
  const excavators = featuredProducts.filter(p => p.name.toLowerCase().includes('excavator'));
  return (
    <>
      <section className="bg-charcoal py-16">
        <div className="container-site">
          <h1 className="text-white text-3xl md:text-4xl font-display font-extrabold mb-4">Excavators Ethiopia</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">New and used hydraulic excavators from the world's leading manufacturers. Available for purchase, financing, or lease across Ethiopia.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {excavators.map(p => (
              <Link key={p.id} href={`/products/${p.categorySlug}/${p.slug}`} className="border border-concrete-secondary p-6 bg-white hover:border-safety-orange transition-all">
                <h3 className="font-display font-bold text-base text-charcoal mb-2">{p.name}</h3>
                <span className="font-mono text-xs text-muted-brass">{p.brand}</span>
                <div className="mt-4 space-y-1">{p.operatingWeight && <span className="font-mono text-xs text-gunmetal-gray block">Weight: {p.operatingWeight}</span>}{p.powerOutput && <span className="font-mono text-xs text-gunmetal-gray block">Power: {p.powerOutput}</span>}</div>
              </Link>
            ))}
          </div>
          <div className="bg-concrete-secondary p-8"><h2 className="font-display font-bold text-lg mb-4">Why Buy Excavators from YAMA Construction?</h2><ul className="space-y-2">{['Authorised dealer for Caterpillar, Komatsu, Volvo CE, and JCB', 'Full warranty and after-sales support', 'Financing and lease-to-own options available', 'Genuine parts and service nationwide', 'Operator training and technical support'].map(item => (<li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-safety-orange" /><span className="font-mono text-sm text-charcoal">{item}</span></li>))}</ul><Link href="/contact" className="btn-primary text-sm mt-6 inline-block">Inquire About Excavators</Link></div>
        </div>
      </section>
    </>
  );
}