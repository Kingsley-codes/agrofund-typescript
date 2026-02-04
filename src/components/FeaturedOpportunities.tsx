import OpportunityCard from "./OpportunityCard";
import { Opportunity } from "@/lib";

const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "Maize Farm Expansion Phase 2",
    produceName: "Maize",
    category: "Crop Farm",
    duration: "6 Months",
    roi: 25,
    unitPrice: 50,
    fundedPercentage: 65,
    unitsLeft: 235,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy9qcGzbMnPiP30Oboa9fCRLWPI0zjN1YxRz9dNm73E9rbocg-ka0x0KtfDXkd03oSpWRPF97wUdz-szXYwIZbGSRg1KEmT7R7zUTMxlrDsktY-IdJlzlZU5ld0hfyd9ztjEAwYNNNyvFolUzyWxzp5soRvaXpJACb2-Kb4zT9MeBBORkJD3IkaFmfzI-8w_LzOnKjMz9XvKJchgrYApZDlx66FAPJ4hU6P1fhXpmQbI1g4jw5rs5xt4cJH8lXjKHNf15GQOmIIu0",
    minInvestment: 50,
    imageAlt: "Golden maize field ready for harvest",
  },
  {
    id: "2",
    title: "Commercial Poultry Setup",
    produceName: "Chickens",
    category: "Livestock",
    duration: "9 Months",
    roi: 32,
    unitPrice: 85,
    minInvestment: 50,
    fundedPercentage: 88,
    unitsLeft: 54,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuYCa1DfrrA5C2IviYHYNtDlqUJLzN8XTZ3f1qxCLstZqafiJMwo1QixQw8CxAunDsEQ3WS8YuTEGbfh0hOKUC0uqjnIjKHbNby89IOfH53sRKhO0EbnMQTO5RgDNk9yMwT7dUQbwmhVaZfJMqpBF3M_9M4lvXDrfv8KAQNAqRcvSrPFMj7cmx30HQBRAWg52cQwb5q5rXtGJGV40u3R9M1L6bECmHNeVbLPcfytxCf_ulacSoC2pNGSqFk5b1n2rJXnjJXq4SZBg",
    imageAlt: "Healthy poultry chickens feeding",
  },
  {
    id: "3",
    title: "Cashew Plantation Investment",
    produceName: "Cashew Nuts",
    category: "Crop Farm",
    duration: "12 Months",
    roi: 28,
    unitPrice: 75,
    minInvestment: 50,
    fundedPercentage: 42,
    unitsLeft: 189,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmlarKqaDRbDGb_vGQueF1fr6vVMMJWqm85XQPySGs-MdHd-pLWmcnFT7uBwyFA-_rL3moaB_DG1XVpmuoypBy-1aYQKRGge_kKG2E2LHKSlM-xMVgMDS8XoUhp5APUXF4VpImECSu8zptZ6FG0W3_GnMgXtLiTFhJduakaD3UBegz4pQxrxrANol7iyTQSxeQAr1iwde61Eh4Td8RUnrTXj65qI_ZIefSF6fzKnErb6EsdFuYRJNw7rcoz8hyLy5tqtxrOzHNTUA",
    imageAlt: "Cashew nuts growing on tree",
  },
];

export default function FeaturedOpportunities() {
  return (
    <section className="bg-[#f0fdf4] dark:bg-[#0f1a0c] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-text-main dark:text-white md:text-3xl tracking-tight">
            Featured Opportunities
          </h2>
          <a
            className="hidden sm:flex items-center gap-1 text-sm font-bold text-primary hover:text-green-600 transition-colors"
            href="#"
          >
            View All Projects{" "}
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </a>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div> */}

        <div className="mt-8 sm:hidden text-center">
          <a
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-green-600 transition-colors"
            href="#"
          >
            View All Projects{" "}
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
