import Link from 'next/link';
import { categories, featuredProducts, brands } from '@/lib/data';

export default function ProductsPage() {
  return (
    <>
      <section className="bg-charcoal py-20">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-safety-orange">Products</span>
          </div>
          <h1 className="text-white mb-6">Equipment & Machinery</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">
            1,240+ models from the world's leading manufacturers. Browse by category or brand.
          </p>
        </div>
      </section>

      {/* Spec strip */}
      <div className="spec-strip">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <span className="font-mono text-white text-lg font-semibold">1,240+</span>
              <span className="block font-mono text-xs text-gunmetal-gray uppercase mt-1">Models in Catalog</span>
            </div>
            <div>
              <span className="font-mono text-white text-lg font-semibold">8</span>
              <span className="block font-mono text-xs text-gunmetal-gray uppercase mt-1">OEM Brands</span>
            </div>
            <div>
              <span className="font-mono text-white text-lg font-semibold">5</span>
              <span className="block font-mono text-xs text-gunmetal-gray uppercase mt-1">Equipment Categories</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories grid */}
      <section className="section-padding">
        <div className="container-site">
          <h2 className="section-title mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-concrete-secondary">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="px-2 bg-concrete p-3 border border-concrete-secondary hover:border-safety-orange transition-all duration-300 group"
              >
                <div className="h-64 bg-charcoal-secondary mb-6 flex items-center justify-center overflow-hidden">
                  {cat.image ? (
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-charcoal to-charcoal-secondary flex items-center justify-center grayscale-to-color">
                      <span className="font-display font-bold text-6xl text-concrete-secondary/20 group-hover:text-safety-orange/20 transition-colors">
                        {cat.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal mb-3">{cat.name}</h3>
                <p className="font-body text-sm text-gunmetal-gray mb-4">{cat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gunmetal-gray">{cat.productCount} models</span>
                  <span className="font-mono text-xs text-safety-orange">Browse →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-white border-t border-concrete-secondary">
        <div className="container-site">
          <h2 className="section-title mb-4">Featured Products</h2>
          <p className="section-subtitle mb-12">Best-selling models with immediate availability</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete-secondary">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card-product bg-white">
                <Link href={`/products/${product.categorySlug}/${product.slug}`} className="block">
                  <div className="h-48 bg-charcoal-secondary flex items-center justify-center">
                    <div className="text-center p-4">
                      <span className="font-display font-bold text-lg text-concrete-secondary/30">{product.brand}</span>
                      <p className="font-mono text-xs text-gunmetal-gray mt-2">{product.name}</p>
                    </div>
                  </div>
                </Link>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-brass">{product.brand}</span>
                  </div>
                  <Link href={`/products/${product.categorySlug}/${product.slug}`}>
                    <h3 className="font-display font-bold text-base text-charcoal mb-3 hover:text-safety-orange transition-colors">{product.name}</h3>
                  </Link>
                  <div className="spec-strip-light -mx-5 px-5 mb-4">
                    <div className="grid grid-cols-2 gap-3">
                      {product.operatingWeight && (
                        <div>
                          <span className="spec-label">Weight</span>
                          <span className="spec-value text-xs block">{product.operatingWeight}</span>
                        </div>
                      )}
                      {product.powerOutput && (
                        <div>
                          <span className="spec-label">Power</span>
                          <span className="spec-value text-xs block">{product.powerOutput}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/products/${product.categorySlug}/${product.slug}`} className="btn-outline text-xs py-2 px-3 flex-1 text-center">View Specs</Link>
                    <Link href={`/contact?product=${product.slug}`} className="btn-primary text-xs py-2 px-3 flex-1 text-center">Request Quote</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding">
        <div className="container-site">
          <h2 className="section-title mb-12">Our Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <Link key={brand.slug} href={`/brands/${brand.slug}`} className="border border-concrete-secondary p-8 text-center hover:border-safety-orange transition-all group">
                <div className="w-16 h-16 bg-charcoal flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-white text-sm">{brand.name.charAt(0)}</span>
                </div>
                <h3 className="font-display font-bold text-sm text-charcoal">{brand.name}</h3>
                <p className="font-mono text-xs text-gunmetal-gray mt-2 line-clamp-2">{brand.description.slice(0, 80)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}