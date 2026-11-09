import React from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip
} from "recharts"

const data =[
  {name:"Matched",value:14,color:"#3478F6"},
   {name:"Missing",value:4,color:"#BBD2F5"},
]

const SkillMatch = () => {
  const total = data.reduce((sum,item)=> sum+item.value,0);
   return (
    <div className="min-w-0 rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition-colors dark:border-slate-700 dark:bg-[#0B192B] sm:p-5">
      <h2 className="text-lg font-bold text-blue-950 dark:text-white">
        Skills Match
      </h2>

      <div className="mt-3 grid grid-cols-1 items-center gap-3 sm:grid-cols-2">
        <div className="relative mx-auto h-[210px] w-full max-w-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="62%"
                outerRadius="88%"
                paddingAngle={1}
                stroke="none"
              >
                {data.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-blue-950 dark:text-white">
              14/18
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Matched
            </span>
          </div>
        </div>

        <div className="space-y-5">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-4 w-4 shrink-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium text-blue-950 dark:text-slate-200">
                  {item.name}
                </span>
              </div>

              <span className="text-sm font-semibold text-blue-950 dark:text-white">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="sr-only">
        {`${data[0].value} skills matched out of ${total} skills.`}
      </p>
    </div>
  )
}

export default SkillMatch
