import Link from 'next/link';
import { SITE_NAME, SITE_EMAIL, SITE_PHONE, SITE_YEARS, testimonials, categories, brands } from '@/lib/data';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container-site relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-safety-orange">About {SITE_NAME}</span>
          </div>
          <h1 className="text-white mb-6 max-w-4xl font-display font-black text-4xl md:text-6xl uppercase tracking-tight">
            Building Ethiopia's <span className="text-safety-orange">Industrial Foundation</span>
          </h1>
          <p className="font-body text-lg text-concrete/80 max-w-3xl leading-relaxed">
            From a small parts supplier to Ethiopia's leading heavy equipment distributor, our journey mirrors the growth of the nation's infrastructure.
          </p>
        </div>
      </section>

      {/* 1. What We Distribute */}
      <section className="section-padding bg-concrete-secondary">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal">Equipment & Parts</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-12">What We Distribute</h2>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-concrete border border-concrete">
            {categories.slice(0, 6).map((cat) => (
              <div key={cat.slug} className="bg-white p-8 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-concrete-secondary flex items-center justify-center font-display font-bold text-2xl text-charcoal group-hover:text-safety-orange transition-colors duration-300">
                  {cat.name.charAt(0)}
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal mb-3 pr-12 relative z-10 uppercase tracking-wide">{cat.name}</h3>
                <p className="font-body text-sm text-gunmetal-gray mb-6 relative z-10">{cat.description}</p>
                <Link href={`/products/${cat.slug}`} className="font-mono text-xs uppercase tracking-wider text-safety-orange hover:text-charcoal transition-colors font-semibold relative z-10">
                  View Catalog &rarr;
                </Link>
              </div>
            ))}
          </div>

          {/* Brands Strip */}
          {/* <div className="mt-12 bg-white p-8 border border-concrete flex flex-wrap items-center justify-center gap-x-12 gap-y-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {brands.map((brand) => (
              <span key={brand.slug} className="font-display font-bold text-lg text-charcoal">{brand.name}</span>
            ))}
          </div> */}
        </div>
      </section>

      {/* 2. Why Choose Us */}
      <section className="section-padding bg-charcoal text-white relative">
        <div className="container-site relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-safety-orange">The YAMA Advantage</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-16">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: 'Genuine Parts Supply', desc: '100% OEM-certified genuine parts with full warranty. Our inventory covers 1,240+ models across all brands we represent with a 97% availability rate.', stat: '97% Availability' },
              { title: 'Nationwide Service', desc: '6 branches, 135 field engineers, and mobile service units covering all regions of Ethiopia with 48-hour average response time.', stat: '48hr Response' },
              { title: 'Technical Expertise', desc: '135 factory-trained engineers with certified expertise from Caterpillar, Komatsu, Volvo, JCB, and Cummins training programs.', stat: 'Factory Trained' },
              { title: 'Financing Assistance', desc: 'Flexible financing, leasing, and tender support for government, NGO, and commercial buyers. Specialized procurement advisory.', stat: 'Flexible Terms' }
            ].map((pillar, i) => (
              <div key={pillar.title} className="group relative bg-charcoal-secondary p-10 overflow-hidden border border-white/5 hover:border-safety-orange/50 transition-colors duration-300">
                <div className="absolute -bottom-10 -right-4 font-display font-black text-[120px] text-white/[0.02] leading-none select-none group-hover:text-safety-orange/10 transition-colors duration-500">
                  0{i + 1}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="font-mono text-xl text-safety-orange font-bold mb-4">0{i + 1} //</div>
                  <h3 className="font-display font-black text-2xl text-white mb-4 uppercase tracking-wide group-hover:text-safety-orange transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm text-concrete/70 leading-relaxed pr-8 mb-8 flex-grow">
                    {pillar.desc}
                  </p>
                  <div className="inline-block bg-white/5 border border-white/10 px-4 py-2 font-mono text-xs text-white/50 w-fit">
                    {pillar.stat}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-safety-orange group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Simple Company Story */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-concrete-secondary/50 hidden lg:block transform -skew-x-12 translate-x-16"></div>
        <div className="container-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-safety-orange" />
                <span className="font-mono text-xs uppercase tracking-widest text-charcoal">Our Heritage</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-charcoal mb-8">A Simple Story of <br /><span className="text-safety-orange">Hard Work</span></h2>

              <div className="space-y-6 font-body text-gunmetal-gray text-lg leading-relaxed">
                <p>
                  Founded in 2000 in Addis Ababa, YAMA Construction began with a simple mission: to keep Ethiopia's agricultural and construction machinery running. What started as a small parts supplier and service workshop quickly grew as the nation embarked on massive infrastructure projects.
                </p>
                <p>
                  By focusing on honesty, technical excellence, and stocking genuine parts, we earned the trust of major government contractors and private enterprises alike. Today, with over 8,500 machines delivered, 6 branches nationwide, and partnerships with the world's leading equipment manufacturers, we remain true to our roots: <strong>we are builders serving builders.</strong>
                </p>
              </div>

              <div className="mt-10 flex gap-8 border-t border-concrete pt-8">
                <div>
                  <span className="block font-display font-black text-3xl text-charcoal">2000</span>
                  <span className="font-mono text-xs uppercase text-gunmetal-gray">Year Founded</span>
                </div>
                <div>
                  <span className="block font-display font-black text-3xl text-charcoal">100%</span>
                  <span className="font-mono text-xs uppercase text-gunmetal-gray">Ethiopian Owned</span>
                </div>
              </div>
            </div>

            <div className="bg-charcoal p-12 relative group hidden md:block">
              <div className="absolute -left-6 -top-6 w-24 h-24 border-l-4 border-t-4 border-safety-orange"></div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 border-r-4 border-b-4 border-safety-orange"></div>
              <h3 className="font-display font-black text-3xl text-white mb-6 uppercase leading-tight tracking-wide">"We don't just sell machines. We guarantee their uptime."</h3>
              <p className="font-mono text-sm text-safety-orange uppercase tracking-widest font-bold">Yonas Alemu — Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Team */}
      <section className="section-padding bg-concrete-secondary border-t border-concrete">
        <div className="container-site">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-safety-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal">Leadership</span>
              <span className="w-8 h-0.5 bg-safety-orange" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-charcoal">Our Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Tariku W/Aregay', title: 'Founder & CEO', bio: '25+ years in heavy equipment industry. Previously held senior roles at Ethiopian engineering firms.' },
              { name: 'Tsion Abebe', title: 'Chief Operating Officer', bio: '20 years in operations management and supply chain. Led expansion of branch network across Ethiopia.' },
              { name: 'Dawit Hailu', title: 'Technical Director', bio: 'Factory-trained by Caterpillar, Komatsu, and Volvo. Leads a team of 135 engineers nationwide.' },
            ].map((leader) => (
              <div key={leader.name} className="bg-white border border-concrete p-8 hover:border-charcoal transition-colors group">
                <div className="w-16 h-16 bg-charcoal flex items-center justify-center mb-6 group-hover:bg-safety-orange transition-colors">
                  <span className="font-display font-bold text-white text-2xl">{leader.name.charAt(0)}</span>
                </div>
                <h3 className="font-display font-black text-xl text-charcoal mb-1 uppercase tracking-wide">{leader.name}</h3>
                <p className="font-mono text-xs text-safety-orange mb-6 font-semibold tracking-wider">{leader.title}</p>
                <p className="font-body text-sm text-gunmetal-gray leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="bg-charcoal py-20 relative overflow-hidden">
        {/* Industrial hazard stripe accent */}
        <div className="absolute top-0 right-0 w-64 h-64 overflow-hidden hidden md:block">
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 rotate-45 bg-[repeating-linear-gradient(45deg,#ff5722,#ff5722_10px,#333_10px,#333_20px)] opacity-10"></div>
        </div>

        <div className="container-site text-center relative z-10">
          <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase mb-6 tracking-tight">Ready to Build with Us?</h2>
          <p className="font-body text-concrete/80 max-w-xl mx-auto mb-10 text-lg">
            Contact our expert team for equipment inquiries, service appointments, or partnership opportunities across Ethiopia.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="btn-primary text-base px-10 py-4 uppercase font-bold tracking-wider">Contact Sales</Link>
            <Link href="/products" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-charcoal transition-colors text-base px-10 py-4 uppercase font-bold tracking-wider">Browse Catalog</Link>
          </div>
        </div>
      </section>
    </>
  );
}