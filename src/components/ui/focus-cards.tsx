"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-4xl relative gap-4 bg-neutral-100 dark:bg-neutral-900 overflow-hidden h-72 md:h-[380px] w-full transition-all duration-300 ease-out cursor-pointer border border-neutral-200/50 shadow-sm",
        hovered !== null && hovered !== index && "blur-xs scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/60 flex flex-col justify-end p-6 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
          {card.title}
        </h3>
        {card.description && (
          <p className="text-xs md:text-sm text-white leading-relaxed font-normal">
            {card.description}
          </p>
        )}
      </div>
    </div>
  )
);

Card.displayName = "Card";

type CardData = {
  title: string;
  src: string;
  description?: string;
};

export function FocusCards({ cards }: { cards: CardData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto w-full mt-12 px-4 md:px-8">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
