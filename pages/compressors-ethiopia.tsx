import Link from 'next/link';

export default function CompressorsEthiopiaPage() {
  return (
    <>
      <section className="bg-charcoal py-16">
        <div className="container-site">
          <h1 className="text-white text-3xl md:text-4xl font-display font-extrabold mb-4">Compressors Ethiopia</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">Industrial air compressors from leading global manufacturers. Portable and stationary compressors for construction, mining, and industrial applications across Ethiopia.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-site">
          <div className="bg-concrete-secondary p-8">
            <h2 className="font-display font-bold text-lg mb-4">Compressor Solutions</h2>
            <p className="font-body text-sm text-gunmetal-gray mb-4">We supply diesel and electric compressors ranging from portable units for construction sites to large stationary systems for industrial facilities. All units come with full warranty and nationwide service support.</p>
            <ul className="space-y-2 mb-6">
              {['Portable and stationary compressors', 'Diesel and electric drive options', 'Full warranty and maintenance plans', 'Genuine parts and consumables', 'Nationwide service coverage'].map((item) => (
                <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-safety-orange" /><span className="font-mono text-sm text-charcoal">{item}</span></li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary text-sm">Inquire About Compressors</Link>
          </div>
        </div>
      </section>
    </>
  );
}