'use client';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#05070f] text-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/" className="text-blue-400 text-sm font-bold tracking-widest">← BACK</Link>
        <h1 className="font-display text-4xl mt-6 mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>PRIVACY POLICY</h1>
        <p className="text-xs text-white/40 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6 text-sm text-white/80 leading-relaxed">
          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">WHO WE ARE</h2>
            <p>Blue David Rentals ("we", "us", "our") is a vehicle rental service operating in Las Vegas, Nevada. This Privacy Policy describes how we collect, use, and protect your information when you use our application or services.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">INFORMATION WE COLLECT</h2>
            <p>When you submit a driver application, we collect: full name, email address, phone number, date of birth, citizenship status, driver's license status, rideshare app intentions, insurance status, banking/payment method, desired rental length, and start date.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">HOW WE USE YOUR INFORMATION</h2>
            <p>We use your information solely to evaluate your driver application, verify eligibility, and contact you about renting a vehicle from us. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">HOW WE STORE YOUR DATA</h2>
            <p>Application submissions are delivered to our business email (info@bluedavidrentals.com). We retain application data only as long as necessary to process your application and maintain business records.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">YOUR RIGHTS</h2>
            <p>You may request to access, correct, or delete your personal information at any time by contacting us at info@bluedavidrentals.com.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">THIRD-PARTY SERVICES</h2>
            <p>Our booking system is operated by a third-party provider (FleetFinesse) at bluedavidrentals.com. When you book a vehicle, you will be subject to their privacy policy in addition to ours.</p>
          </section>

          <section>
            <h2 className="font-bold text-blue-400 tracking-wider text-sm mb-2">CONTACT US</h2>
            <p>Questions about this policy? Email info@bluedavidrentals.com or call +1 800-317-4849.</p>
          </section>
        </div>

        <Link href="/" className="inline-block mt-12 text-blue-400 text-sm font-bold tracking-widest">← BACK TO APP</Link>
      </div>
    </main>
  );
}
