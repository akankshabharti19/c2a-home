import { legalSolutions } from "@/constants/legalSolutions";
import LegalCard from "@/components/ui/LegalCard";
import LegalTabs from "./LegalTabs";

export default function LegalSolutions() {
  return (
    <section className="bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-white text-3xl font-bold mb-6">
          Legal Solutions
        </h2>

        <LegalTabs />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {legalSolutions.map((item, index) => (
            <LegalCard
              key={index}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


