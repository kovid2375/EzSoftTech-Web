"use client"
import { useState } from 'react';
import {
  Phone,
  Mail,
  MessageSquare,
  FileText,
  Lightbulb,
  Users,
  Bug,
  Clock,
  ArrowRight,
  Headphones,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { FaqSection } from '@/components/Home-Sections/Faq-Section';
import Link from 'next/link';

type SupportChannel = {
  id: string;
  title: string;
  description: string;
  contact: string;
  availability: string;
  icon: typeof Phone;
  accent: string;
  ring: string;
  badge: string;
  badgeText: string;
};

const channels: SupportChannel[] = [
  {
    id: 'phone',
    title: 'Phone Support',
    description: 'Speak directly with our technical team',
    contact: '+91 89623 70822',
    availability: 'Mon-Fri: 9 AM - 6 PM IST',
    icon: Phone,
    accent: 'bg-emerald-50',
    ring: 'ring-emerald-200',
    badge: 'bg-emerald-100',
    badgeText: 'text-emerald-700',
  },
  {
    id: 'email',
    title: 'Email Support',
    description: 'Get detailed help via email',
    contact: 'info@ezsofttech.in',
    availability: '24/7 - Response within 4 hours',
    icon: Mail,
    accent: 'bg-blue-50',
    ring: 'ring-blue-200',
    badge: 'bg-blue-100',
    badgeText: 'text-blue-700',
  },
  {
    id: 'chat',
    title: 'Live Chat',
    description: 'Instant chat with our support team',
    contact: 'Available on website',
    availability: 'Mon-Fri: 9 AM - 6 PM IST',
    icon: MessageSquare,
    accent: 'bg-amber-50',
    ring: 'ring-amber-200',
    badge: 'bg-amber-100',
    badgeText: 'text-amber-700',
  },
];

type Resource = {
  title: string;
  description: string;
  icon: typeof FileText;
  href: string;
};

const resources: Resource[] = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API docs',
    icon: FileText,
    href: '#',
  },
  {
    title: 'Best Practices',
    description: 'Tips for optimal performance',
    icon: Lightbulb,
    href: '#',
  },
  {
    title: 'Community',
    description: 'Connect with other users',
    icon: Users,
    href: '#',
  },
  {
    title: 'Issue Tracker',
    description: 'Report and track issues',
    icon: Bug,
    href: '#',
  },
];

function SupportPage() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 30%, rgba(16,185,129,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(59,130,246,0.3) 0%, transparent 50%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-[#0951DE] backdrop-blur">
            <Headphones className="h-4 w-4" />
            We're here to help
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Get in <span className="text-[#0951DE]">Touch</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-900">
            Choose the support option that works best for you. Our team is ready
            to assist with any questions or issues.
          </p>
        </div>
      </header>

      {/* Support channels */}
      <section className="mx-auto -mt-12 max-w-5xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c) => {
            const Icon = c.icon;
            const isHovered = hovered === c.id;
            return (
              <div
                key={c.id}
                onMouseEnter={() => setHovered(c.id)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 ${
                  isHovered
                    ? 'shadow-xl -translate-y-1'
                    : 'hover:shadow-md'
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 transition-opacity duration-300 ${
                    c.id === 'phone'
                      ? 'bg-emerald-500'
                      : c.id === 'email'
                        ? 'bg-blue-500'
                        : 'bg-amber-500'
                  } ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.accent} ring-1 ${c.ring}`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      c.id === 'phone'
                        ? 'text-emerald-600'
                        : c.id === 'email'
                          ? 'text-blue-600'
                          : 'text-amber-600'
                    }`}
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{c.description}</p>
                <p className="mt-4 font-mono text-base font-semibold text-slate-900">
                  {c.contact}
                </p>
                <div className="mt-3 flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${c.badge} ${c.badgeText}`}
                  >
                    {c.availability}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}

      <FaqSection/>
      
      {/* Support resources */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Support Resources
            </h2>
            <p className="mt-2 text-slate-600">
              Additional resources to help you get the most out of our services.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((r) => {
              const Icon = r.icon;
              return (
                <Link
                  key={r.title}
                  href={"/contact"}
                  className="group flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0951DE] hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white transition-colors group-hover:bg-[#0951DE]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{r.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition-colors group-hover:text-[#0951DE]">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-500">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="flex items-center gap-2">
              <Headphones className="h-4 w-4 text-[#0951DE]" />
              EZ GLOBAL Support
            </p>
            <p>© {new Date().getFullYear()} EZ GLOBAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SupportPage;
