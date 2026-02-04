// app/page.tsx
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatsCards from "@/components/StatsCards";
import InvestmentChart from "@/components/InvestmentChart";
import PortfolioMix from "@/components/PortfolioMix";
import RecentTransactions from "@/components/RecentTransactions";

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark">
      <Sidebar />

      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8">
          <StatsCards />
          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <InvestmentChart />
            <PortfolioMix />
          </div>
          <RecentTransactions />
          <div className="pb-10"></div> {/* Bottom spacer */}
        </div>
      </main>
    </div>
  );
}
