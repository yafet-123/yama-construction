import Link from 'next/link';
import { useRouter } from 'next/router';
import { projects } from '@/lib/data';

export default function ProjectDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <section className="bg-charcoal-secondary py-4"><div className="container-site"><div className="flex items-center gap-2 font-mono text-xs text-gunmetal-gray"><Link href="/" className="hover:text-white">Home</Link><span>/</span><Link href="/projects" className="hover:text-white">Projects</Link><span>/</span><span className="text-white">{project.title}</span></div></div></section>
      <section className="bg-charcoal py-16">
        <div className="container-site">
          <span className="font-mono text-xs uppercase tracking-wider text-safety-orange">{project.industry} · {project.year}</span>
          <h1 className="text-white text-3xl md:text-4xl font-display font-extrabold mt-4 mb-6">{project.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3"><span className="font-mono text-xs text-gunmetal-gray">Client</span><span className="font-mono text-sm text-white">{project.client}</span></div>
            <div className="flex items-center gap-3"><span className="font-mono text-xs text-gunmetal-gray">Location</span><span className="font-mono text-sm text-white">{project.location}</span></div>
            <div className="flex items-center gap-3"><span className="font-mono text-xs text-gunmetal-gray">Year</span><span className="font-mono text-sm text-white">{project.year}</span></div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-charcoal-secondary aspect-video relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full absolute inset-0 object-cover"
            />
          </div>
          <div>
            <h2 className="section-title mb-6">Project Overview</h2>
            <p className="font-body text-gunmetal-gray leading-relaxed mb-8">{project.description}</p>
            <h3 className="font-display font-bold text-base mb-4">Equipment Supplied</h3>
            <ul className="space-y-2 mb-8">{project.equipment.map((eq) => (<li key={eq} className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-safety-orange" /><span className="font-mono text-sm text-charcoal">{eq}</span></li>))}</ul>
            <div className="bg-charcoal-secondary border-t-2 border-safety-orange p-5"><span className="spec-label block mb-1">Result</span><span className="font-mono text-white text-sm">{project.result}</span></div>
          </div>
        </div>
      </section>
    </>
  );
}