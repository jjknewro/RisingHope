import { useState } from 'react';
import logo from '/risinghopelogo.png';
import './App.css';

function App() {
  const [showContact, setShowContact] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = contactForm;
    const body = `From: ${name} (${email})\n\n${message}`;
    const mailto = `mailto:risinghopetikvaholah@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setShowContact(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2 shrink-0">
              <img src={logo} alt="Rising Hope Logo" className="h-10 w-10 rounded-full object-cover" />
              <span className="text-sm font-semibold text-purple-700 leading-tight hidden sm:block">
                Rising Hope<br />Tikvah Olah
              </span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              <a href="#mission" className="hover:text-amber-500 transition-colors">Mission</a>
              <a href="#values" className="hover:text-amber-500 transition-colors">Values</a>
              <a href="#programs" className="hover:text-amber-500 transition-colors">Programs</a>
              <a href="#board" className="hover:text-amber-500 transition-colors">Board</a>
              <a href="#donate" className="ml-2 inline-flex items-center px-4 py-2 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors shadow-md">
                Donate
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-amber-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,70,151,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(243,145,52,0.08),transparent_50%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                501(c)(3) Nonprofit Organization (Pending)
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-purple-900 leading-tight tracking-tight">
                Rising Hope<br />
                <span className="text-amber-500">Tikvah Olah</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                Providing hope, opportunity, and compassionate support to students, individuals, and families facing financial and emotional challenges.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="#donate" className="inline-flex items-center px-6 py-3 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/25">
                  Make a Difference
                </a>
                <a href="#mission" className="inline-flex items-center px-6 py-3 rounded-full border-2 border-purple-300 text-purple-700 font-semibold hover:bg-purple-50 transition-colors">
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-amber-400/20 blur-2xl scale-150"></div>
                <img
                  src={logo}
                  alt="Rising Hope Tikvah Olah Logo"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* ── Mission Section ── */}
      <section id="mission" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">Our Purpose</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-purple-900">Mission & Vision</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-600 text-white mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                The mission of Rising Hope Tikvah Olah Foundation is to provide hope, opportunity, and compassionate support to students, individuals, and families facing financial and emotional challenges. Through educational assistance, mental health services, advocacy, and community partnerships, the Foundation works to remove barriers to learning, healing, and personal growth so every individual can thrive with dignity, resilience, and hope.
              </p>
            </div>
            {/* Vision Card */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-500 text-white mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Rising Hope Tikvah Olah Foundation envisions a community where every child, student, individual, and family has access to quality education, emotional wellness resources, and compassionate support regardless of financial circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section id="values" className="py-20 md:py-28 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-purple-600 font-semibold text-sm tracking-widest uppercase">What We Stand For</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-purple-900">Core Values</h2>
            <p className="mt-4 text-gray-500">The principles that guide everything we do</p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Compassion', desc: 'We treat every individual with dignity, kindness, empathy, and respect.', icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z' },
              { title: 'Hope', desc: 'We believe access to education and mental health support can transform lives.', icon: 'M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18' },
              { title: 'Integrity', desc: 'We commit to ethical stewardship, transparency, and accountability.', icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z' },
              { title: 'Inclusion', desc: 'We serve individuals and families of all backgrounds without discrimination.', icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' },
              { title: 'Community', desc: 'We believe meaningful partnerships strengthen families and communities.', icon: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Z' },
            ].map((value, i) => (
              <div key={value.title} className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all text-center">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-purple-800">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs ── */}
      <section id="programs" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">How We Help</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-purple-900">Our Programs</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Scholarship */}
            <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-amber-100 text-amber-600 mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Educational Assistance</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Scholarships, tutoring, enrichment opportunities, and advancement programs for students and families experiencing financial hardship.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
                  Scholarships
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
                  Tutoring & Mentoring
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
                  Enrichment Programs
                </li>
              </ul>
            </div>
            {/* Mental Health */}
            <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-100 text-purple-600 mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Mental Health Support</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Financial assistance and referrals for therapy, counseling, psychological services, and wellness support.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-purple-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
                  Therapy Assistance
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-purple-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
                  Counseling Referrals
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-purple-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
                  Wellness Programs
                </li>
              </ul>
            </div>
            {/* Advocacy */}
            <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-amber-100 text-amber-600 mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783-.247.95-1.083 1.573-2.097 1.367a1.875 1.875 0 0 1-1.366-2.097c.4-1.315 1.153-2.497 2.185-3.457m0-9.18c-.253-.962-.584-1.892-.985-2.783.247-.95 1.083-1.573 2.097-1.367a1.875 1.875 0 0 1 1.366 2.097c-.4 1.315-1.153 2.497-2.185 3.457" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Advocacy & Outreach</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Raising awareness, providing advocacy, and building community partnerships to remove barriers to learning and healing.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
                  Community Outreach
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
                  Awareness Programs
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
                  Partnerships
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Board of Directors ── */}
      <section id="board" className="py-20 md:py-28 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-purple-600 font-semibold text-sm tracking-widest uppercase">Our Leadership</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-purple-900">Board of Directors</h2>
            <p className="mt-4 text-gray-500">Dedicated individuals committed to serving our community</p>
          </div>
          <div className="mt-14 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Jessica Klein', role: 'Chairperson & President', bio: 'Presides over meetings, oversees operations, and signs official documents. Leads the Foundation with vision and compassion.' },
              { name: 'Joel Klein', role: 'Treasurer', bio: 'Oversees finances, maintains accounting records, and presents financial reports. Ensures ethical stewardship of all funds.' },
              { name: 'Ava Klein', role: 'Secretary', bio: 'Maintains corporate records, records meeting minutes, and manages corporate filings and compliance.' },
            ].map((member) => (
              <div key={member.name} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-amber-400 flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-lg text-purple-800">{member.name}</h3>
                <p className="text-amber-600 font-medium text-sm mt-1">{member.role}</p>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donate / Contact ── */}
      <section id="donate" className="py-20 md:py-28 bg-gradient-to-br from-purple-700 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Get Involved</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Make a Difference Today</h2>
            <p className="mt-4 text-purple-200 max-w-xl mx-auto leading-relaxed">
              Your support helps provide scholarships, therapy assistance, counseling resources, and hope to those who need it most. Together, we can help individuals and families rise with hope.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:contact@risinghopetikvah.org"
                className="inline-flex items-center px-8 py-4 rounded-full bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors shadow-xl shadow-amber-500/30 text-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                Make a Donation
              </a>
              <button
                onClick={() => setShowContact(true)}
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-purple-300 text-white font-bold hover:bg-white/10 transition-colors text-lg cursor-pointer"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mailing Address ── */}
      <section className="py-12 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-purple-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className="font-medium">Principal Office: State of New York &mdash; 501(c)(3) Nonprofit Organization (Pending)</span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 bg-purple-900 text-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="font-bold text-white">Rising Hope Tikvah Olah Foundation</p>
                <p className="text-sm text-purple-300">Charitable & Educational Organization</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#mission" className="hover:text-amber-400 transition-colors">Mission</a>
              <a href="#values" className="hover:text-amber-400 transition-colors">Values</a>
              <a href="#programs" className="hover:text-amber-400 transition-colors">Programs</a>
              <a href="#board" className="hover:text-amber-400 transition-colors">Board</a>
              <a href="#donate" className="hover:text-amber-400 transition-colors">Donate</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-800 text-center text-sm text-purple-400">
            &copy; {new Date().getFullYear()} Rising Hope Tikvah Olah Foundation, Inc. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ── Contact Popup Modal ── */}
      {showContact && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowContact(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Card */}
          <div
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-purple-100 overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-700 to-purple-900 px-6 py-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Contact Us</h3>
                <p className="text-purple-200 text-sm mt-0.5">We'd love to hear from you</p>
              </div>
              <button
                onClick={() => setShowContact(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleContactSubmit} className="p-6 space-y-5">
              {/* To Field (read-only) */}
              <div>
                <label className="block text-sm font-semibold text-purple-700 mb-1.5">To</label>
                <div className="flex items-center gap-3 px-4 py-3 bg-purple-50 rounded-xl border border-purple-200">
                  <svg className="w-5 h-5 text-purple-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span className="text-gray-700 font-medium">risinghopetikvaholah@gmail.com</span>
                </div>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-purple-700 mb-1.5">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-purple-700 mb-1.5">Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-semibold text-purple-700 mb-1.5">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-purple-700 mb-1.5">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-700 placeholder-gray-400 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-amber-500 text-white font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/25 text-lg cursor-pointer"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12Zm0 0h7.5" />
                </svg>
                Send Message
              </button>

              <p className="text-xs text-gray-400 text-center">
                Your email client will open to send this message
              </p>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
