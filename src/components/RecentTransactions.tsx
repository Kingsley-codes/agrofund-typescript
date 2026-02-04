"use client";

import TransactionRow from "./TransactionRow";

export default function RecentTransactions() {
  const transactions = [
    {
      id: "#TRX-9821",
      investor: "John Doe",
      investorImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAYyOUg8r4onY2ycEIrgZsn9M5-IyTMdvLM_8Ixn6JXxuU-S2EUbEEnxL9Mpab0K7PjPl9z4aHIkhVYVwUXXQnlf3zaMq_7ZrtgE5B-U8Zp1IH33vgEmBOdC-bpFjesDvcmriGBdK8cAke6k0mPe8sHZWykAE0Q8s5LXaDH4CCR27n3TCb8ILRvRSZziL-r7S3l89nHrOaM5v8vHBVvO-TzUX0WRibM1-pbfeVVp0QA0rH4Hz8L8gYDNsYZy4cc_72ANcBRByMBHlE",
      type: "Corn (Crop)",
      amount: "$5,000",
      date: "Oct 24, 2023",
      status: "Completed" as const,
      statusColor: "green",
    },
    {
      id: "#TRX-9822",
      investor: "Sarah Smith",
      investorImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBlvpB22zCig5HFmXf2wFJ75Ok7NpwZbVTyuSKQOXOD0AVwGCCuXLtKZXS3kFEHqQ2G_f1P4r1mZox4lWv9aA8wsieum_O6Qt8zYYYJc-6YTNS5aqb_ntUeSi9x3lHyp5TwQ9A3b-yHtAq_gcVWvCY5NvbTi8sVio4La5yGe8z_yXxzFHVSKRn4Lvk7XL7QQfG6_5zN5ui0_-iK6rZL-GHbC6Mjb4BMoohvQwpPYu49sTMqolonxUZeskQjFBhh0Vi0XNca1-rpwts",
      type: "Cattle (Livestock)",
      amount: "$12,500",
      date: "Oct 23, 2023",
      status: "Pending" as const,
      statusColor: "yellow",
    },
    {
      id: "#TRX-9823",
      investor: "Michael Brown",
      investorImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDX3q1w2h1ChFWjKOpaXJEIAr5vp_oH3skTD_76b4kn9WuaVUd5ANQGd4BL9z6wm2-D_dbIT2as8NkpvXSjKfadOpXoOPAkv72FGg11A_AwQIbAO0YwL0wMC9vsyL5zhhFZwqHCLbGmYC83yZCS87xa7Hd0W5po__rufuJXzn6hxUdTmaS1VnHESWoFk0MDKSlnSPqPRw22jEAmZsIYGD7mDv0ZgXMmR81TfERJOEqESiecCJCoVsOsmd-QIYKVhnTtdTpf9E07RTc",
      type: "Soybeans (Crop)",
      amount: "$2,100",
      date: "Oct 22, 2023",
      status: "Completed" as const,
      statusColor: "green",
    },
    {
      id: "#TRX-9824",
      investor: "Emily White",
      investorImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBsxqHorJMraEpvneT4UNVf-uqxXp2YMKDCB2CQxUxWQgo-P5G9z3GFMc3rv_LRmZ6bdOLME9SDaG1pGp8ZGGF-29LpWDca1NjH5vbtigCTkSrLDVZ8ab7Pl343S_IwjQIgykQD6RfHcO9f_RVqSp5yChvSBkVLZHp9VpTfnYsm0FwcZM1tk_n06DFCHGDJ4m16VlCKn2LK_arqjfERxos2Xma-rj2IUsDGbBCcBOFvjMgS07D1G2asuz7Vk3byg2pTcUNbbzHcfWY",
      type: "Poultry (Livestock)",
      amount: "$8,500",
      date: "Oct 20, 2023",
      status: "Failed" as const,
      statusColor: "red",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm overflow-hidden">
      <div className="p-6 lg:px-8 border-b border-slate-100 dark:border-slate-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Recent Transactions
        </h3>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
            Filter
          </button>
          <button className="px-4 py-2 rounded-xl text-xs font-bold bg-primary/20 text-green-800 dark:text-green-300 hover:bg-primary/30 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold">
              <th className="px-6 lg:px-8 py-4">Transaction ID</th>
              <th className="px-6 lg:px-8 py-4">Investor</th>
              <th className="px-6 lg:px-8 py-4">Type</th>
              <th className="px-6 lg:px-8 py-4">Amount</th>
              <th className="px-6 lg:px-8 py-4">Date</th>
              <th className="px-6 lg:px-8 py-4">Status</th>
              <th className="px-6 lg:px-8 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50 text-sm font-medium">
            {transactions.map((transaction) => (
              <TransactionRow key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-slate-100 dark:border-slate-700/50 flex justify-center">
        <button className="text-sm font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-1">
          View All Transactions
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "18px" }}
          >
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
