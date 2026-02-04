export default function StatsCards() {
  const stats = [
    {
      title: "Total Investments",
      value: "$4,250,000",
      change: "+12%",
      icon: "monetization_on",
      iconBg: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-primary",
      changeBg: "bg-green-100 dark:bg-green-900/30",
      changeColor: "text-green-700 dark:text-green-400",
      trendIcon: "trending_up",
    },
    {
      title: "Total Users",
      value: "12,450",
      change: "+5%",
      icon: "group",
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      changeBg: "bg-green-100 dark:bg-green-900/30",
      changeColor: "text-green-700 dark:text-green-400",
      trendIcon: "trending_up",
    },
    {
      title: "Active Opportunities",
      value: "85",
      change: "0%",
      icon: "potted_plant",
      iconBg: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      changeBg: "bg-slate-100 dark:bg-slate-700",
      changeColor: "text-slate-600 dark:text-slate-300",
      trendIcon: "remove",
    },
    {
      title: "Pending Withdrawals",
      value: "$125,000",
      change: "Action",
      icon: "payments",
      iconBg: "bg-red-50 dark:bg-red-900/20",
      iconColor: "text-red-600 dark:text-red-400",
      changeBg: "bg-red-100 dark:bg-red-900/30",
      changeColor: "text-red-700 dark:text-red-400",
      trendIcon: "warning",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm flex flex-col gap-4 group hover:border-primary/30 transition-colors"
        >
          <div className="flex justify-between items-start">
            <div className={`p-3 rounded-xl ${stat.iconBg} ${stat.iconColor}`}>
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
            <span
              className={`px-2 py-1 rounded-lg ${stat.changeBg} ${stat.changeColor} text-xs font-bold flex items-center gap-1`}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "14px" }}
              >
                {stat.trendIcon}
              </span>
              {stat.change}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {stat.title}
            </p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {stat.value}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
