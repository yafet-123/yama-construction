import Link from 'next/link';
import { useState, FormEvent } from 'react';
import { SITE_NAME, SITE_PHONE, SITE_EMAIL, SITE_ADDRESS, branches } from '@/lib/data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    inquiryType: 'General Inquiry',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setStatusMessage(data.message);
        setFormData({
          fullName: '',
          company: '',
          phone: '',
          email: '',
          inquiryType: 'General Inquiry',
          message: '',
        });
      } else {
        setStatus('error');
        setStatusMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <>
      <section className="bg-charcoal py-20">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-0.5 bg-safety-orange" /><span className="font-mono text-xs uppercase tracking-widest text-safety-orange">Contact</span></div>
          <h1 className="text-white mb-6">Contact {SITE_NAME}</h1>
          <p className="font-body text-lg text-gunmetal-gray max-w-3xl">Get in touch with our sales, service, and parts teams. We respond to all inquiries within 24 hours.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="section-title mb-6">Send Us a Message</h2>
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded">
                {statusMessage}
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded">
                {statusMessage}
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="form-input" placeholder="Your full name" />
                </div>
                <div>
                  <label className="form-label">Company *</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} required className="form-input" placeholder="Company name" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="form-input" placeholder="+251 9XX XXX XXX" />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="email@company.com" />
                </div>
              </div>
              <div>
                <label className="form-label">Inquiry Type</label>
                <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="form-input">
                  <option>General Inquiry</option>
                  <option>Equipment Quote</option>
                  <option>Parts Request</option>
                  <option>Service Booking</option>
                  <option>Tender / Procurement</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="form-label">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required className="form-input h-32" placeholder="Tell us about your equipment needs, project, or inquiry..." />
              </div>
              <button type="submit" disabled={status === 'loading'} className="btn-primary text-base px-10 py-4 w-full disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="section-title mb-6">Contact Information</h2>
            <div className="space-y-6 mb-10">
              <div className="border border-concrete-secondary p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-gunmetal-gray mb-2 block">Phone</span>
                <a href={`tel:${SITE_PHONE.replace(/[^+\d]/g, '')}`} className="font-mono text-lg text-safety-orange hover:text-charcoal transition-colors">{SITE_PHONE}</a>
              </div>
              <div className="border border-concrete-secondary p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-gunmetal-gray mb-2 block">Email</span>
                <a href={`mailto:${SITE_EMAIL}`} className="font-mono text-lg text-charcoal hover:text-safety-orange transition-colors">{SITE_EMAIL}</a>
              </div>
              <div className="border border-concrete-secondary p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-gunmetal-gray mb-2 block">Head Office</span>
                <span className="font-mono text-base text-charcoal">{SITE_ADDRESS}</span>
              </div>
              <div className="border border-concrete-secondary p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-gunmetal-gray mb-2 block">Working Hours</span>
                <span className="font-mono text-base text-charcoal">Mon–Fri: 8:00 AM – 5:30 PM | Sat: 8:00 AM – 1:00 PM</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-charcoal p-6">
              <p className="font-display font-bold text-white text-lg mb-2">Prefer WhatsApp?</p>
              <p className="font-body text-sm text-gunmetal-gray mb-4">Chat directly with our sales team on WhatsApp.</p>
              <a href={`https://wa.me/${SITE_PHONE.replace(/[^+\d]/g, '')}`} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      {/* <section className="section-padding bg-white border-t border-concrete-secondary">
        <div className="container-site">
          <h2 className="section-title mb-12">Our Branches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete-secondary">
            {branches.map((branch) => (
              <div key={branch.name} className="bg-white p-6 border border-concrete-secondary">
                <h3 className="font-display font-bold text-sm text-charcoal mb-3">{branch.name}</h3>
                <p className="font-body text-sm text-gunmetal-gray mb-4">{branch.address}</p>
                <div className="space-y-1">
                  <a href={`tel:${branch.phone.replace(/[^+\d]/g, '')}`} className="block font-mono text-xs text-safety-orange hover:text-charcoal transition-colors">{branch.phone}</a>
                  <a href={`mailto:${branch.email}`} className="block font-mono text-xs text-gunmetal-gray hover:text-safety-orange transition-colors">{branch.email}</a>
                </div>
                <div className="mt-4 pt-4 border-t border-concrete-secondary">
                  <span className="font-mono text-[10px] text-gunmetal-gray">{branch.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}