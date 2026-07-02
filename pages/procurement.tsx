import Link from 'next/link';

export default function ProcurementPage() {
  return (
    <>
      <section className="bg-charcoal py-20">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-0.5 bg-safety-orange" /><span className="font-mono text-xs uppercase tracking-widest text-safety-orange">Procurement</span></div>
          <h1 className="text-white mb-6">Tender & Government Procurement</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">Specialized procurement support for government enterprises, NGOs, and institutional buyers. Transparent processes, competitive pricing, and financing options.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title mb-6">Procurement Services</h2>
            <div className="space-y-6">
              {[
                { title: 'Tender Advisory', desc: 'End-to-end support in preparing equipment specifications, responding to RFQs, and managing tender submissions for government and institutional contracts.' },
                { title: 'Bulk Purchasing', desc: 'Volume-based pricing and dedicated account management for large-scale equipment procurement programs. Customized delivery and payment schedules.' },
                { title: 'Financing Assistance', desc: 'Flexible financing solutions including lease-to-own, equipment financing, and supplier credit. Partnerships with Ethiopian financial institutions.' },
                { title: 'Bid Preparation', desc: 'Technical and commercial bid preparation support, including equipment certification documentation, compliance verification, and delivery scheduling.' },
              ].map((s) => (
                <div key={s.title} className="border border-concrete-secondary p-6">
                  <h3 className="font-display font-bold text-base text-charcoal mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-gunmetal-gray">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-title mb-6">Tender Inquiry Form</h2>
            <p className="font-body text-sm text-gunmetal-gray mb-8">For institutional buyers and government procurement officers. Submit your requirements and our tender support team will respond within 24 hours.</p>
            <form className="space-y-6">
              <div><label className="form-label">Organization Name *</label><input type="text" required className="form-input" placeholder="Full organization name" /></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="form-label">Contact Person *</label><input type="text" required className="form-input" placeholder="Full name" /></div>
                <div><label className="form-label">Position / Title</label><input type="text" className="form-input" placeholder="e.g. Procurement Director" /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="form-label">Phone *</label><input type="tel" required className="form-input" placeholder="+251 9XX XXX XXX" /></div>
                <div><label className="form-label">Email *</label><input type="email" required className="form-input" placeholder="email@organization.com" /></div>
              </div>
              <div><label className="form-label">Project / Tender Scope</label><textarea className="form-input h-24" placeholder="Describe the equipment required, quantity, timeline, and any specific procurement requirements..." /></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="form-label">Estimated Budget Range</label><select className="form-input"><option>Select range</option><option>Under $500,000</option><option>$500,000 — $2M</option><option>$2M — $10M</option><option>$10M+</option></select></div>
                <div><label className="form-label">Organization Type</label><select className="form-input"><option>Select type</option><option>Government Ministry</option><option>State-Owned Enterprise</option><option>NGO / International Organization</option><option>Private Company</option><option>Other</option></select></div>
              </div>
              <div><label className="form-label">Projected Timeline</label><input type="text" className="form-input" placeholder="e.g. Q3 2025, Within 6 months" /></div>
              <button type="submit" className="btn-primary text-base px-10 py-4 w-full">Submit Tender Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}