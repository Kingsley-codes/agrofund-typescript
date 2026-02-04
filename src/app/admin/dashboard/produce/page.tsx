// app/page.tsx
"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatsCards from "@/components/StatsCards";
import InvestmentTable from "@/components/InvestmentTable";
import NewOpportunityModal from "@/components/AddProduce";
import { IoIosAdd } from "react-icons/io";

export default function Producepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark relative">
        <Header />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
            {/* Page Header & Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                  Opportunities
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Manage active listings, track ROI, and create new investment
                  vehicles.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    filter_list
                  </span>
                  <span>Filter</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    download
                  </span>
                  <span>Export</span>
                </button>
              </div>
            </div>

            <StatsCards />

            {/* Full Width Active Listings Section */}
            <div className="w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Active Listings
                </h2>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <IoIosAdd className="text-white h-5 w-5 shrink-0" />

                  <span>New Project</span>
                </button>
              </div>
              <InvestmentTable />
            </div>
          </div>
        </div>

        {/* Modal for New Opportunity */}
        <NewOpportunityModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </main>
    </div>
  );
}
