"use client";

import { useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { GiGoat, GiDoubleFish, GiGrass } from "react-icons/gi";

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [categories, setCategories] = useState(["all"]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleReset = () => {
    setMinPrice("");
    setMaxPrice("");
    setCategories(["all"]);
    setSelectedTypes([]);
    onFilterChange({});
  };

  const farmTypes = [
    { name: "Cassava", count: 12 },
    { name: "Maize", count: 8 },
    { name: "Poultry", count: 5 },
    { name: "Cattle", count: 3 },
  ];

  return (
    <aside className="flex w-full flex-col gap-6 lg:w-72 lg:shrink-0">
      <div className="sticky top-24 flex flex-col gap-6 rounded-2xl border border-gray-200 bg-surface-light p-5 shadow-sm dark:bg-surface-dark dark:border-green-900">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-700 dark:text-white">
            Filters
          </h3>
          <button
            onClick={handleReset}
            className="text-sm font-medium text-primary hover:text-green-600"
          >
            Reset
          </button>
        </div>

        {/* Price Range */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-200">
            Investment Range
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <span className="absolute left-2.5 top-2.5 text-gray-700">
                <TbCurrencyNaira />
              </span>{" "}
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full rounded-lg border-border-color bg-background-light py-2 pl-7 pr-2 text-sm focus:border-primary focus:ring-primary dark:bg-background-dark dark:border-green-800"
              />
            </div>
            <div className="relative">
              <span className="absolute left-2.5 top-2.5 text-gray-700">
                <TbCurrencyNaira />
              </span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full rounded-lg border-border-color bg-background-light py-2 pl-7 pr-2 text-sm focus:border-primary focus:ring-primary dark:bg-background-dark dark:border-green-800"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-green-900" />

        {/* Categories */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-200">
            Category
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={categories.includes("all")}
              onChange={() => toggleCategory("all")}
              className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="flex items-center gap-2 text-sm font-medium text-text-main dark:text-gray-300 group-hover:text-primary">
              All
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={categories.includes("all")}
              onChange={() => toggleCategory("all")}
              className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="flex items-center gap-2 text-sm font-medium text-text-main dark:text-gray-300 group-hover:text-primary">
              <GiGrass />
              Crops
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={categories.includes("livestock")}
              onChange={() => toggleCategory("livestock")}
              className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="flex items-center gap-2 text-sm font-medium text-text-main dark:text-gray-300 group-hover:text-primary">
              <GiGoat />
              Livestock
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={categories.includes("livestock")}
              onChange={() => toggleCategory("livestock")}
              className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="flex items-center gap-2 text-sm font-medium text-text-main dark:text-gray-300 group-hover:text-primary">
              <GiDoubleFish />
              Aquaculture
            </span>
          </label>
        </div>

        {/* Specific Types */}
        <div className="ml-8 flex flex-col gap-2 border-l border-border-color pl-4 dark:border-green-900">
          {farmTypes.map((type) => (
            <div
              key={type.name}
              className="flex items-center justify-between text-sm text-text-muted hover:text-primary cursor-pointer"
              onClick={() =>
                setSelectedTypes((prev) =>
                  prev.includes(type.name)
                    ? prev.filter((t) => t !== type.name)
                    : [...prev, type.name]
                )
              }
            >
              {type.name}
              <span className="text-xs bg-green-100 text-green-800 px-1.5 rounded dark:bg-green-900 dark:text-green-200">
                {type.count}
              </span>
            </div>
          ))}
        </div>

        <hr className="border-gray-200 dark:border-green-900" />

        {/* Duration */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-bold text-text-main dark:text-gray-200">
            Duration
          </label>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-lg border border-border-color bg-background-light px-3 py-1.5 text-xs font-medium hover:border-primary hover:text-primary dark:bg-background-dark dark:border-green-800">
              Short Term
            </button>
            <button className="rounded-lg border border-border-color bg-background-light px-3 py-1.5 text-xs font-medium hover:border-primary hover:text-primary dark:bg-background-dark dark:border-green-800">
              Long Term
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
