import Link from 'next/link';
import { industries } from '@/lib/data';

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-charcoal py-20">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-0.5 bg-safety-orange" /><span className="font-mono text-xs uppercase tracking-widest text-safety-orange">Industries</span></div>
          <h1 className="text-white mb-6">Industries We Serve</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">Specialized equipment solutions and expertise across eight key sectors of Ethiopian industry.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="bg-concrete-secondary p-8 border border-concrete-secondary hover:border-safety-orange transition-all group">
              <h2 className="font-display font-bold text-lg text-charcoal mb-3 group-hover:text-safety-orange transition-colors">{ind.name}</h2>
              <p className="font-body text-sm text-black mb-6">{ind.description}</p>
              <div className="flex flex-wrap gap-2">
                {ind.equipment.map((eq, i) => (
                  <span key={i} className="font-mono text-[10px] text-industrial-green border border-industrial-green/30 px-2 py-1">{eq.name}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}