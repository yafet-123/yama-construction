import Link from 'next/link';
import { useRouter } from 'next/router';
import { brands, featuredProducts } from '@/lib/data';

export default function BrandPage() {
  const router = useRouter();
  const { brand } = router.query;
  
  const brandData = brands.find((b) => b.slug === brand);
  if (!brandData) {
    return <div>Brand not found</div>;
  }

  const products = featuredProducts.filter((p) => p.brandSlug === brand);

  return (
    <>
      <section className="bg-charcoal py-16">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-safety-orange">
              <Link href="/brands" className="hover:text-white transition-colors">Brands</Link> / {brandData.name}
            </span>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-charcoal-secondary flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-white text-2xl">{brandData.name.charAt(0)}</span>
            </div>
            <div>
              <p className="text-white mb-4 text-4xl lg:text-7xl font-bold">{brandData.name}</p>
              <p className="font-body text-lg text-gunmetal-gray max-w-3xl">{brandData.description}</p>
              {brandData.website && (
                <a
                  href={brandData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 font-mono text-xs text-safety-orange hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  Visit {brandData.name} Website
                </a>
              )}
              <span className="inline-block mt-4 font-mono text-xs text-safety-orange">Authorised Distributor</span>
            </div>
          </div>
        </div>
      </section>

      <div className="spec-strip">
        <div className="container-site">
          <span className="font-mono text-xs text-gunmetal-gray">
            {brandData.name.toUpperCase()} · AUTHORISED DISTRIBUTOR · GENUINE PARTS · FACTORY-TRAINED SERVICE
          </span>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-site">
          {products.length > 0 ? (
            <>
              <h2 className="section-title mb-12">{brandData.name} Equipment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map((product) => (
                  <div key={product.id} className="card-product bg-white">
                    <Link href={`/products/${product.categorySlug}/${product.slug}`} className="block">
                      <div className="h-48 bg-charcoal-secondary flex items-center justify-center overflow-hidden relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) {
                              fallback.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="text-center p-4 hidden absolute inset-0 flex items-center justify-center">
                          <div>
                            <span className="font-display font-bold text-lg text-concrete-secondary/30 block mb-1">{product.brand}</span>
                            <p className="font-mono text-xs text-gunmetal-gray">{product.name}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="">
                      <Link href={`/products/${product.categorySlug}/${product.slug}`}>
                        <h3 className="font-display font-bold text-base text-charcoal mb-3 hover:text-safety-orange transition-colors">{product.name}</h3>
                      </Link>
                      <div className="spec-strip-light px-5">
                        <div className="grid grid-cols-2 gap-3">
                          {product.operatingWeight && <div><span className="spec-label">Weight</span><span className="spec-value text-xs block">{product.operatingWeight}</span></div>}
                          {product.powerOutput && <div><span className="spec-label">Power</span><span className="spec-value text-xs block">{product.powerOutput}</span></div>}
                        </div>
                      </div>
                      <div className="flex gap-2 bg-concrete-secondary p-5">
                        <Link href={`/products/${product.categorySlug}/${product.slug}`} className="btn-outline text-xs py-2 px-3 flex-1 text-center">View Specs</Link>
                        <Link href={`/contact?product=${product.slug}`} className="btn-primary text-xs py-2 px-3 flex-1 text-center">Request Quote</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="font-display font-bold text-xl text-gunmetal-gray mb-4">Products from {brandData.name} are being updated.</p>
              <p className="font-body text-gunmetal-gray mb-8">Contact us for the latest availability.</p>
              <Link href="/contact" className="btn-primary">Contact Sales Team</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}