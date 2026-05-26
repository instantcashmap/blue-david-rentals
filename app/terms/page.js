'use client';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#05070f] text-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/" className="text-blue-400 text-sm font-bold tracking-widest">← BACK</Link>
        <h1 className="font-display text-4xl mt-6 mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>TERMS OF SERVICE</h1>
        <p className="text-xs text-white/40 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6 text-sm text-white/80 leading-relaxed">
          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">ACCEPTANCE OF TERMS</h2>
            <p>By using the Blue David Rentals app, applying as a driver, or renting one of our vehicles, you agree to these Terms of Service.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">DRIVER ELIGIBILITY</h2>
            <p>To rent a vehicle, applicants must be U.S. citizens, hold a valid Nevada driver's license, be at least 21 years of age, and meet additional requirements set by Blue David Rentals. Approval is at our sole discretion.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">RENTAL RATES & PAYMENT</h2>
            <p>Daily rental rates are displayed in the app and are subject to change. Payment is required prior to vehicle pickup. We accept payment via bank transfer or Zelle. Additional terms apply through our booking system at bluedavidrentals.com.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">VEHICLE USE</h2>
            <p>Vehicles rented through Blue David Rentals may be used for personal driving and approved rideshare/delivery platforms including Uber, Lyft, Amazon Flex, and DoorDash. Use for any illegal purpose, off-road driving, or use by unauthorized drivers is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">INSURANCE</h2>
            <p>Renters are responsible for maintaining valid auto insurance during the rental period. Renters using their own insurance must provide proof of coverage. Insurance options through Blue David Rentals are available upon request.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">MAINTENANCE & DAMAGE</h2>
            <p>Routine maintenance is included with all rentals. Renters are responsible for any damage caused during their rental period beyond normal wear and tear. Roadside assistance is included.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">CANCELLATION & RETURNS</h2>
            <p>Rental cancellation and return policies are managed through our booking system. Please refer to bluedavidrentals.com for specific terms.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">LIMITATION OF LIABILITY</h2>
            <p>Blue David Rentals is not liable for any indirect, incidental, or consequential damages arising from your use of our vehicles or services. Renters drive at their own risk.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">CHANGES TO THESE TERMS</h2>
            <p>We reserve the right to update these terms at any time. Continued use of our services after changes are posted constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">CONTACT</h2>
            <p>Email info@bluedavidrentals.com or call +1 800-317-4849.</p>
          </section>
        </div>

        <Link href="/" className="inline-block mt-12 text-blue-400 text-sm font-bold tracking-widest">← BACK TO APP</Link>
      </div>
    </main>
  );
}
