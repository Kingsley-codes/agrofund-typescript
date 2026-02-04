import { ApiProduce } from "@/lib";
import { GiGoat, GiDoubleFish, GiGrass } from "react-icons/gi";
import { TbCurrencyNaira } from "react-icons/tb";

interface OpportunityCardProps {
  opportunity: ApiProduce;
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  // Log the category to see what the component is receiving
  console.log("Category:", opportunity.category);

  const getTypeColor = (category: string) => {
    const cat = category.trim().toLowerCase();

    switch (cat) {
      case "crops":
        return {
          bg: "bg-green-100 dark:bg-green-900/30",
          text: "text-green-600 dark:text-green-400",
        };
      case "livestock":
        return {
          bg: "bg-orange-100 dark:bg-orange-900/30",
          text: "text-red-700 dark:text-orange-400",
        };
      case "aquaculture":
        return {
          bg: "bg-blue-100 dark:bg-blue-900/30",
          text: "text-blue-700 dark:text-blue-400",
        };
      default:
        return {
          bg: "bg-yellow-100 dark:bg-yellow-900/30",
          text: "text-yellow-700 dark:text-yellow-400",
        };
    }
  };

  const getCategoryIcon = (category: string) => {
    const cat = category.trim().toLowerCase();

    switch (cat) {
      case "crops":
        return <GiGrass className="w-4 h-4" />;
      case "livestock":
        return <GiGoat className="w-4 h-4" />;
      case "aquaculture":
        return <GiDoubleFish className="w-4 h-4" />;
      default:
        return "category";
    }
  };

  const fundedPercentage = 100 - opportunity.remainingPercentage;

  const colors = getTypeColor(opportunity.category);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-xl transition-shadow border border-black/5 dark:border-white/5">
      <div className="relative h-48 w-full bg-gray-200">
        <div className="absolute top-3 left-3 z-10 rounded-md bg-white/80 px-2 py-1 text-xs font-bold text-primary backdrop-blur-sm">
          {opportunity.produceName}
        </div>
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
          style={{ backgroundImage: `url("${opportunity.image1.url}")` }}
          aria-label={opportunity.image1Alt}
        ></div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between mb-2">
          <span
            className={`rounded-full ${colors.bg} px-2.5 py-0.5 text-xs font-bold ${colors.text} flex items-center justify-center`}
          >
            {getCategoryIcon(opportunity.category)}
          </span>
          <span className="text-xs font-medium text-gray-600">
            {opportunity.duration} months
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-700 dark:text-white">
          {opportunity.title}
        </h3>
        <p className="mb-3 text-sm  text-gray-500 dark:text-white">
          {opportunity.produceName}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4 py-3 border-y border-dashed border-gray-200 dark:border-white/10">
          <div>
            <p className="text-xs text-text-muted">ROI</p>
            <p className="text-lg font-bold text-primary">{opportunity.ROI}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-text-muted">Unit Price</p>
            <p className="text-lg font-bold text-gray-700 flex items-center justify-end dark:text-white">
              <span className="text-gray-700 w-4 h-4">
                <TbCurrencyNaira />
              </span>
              {opportunity.price}
            </p>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <div className="flex justify-between text-xs font-medium text-text-muted">
            <span>{fundedPercentage}% Funded</span>
            <span>{opportunity.remainingUnit} Units Left</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: `${fundedPercentage}%` }}
            ></div>
          </div>
          <button className="mt-3 w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-[#111b0d] hover:bg-[#3cd610] transition-colors">
            Invest Now
          </button>
        </div>
      </div>
    </div>
  );
}
