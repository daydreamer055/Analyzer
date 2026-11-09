import React from 'react'
import { FaFileAlt } from 'react-icons/fa'
const analysisData =[
    {
        id:1,
        name:"Software Engineer Resume.pdf",
        date:"Jun 10, 2026",
        score:92,
        status:"completed",
    },
    {
        id:2,
        name:"Frontend Resume.pdf",
        date:"Jun 8, 2026",
        score:78,
        status:"completed",
    },
    {
        id:3,
        name:"UI/UX Designer Resume.pdf",
        date:"Jun 5, 2026",
        score:66,
        status:"completed",
    },
]
const RecentAnalysis = () => {
   return (
    <div className="min-w-0 rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition-colors dark:border-slate-700 dark:bg-[#0B192B] sm:p-5">

      {/* Heading */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-lg font-bold text-blue-950 dark:text-white">
          Recent Analysis
        </h2>

        <button className="flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400">
          View All <span>→</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left text-sm">

          <thead>
            <tr className="bg-blue-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              <th className="rounded-l-lg px-3 py-3 font-semibold">
                Resume Name
              </th>
              <th className="px-3 py-3 font-semibold">
                Analyzed On
              </th>
              <th className="px-3 py-3 font-semibold">
                Score
              </th>
              <th className="px-3 py-3 font-semibold">
                Status
              </th>
              <th className="rounded-r-lg px-3 py-3 font-semibold">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {analysisData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-blue-50 last:border-0 dark:border-slate-700"
              >
                {/* Resume name */}
                <td className="px-3 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
                      <FaFileAlt />
                    </div>

                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      {item.name}
                    </span>
                  </div>
                </td>

                {/* Date */}
                <td className="whitespace-nowrap px-3 py-3 text-slate-500 dark:text-slate-400">
                  {item.date}
                </td>

                {/* Score */}
                <td className="px-3 py-3">
                  <span
                    className={`rounded-full px-3 py-1 font-bold ${
                      item.score >= 85
                        ? "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400"
                        : item.score >= 70
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400"
                    }`}
                  >
                    {item.score}
                  </span>
                </td>

                {/* Status */}
                <td className="px-3 py-3">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                    {item.status}
                  </span>
                </td>

                {/* Action */}
                <td className="px-3 py-3">
                  <button className="whitespace-nowrap rounded-lg border border-blue-200 px-4 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-50 dark:border-blue-500/40 dark:text-blue-400 dark:hover:bg-blue-500/10">
                    View Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default RecentAnalysis
