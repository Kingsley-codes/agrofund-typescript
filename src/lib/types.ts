export interface Opportunity {
  id: string;
  title: string;
  location: string;
  roi: number;
  duration: string;
  minInvestment: string;
  fundedPercentage: number;
  unitsLeft?: number;
  status: "selling_fast" | "new" | "healthy" | "sold_out" | "steady";
  category: "crops" | "livestock" | "greenhouse" | "piggery" | "ranch";
  icon: string;
  color: string;
  imageAlt: string;
}

export interface FilterState {
  minPrice: number;
  maxPrice: number;
  categories: string[];
  duration: string[];
  sortBy: "recommended" | "roi_high" | "duration_short";
}
