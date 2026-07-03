import Link from 'next/link';
import { useRouter } from 'next/router';
import { categories, featuredProducts } from '@/lib/data';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  
  const cat = categories.find((c) => c.slug === category);
  if (!cat) {
    return <div>Category not found</div>;
  }

  const products = featuredProducts.filter((p) => p.categorySlug === category);

  return (
    <>
      <section className="bg-charcoal py-16">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-safety-orange">
              <Link href="/products" className="hover:text-white transition-colors">Products</Link> / {cat.name}
            </span>
          </div>
          <h1 className="text-white mb-6">{cat.name}</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">{cat.description}</p>
          <div className="mt-6">
            <span className="font-mono text-sm text-gunmetal-gray">{cat.productCount} models available in this category</span>
          </div>
        </div>
      </section>

      <div className="spec-strip">
        <div className="container-site">
          <span className="font-mono text-xs text-gunmetal-gray">
            CATEGORY · {cat.name.toUpperCase()} · SPECIFICATIONS VARY BY MODEL
          </span>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-site">
          {products.length > 0 ? (
            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 grid">
              {products.map((product) => (
                <div key={product.id} className="card-product bg-white">
                  <Link href={`/products/${cat.slug}/${product.slug}`} className="block">
                    <div className="h-64 bg-charcoal-secondary flex items-center justify-center overflow-hidden relative">
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
                          <span className="font-display font-bold text-2xl text-concrete-secondary/30 block mb-2">{product.brand}</span>
                          <p className="font-mono text-sm text-gunmetal-gray">{product.name}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-brass">{product.brand}</span>
                    </div>
                    <Link href={`/products/${cat.slug}/${product.slug}`}>
                      <h3 className="font-display font-bold text-base text-charcoal mb-3 hover:text-safety-orange transition-colors">{product.name}</h3>
                    </Link>
                    <div className="spec-strip-light px-5">
                      <div className="grid grid-cols-2 gap-3">
                        {product.operatingWeight && (<div><span className="spec-label">Weight</span><span className="spec-value text-xs block">{product.operatingWeight}</span></div>)}
                        {product.powerOutput && (<div><span className="spec-label">Power</span><span className="spec-value text-xs block">{product.powerOutput}</span></div>)}
                      </div>
                    </div>
                    <div className="flex bg-concrete-secondary p-5 gap-2">
                      <Link href={`/products/${cat.slug}/${product.slug}`} className="btn-outline text-xs py-2 px-3 flex-1 text-center">View Specs</Link>
                      <Link href={`/contact?product=${product.slug}`} className="btn-primary text-xs py-2 px-3 flex-1 text-center">Request Quote</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-display font-bold text-xl text-gunmetal-gray mb-4">Products in this category are being updated.</p>
              <p className="font-body text-gunmetal-gray mb-8">Please contact us for the latest availability and specifications.</p>
              <Link href="/contact" className="btn-primary">Contact Sales Team</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}