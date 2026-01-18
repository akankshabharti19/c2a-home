"use client";

import { useState } from "react";
import LegalTabs from "./LegalTabs";
import LegalCard from "../ui/LegalCard";
import { legalSolutions } from "@/constants/legalSolutions";

export default function LegalSolutions() {
  const [activeTab, setActiveTab] = useState("toxic");

  const cards = legalSolutions[activeTab] || [];

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6">
        <div className="relative">

          {/* OFFSET BLUE BACKGROUND — DESKTOP ONLY */}
          <div className="absolute inset-0 hidden lg:block translate-x-6 translate-y-6 rounded-[48px] bg-[#0b4da2]" />

          {/* MAIN PANEL */}
          <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#1f3b8b] px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-12">

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl font-serif text-yellow-400 text-center lg:text-left">
              Legal Solutions
            </h2>

            {/* TABS */}
            <div className="mt-6">
              <LegalTabs active={activeTab} setActive={setActiveTab} />
            </div>

            {/* CARDS */}
            {cards.length > 0 ? (
              <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {cards.map((item) => (
                  <LegalCard
                    key={item.id}
                    title={item.title}
                    image={item.image}
                  />
                ))}
              </div>
            ) : (
              <p className="mt-8 text-center text-white/70">
                No cases available in this category yet.
              </p>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
