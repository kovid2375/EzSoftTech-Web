"use client"

import LogoLoop, { LogoItem } from '../LogoLoop';
import { Smartphone, MonitorSmartphone, Building2, MonitorPlay, BotMessageSquare, ChartNoAxesCombined } from 'lucide-react';

const serviceItems: LogoItem[] = [
  { node: <MonitorSmartphone className="text-blue-500" />, title: "Website Development" },
  { node: <Smartphone className="text-indigo-500" />, title: "App Development" },
  { node: <Building2 className="text-emerald-500" />, title: "Billing Software" },
  { node: <MonitorPlay className="text-rose-500" />, title: "Desktop Applications" },
  { node: <BotMessageSquare className="text-purple-500" />, title: "API & Cloud DevOps" },
  { node: <ChartNoAxesCombined className="text-amber-500" />, title: "Digital Marketing" },
];

export function Section4() {
  return (
    <section className="py-6 bg-white border-y border-neutral-100 overflow-hidden mt-10">
      <div className="max-w-7xl mx-auto px-6 mb-2 text-center select-none">
        <h3 className="text-lg font-semibold tracking-[0.25em] text-black uppercase">
          Our Specializations
        </h3>
      </div>
      <div className='mt-10'>
        <div  style={{ height: '30px', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden'}}>
        <LogoLoop
          logos={serviceItems}
          speed={60}
          direction="left"
          logoHeight={32}
          gap={50}
          hoverSpeed={20}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Our Core Services"
          renderItem={(item: LogoItem) => (
            <div className="flex items-center gap-4 select-none">
              <span className="text-4xl flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
                {'node' in item ? item.node : null}
              </span>
              <span className="font-semibold text-neutral-700 text-xl tracking-wide font-sans whitespace-nowrap">
                {item.title}
              </span>
              <span className="text-neutral-300 font-light text-base ml-2">
                →
              </span>
            </div>
          )}
        />
      </div>
      </div>
    </section>
  );
}
