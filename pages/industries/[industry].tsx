import Link from 'next/link';
import { useRouter } from 'next/router';
import { industries, featuredProducts, projects } from '@/lib/data';

export default function IndustryPage() {
  const router = useRouter();
  const { industry } = router.query;
  
  const ind = industries.find((i) => i.slug === industry);
  if (!ind) {
    return <div>Industry not found</div>;
  }

  const relatedProjects = projects.filter((p) => p.industrySlug === ind.slug);

  return (
    <>
      <section className="bg-charcoal py-16">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-0.5 bg-safety-orange" /><span className="font-mono text-xs uppercase tracking-widest text-safety-orange"><Link href="/industries" className="hover:text-white transition-colors">Industries</Link> / {ind.name}</span></div>
          <h1 className="text-white mb-6">{ind.name} Equipment Solutions</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">{ind.description}</p>
        </div>
      </section>
      <div className="spec-strip"><div className="container-site"><span className="font-mono text-xs text-gunmetal-gray">{ind.name.toUpperCase()} · SPECIALIZED EQUIPMENT · TAILORED SOLUTIONS</span></div></div>
      <section className="section-padding bg-white">
        <div className="container-site">
          <h2 className="section-title mb-8">Recommended Equipment</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {ind.equipment.map((eq, i) => (
              <div key={i} className="border border-concrete-secondary p-4 bg-concrete text-center">
                <span className="font-mono text-lg text-charcoal font-semibold block mb-1">{eq.name}</span>
                <p className="font-body text-md text-black leading-relaxed">{eq.description}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary text-sm">Discuss Your {ind.name} Needs</Link>
        </div>
      </section>
      {relatedProjects.length > 0 && (
        <section className="section-padding">
          <div className="container-site">
            <h2 className="section-title mb-8">Related Projects</h2>
            <div className="space-y-6">
              {relatedProjects.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="block border border-concrete-secondary p-6 bg-white hover:border-safety-orange transition-all">
                  <div className="flex justify-between items-start"><div><h3 className="font-display font-bold text-base text-charcoal">{p.title}</h3><p className="font-mono text-sm text-gunmetal-gray mt-1">{p.client} · {p.location}</p></div><span className="font-mono text-xs text-industrial-green">{p.result.slice(0, 60)}</span></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}