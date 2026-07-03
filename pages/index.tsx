import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAME, SITE_DESCRIPTION, SITE_YEARS, categories, brands, industries, testimonials, projects, featuredProducts, SITE_PHONE } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-charcoal overflow-hidden">
        {/* Background image placeholder - in production, use real equipment photo */}
        <div className="absolute inset-0 bg-[url('/images/hero-equipment.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent" />
        </div>
        <div className="relative h-full container-site flex items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-safety-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-safety-orange">Since 2000</span>
            </div>
            <h1 className="text-white mb-6">
              Powering<br />
              <span className="text-safety-orange">Ethiopia's Infrastructure</span><br />
              for Over {SITE_YEARS} Years
            </h1>
            <p className="font-body text-lg text-gunmetal-gray max-w-xl mb-10 leading-relaxed">
              {SITE_DESCRIPTION}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Request a Quote
              </Link>
              <Link href="/products" className="btn-secondary text-base px-8 py-4">
                View Equipment
              </Link>
            </div>
          </div>

          {/* Featured equipment nameplate - overlapping spec strip card */}
          <div className="hidden lg:block absolute bottom-0 right-8 max-w-sm">
            <div className="bg-charcoal-secondary border-t-2 border-safety-orange p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-gunmetal-gray">Featured Equipment</span>
                <span className="font-mono text-xs text-muted-brass uppercase">★ Best Seller</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div>
                  <span className="spec-value text-sm block">1,240+</span>
                  <span className="spec-label block">Models</span>
                </div>
                <div>
                  <span className="spec-value text-sm block">48 HRS</span>
                  <span className="spec-label block">Parts Lead</span>
                </div>
                <div>
                  <span className="spec-value text-sm block">135</span>
                  <span className="spec-label block">Engineers</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-charcoal">
                <span className="font-mono text-xs text-gunmetal-gray">Latest: CAT 336 Hydraulic Excavator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Spec Strip Divider */}
      <div className="spec-strip">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="font-mono text-white text-lg font-semibold">1,240+</span>
              <span className="block font-mono text-xs text-gunmetal-gray uppercase tracking-wider mt-1">Models in Catalog</span>
            </div>
            <div>
              <span className="font-mono text-white text-lg font-semibold">48 HRS</span>
              <span className="block font-mono text-xs text-gunmetal-gray uppercase tracking-wider mt-1">Avg. Parts Lead Time</span>
            </div>
            <div>
              <span className="font-mono text-white text-lg font-semibold">135</span>
              <span className="block font-mono text-xs text-gunmetal-gray uppercase tracking-wider mt-1">Service Engineers</span>
            </div>
            <div>
              <span className="font-mono text-white text-lg font-semibold">97%</span>
              <span className="block font-mono text-xs text-gunmetal-gray uppercase tracking-wider mt-1">Parts Availability</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Product Categories */}
      <section className="section-padding">
        <div className="container-site">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="section-title">Equipment Categories</h2>
              <p className="section-subtitle mt-3">
                Comprehensive range of heavy machinery from the world's leading manufacturers
              </p>
            </div>
            <Link href="/products" className="btn-outline text-sm hidden md:block">
              View All Equipment
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete-secondary">
            {categories.slice(0, 6).map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="card-category bg-concrete p-6 md:p-8 group border border-concrete-secondary hover:border-safety-orange transition-all duration-300"
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
                <p className="font-body text-sm text-gunmetal-gray mb-4 line-clamp-2">{cat.description}</p>
                <div className="spec-strip-light mt-auto">
                  <span className="font-mono text-xs text-gunmetal-gray">{cat.productCount} models available</span>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/products" className="btn-outline text-sm md:hidden mt-8 inline-block">
            View All Equipment
          </Link>
        </div>
      </section>

      {/* 4. Featured Products */}
      <section className="section-padding bg-white border-t border-b border-concrete-secondary">
        <div className="container-site">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="section-title">Featured Equipment</h2>
              <p className="section-subtitle mt-3">
                Best-selling models with immediate availability and comprehensive warranty
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-concrete-secondary">
            {featuredProducts.slice(0, 6).map((product) => (
              <div key={product.id} className="card-product bg-white">
                <Link href={`/products/${product.categorySlug}/${product.slug}`} className="block">
                  <div className="h-52 bg-charcoal-secondary flex items-center justify-center overflow-hidden relative">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-center p-4">
                        <span className="font-display font-bold text-lg text-concrete-secondary/30">{product.brand}</span>
                        <p className="font-mono text-xs text-gunmetal-gray mt-2">{product.name}</p>
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-brass">{product.brand}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gunmetal-gray">{product.category}</span>
                  </div>
                  <Link href={`/products/${product.categorySlug}/${product.slug}`}>
                    <h3 className="font-display font-bold text-base text-charcoal mb-3 hover:text-safety-orange transition-colors">
                      {product.name}
                    </h3>
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
                    <Link href={`/products/${product.categorySlug}/${product.slug}`} className="btn-outline text-xs py-2 px-3 flex-1 text-center">
                      View Specs
                    </Link>
                    <Link href={`/contact?product=${product.slug}`} className="btn-primary text-xs py-2 px-3 flex-1 text-center">
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Authorised Brands Strip */}
      <section className="py-12 border-b border-concrete-secondary">
        <div className="container-site">
          <div className="text-center mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-gunmetal-gray">Authorised Distributor & Service Partner</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="group"
              >
                <div className="w-28 h-12 bg-concrete-secondary flex items-center justify-center grayscale-to-color px-4">
                  <span className="font-display font-bold text-sm text-gunmetal-gray group-hover:text-charcoal transition-colors">{brand.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <h2 className="section-title text-center mb-4">Why YAMA Construction</h2>
          <p className="section-subtitle text-center mx-auto mb-16">
            Four pillars that define our commitment to Ethiopian industry
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-concrete-secondary p-8">
              <div className="w-12 h-12 bg-charcoal flex items-center justify-center mb-6">
                <span className="font-display font-bold text-safety-orange text-xl">01</span>
              </div>
              <h3 className="font-display font-bold text-base mb-4">Genuine Parts Supply</h3>
              <p className="font-body text-sm text-gunmetal-gray leading-relaxed mb-4">
                100% OEM-certified genuine parts with full warranty. Our inventory covers 1,240+ models across all brands we represent.
              </p>
              <span className="font-mono text-xs text-safety-orange">97% availability rate</span>
            </div>

            <div className="border border-concrete-secondary p-8">
              <div className="w-12 h-12 bg-charcoal flex items-center justify-center mb-6">
                <span className="font-display font-bold text-safety-orange text-xl">02</span>
              </div>
              <h3 className="font-display font-bold text-base mb-4">Nationwide Service Network</h3>
              <p className="font-body text-sm text-gunmetal-gray leading-relaxed mb-4">
                6 branches, 135 field engineers, and mobile service units covering all regions of Ethiopia with 48-hour average response time.
              </p>
              <span className="font-mono text-xs text-safety-orange">48 hr avg. response</span>
            </div>

            <div className="border border-concrete-secondary p-8">
              <div className="w-12 h-12 bg-charcoal flex items-center justify-center mb-6">
                <span className="font-display font-bold text-safety-orange text-xl">03</span>
              </div>
              <h3 className="font-display font-bold text-base mb-4">Technical Expertise</h3>
              <p className="font-body text-sm text-gunmetal-gray leading-relaxed mb-4">
                135 factory-trained engineers with certified expertise from Caterpillar, Komatsu, Volvo, JCB, and Cummins training programs.
              </p>
              <span className="font-mono text-xs text-safety-orange">Factory-trained engineers</span>
            </div>

            <div className="border border-concrete-secondary p-8">
              <div className="w-12 h-12 bg-charcoal flex items-center justify-center mb-6">
                <span className="font-display font-bold text-safety-orange text-xl">04</span>
              </div>
              <h3 className="font-display font-bold text-base mb-4">Financing Assistance</h3>
              <p className="font-body text-sm text-gunmetal-gray leading-relaxed mb-4">
                Flexible financing, leasing, and tender support for government, NGO, and commercial buyers. Specialized procurement advisory for institutional clients.
              </p>
              <span className="font-mono text-xs text-safety-orange">Flexible terms available</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Stats Bar */}
      <section className="spec-strip py-12">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="stat-number">8,500+</div>
              <div className="stat-label">Machines Delivered</div>
            </div>
            <div className="text-center">
              <div className="stat-number">6</div>
              <div className="stat-label">Branches Nationwide</div>
            </div>
            <div className="text-center">
              <div className="stat-number">135</div>
              <div className="stat-label">Service Engineers</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Major Projects Preview */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="section-title">Major Projects</h2>
              <p className="section-subtitle mt-3">
                Delivering equipment solutions for Ethiopia's most significant infrastructure developments
              </p>
            </div>
            <Link href="/projects" className="btn-outline text-sm hidden md:block">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.filter(p => p.featured).slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="card-product bg-white"
              >
                <div className="h-56 bg-charcoal-secondary relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full absolute inset-0 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="font-mono text-xs uppercase tracking-wider text-safety-orange">{project.industry}</span>
                    <h3 className="font-display font-bold text-white text-lg mt-2">{project.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-gunmetal-gray">Client:</span>
                    <span className="font-mono text-xs text-charcoal font-semibold">{project.client}</span>
                  </div>
                  <p className="font-body text-sm text-gunmetal-gray mb-4 line-clamp-2">{project.description}</p>
                  <div className="spec-strip-light -mx-5 px-5">
                    <span className="font-mono text-xs text-white">{project.result}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/projects" className="btn-outline text-sm md:hidden mt-8 inline-block">
            View All Projects
          </Link>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="section-padding">
        <div className="container-site">
          <h2 className="section-title text-center mb-4">Trusted by Ethiopia's Leading Institutions</h2>
          <p className="section-subtitle text-center mx-auto mb-16">
            Real feedback from the organizations we serve
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-concrete-secondary p-8 bg-white">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-muted-brass" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-sm text-charcoal leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-sm font-semibold text-charcoal">{t.author}</p>
                    <p className="font-mono text-xs text-gunmetal-gray">{t.position}, {t.company}</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-gunmetal-gray">{t.project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Industries Served */}
      <section className="section-padding bg-white border-t border-concrete-secondary">
        <div className="container-site">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="section-title">Industries We Serve</h2>
              <p className="section-subtitle mt-3">
                Specialized equipment solutions across eight key sectors
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="bg-concrete-secondary card-industry p-6 group"
              >
                <h3 className="font-display font-bold text-sm text-charcoal mb-3 group-hover:text-safety-orange transition-colors">
                  {ind.name}
                </h3>
                <p className="font-body text-xs text-gunmetal-gray line-clamp-2 mb-4">
                  {ind.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {ind.equipment.slice(0, 3).map((eq, i) => (
                    <span key={i} className="font-mono text-[10px] text-industrial-green border border-industrial-green/30 px-2 py-0.5">
                      {eq.name}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA Band */}
      <section className="bg-charcoal py-20">
        <div className="container-site text-center">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase mb-4">
            Tell Us What the Job Needs
          </h2>
          <p className="font-body text-gunmetal-gray text-lg max-w-2xl mx-auto mb-10">
            Describe your project requirements and our team will recommend the right equipment, specifications, and financing options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Request a Quote
            </Link>
            <a
              href={`https://wa.me/${SITE_PHONE.replace(/[^+\d]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-10 py-4"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}