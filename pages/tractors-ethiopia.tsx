import Link from 'next/link';

export default function TractorsEthiopiaPage() {
  return (
    <>
      <section className="bg-charcoal py-16"><div className="container-site"><h1 className="text-white text-3xl md:text-4xl font-display font-extrabold mb-4">Tractors Ethiopia</h1><p className="font-body text-lg text-gunmetal-gray max-w-3xl">Agricultural and industrial tractors for Ethiopian farming and construction. From compact utility tractors to heavy-duty agricultural tractors from leading global manufacturers.</p></div></section>
      <section className="section-padding"><div className="container-site"><div className="bg-concrete-secondary p-8"><h2 className="font-display font-bold text-lg mb-4">Tractor Solutions</h2><ul className="space-y-2 mb-6">{['Compact and mid-range utility tractors', 'Heavy-duty agricultural tractors', 'Construction and industrial tractors', 'Attachments and implements available', 'Financing and lease options', 'Parts and service nationwide'].map(item => <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-safety-orange" /><span className="font-mono text-sm text-charcoal">{item}</span></li>)}</ul><Link href="/contact" className="btn-primary text-sm">Inquire About Tractors</Link></div></div></section>
    </>
  );
}