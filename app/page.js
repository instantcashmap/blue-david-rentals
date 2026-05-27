'use client';

import React, { useState, useEffect } from 'react';
import {
  Menu, ArrowRight, Zap, KeyRound, Shield,
  Infinity as InfinityIcon, Users,
  CheckCircle2, Home, Calendar, CircleUser, X, Bell, ClipboardCheck, Phone, Mail, ChevronDown
} from 'lucide-react';

const HERO_IMAGE = "/hero.jpg";

export default function Page() {
  const [activeTab, setActiveTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [toast, setToast] = useState(null);
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('bd_applied') === 'true') {
      setHasApplied(true);
    }
  }, []);

  const tryAccessFleet = (tab) => {
    if (hasApplied) {
      setActiveTab(tab);
    } else {
      flash('Apply first to view our fleet');
      setTimeout(() => setActiveTab('apply'), 600);
    }
  };

  useEffect(() => { const t = setTimeout(() => setMounted(true), 50); return () => clearTimeout(t); }, []);
  useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(null), 2200); return () => clearTimeout(t); }, [toast]);

  const flash = (msg) => setToast(msg);

  const features = [
    { icon: Zap, title: 'FAST APPROVAL', body: 'Get approved quickly and get on the road.' },
    { icon: SteeringIcon, title: 'RIDESHARE READY', body: 'Approved for Uber, Lyft and more.' },
    { icon: KeyRound, title: 'EASY PICKUP', body: 'Get your vehicle and go. Same day in most cases.' },
    { icon: Shield, title: 'RELIABLE VEHICLES', body: 'Clean, safe and well-maintained vehicles.' },
    { icon: InfinityIcon, title: 'UNLIMITED MILEAGE', body: 'Drive more. Worry less. No limits.' },
    { icon: Shield, title: 'ROADSIDE ASSISTANCE', body: 'Roadside assistance included.' },
  ];

  const vehicles = [
    { name: '2017 FORD FUSION',          tag: 'GREAT ON GAS', price: 65, seats: '5 SEATS', img: '/car1.png' },
    { name: '2018 FORD ESCAPE TITANIUM', tag: 'MORE SPACE',   price: 65, seats: '5 SEATS', img: '/car2.png' },
    { name: '2016 FORD FUSION SE',       tag: 'STYLISH RIDE', price: 65, seats: '5 SEATS', img: '/car3.png' },
    { name: '2012 FORD FUSION SEL',      tag: 'RELIABLE',     price: 65, seats: '5 SEATS', img: '/car4.png' },
  ];

  return (
    <div className="min-h-screen w-full bg-[#05070f] text-white font-sans antialiased flex justify-center">
      <style>{"@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800;900&family=Caveat:wght@600;700&display=swap'); .font-display { font-family: 'Anton', sans-serif; } .font-script { font-family: 'Caveat', cursive; } .font-body { font-family: 'Inter', sans-serif; } .hide-scroll::-webkit-scrollbar { display: none; } .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; } @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } } .anim-fade-up { animation: fadeUp 0.7s cubic-bezier(.2,.7,.2,1) both; } @keyframes pulseGlow { 0%,100% { box-shadow: 0 0 0 0 rgba(37,99,235,.55); } 50% { box-shadow: 0 0 0 14px rgba(37,99,235,0); } } .pulse-glow { animation: pulseGlow 2.4s infinite; }"}</style>

      <div className="relative w-full max-w-[420px] min-h-screen overflow-hidden bg-[#05070f] font-body pb-24">
        {activeTab === 'apply' && <ApplyScreen onBack={() => setActiveTab('home')} flash={flash} onApproved={() => setHasApplied(true)} />}
        {activeTab === 'contact' && <ContactScreen onBack={() => setActiveTab('home')} />}
        {activeTab === 'vehicles' && <FleetFrame title="OUR FLEET" subtitle="VEHICLES" onBack={() => setActiveTab('home')} />}
        {activeTab === 'bookings' && <FleetFrame title="MY BOOKINGS" subtitle="MANAGE TRIPS" onBack={() => setActiveTab('home')} />}
        {activeTab === 'home' && (
          <>
            <section className="relative min-h-[680px]">
              <div className="absolute inset-0 z-0">
                <img src={HERO_IMAGE} alt="Las Vegas driver" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition:'65% center'}} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#05070f] via-[#05070f]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#05070f]" />
              </div>

              <header className="relative z-30 flex items-center justify-between px-4 pt-4">
                <div className={mounted ? 'anim-fade-up' : 'opacity-0'}>
                  <img src="/bd_logo.png" alt="Blue David Rentals" className="h-20 w-auto" style={{filter:'drop-shadow(0 0 24px rgba(59,130,246,0.6))'}} />
                </div>

              </header>

              <div className="relative z-20 px-5 pt-8">
                <h1 className="font-display text-[52px] leading-[0.92] tracking-tight">GET ON THE<br/>ROAD.</h1>
                <h1 className="font-display text-[52px] leading-[0.92] tracking-tight text-blue-500 mt-2">GET PAID.</h1>

                <p className="mt-5 font-extrabold text-sm tracking-wide">
                  RENTALS FOR RIDESHARE DRIVERS<br/>
                  IN <span className="text-blue-500">LAS VEGAS.</span>
                </p>

                <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-[240px]">
                  Reliable vehicles. Fast approval. Everything you need to hit the road and start earning.
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <button onClick={() => setActiveTab('apply')} className="pulse-glow flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition px-4 py-3 rounded-lg text-xs font-bold tracking-wider">
                    APPLY NOW <ArrowRight size={14} />
                  </button>
                  <button onClick={() => tryAccessFleet('vehicles')} className="flex items-center gap-2 bg-black/40 border border-white/30 px-4 py-3 rounded-lg text-xs font-bold tracking-wider">
                    BROWSE <ArrowRight size={14} />
                  </button>
                </div>

                <div className="mt-4 inline-flex flex-wrap items-center gap-x-2 gap-y-1 bg-black/50 border border-white/15 rounded-full pl-3 pr-4 py-2">
                  <CheckCircle2 size={14} className="text-blue-400" />
                  <span className="text-[10px] font-bold tracking-widest text-white/80">APPROVED FOR</span>
                  <span className="font-extrabold text-white text-sm">Uber</span>
                  <span className="font-extrabold text-sm" style={{ color: '#FF00BF' }}>Lyft</span>
                  <span className="font-extrabold text-sm" style={{ color: '#FF9900' }}>Amazon</span>
                  <span className="font-extrabold text-sm" style={{ color: '#EE3124' }}>DoorDash</span>
                </div>
              </div>

              <div className="absolute bottom-16 left-0 right-0 z-20 text-center px-4">
                <div className="relative inline-block">
                  <div className="absolute -inset-6 bg-blue-600/30 blur-3xl rounded-full" />
                  <p className="relative font-script text-3xl text-white italic">
                    More driving. <span className="text-blue-400">More earning.</span>
                  </p>
                </div>
              </div>
            </section>

            <section className="px-4 mt-2 relative z-10">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="grid grid-cols-3 gap-y-5 gap-x-2">
                  {features.map((f, i) => (
                    <FeatureCell key={i} feature={f} />
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-6">
              <div className="px-4 flex items-center justify-between">
                <h2 className="font-display text-2xl">POPULAR VEHICLES</h2>
                <button onClick={() => tryAccessFleet('vehicles')} className="flex items-center gap-1 text-blue-500 text-xs font-bold tracking-widest">
                  VIEW ALL <ArrowRight size={14} />
                </button>
              </div>

              <div className="mt-3 flex gap-3 overflow-x-auto hide-scroll px-4 pb-2 snap-x snap-mandatory">
                {vehicles.map((v) => (
                  <VehicleCard key={v.tag} v={v} onSelect={() => tryAccessFleet('vehicles')} />
                ))}
              </div>
            </section>

            <section className="px-4 mt-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1228] p-5">
                <div className="absolute right-0 top-0 bottom-0 w-[55%]">
                  <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a1228] via-[#0a1228]/60 to-transparent" />
                </div>
                <div className="relative">
                  <h3 className="font-display text-2xl">YOU DRIVE.</h3>
                  <h3 className="font-display text-2xl text-blue-500">WE&apos;VE GOT YOUR BACK.</h3>

                  <ul className="mt-4 space-y-2 text-[12px] font-bold tracking-wider">
                    {['UNLIMITED MILEAGE','MAINTENANCE INCLUDED','INSURANCE OPTIONS AVAILABLE','COMPLIMENTARY CAR WASHES','ROADSIDE ASSISTANCE INCLUDED'].map(t => (
                      <li key={t} className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-blue-500 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <button onClick={() => setActiveTab('apply')} className="mt-5 inline-flex items-center gap-2 bg-blue-600 px-5 py-2.5 rounded-lg text-xs font-bold tracking-widest">
                    GET STARTED <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        <footer className="px-4 mt-8 mb-2 text-center">
          <div className="flex items-center justify-center gap-4 text-[10px] tracking-widest text-white/40">
            <a href="/privacy" className="hover:text-blue-400 transition">PRIVACY POLICY</a>
            <span className="text-white/20">·</span>
            <a href="/terms" className="hover:text-blue-400 transition">TERMS OF SERVICE</a>
          </div>
          <div className="mt-3 text-[10px] tracking-widest text-white/30">
            © {new Date().getFullYear()} BLUE DAVID RENTALS · LAS VEGAS, NV
          </div>
        </footer>

        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] bg-[#05070f]/95 backdrop-blur-xl border-t border-white/10 z-40">
          <div className="grid grid-cols-4 py-2">
            <NavBtn icon={Home} label="HOME" active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
            <NavBtn icon={ClipboardCheck} label="APPLY" active={activeTab === 'apply'} onClick={() => setActiveTab('apply')} />
            <NavBtn icon={Calendar} label="BOOKINGS" active={activeTab === 'bookings'} onClick={() => tryAccessFleet('bookings')} />
            <NavBtn icon={Phone} label="CONTACT" active={activeTab === 'contact'} onClick={() => setActiveTab('contact')} />
          </div>
          <div className="flex justify-center pb-1.5">
            <div className="w-32 h-[3px] rounded-full bg-white/60" />
          </div>
        </nav>

        {menuOpen && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
            <aside className="absolute top-0 right-0 h-full w-[78%] max-w-[340px] bg-[#0a1020] border-l border-white/10 p-6 flex flex-col anim-fade-up">
              <div className="flex items-center justify-between">
                <div className="font-display text-2xl">MENU</div>
                <button onClick={() => setMenuOpen(false)} className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                  <X size={18} />
                </button>
              </div>
              <div className="mt-8 space-y-1 text-sm font-semibold tracking-wider">
                {['HOME','VEHICLES','HOW IT WORKS','REQUIREMENTS','REFERRALS','SUPPORT','SIGN IN'].map(item => (
                  <button key={item} onClick={() => { setMenuOpen(false); flash(item + ' opened'); }} className="w-full text-left px-3 py-3 rounded-lg hover:bg-white/5 flex items-center justify-between">
                    {item}
                    <ArrowRight size={14} className="text-blue-500" />
                  </button>
                ))}
              </div>
              <div className="mt-auto pt-6 text-[10px] tracking-widest text-white/40">
                BLUE DAVID RENTALS
              </div>
            </aside>
          </div>
        )}

        {toast && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-blue-600/95 text-white text-xs font-bold tracking-wide shadow-2xl flex items-center gap-2">
            <Bell size={14} /> {toast}
          </div>
        )}
      </div>
    </div>
  );
}

function SteeringIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <path d="M12 13.5 V21" />
      <path d="M4 11 H10" />
      <path d="M14 11 H20" />
    </svg>
  );
}

function FeatureCell({ feature }) {
  const Icon = feature.icon;
  return (
    <div className="flex flex-col items-center text-center px-1">
      <div className="w-11 h-11 rounded-full bg-white/5 ring-2 ring-blue-500/60 flex items-center justify-center text-blue-400">
        <Icon size={20} />
      </div>
      <div className="mt-2 text-[10px] font-extrabold tracking-widest">{feature.title}</div>
      <div className="mt-1 text-[10px] text-white/60 max-w-[100px]">{feature.body}</div>
    </div>
  );
}

function VehicleCard({ v, onSelect }) {
  return (
    <div className="snap-start shrink-0 w-[180px] rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
      <div className="relative h-[110px]">
        <img src={v.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] to-transparent" />
        <span className="absolute top-2 left-2 text-[9px] font-extrabold tracking-widest bg-black/70 border border-white/20 rounded-full px-2 py-1">
          {v.tag}
        </span>
      </div>
      <div className="px-3 pt-3 pb-3">
        <div className="text-[10px] font-extrabold tracking-wider text-white/90 mb-1 leading-tight min-h-[26px]">{v.name}</div>
        <div className="flex items-baseline justify-between gap-2">
          <div className="flex items-baseline">
            <span className="font-display text-2xl leading-none">${v.price}</span>
            <span className="text-[10px] text-white/60 font-bold ml-1">/DAY</span>
          </div>
          <div className="flex items-center gap-1 text-[9px] text-white/70 font-semibold whitespace-nowrap">
            <Users size={11} /> {v.seats}
          </div>
        </div>
        <button onClick={onSelect} className="mt-3 w-full bg-blue-600 rounded-md py-2 text-[11px] font-extrabold tracking-widest">
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
}

function NavBtn({ icon: Icon, label, active, onClick }) {
  return (
    <button onClick={onClick} className={active ? 'flex flex-col items-center gap-1 text-blue-500' : 'flex flex-col items-center gap-1 text-white/55'}>
      <Icon size={20} strokeWidth={active ? 2.4 : 2} />
      <span className="text-[9px] font-extrabold tracking-widest">{label}</span>
    </button>
  );
}

function ApplyScreen({ onBack, flash, onApproved }) {
  const [form, setForm] = useState({ fullName:'', email:'', phone:'', usCitizen:'', nvLicense:'', willDrive:'', hasInsurance:'', hasBank:'', dob:'', rentalLength:'', startDate:'' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const required = ['fullName','email','phone','usCitizen','nvLicense','willDrive','hasInsurance','hasBank','dob','rentalLength','startDate'];
  const complete = required.every(k => String(form[k]).trim().length > 0);

  const submit = async () => {
    if (!complete) { flash('Please fill all required fields'); return; }
    setSubmitting(true);
    try {
      const payload = {
        access_key: '8940a5fa-bdf7-4d35-8aec-355a06844e76',
        subject: 'New Driver Application — ' + form.fullName,
        from_name: 'Blue David Rentals App',
        botcheck: '',
        'Full Name': form.fullName,
        'Email': form.email,
        'Phone': form.phone,
        'US Citizen': form.usCitizen,
        'Nevada Drivers License': form.nvLicense,
        'Will Drive For Rideshare': form.willDrive,
        'Has Own Auto Insurance': form.hasInsurance,
        'Has Bank / Zelle': form.hasBank,
        'Date of Birth': form.dob,
        'Rental Length': form.rentalLength,
        'Start Date': form.startDate,
      };
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        if (typeof window !== 'undefined') localStorage.setItem('bd_applied', 'true');
        if (onApproved) onApproved();
      } else {
        flash('Submission failed. Please try again.');
      }
    } catch (err) {
      flash('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="px-5 pt-20 pb-10 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 rounded-full bg-blue-600/20 ring-4 ring-blue-500/40 flex items-center justify-center mb-6">
          <CheckCircle2 size={40} className="text-blue-400" />
        </div>
        <h2 className="font-display text-4xl">APPLICATION SUBMITTED.</h2>
        <p className="mt-3 text-white/70 max-w-xs">We&apos;ll review and reach out within 24 hours.</p>
        <button onClick={onBack} className="mt-8 bg-blue-600 px-6 py-3 rounded-lg text-xs font-bold tracking-widest">BACK TO HOME</button>
      </section>
    );
  }

  return (
    <section className="relative pb-10">
      <header className="sticky top-0 z-30 bg-[#05070f]/95 backdrop-blur border-b border-white/10 px-4 py-4 flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
        </button>
        <div>
          <div className="font-display text-xl leading-none">DRIVER APPROVAL</div>
          <div className="text-[10px] tracking-widest text-blue-400 mt-0.5">APPLICATION</div>
        </div>
      </header>

      <div className="px-5 pt-6">
        <p className="text-xs text-white/60 mb-6"><span className="text-blue-400">*</span> Required</p>

        <FormText label="Full Name" required value={form.fullName} onChange={v => set('fullName', v)} placeholder="John Smith" />
        <FormText label="Email Address" required type="email" value={form.email} onChange={v => set('email', v)} placeholder="you@example.com" />
        <FormText label="Phone Number" required type="tel" value={form.phone} onChange={v => set('phone', v)} placeholder="(702) 555-0100" />
        <FormYesNo label="Are you a US Citizen?" required value={form.usCitizen} onChange={v => set('usCitizen', v)} />
        <FormYesNo label="Do you hold a valid Nevada Driver's License?" required value={form.nvLicense} onChange={v => set('nvLicense', v)} />
        <FormYesNo label="Planning to drive for Uber, DoorDash, Amazon Flex, etc.?" required value={form.willDrive} onChange={v => set('willDrive', v)} />
        <FormYesNo label="Do you have your own auto insurance?" required value={form.hasInsurance} onChange={v => set('hasInsurance', v)} />
        <FormYesNo label="Do you have a Bank Account / Zelle for payments?" required value={form.hasBank} onChange={v => set('hasBank', v)} />
        <FormText label="Date of Birth" required type="date" value={form.dob} onChange={v => set('dob', v)} />
        <FormText label="How long are you looking to rent?" required value={form.rentalLength} onChange={v => set('rentalLength', v)} placeholder="e.g. 1 month, ongoing" />
        <FormText label="How soon do you want to start driving?" required type="date" value={form.startDate} onChange={v => set('startDate', v)} />

        <button onClick={submit} disabled={submitting} className={complete ? "mt-6 w-full flex items-center justify-center gap-2 bg-blue-600 px-5 py-4 rounded-lg text-sm font-bold tracking-widest" : "mt-6 w-full flex items-center justify-center gap-2 bg-blue-600/40 px-5 py-4 rounded-lg text-sm font-bold tracking-widest"}>
          {submitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
          {!submitting && <ArrowRight size={16} />}
        </button>
      </div>
    </section>
  );
}

function FormText({ label, required, value, onChange, type = 'text', placeholder }) {
  return (
    <div className="mb-5">
      <label className="block text-xs font-bold tracking-wider text-white/80 mb-2">
        {label}{required && <span className="text-blue-400 ml-1">*</span>}
      </label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 focus:border-blue-500 outline-none rounded-lg px-4 py-3 text-sm text-white" />
    </div>
  );
}

function FormYesNo({ label, required, value, onChange }) {
  return (
    <div className="mb-5">
      <label className="block text-xs font-bold tracking-wider text-white/80 mb-2">
        {label}{required && <span className="text-blue-400 ml-1">*</span>}
      </label>
      <div className="flex gap-2">
        {['Yes','No'].map(opt => (
          <button key={opt} type="button" onClick={() => onChange(opt)}
            className={value === opt ? "flex-1 px-4 py-3 rounded-lg text-sm font-bold bg-blue-600 border border-blue-500" : "flex-1 px-4 py-3 rounded-lg text-sm font-bold bg-white/5 border border-white/10 text-white/70"}>
            {opt.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

function FleetFrame({ title, subtitle, onBack }) {
  const [loading, setLoading] = useState(true);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => { if (loading) setBlocked(true); }, 6000);
    return () => clearTimeout(t);
  }, [loading]);

  return (
    <section className="relative pb-10 min-h-screen">
      <header className="sticky top-0 z-30 bg-[#05070f]/95 backdrop-blur border-b border-white/10 px-4 py-4 flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
        </button>
        <div className="flex-1">
          <div className="font-display text-xl leading-none">{title}</div>
          <div className="text-[10px] tracking-widest text-blue-400 mt-0.5">{subtitle}</div>
        </div>
        <a href="https://bluedavidrentals.com" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-widest text-blue-400">OPEN</a>
      </header>

      <div className="relative w-full" style={{ height: 'calc(100vh - 145px)' }}>
        {loading && !blocked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#05070f] z-10">
            <div className="w-10 h-10 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            <p className="mt-4 text-xs font-bold tracking-widest text-white/60">LOADING FLEET...</p>
          </div>
        )}

        {blocked ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <X size={28} className="text-white/60" />
            </div>
            <h3 className="font-display text-2xl">EMBEDDED VIEW BLOCKED</h3>
            <p className="mt-2 text-sm text-white/60 max-w-xs">Tap below to open in a new tab.</p>
            <a href="https://bluedavidrentals.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-blue-600 px-5 py-3 rounded-lg text-xs font-bold tracking-widest">
              OPEN BLUE DAVID RENTALS <ArrowRight size={14} />
            </a>
          </div>
        ) : (
          <iframe src="https://bluedavidrentals.com" title={title} className="w-full h-full border-0 bg-white" onLoad={() => setLoading(false)} />
        )}
      </div>
    </section>
  );
}

function ContactScreen({ onBack }) {
  return (
    <section className="relative pb-10 min-h-screen">
      <header className="sticky top-0 z-30 bg-[#05070f]/95 backdrop-blur border-b border-white/10 px-4 py-4 flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
        </button>
        <div>
          <div className="font-display text-xl leading-none">CONTACT US</div>
          <div className="text-[10px] tracking-widest text-blue-400 mt-0.5">GET IN TOUCH</div>
        </div>
      </header>

      <div className="px-5 pt-8">
        <h2 className="font-display text-4xl leading-none">QUESTIONS?</h2>
        <h2 className="font-display text-4xl leading-none text-blue-500 mt-1">WE&apos;RE HERE.</h2>
        <p className="mt-4 text-sm text-white/60 max-w-[280px]">Real support from real people. Reach out anytime and we&apos;ll get back to you.</p>

        <div className="mt-8 space-y-4">
          <a href="tel:+18003174849" className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:border-blue-500/40 transition group">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 ring-2 ring-blue-500/50 flex items-center justify-center shrink-0">
              <Phone size={20} className="text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold tracking-widest text-white/60">PHONE</div>
              <div className="font-display text-xl mt-0.5">+1 800-317-4849</div>
            </div>
            <ArrowRight size={18} className="text-blue-500 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a href="mailto:info@bluedavidrentals.com" className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:border-blue-500/40 transition group">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 ring-2 ring-blue-500/50 flex items-center justify-center shrink-0">
              <Mail size={20} className="text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold tracking-widest text-white/60">EMAIL</div>
              <div className="font-display text-base mt-0.5 truncate">info@bluedavidrentals.com</div>
            </div>
            <ArrowRight size={18} className="text-blue-500 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <a href="https://www.facebook.com/Bluedavidllc" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:border-blue-500/40 transition group">
          <div className="w-12 h-12 rounded-full bg-blue-600/20 ring-2 ring-blue-500/50 flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400" style={{ color: '#60a5fa' }}><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold tracking-widest text-white/60">FACEBOOK</div>
            <div className="font-display text-base mt-0.5 truncate">@BlueDavid</div>
          </div>
          <ArrowRight size={18} className="text-blue-500 group-hover:translate-x-0.5 transition-transform" />
        </a>

        <div className="mt-10">
          <h3 className="font-display text-2xl">FREQUENTLY ASKED.</h3>
          <p className="text-[10px] tracking-widest text-blue-400 mt-1 mb-4">QUICK ANSWERS</p>
          <FAQList />
        </div>

        <p className="mt-10 text-[10px] tracking-widest text-white/30 text-center">
          BLUE DAVID RENTALS · LAS VEGAS, NV
        </p>
      </div>
    </section>
  );
}

function FAQList() {
  const [open, setOpen] = useState(null);
  const faqs = [
    {
      q: 'How do I get approved?',
      a: 'Submit the application via the APPLY tab. We review and respond within 24 hours. Most drivers are approved the same day.'
    },
    {
      q: 'What apps can I drive for?',
      a: 'All our vehicles are approved for Uber, Lyft, Amazon Flex, and DoorDash. Drive for one or all of them.'
    },
    {
      q: 'Is insurance included?',
      a: 'Insurance options are available through us. You can also use your own auto insurance if you prefer.'
    },
    {
      q: 'What is the rental cost?',
      a: 'All vehicles in our fleet are $65/day with unlimited mileage. No hidden fees, no per-mile charges.'
    },
    {
      q: 'How fast can I start driving?',
      a: 'Same-day pickup in most cases. Once approved, schedule your pickup and hit the road.'
    },
    {
      q: 'What if my car breaks down?',
      a: 'Roadside assistance is included with every rental.'
    },
  ];

  return (
    <div className="space-y-2">
      {faqs.map((item, i) => (
        <FAQItem
          key={i}
          q={item.q}
          a={item.a}
          isOpen={open === i}
          onClick={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left active:bg-white/5 transition"
      >
        <span className="text-sm font-bold text-white flex-1">{q}</span>
        <ChevronDown
          size={18}
          className="text-blue-400 shrink-0 transition-transform"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-sm text-white/70 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}
