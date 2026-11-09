
import React from 'react'

const ScoreCard = ({
  title,
  score,
  total,
  subtitle,
  icon,
  color = "blue",
}) => {

  const percentage =
    total > 0
      ? Math.max(0, Math.min(100, (score / total) * 100))
      : 0;

  // Different bright colors for each card
  const cardColors = {
    blue: "bg-blue-600 dark:bg-blue-700",
    violet: "bg-violet-600 dark:bg-violet-700",
    cyan: "bg-cyan-600 dark:bg-cyan-700",
    emerald: "bg-emerald-600 dark:bg-emerald-700",
  };

  return (
    <div className={`w-full min-w-0 rounded-2xl p-4 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 ${cardColors[color]}`}>

      {/* Heading and Icon */}
      <div className="flex items-start justify-between gap-3">

        {/* Text */}
        <div className="min-w-0">

          <p className="text-sm font-medium text-white/85">
            {title}
          </p>

          {/* Score */}
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-3xl font-bold sm:text-4xl">
              {score}
            </span>

            <span className="text-sm text-white/80">
              /{total}
            </span>
          </div>

          {/* Subtitle */}
          <p className="mt-2 text-xs text-white/80 sm:text-sm">
            {subtitle}
          </p>

        </div>

        {/* Icon */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl text-white sm:h-14 sm:w-14">
          {icon}
        </div>

      </div>

      {/* Progress Bar */}
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/20">
        <div
          className="h-full rounded-full bg-white transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

    </div>
  )
}

export default ScoreCard
