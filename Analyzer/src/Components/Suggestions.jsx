import React from 'react'
import {
  FaBullseye,
  FaCode,
  FaFileAlt,
  FaChevronRight,
} from "react-icons/fa";
 
const suggestionsData = [
  {
    id: 1,
    title: "Add relevant keywords",
    description: "Include industry-specific keywords in your resume.",
    progress: 70,
    icon: <FaBullseye />,
  },
  {
    id: 2,
    title: "Improve skill alignment",
    description: "Add missing skills related to your target job.",
    progress: 50,
    icon: <FaCode />,
  },
  {
    id: 3,
    title: "Enhance resume format",
    description: "Use a clean and ATS-friendly format for better results.",
    progress: 30,
    icon: <FaFileAlt />,
  },
]

const Suggestions = () => {
   return (
    <div className="min-w-0 rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition-colors dark:border-slate-700 dark:bg-[#0B192B] sm:p-5">

      <h2 className="mb-3 text-lg font-bold text-blue-950 dark:text-white">
        Suggestions
      </h2>

      <div className="divide-y divide-blue-100 dark:divide-slate-700">
        {suggestionsData.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
          >
            {/* Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
              {item.icon}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-bold text-blue-950 dark:text-white sm:text-sm">
                {item.title}
              </h3>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {item.description}
              </p>

              {/* Progress bar */}
              <div className="mt-2 flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-blue-100 dark:bg-slate-700">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>

                <span className="w-8 text-right text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {item.progress}%
                </span>
              </div>
            </div>

            {/* Arrow */}
            <button
              aria-label={`View suggestion: ${item.title}`}
              className="shrink-0 text-slate-400 transition hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Suggestions
