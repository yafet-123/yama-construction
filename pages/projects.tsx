import Link from 'next/link';
import { projects, industries } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-charcoal py-20">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-0.5 bg-safety-orange" /><span className="font-mono text-xs uppercase tracking-widest text-safety-orange">Projects</span></div>
          <h1 className="text-white mb-6">Project Portfolio</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">Major equipment supply projects delivered across Ethiopia&#39;s most significant infrastructure and industrial developments.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-site space-y-8">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="block border border-concrete-secondary bg-white hover:border-safety-orange transition-all">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="bg-charcoal-secondary min-h-[200px] relative overflow-hidden">
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
                <div className="p-6 md:col-span-2">
                  <div className="flex flex-wrap gap-4 mb-3 text-sm"><span className="font-mono text-xs text-gunmetal-gray">Client: <span className="text-charcoal">{project.client}</span></span><span className="font-mono text-xs text-gunmetal-gray">Location: <span className="text-charcoal">{project.location}</span></span><span className="font-mono text-xs text-gunmetal-gray">Year: <span className="text-charcoal">{project.year}</span></span></div>
                  <p className="font-body text-sm text-gunmetal-gray mb-4">{project.description}</p>
                  <div className="spec-strip-light -mx-6 px-6 py-3 flex justify-between items-center">
                    <span className="font-mono text-xs text-white px-2">{project.result}</span>
                    <span className="font-mono text-xs text-safety-orange px-2">View Case Study →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}