"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Briefcase, CheckCircle2, Clock, MapPin, Send, Sparkles, Users, Award, Code, Layout, Rocket, Megaphone, Shapes ,Cloud } from "lucide-react";

const ROLES = [
  "Backend Developer",
  "Frontend developer",
  "Full Stack Developer",
  "Devops Engineer",
  "Digital Marketing",
  "UI /UX developer",
];

const JOB_OPENINGS = [
  {
    title: "Full Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Raipur / Remote",
    icon: Code,
    description: "Build high-performance web applications with React, Next.js, and Node.js.",
    requirements: ["experience in React/Next.js", "Node.js & PostgreSQL/MongoDB", "REST APIs & GraphQL"],
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Raipur / Remote",
    icon: Layout,
    description: "Craft responsive, state-of-the-art user interfaces with modern CSS and Tailwind.",
    requirements: ["Proficient in TypeScript & React", "TailwindCSS & animation libraries", "Responsive web design"],
  },
  {
    title: "Backend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Bilaspur / Remote",
    icon: Rocket,
    description: "Design and scale robust microservices, database architectures, and API endpoints.",
    requirements: ["Strong Node.js/Python/Go experience", "Database design & optimization", "Cloud & Docker basics"],
  },
  {
    title: "UI /UX Developer",
    department: "Design",
    type: "Full-time",
    location: "Bilaspur / Remote",
    icon: Layout,
    description: "Design pixel-perfect interfaces, user flows, wireframes, and design systems.",
    requirements: ["Figma & Adobe Creative Suite", "Design system architecture", "User research & prototyping"],
  },
  {
    title: "Devops Engineer",
    department: "Infrastructure",
    type: "Full-time",
    location: "Raipur / Remote",
    icon: Cloud,
    description: "Automate CI/CD pipelines, manage AWS/GCP infrastructure, and optimize security.",
    requirements: ["Docker, Kubernetes & Terraform", "CI/CD (GitHub Actions / GitLab)", "Cloud infrastructure (AWS/GCP)"],
  },
  {
    title: "Digital Marketing",
    department: "Growth",
    type: "Full-time",
    location: "Raipur / Remote",
    icon: Megaphone,
    description: "Drive SEO strategies, PPC campaigns, social media growth, and content marketing.",
    requirements: ["SEO/SEM & Google Analytics", "Social media strategy", "Content creation & ad campaigns"],
  },
];

const PERKS = [
  { icon: Shapes, title: "Modern Tech Stack", desc: "Work with cutting-edge tools and modern frameworks." },
  { icon: Users, title: "Collaborative Team", desc: "Thrive in an encouraging, innovative tech community." },
  { icon: Clock, title: "Flexible Work", desc: "Enjoy hybrid/remote options with work-life balance." },
  { icon: Award, title: "Career Growth", desc: "Continuous learning, certifications, and leadership paths." },
];

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Full Stack Developer",
    message: "",
    resume:null as File|null,
  });

  const [resumeName, setResumeName] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {
    const data = new FormData();

    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("role", formData.role);
    data.append("message", formData.message);

    if (formData.resume) {
      data.append("resume", formData.resume);
    }

    const response = await fetch("/api/career", {
      method: "POST",
      body: data,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    toast.success("Application submitted successfully!");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      role: "Full Stack Developer",
      message: "",
      resume: null,
    });

    // File input reset
    (
      document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement
    ).value = "";
  } catch (err: any) {
    toast.error(err.message || "Submission Failed");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-96 right-10 w-[400px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Header Section */}
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            We Are Hiring
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Build the <span className="text-blue-600">Future</span> With Us
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Join EZGLOBAL and work on transformative digital products. We're looking for passionate minds to shape next-generation software solutions.
          </p>
        </div>

        {/* Perks & Culture Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERKS.map((perk, idx) => {
            const IconComponent = perk.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-600 border border-blue-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{perk.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{perk.desc}</p>
              </div>
            );
          })}
        </div>
        

        {/* Open Positions Grid */}
        <div className="space-y-8">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Roles</h2>
            <p className="text-slate-600 text-sm mt-1">Explore available opportunities and find your next role.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {JOB_OPENINGS.map((job, idx) => {
              const IconComp = job.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:border-blue-500/60 hover:border-2 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {job.type}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mt-1 font-medium">
                        <span>{job.department}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-blue-600" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">{job.description}</p>

                    <div className="space-y-1.5 pt-2">
                      {job.requirements.map((req, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <a
                      href="#apply-form"
                      onClick={() => setFormData((prev) => ({ ...prev, role: job.title }))}
                      className="block text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-600 text-white hover:text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      Apply For This Role
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Application Form Section */}
        <div id="apply-form" className="max-w-3xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-2xl relative">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Submit Your Application</h2>
            <p className="text-slate-600 text-sm">Fill in your details and select the position you wish to apply for.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Full Name <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-sm font-medium"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Email Address <span className="text-blue-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-sm font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Phone Number <span className="text-blue-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-sm font-medium"
                />
              </div>

              {/* Role Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Role <span className="text-blue-600">*</span>
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-sm font-medium"
                >
                  {ROLES.map((role) => (
                    <option key={role} value={role} className="bg-white text-slate-900">
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Optional Cover Note / Message */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Message / Portfolio Link
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about yourself or share links to your portfolio/GitHub..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-sm font-medium resize-none"
              />
            </div>
            {/* Resume upload */}
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Resume <span className="text-blue-600">*</span>
                </label>

                <label
                  htmlFor="resume"
                  className="flex items-center justify-between w-full px-5 py-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-blue-600 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M12 11v8m0-8l-3 3m3-3l3 3"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {resumeName || "Upload your Resume"}
                      </p>

                      <p className="text-xs text-slate-500 mt-1">
                        PDF, DOC or DOCX • Max 5 MB
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-600 text-white">
                    Browse
                  </span>
                </label>

                <input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    setResumeName(file?.name || "");

                    setFormData((prev) => ({
                      ...prev,
                      resume: file || null,
                    }));
                  }}
                />
              </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm tracking-wide uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/25 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <span>Submit Application</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
