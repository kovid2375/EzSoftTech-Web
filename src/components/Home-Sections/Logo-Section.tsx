"use client"
import LogoLoop, { LogoItem } from '../../components/LogoLoop';
import { FaAws } from 'react-icons/fa6';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFirebase,
  SiTailwindcss
} from 'react-icons/si';

const techLogos: LogoItem[] = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-black" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiNestjs className="text-[#E0234E]" />, title: "NestJS", href: "https://nestjs.com" },
  { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <FaAws className="text-[#FF9900]" />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiDocker className="text-[#2496ED]" />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiFirebase className="text-[#FFCA28]" />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiReact className="text-[#61DAFB]" style={{ filter: "hue-rotate(25deg)" }} />, title: "React Native", href: "https://reactnative.dev" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export default function LogoSection() {
  return (
    <div  style={{ height: '110px', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={40}
        direction="left"
        logoHeight={32}
        gap={48}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technologies we use"
        renderItem={(item: LogoItem) => (
          <div className="flex items-center gap-4 select-none">
            <span className="text-3xl flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
              {'node' in item ? item.node : null}
            </span>
            <span className="font-semibold text-zinc-700 text-base tracking-wide font-sans">
              {item.title}
            </span>
            <span className="text-zinc-300 font-light text-base ml-2">
              →
            </span>
          </div>
        )}
      />
    </div>
  );
}