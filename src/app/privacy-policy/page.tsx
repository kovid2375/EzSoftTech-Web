"use client"
import { useEffect, useState } from 'react';
import {
  Shield,
  Lock,
  Eye,
  Database,
  Share2,
  Users,
  FileText,
  RefreshCw,
  Mail,
  ChevronRight,
} from 'lucide-react';

type Section = {
  id: string;
  title: string;
  icon: typeof Shield;
  body: string;
  bullets?: string[];
};

const sections: Section[] = [
  {
    id: 'personal-information',
    title: 'Personal Information',
    icon: Database,
    body: 'We collect personal information that you voluntarily provide when interacting with us, including your name, email address, phone number, and relevant business information such as your company name, industry, and project requirements. We may also collect your communication preferences and maintain a record of your interactions with us to improve our services and provide better customer support.',
  },
  {
    id: 'technical-information',
    title: 'Technical Information',
    icon: Eye,
    body: 'When you visit our website, we automatically collect certain technical information to enhance your browsing experience and improve our services. This may include website usage and analytics data, your device information, browser type, IP address, and approximate location data. This information helps us monitor website performance, maintain security, and understand how visitors use our website.',
  },
  {
    id: 'how-we-use-it',
    title: 'How We Use Your Information',
    icon: FileText,
    body: 'We use the information we collect to provide, maintain, and improve our software development services. Your information helps us process service requests, manage orders and payments, and deliver the solutions you require. We also use it to respond to customer support inquiries, communicate important service updates, project progress, and promotional offers that may be relevant to you. Additionally, we analyze website usage to enhance performance and user experience, while using security measures to detect, prevent, and investigate fraudulent activities, unauthorized access, and other potential security threats.',
  },
  {
    id: 'sharing',
    title: 'Sharing of Information',
    icon: Share2,
    body: 'We respect your privacy and do not sell, rent, or trade your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in delivering our services, including payment processing, cloud hosting, website analytics, technical support, and other business operations. These partners are authorized to use your information only for the purpose of providing services on our behalf and are contractually required to maintain the confidentiality and security of your data. We may also disclose information when required by law or to protect our legal rights, comply with regulatory obligations, or ensure the safety and security of our users and services.',
  },
  {
    id: 'data-security',
    title: 'Data Security',
    icon: Lock,
    body: 'We are committed to protecting your personal information by implementing appropriate administrative, technical, and physical security measures designed to prevent unauthorized access, disclosure, alteration, or destruction of your data. These measures include secure data storage, encrypted data transmission, access controls, regular security monitoring, and periodic system updates to maintain a safe and reliable environment. While we strive to use commercially accepted security practices to safeguard your information, please note that no method of transmission over the internet or electronic storage is completely secure. Therefore, although we make every reasonable effort to protect your personal data, we cannot guarantee its absolute security.',
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    icon: Users,
    body: 'We believe you should have control over your personal information. Depending on the applicable laws and regulations in your jurisdiction, you may have the right to access, review, update, or correct the personal information we hold about you. You may also request the deletion of your personal data, object to or restrict certain processing activities, withdraw your consent where processing is based on consent, and opt out of receiving marketing communications. Additionally, where applicable, you may request a copy of your personal information in a portable format. If you wish to exercise any of these rights or have questions about how your data is processed, please contact us using the details provided below. We will respond to your request in accordance with applicable data protection laws.',
  },
];

const lastUpdated = 'July 31, 2026';

function useActiveSection() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

function PrivacyPolicy() {
  const active = useActiveSection();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 py-30 sm:py-35">
          <div className="flex items-center gap-3 text-[#0851DE]">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Privacy
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Privacy <span className='text-[#0851DE]'> Policy</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Your trust matters. This policy explains what we collect, why we
            collect it, and how you stay in control of your information.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-medium">
              <RefreshCw className="h-3.5 w-3.5" />
              Last updated {lastUpdated}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              info@ezsofttech.in
            </span>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <nav className="sticky top-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#0851DE]">
                Contents
              </p>
              <ul className="space-y-1">
                {sections.map((s) => {
                  const Icon = s.icon;
                  const isActive = active === s.id;
                  return (
                    <li key={s.id}>
                      <button
                        onClick={() => scrollTo(s.id)}
                        className={`group flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                          isActive
                            ? 'bg-blue-50 font-semibold text-[#0851DE]'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        <Icon
                          className={`h-4 w-4 shrink-0 ${
                            isActive ? 'text-[#0851DE]' : 'text-slate-400'
                          }`}
                        />
                        <span className="truncate">{s.title}</span>
                        <ChevronRight
                          className={`ml-auto h-3.5 w-3.5 shrink-0 transition-transform ${
                            isActive
                              ? 'translate-x-0 text-[#0851DE]'
                              : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Sections */}
          <article className="min-w-0">
            <div className="space-y-14">
              {sections.map((s) => {
                const Icon = s.icon;
                return (
                  <section
                    key={s.id}
                    id={s.id}
                    className="scroll-mt-8"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d0defc] text-[#0851DE] ring-1 ring-[#0851DE]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                        {s.title}
                      </h2>
                    </div>
                    <div className="mt-4 pl-[3.25rem]">
                      <p className="leading-relaxed text-slate-600">{s.body}</p>
                      {s.bullets && (
                        <ul className="mt-4 space-y-2.5">
                          {s.bullets.map((b, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-slate-600"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0851DE]" />
                              <span className="leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </section>
                );
              })}
            </div>

            {/* Contact card */}
            <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="grid gap-6 p-8 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Questions about your privacy?
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    We're here to help. Reach out and our team will get back to
                    you within 30 days.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0851DE] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Contact us
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-500">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#0851DE]" />
              Your privacy, protected.
            </p>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
