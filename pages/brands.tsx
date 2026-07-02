import Link from 'next/link';
import { brands } from '@/lib/data';

export default function BrandsPage() {
  return (
    <>
      <section className="bg-charcoal py-20">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-safety-orange">Brands</span>
          </div>
          <h1 className="text-white mb-6">Our OEM Partners</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">
            Authorised distributor and service partner for the world's leading heavy equipment manufacturers.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand) => (
              <Link key={brand.slug} href={`/brands/${brand.slug}`} className="border border-concrete-secondary p-8 hover:border-safety-orange transition-all duration-300 group bg-white">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-charcoal flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-white text-lg">{brand.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-charcoal mb-2 group-hover:text-safety-orange transition-colors">{brand.name}</h2>
                    <p className="font-body text-sm text-gunmetal-gray leading-relaxed">{brand.description}</p>
                    <span className="inline-block mt-4 font-mono text-xs text-safety-orange">View Products →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}