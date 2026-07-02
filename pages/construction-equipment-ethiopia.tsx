import Link from 'next/link';

export default function ConstructionEquipmentPage() {
  return (
    <>
      <section className="bg-charcoal py-16">
        <div className="container-site">
          <h1 className="text-white text-3xl md:text-4xl font-display font-extrabold mb-4">Construction Equipment Ethiopia</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">Complete range of heavy construction equipment from the world's leading manufacturers. Excavators, loaders, bulldozers, graders, and more for Ethiopian infrastructure projects.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-site">
          <div className="bg-concrete-secondary p-8">
            <h2 className="font-display font-bold text-lg mb-4">Your Partner in Ethiopian Construction</h2>
            <p className="font-body text-sm text-gunmetal-gray mb-4">From the highlands of Tigray to the lowlands of Somali Region, our equipment is building Ethiopia's future. We supply, service, and support construction machinery for projects of every scale.</p>
            <ul className="space-y-2 mb-6">
              {['Authorised dealer for Caterpillar, Komatsu, Volvo CE, JCB', 'Complete range of earthmoving equipment', 'Full warranty and after-sales support', 'Financing and lease options', 'Parts and service nationwide'].map((item) => (
                <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-safety-orange" /><span className="font-mono text-sm text-charcoal">{item}</span></li>
              ))}
            </ul>
            <Link href="/products" className="btn-primary text-sm">Browse Construction Equipment</Link>
          </div>
        </div>
      </section>
    </>
  );
}