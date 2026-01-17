"use client";

import { useState } from "react";

const TABS = ["Toxic Exposure", "Group Litigation", "Wound"];

export default function LegalTabs() {
  const [activeTab, setActiveTab] = useState("Toxic Exposure");

  return (
    <div className="flex flex-wrap gap-4">
      {TABS.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200
              ${
                isActive
                  ? "bg-yellow-400 text-[#1f3b8b]"
                  : "border border-blue-300 text-white hover:bg-blue-800"
              }
            `}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
