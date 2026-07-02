import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import { blogPosts, BlogPost } from '@/lib/data';

interface Props {
  post: BlogPost;
  related: BlogPost[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: blogPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug);
  if (!post) return { notFound: true };

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return { props: { post, related } };
};

export default function BlogPostPage({ post, related }: Props) {
  return (
    <>
      {/* Hero with image */}
      <section className="bg-charcoal relative overflow-hidden h-64 md:h-96 lg:h-[35rem]">
        {post.image && (
          <>
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/60" />
            </div>
          </>
        )}
        <div className="absolute top-0 right-0 w-80 h-80 bg-safety-orange/5 rounded-full blur-3xl"></div>
        <div className="container-site relative z-10">
          <div className="flex items-center gap-3 mb-6 pt-10">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <Link href="/resources/blog" className="font-mono text-lg uppercase tracking-widest text-safety-orange hover:text-white transition-colors">
              Blog
            </Link>
            <span className="font-mono text-xs text-gunmetal-gray">/</span>
            <span className="font-mono text-xs uppercase tracking-widest text-white">{post.category}</span>
          </div>
          <h1 className="text-white max-w-4xl font-display font-black text-3xl md:text-5xl uppercase tracking-tight leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6">
            <div className="w-12 h-12 bg-safety-orange flex items-center justify-center flex-shrink-0 rounded-full">
              <span className="font-display font-bold text-white text-lg">{post.author.charAt(0)}</span>
            </div>
            <div>
              <p className="font-mono text-sm text-white font-semibold">{post.author}</p>
              <p className="font-mono text-xs text-gunmetal-gray">{post.date} · 5 min read</p>
            </div>
            <span className="px-3 py-1 bg-charcoal-secondary/80 backdrop-blur-sm border border-charcoal-secondary/50 font-mono text-[10px] uppercase tracking-wider text-safety-orange rounded-sm ml-auto">
              {post.category}
            </span>
          </div>
        </div>
      </section>



      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Table of Contents */}
              <div className="bg-concrete-secondary p-6 border-l-4 border-safety-orange mb-10 rounded-sm">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-charcoal mb-3">In This Article</h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-mono text-xs text-safety-orange cursor-pointer hover:underline">Key Highlights</span>
                  </li>
                  <li>
                    <span className="font-mono text-xs text-gunmetal-gray cursor-pointer hover:text-charcoal">Expert Insights & Analysis</span>
                  </li>
                  <li>
                    <span className="font-mono text-xs text-gunmetal-gray cursor-pointer hover:text-charcoal">Practical Applications</span>
                  </li>
                </ul>
              </div>

              <div
                className="blog-content font-body text-gunmetal-gray leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags & Share */}
              <div className="mt-12 pt-8 border-t border-concrete-secondary">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gunmetal-gray mr-2">Tags:</span>
                    <span className="px-2.5 py-1 bg-concrete-secondary font-mono text-[10px] text-charcoal uppercase tracking-wider rounded-sm">{post.category}</span>
                    <span className="px-2.5 py-1 bg-concrete-secondary font-mono text-[10px] text-charcoal uppercase tracking-wider rounded-sm">Equipment</span>
                    <span className="px-2.5 py-1 bg-concrete-secondary font-mono text-[10px] text-charcoal uppercase tracking-wider rounded-sm">Ethiopia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gunmetal-gray">Share:</span>
                    <button className="w-8 h-8 bg-charcoal flex items-center justify-center hover:bg-safety-orange transition-colors rounded-sm">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </button>
                    <button className="w-8 h-8 bg-charcoal flex items-center justify-center hover:bg-safety-orange transition-colors rounded-sm">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </button>
                    <button className="w-8 h-8 bg-charcoal flex items-center justify-center hover:bg-safety-orange transition-colors rounded-sm">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-charcoal to-charcoal-secondary rounded-sm">
                <div className="flex-1">
                  <p className="font-display font-bold text-white text-sm uppercase tracking-wider mb-1">Need Help Choosing the Right Equipment?</p>
                  <p className="font-body text-xs text-gunmetal-gray">Our team is ready to help you find the perfect solution for your project.</p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <Link href="/contact" className="btn-primary text-xs px-5 py-2.5 whitespace-nowrap rounded-sm">Request a Consultation</Link>
                  <Link href="/resources/blog" className="bg-white/10 backdrop-blur-sm text-white font-mono text-xs px-5 py-2.5 hover:bg-white/20 transition-colors whitespace-nowrap rounded-sm">← Back to Blog</Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* Category badge */}
              <div className="bg-charcoal p-6 rounded-sm">
                <span className="font-mono text-xs uppercase tracking-widest text-safety-orange block mb-2">Category</span>
                <span className="font-display font-bold text-white text-lg uppercase">{post.category}</span>
              </div>

              {/* Author card */}
              <div className="bg-white border border-concrete-secondary p-6 rounded-sm shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-charcoal flex items-center justify-center flex-shrink-0 rounded-full">
                    <span className="font-display font-bold text-white text-xl">{post.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-charcoal">{post.author}</p>
                    <p className="font-mono text-xs text-gunmetal-gray">Technical Writer</p>
                  </div>
                </div>
                <p className="font-body text-xs text-gunmetal-gray leading-relaxed border-t border-concrete-secondary pt-4">
                  YAMA Construction's technical team brings decades of combined experience in heavy equipment sales, service, and operations across Ethiopia.
                </p>
              </div>

              {/* Related in sidebar */}
              {related.length > 0 && (
                <div className="bg-white border border-concrete-secondary p-6 rounded-sm shadow-sm">
                  <h3 className="font-display font-bold text-sm uppercase tracking-wider text-charcoal mb-4">More Articles</h3>
                  <div className="space-y-4">
                    {related.map((rel) => (
                      <Link key={rel.slug} href={`/resources/blog/${rel.slug}`} className="group flex gap-3">
                        <div className="w-16 h-16 flex-shrink-0 bg-charcoal-secondary overflow-hidden rounded-sm">
                          {rel.image ? (
                            <img src={rel.image} alt={rel.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="font-mono text-[8px] text-concrete-secondary/30">{rel.category}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display font-bold text-xs text-charcoal group-hover:text-safety-orange transition-colors leading-snug line-clamp-2">{rel.title}</h4>
                          <span className="font-mono text-[10px] text-gunmetal-gray">{rel.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-charcoal to-charcoal-secondary p-6 rounded-sm">
                <h3 className="font-display font-bold text-white text-lg uppercase mb-3">Need Equipment?</h3>
                <p className="font-body text-sm text-gunmetal-gray mb-4">Talk to our sales team for a personalized equipment recommendation.</p>
                <Link href="/contact" className="btn-primary text-xs py-2.5 px-4 w-full text-center block rounded-sm">Get a Quote</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-padding bg-concrete-secondary border-t border-concrete">
          <div className="container-site">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-0.5 bg-safety-orange" />
              <h2 className="font-display font-black text-2xl uppercase tracking-tight text-charcoal">Related Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/resources/blog/${rel.slug}`} className="bg-white border border-concrete group overflow-hidden block hover:border-safety-orange transition-colors rounded-sm shadow-sm hover:shadow-md">
                  <div className="h-40 overflow-hidden bg-charcoal-secondary relative">
                    {rel.image ? (
                      <img src={rel.image} alt={rel.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-display font-bold text-concrete-secondary/30">{rel.category}</span>
                      </div>
                    )}
                    <span className="absolute top-2 left-2 bg-charcoal/80 backdrop-blur-sm font-mono text-[10px] uppercase tracking-wider text-safety-orange px-2 py-0.5 rounded-sm">{rel.category}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-sm text-charcoal group-hover:text-safety-orange transition-colors mb-2 leading-snug">{rel.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-gunmetal-gray">{rel.date}</span>
                      <span className="font-mono text-[10px] text-safety-orange font-semibold group-hover:underline underline-offset-2">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}