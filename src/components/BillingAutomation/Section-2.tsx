"use client"

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { 
  Receipt, 
  Package, 
  Workflow, 
  BarChart3, 
  Users, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

export default function Section2() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  }

  const techBadges = [
    { name: 'POS Print (Thermal)', color: 'bg-emerald-50 text-emerald-600 border-emerald-200/60' },
    { name: 'E-Invoicing API', color: 'bg-neutral-100 text-neutral-700 border-neutral-300/60' },
    { name: 'GST Calculation', color: 'bg-blue-50 text-blue-600 border-blue-200/60' },
    { name: 'Multi-Currency', color: 'bg-purple-50 text-purple-600 border-purple-200/60' },
    { name: 'Offline Billing Sync', color: 'bg-cyan-50 text-cyan-600 border-cyan-200/60' },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Background Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 mb-4 text-xs md:text-sm font-semibold tracking-[0.2em] text-[#059669] uppercase">
          <span className="w-1.5 h-1.5 bg-[#059669] rounded-full animate-ping" />
          Automation Capabilities
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] max-w-4xl mx-auto mb-4 sm:mb-6">
          Streamlining Business Operations with Modern Systems
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          We combine fast, reliable databases, offline synchronization, and automated logic flows to keep your operations running smoothly, 24/7.
        </p>
      </div>

      {/* Bento Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative z-10"
      >
        {/* Card 1: GST-Compliant Invoicing & Billing (Col Span 2, Row Span 2 on lg) */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[440px] sm:min-h-[480px] lg:min-h-[580px]"
        >
          {/* Subtle top light reflection */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
          
          <div className="flex flex-col gap-4 relative z-10 max-w-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
              <Receipt size={24} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors duration-300 mb-2">
                GST-Compliant Invoicing & Billing
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Swift and responsive billing systems built for retail POS, wholesale distribution, and online transactions. Featuring instant tax calculations (CGST/SGST/IGST), automated credit/debit notes, multi-currency processing, and customizable A4/thermal printing.
              </p>
            </div>
            
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
              {techBadges.map((badge, idx) => (
                <span key={idx} className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold border ${badge.color}`}>
                  {badge.name}
                </span>
              ))}
            </div>
          </div>

          {/* Graphical Representation: Premium Invoice Mockup */}
          <div className="relative mt-6 sm:mt-8 w-full flex justify-center transition-transform duration-500 group-hover:scale-[1.01] z-10">
            <div className="relative w-full max-w-[420px] min-h-[220px] sm:h-[250px] border border-neutral-200/80 bg-neutral-50 rounded-2xl shadow-lg overflow-hidden flex flex-col p-3 sm:p-4">
              <div className="flex justify-between items-start border-b border-neutral-200/80 pb-2 sm:pb-3">
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-neutral-900">EZ SOFT TECH PVT. LTD.</h4>
                  <p className="text-[9px] sm:text-[10px] text-neutral-400">GSTIN: 22AAAAA0000A1Z5</p>
                </div>
                <div className="text-right">
                  <span className="text-[9px] sm:text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 sm:px-2.5 py-0.5 rounded-full inline-block">PAID</span>
                  <p className="text-[9px] sm:text-[10px] text-neutral-500 mt-0.5 sm:mt-1 font-mono">INV-2026-0839</p>
                </div>
              </div>
              <div className="flex-1 py-2 sm:py-3 flex flex-col justify-between overflow-x-auto">
                <table className="w-full text-left text-[10px] sm:text-[11px] font-medium text-neutral-600">
                  <thead>
                    <tr className="border-b border-neutral-100 text-[9px] sm:text-[10px] text-neutral-400 font-mono">
                      <th className="pb-1">Item</th>
                      <th className="pb-1 text-center">Qty</th>
                      <th className="pb-1 text-right">Price</th>
                      <th className="pb-1 text-right">GST</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-100/50">
                      <td className="py-1 sm:py-1.5 font-semibold text-neutral-800">Business Automation Engine</td>
                      <td className="py-1 sm:py-1.5 text-center">1</td>
                      <td className="py-1 sm:py-1.5 text-right">$1,299.00</td>
                      <td className="py-1 sm:py-1.5 text-right">18%</td>
                    </tr>
                    <tr>
                      <td className="py-1 sm:py-1.5 font-semibold text-neutral-800">Local POS Client License</td>
                      <td className="py-1 sm:py-1.5 text-center">2</td>
                      <td className="py-1 sm:py-1.5 text-right">$399.00</td>
                      <td className="py-1 sm:py-1.5 text-right">18%</td>
                    </tr>
                  </tbody>
                </table>
                <div className="border-t border-neutral-200/80 pt-2 sm:pt-3 flex justify-between items-center text-xs font-bold text-neutral-900">
                  <span>Grand Total</span>
                  <span className="font-mono text-emerald-600">$2,475.64</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Intelligent Inventory & Warehouse (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[240px] sm:min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <Package size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                Intelligent Inventory
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Real-time stock level synchronization, low-stock predictive threshold alerts, barcode scanner APIs, batch tracking, and automated procurement requests.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            Track Stock Real-time <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Card 3: Workflow Pipelines (Row Span 2 on lg) */}
        <motion.div 
          variants={itemVariants}
          className="lg:row-span-2 rounded-3xl bg-neutral-900 text-white border border-neutral-800 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[400px] sm:min-h-[420px] lg:min-h-[580px]"
        >
          {/* Subtle inner dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/10 via-transparent to-black pointer-events-none" />
          
          <div className="flex flex-col gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <Workflow size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Automated Workflow Pipelines
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Replace manual data entry with automated event-driven triggers. Connect your POS, warehouse database, communication nodes, and accounting ledger into a self-driving operation.
              </p>
            </div>
          </div>

          {/* Workflow Graph Visual Widget */}
          <div className="relative my-6 sm:my-8 flex flex-col items-center justify-center z-10 py-2 sm:py-4">
            <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-[240px] text-xs font-mono">
              <div className="bg-neutral-800 border border-neutral-700/60 rounded-xl p-2.5 sm:p-3 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[9px] sm:text-[10px] text-neutral-400 uppercase font-semibold">Step 1: Event Trigger</p>
                  <p className="text-white text-xs font-medium">New Order Placed</p>
                </div>
              </div>
              
              <div className="h-3 sm:h-4 flex justify-center items-center">
                <div className="w-0.5 h-full bg-gradient-to-b from-emerald-400 to-blue-400" />
              </div>

              <div className="bg-neutral-800 border border-neutral-700/60 rounded-xl p-2.5 sm:p-3 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[9px] sm:text-[10px] text-neutral-400 uppercase font-semibold">Step 2: Generation</p>
                  <p className="text-white text-xs font-medium">Render PDF Invoice</p>
                </div>
              </div>

              <div className="h-3 sm:h-4 flex justify-center items-center">
                <div className="w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400" />
              </div>

              <div className="bg-neutral-800 border border-neutral-700/60 rounded-xl p-2.5 sm:p-3 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[9px] sm:text-[10px] text-neutral-400 uppercase font-semibold">Step 3: Alert & Sync</p>
                  <p className="text-white text-xs font-medium">WhatsApp Notification</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 relative z-10 group-hover:translate-x-1 transition-transform duration-300">
            Explore Integrations <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Card 4: Financial Analytics (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[240px] sm:min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100">
              <BarChart3 size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-cyan-600 transition-colors duration-300 mb-2">
                Unified Ledger Analytics
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Comprehensive accounting reporting dashboards. Instantly generate GST returns (GSTR-1, GSTR-3B), profit-loss statements, tax ledgers, and cash flow forecasts.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-600 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            Open Analytics Suite <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Card 5: CRM & Vendor Management (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[240px] sm:min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
              <Users size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-purple-600 transition-colors duration-300 mb-2">
                CRM & Vendor Portals
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Track client ledger credits, loyalty points, outstanding dues, and payment aging history. Automate credit limit enforcement and payment reminders.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            Customer Credit Engine <ArrowRight size={14} />
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}
