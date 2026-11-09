
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", score: 56 },
  { month: "Feb", score: 62 },
  { month: "Mar", score: 68 },
  { month: "Apr", score: 74 },
  { month: "May", score: 78 },
  { month: "Jun", score: 82 },
];

const ResumeScoreChart = () => {
  return (
    <div className="min-w-0 rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-[#0B192B] sm:p-5">

      {/* Header */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-blue-950 dark:text-white">
          Resume Score Overview
        </h2>

        <select
          className="rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
          defaultValue="6"
          aria-label="Select chart period"
        >
          <option value="6">Last 6 Months</option>
          <option value="3">Last 3 Months</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-[230px] w-full sm:h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 25, right: 15, left: 10, bottom: 5 }}
          >
            <defs>
              <linearGradient id="scoreFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3478F6" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#3478F6" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#64748b"
              opacity={0.2}
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0B192B",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#fff",
              }}
              labelStyle={{ color: "#fff" }}
            />

            <Area
              type="monotone"
              dataKey="score"
              stroke="#3478F6"
              strokeWidth={2}
              fill="url(#scoreFill)"
              dot={{ r: 4, fill: "#3478F6" }}
              activeDot={{ r: 6 }}
              label={{
                position: "top",
                fill: "#3478F6",
                fontSize: 11,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResumeScoreChart;
