import LegalTabs from "./LegalTabs";
import LegalCard from "../ui/LegalCard";
import { legalSolutions } from "@/constants/legalSolutions";

export default function LegalSolutions() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-[1300px] px-6">

        <div className="relative">
          {/* Offset background */}
          <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[48px] bg-[#0b4da2]" />

          {/* Main panel */}
          <div className="relative rounded-[40px] bg-[#1f3b8b] px-12 py-12">

            <h2 className="text-4xl font-serif text-yellow-400">
              Legal Solutions
            </h2>

            <div className="mt-6">
              <LegalTabs />
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {legalSolutions.map((item) => (
                <LegalCard key={item.id} title={item.title} />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
