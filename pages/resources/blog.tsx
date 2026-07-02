import Link from 'next/link';
import { useState } from 'react';
import { blogPosts } from '@/lib/data';

const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? blogPosts.filter((p) => p.category === selectedCategory)
    : blogPosts;

  const featured = filteredPosts[0] || null;
  const rest = filteredPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal-secondary opacity-90"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-safety-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-safety-orange/10 rounded-full blur-2xl"></div>
        <div className="container-site py-20 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-safety-orange">Resources</span>
          </div>
          <h1 className="text-white mb-4 text-2xl md:text-3xl">Blog & Resources</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">
            Equipment guides, maintenance tips, industry insights, and financing information for Ethiopian industry professionals.
          </p>
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mt-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                selectedCategory === null
                  ? 'bg-safety-orange text-white'
                  : 'bg-charcoal-secondary border border-charcoal-secondary/50 text-gunmetal-gray hover:border-safety-orange/50 hover:text-white'
              }`}
            >
              All Posts
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-safety-orange text-white'
                    : 'bg-charcoal-secondary border border-charcoal-secondary/50 text-gunmetal-gray hover:border-safety-orange/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          {/* Featured Post */}
          {featured && (
            <>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-0.5 bg-safety-orange" />
                <h2 className="font-display font-black text-xl uppercase tracking-tight text-charcoal">Featured Article</h2>
              </div>
              <Link
                href={`/resources/blog/${featured.slug}`}
                className="group block mb-16 bg-gradient-to-br from-white to-concrete-secondary border border-concrete-secondary hover:border-safety-orange/60 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl rounded-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-3 relative min-h-[280px] overflow-hidden">
                    {featured.image ? (
                      <>
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="w-full h-full absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />
                      </>
                    ) : (
                      <div className="w-full h-full absolute inset-0 bg-charcoal-secondary flex items-center justify-center">
                        <span className="font-display font-bold text-4xl text-white">{featured.category}</span>
                      </div>
                    )}
                    <span className="absolute top-4 left-4 bg-safety-orange text-white font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-sm z-10 shadow-md">
                      Featured
                    </span>
                    <span className="absolute top-4 right-4 bg-charcoal/80 text-white backdrop-blur-sm font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-sm z-10">
                      {featured.category}
                    </span>
                  </div>
                  <div className="lg:col-span-2 p-5 lg:p-8 flex flex-col justify-center">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-black mb-3">{featured.date}</span>
                    <p className="font-display font-bold text-2xl lg:text-3xl text-charcoal mb-4 group-hover:text-safety-orange transition-colors leading-tight">
                      {featured.title}
                    </p>
                    <p className="font-body text-sm text-gunmetal-gray mb-6 leading-relaxed">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-8 h-8 bg-charcoal flex items-center justify-center rounded-full flex-shrink-0">
                        <span className="font-display font-bold text-white text-xs">{featured.author.charAt(0)}</span>
                      </div>
                      <span className="font-mono text-xs text-charcoal font-semibold">{featured.author}</span>
                      <span className="font-mono text-[10px] text-gunmetal-gray ml-auto flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        5 min read
                      </span>
                    </div>
                    <div className="mt-5 pt-5 border-t border-concrete-secondary">
                      <span className="inline-flex items-center gap-2 font-mono text-xs text-safety-orange font-semibold group-hover:gap-3 transition-all">
                        Read Full Article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          )}

          {/* All Posts */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-0.5 bg-safety-orange" />
            <h2 className="font-display font-black text-xl uppercase tracking-tight text-charcoal">All Articles</h2>
            <span className="font-mono text-xs text-gunmetal-gray ml-2">({filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'})</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, index) => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}`}
                className="group bg-white border border-concrete-secondary hover:border-safety-orange/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg rounded-sm flex flex-col"
              >
                <div className="h-48 overflow-hidden relative bg-charcoal-secondary">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-display font-bold text-lg text-white">{post.category}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 left-3 bg-charcoal/80 backdrop-blur-sm font-mono text-[10px] uppercase tracking-wider text-white px-2.5 py-1 rounded-sm">{post.category}</span>
                  {index === 0 && (
                    <span className="absolute top-3 right-3 bg-safety-orange text-white font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm">New</span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gunmetal-gray">{post.date}</span>
                    <span className="w-1 h-1 bg-gunmetal-gray/40 rounded-full"></span>
                    <span className="font-mono text-[10px] text-gunmetal-gray">5 min read</span>
                  </div>
                  <p className="font-display font-bold text-xl lg:text-2xl text-charcoal mb-3 group-hover:text-safety-orange transition-colors leading-snug">
                    {post.title}
                  </p>
                  <p className="font-body text-md text-gunmetal-gray mb-4 leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-concrete-secondary mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-charcoal flex items-center justify-center rounded-full">
                        <span className="font-display font-bold text-white text-[9px]">{post.author.charAt(0)}</span>
                      </div>
                      <span className="font-mono text-[10px] text-charcoal font-semibold truncate max-w-[100px]">{post.author}</span>
                    </div>
                    <span className="font-mono text-[10px] text-safety-orange font-semibold group-hover:underline underline-offset-2">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-charcoal relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-safety-orange/5 rounded-full blur-3xl"></div>
        <div className="container-site py-16 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="w-8 h-0.5 bg-safety-orange block mx-auto mb-4"></span>
            <h2 className="font-display font-black text-2xl uppercase tracking-tight text-white mb-4">Stay Informed</h2>
            <p className="font-body text-gunmetal-gray mb-8">Subscribe to receive the latest equipment guides, industry insights, and maintenance tips delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-charcoal-secondary border border-charcoal-secondary/50 text-white font-mono text-sm placeholder:text-gunmetal-gray focus:outline-none focus:border-safety-orange/50 transition-colors rounded-sm"
              />
              <button type="submit" className="btn-primary text-sm px-6 py-3 whitespace-nowrap rounded-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}