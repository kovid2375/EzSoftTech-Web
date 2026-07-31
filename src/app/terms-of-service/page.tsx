"use client"
import { useEffect, useState } from 'react';
import {
  Briefcase,
  CreditCard,
  Copyright,
  ShieldCheck,
  AlertTriangle,
  Scale,
  Mail,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

type Subsection = {
  title: string;
  body: string;
};

type Section = {
  id: string;
  title: string;
  icon: typeof Briefcase;
  body?: string;
  bullets?: string[];
  subsections?: Subsection[];
};

const sections: Section[] = [
  {
    id: 'service-agreement',
    title: 'Service Agreement',
    icon: Briefcase,
    body: 'By engaging EZ Soft Tech for software development, consulting, or related technology services, you acknowledge and agree to the terms outlined in this Service Agreement. All project requirements, objectives, deliverables, timelines, and pricing must be clearly documented and mutually agreed upon before work begins. Any modifications or additions to the agreed project scope may require additional development time, revised timelines, and corresponding costs. Throughout the project, both parties are expected to maintain regular communication and provide timely feedback to ensure smooth collaboration and successful project delivery. Upon fulfillment of the agreed payment terms, EZ Soft Tech will provide the final project deliverables, including all applicable files, documentation, and assets as specified in the project agreement.',
  },
  {
    id: 'payment-terms',
    title: 'Payment Terms',
    icon: CreditCard,
    body: 'To ensure a smooth and transparent working relationship, EZ Soft Tech follows a structured payment process for all projects. A 50% advance payment is required before project development begins to confirm engagement and allocate resources. The remaining project cost is typically divided into predefined milestone payments, which become due upon the successful completion of agreed project phases. The final balance must be paid before the delivery, deployment, or transfer of the completed project and associated deliverables. Payments not received by the agreed due date may be subject to late payment charges or interest, as permitted by applicable laws and the project agreement. Any requests for refunds will be evaluated based on the project\'s stage of completion, work already performed, and the terms specified in the individual service contract.',
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    icon: Copyright,
    subsections: [
      {
        title: 'Client Ownership',
        body: 'Upon receipt of full payment for the agreed services, the client will own all custom-developed software, source code, applications, and other deliverables specifically created for the project, as outlined in the project agreement. This ownership excludes any third-party software, open-source libraries, frameworks, APIs, plugins, or tools that are governed by their respective licenses and terms of use.',
      },
      {
        title: 'EZ Soft Tech Rights',
        body: "While the client retains ownership of the custom project deliverables, EZ Soft Tech reserves the right to retain ownership of its proprietary methodologies, development processes, technical know-how, reusable code components, internal frameworks, templates, utilities, and best practices developed independently of the project. With the client's prior consent, EZ Soft Tech may also showcase the completed project, including non-confidential information, as part of its portfolio, case studies, marketing materials, or promotional content to demonstrate its expertise and capabilities.",
      },
    ],
  },
  {
    id: 'warranties-disclaimers',
    title: 'Warranties & Disclaimers',
    icon: ShieldCheck,
    subsections: [
      {
        title: 'Service Warranty',
        body: 'EZ Soft Tech is committed to delivering high-quality software solutions that meet the agreed project requirements. We provide a 90-day warranty from the date of project delivery to cover software defects or issues directly resulting from our development work. During this warranty period, eligible bugs and defects will be resolved at no additional cost. Any ongoing support, feature enhancements, maintenance, or updates beyond the warranty period can be provided through a separate support and maintenance agreement tailored to the client\'s requirements.',
      },
      {
        title: 'Limitations of Liability',
        body: "While we make every effort to deliver reliable and secure software solutions, EZ Soft Tech's liability is limited to the total value of the project or services provided. We are not responsible for indirect, incidental, consequential, or special damages, including loss of profits, business interruption, or data loss. Additionally, we cannot be held liable for issues arising from third-party services, APIs, software, hosting providers, cloud platforms, or other external dependencies beyond our control. The performance, availability, and scalability of the delivered solution may also vary depending on the client's hosting environment, infrastructure, network conditions, and third-party service providers.",
      },
    ],
  },
  {
    id: 'project-termination',
    title: 'Project Termination',
    icon: AlertTriangle,
    body: "Either the client or EZ Soft Tech may terminate a project by providing 30 days' written notice, provided the project is not subject to critical deadlines or other contractual obligations requiring continued engagement. Either party may also terminate the agreement immediately in the event of a material breach of contract, including but not limited to non-payment, failure to meet agreed obligations, or violation of the terms and conditions. In the event of termination, the client shall be responsible for payment of all work completed, approved milestones, and any expenses incurred up to the effective date of termination. Upon receipt of all outstanding payments, EZ Soft Tech will deliver the completed work, project assets, and relevant documentation produced up to the termination date, in accordance with the agreed project scope and contractual terms.",
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    icon: Scale,
    body: 'These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India. Any dispute, claim, or controversy arising out of or relating to these terms, the services provided by EZ Soft Tech, or any related agreement shall first be resolved through good-faith discussions and mutual negotiation between the parties. If a resolution cannot be reached amicably, the dispute shall be referred to arbitration in Bilaspur, Chhattisgarh, in accordance with the provisions of the Arbitration and Conciliation Act, 1996, as amended from time to time. The decision of the arbitrator shall be final and binding on both parties. Subject to the foregoing, the courts located in Bilaspur, Chhattisgarh, India, shall have exclusive jurisdiction over any matters arising under these terms where applicable.',
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

function TermsOfService() {
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
          <div className="flex items-center gap-3 text-blue-600">
            <Scale className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Terms
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Terms of <span className="text-blue-600">Service</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            These terms govern your engagement with EZ Soft Tech for software
            development and related technology services. Please read them
            carefully before work begins.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-medium">
              <AlertTriangle className="h-3.5 w-3.5" />
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
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
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
                            ? 'bg-blue-50 font-semibold text-blue-700'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        <Icon
                          className={`h-4 w-4 shrink-0 ${
                            isActive ? 'text-blue-600' : 'text-slate-400'
                          }`}
                        />
                        <span className="truncate">{s.title}</span>
                        <ChevronRight
                          className={`ml-auto h-3.5 w-3.5 shrink-0 transition-transform ${
                            isActive
                              ? 'translate-x-0 text-blue-600'
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
                  <section key={s.id} id={s.id} className="scroll-mt-8">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 ring-1 ring-blue-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                        {s.title}
                      </h2>
                    </div>
                    <div className="mt-4 pl-[3.25rem]">
                      {s.body && (
                        <p className="leading-relaxed text-slate-600">{s.body}</p>
                      )}
                      {s.bullets && (
                        <ul className="mt-4 space-y-2.5">
                          {s.bullets.map((b, i) => (
                            <li key={i} className="flex gap-3 text-slate-600">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                              <span className="leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {s.subsections && (
                        <div className="mt-6 space-y-6">
                          {s.subsections.map((sub, i) => (
                            <div
                              key={i}
                              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                            >
                              <h3 className="text-base font-semibold text-slate-900">
                                {sub.title}
                              </h3>
                              <p className="mt-2 leading-relaxed text-slate-600">
                                {sub.body}
                              </p>
                            </div>
                          ))}
                        </div>
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
                    Questions about these terms?
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    We're happy to clarify any part of these terms and how they
                    apply to your engagement with EZ Soft Tech.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  <Mail className="h-4 w-4" />
                  Contact us
                </Link>
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
              <Scale className="h-4 w-4 text-blue-600" />
              Clear terms, fair engagement.
            </p>
            <p>© {new Date().getFullYear()} EZ Soft Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TermsOfService;
