import Link from 'next/link';

export default function ServiceBookingPage() {
  return (
    <>
      <section className="bg-charcoal py-20">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-0.5 bg-safety-orange" /><span className="font-mono text-xs uppercase tracking-widest text-safety-orange">Service Booking</span></div>
          <h1 className="text-white mb-6">Book a Service Appointment</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">Schedule preventive maintenance, field service, or workshop repair. Our team will confirm your appointment within 4 hours.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="form-label">Full Name *</label><input type="text" required className="form-input" placeholder="Your full name" /></div>
              <div><label className="form-label">Company *</label><input type="text" required className="form-input" placeholder="Company name" /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="form-label">Phone *</label><input type="tel" required className="form-input" placeholder="+251 9XX XXX XXX" /></div>
              <div><label className="form-label">Email</label><input type="email" className="form-input" placeholder="email@company.com" /></div>
            </div>
            <div><label className="form-label">Service Type *</label><select required className="form-input"><option>Select service type</option><option>Preventive Maintenance</option><option>Field Service / On-Site Repair</option><option>Workshop Repair</option><option>Emergency Breakdown</option><option>Equipment Inspection</option><option>Technical Training</option></select></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="form-label">Equipment Brand</label><select className="form-input"><option>Select brand</option><option>Caterpillar</option><option>Komatsu</option><option>Volvo CE</option><option>JCB</option><option>Cummins</option><option>Perkins</option><option>Hyundai CE</option><option>Hitachi</option><option>Other</option></select></div>
              <div><label className="form-label">Equipment Model</label><input type="text" className="form-input" placeholder="e.g. CAT 336, Komatsu D375A" /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="form-label">Preferred Date</label><input type="date" className="form-input" /></div>
              <div><label className="form-label">Preferred Time</label><select className="form-input"><option>Morning (8:00–12:00)</option><option>Afternoon (13:00–17:00)</option></select></div>
            </div>
            <div><label className="form-label">Service Location *</label><select required className="form-input"><option>Select location</option><option>Addis Ababa — HQ</option><option>Addis Ababa — Parts & Service Center (Kality)</option><option>Dire Dawa Branch</option><option>Bahir Dar Branch</option><option>Hawassa Branch</option><option>Mekelle Branch</option><option>My Site (On-Site Service)</option></select></div>
            <div><label className="form-label">Issue Description</label><textarea className="form-input h-24" placeholder="Describe the issue or service required..." /></div>
            <button type="submit" className="btn-primary text-base px-10 py-4 w-full">Book Appointment</button>
          </form>
        </div>
      </section>
    </>
  );
}