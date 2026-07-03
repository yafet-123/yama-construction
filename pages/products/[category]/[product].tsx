import Link from 'next/link';
import { useRouter } from 'next/router';
import { featuredProducts, categories } from '@/lib/data';

export default function ProductDetailPage() {
  const router = useRouter();
  const { category, product } = router.query;
  
  const productData = featuredProducts.find((p) => p.slug === product && p.categorySlug === category);
  
  if (!productData) {
    return <div>Product not found</div>;
  }

  const categoryData = categories.find((c) => c.slug === category);

  return (
    <>
      <section className="bg-charcoal py-16">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-safety-orange">
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              {' / '}
              <Link href={`/products/${categoryData?.slug}`} className="hover:text-white transition-colors">{categoryData?.name}</Link>
              {' / '}
              <span className="text-white">{productData.name}</span>
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            <div>
              <div className="bg-charcoal-secondary aspect-square flex items-center justify-center overflow-hidden relative">
                <img
                  src={productData.image}
                  alt={productData.name}
                  className="w-full h-full object-contain"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="text-center p-8 hidden absolute inset-0 flex items-center justify-center">
                  <div>
                    <span className="font-display font-bold text-4xl text-concrete-secondary/30 block mb-2">{productData.brand}</span>
                    <p className="font-mono text-sm text-gunmetal-gray">{productData.name}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-brass">{productData.brand}</span>
              <h1 className="text-white text-3xl md:text-4xl font-display font-bold mt-2 mb-4">{productData.name}</h1>
              
              <div className="spec-strip-light -mx-4 px-4 py-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  {productData.operatingWeight && (
                    <div>
                      <span className="spec-label">Operating Weight</span>
                      <span className="spec-value text-sm block">{productData.operatingWeight}</span>
                    </div>
                  )}
                  {productData.powerOutput && (
                    <div>
                      <span className="spec-label">Power Output</span>
                      <span className="spec-value text-sm block">{productData.powerOutput}</span>
                    </div>
                  )}
                  {productData.bucketCapacity && (
                    <div>
                      <span className="spec-label">Bucket Capacity</span>
                      <span className="spec-value text-sm block">{productData.bucketCapacity}</span>
                    </div>
                  )}
                  {productData.engine && (
                    <div>
                      <span className="spec-label">Engine</span>
                      <span className="spec-value text-sm block">{productData.engine}</span>
                    </div>
                  )}
                  {productData.fuelConsumption && (
                    <div>
                      <span className="spec-label">Fuel Consumption</span>
                      <span className="spec-value text-sm block">{productData.fuelConsumption}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <p className="font-body text-gunmetal-gray mb-8 leading-relaxed">{productData.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`/contact?product=${productData.slug}`} className="btn-primary text-center">
                  Request Quote
                </Link>
                <Link href="/contact" className="btn-outline text-center">
                  Contact Sales Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="spec-strip">
        <div className="container-site">
          <span className="font-mono text-xs text-gunmetal-gray">
            {productData.brand.toUpperCase()} · {productData.name.toUpperCase()} · DETAILED SPECIFICATIONS
          </span>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-site">
          <h2 className="section-title mb-8">Technical Specifications</h2>
          
          {productData.specs && Object.keys(productData.specs).length > 0 ? (
            <div className="bg-white border border-concrete-secondary">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {Object.entries(productData.specs).map(([key, value], index) => (
                  <div 
                    key={key} 
                    className={`p-6 ${index % 2 === 0 ? 'border-b md:border-b-0 md:border-r border-concrete-secondary' : 'border-b border-concrete-secondary'}`}
                  >
                    <span className="spec-label block mb-1 text-black">{key}</span>
                    <span className="spec-value text-base text-black">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-white border border-concrete-secondary">
              <p className="font-body text-gunmetal-gray">Detailed specifications are being updated. Please contact our sales team for complete technical details.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-concrete-secondary">
        <div className="container-site">
          <h2 className="section-title mb-8">Why Choose {productData.brand}?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6">
              <div className="w-12 h-12 bg-safety-orange/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-safety-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-charcoal mb-2">Genuine Parts</h3>
              <p className="font-body text-sm text-gunmetal-gray">Factory-direct parts ensure optimal performance and longevity for your equipment.</p>
            </div>
            
            <div className="bg-white p-6">
              <div className="w-12 h-12 bg-safety-orange/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-safety-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-charcoal mb-2">Factory-Trained Service</h3>
              <p className="font-body text-sm text-gunmetal-gray">Our technicians are certified by {productData.brand} to provide expert maintenance and repairs.</p>
            </div>
            
            <div className="bg-white p-6">
              <div className="w-12 h-12 bg-safety-orange/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-safety-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-charcoal mb-2">Warranty Support</h3>
              <p className="font-body text-sm text-gunmetal-gray">Comprehensive warranty coverage and after-sales support across all our service centers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <h2 className="section-title mb-8">Related Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-concrete-secondary">
            {featuredProducts
              .filter(p => p.categorySlug === category && p.slug !== product)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="card-product bg-white">
                  <Link href={`/products/${category}/${relatedProduct.slug}`} className="block">
                    <div className="h-48 bg-charcoal-secondary flex items-center justify-center overflow-hidden relative">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
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
                          <span className="font-display font-bold text-lg text-concrete-secondary/30 block mb-1">{relatedProduct.brand}</span>
                          <p className="font-mono text-xs text-gunmetal-gray">{relatedProduct.name}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-brass">{relatedProduct.brand}</span>
                    <Link href={`/products/${category}/${relatedProduct.slug}`}>
                      <h3 className="font-display font-bold text-base text-charcoal mb-3 hover:text-safety-orange transition-colors">{relatedProduct.name}</h3>
                    </Link>
                    <div className="spec-strip-light px-5">
                      <div className="grid grid-cols-2 gap-3">
                        {relatedProduct.operatingWeight && <div><span className="spec-label">Weight</span><span className="spec-value text-xs block">{relatedProduct.operatingWeight}</span></div>}
                        {relatedProduct.powerOutput && <div><span className="spec-label">Power</span><span className="spec-value text-xs block">{relatedProduct.powerOutput}</span></div>}
                      </div>
                    </div>
                    <Link href={`/products/${category}/${relatedProduct.slug}`} className="bg-concrete-secondary btn-outline text-xs py-5 px-3 w-full text-center block">View Details</Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}