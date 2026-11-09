import React from 'react'
import ScoreCard from '../Components/ScoreCard'
import ResumeScoreChart from '../Components/ResumeScoreChart'
import SkillMatch from '../Components/SkillMatch'
import RecentAnalysis from '../Components/RecentAnalysis'
import Suggestions from '../Components/Suggestions'
import { FaFileAlt, FaCogs, FaShieldAlt, FaChartBar } from "react-icons/fa"
const Dashboard = () => {
  return (
    <div className=' min-h-screen bg-white p-4 transition-colors duration-300 dark:bg-mainBg sm:p-6 lg:p-8'>
      {/* upper div */}
      <div className='mb-6'>
        <h1 className=' text-2xl font-bold text-lightText dark:text-darkText sm:text-3xl '>Dashboard</h1>
        <p className=' mt-1 text-sm text-slate-500 dark:text-slate-400 sm:text-base'>Track your resume performance</p>

      </div>
       
       <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        <ScoreCard
         title="Resume Score"
          score={82}
          total={100}
          subtitle="Your overall resume score"
          icon={<FaFileAlt></FaFileAlt>}
          color="blue"
        >
         
        </ScoreCard>

        <ScoreCard
        title="Skills Matched"
          score={14}
          total={18}
          subtitle="Skills matching the job"
          icon={<FaCogs></FaCogs>}
          color="violet"
        >
          
        </ScoreCard>

        <ScoreCard
        title="ATS Readiness"
          score={87}
          total={100}
          subtitle="ATS optimization score"
          icon={<FaShieldAlt></FaShieldAlt>}
          color="cyan"
        >
          
        </ScoreCard>

        <ScoreCard
        title="Resume Analyzed"
          score={6}
          total={10}
          subtitle="Resumes analyzed this month"
          icon={<FaChartBar></FaChartBar>}
          color="emerald"
        >
          
        </ScoreCard>

       </div>

       {/* Middle section: charts */}
     <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="min-w-0 lg:col-span-2">
          <ResumeScoreChart />
       </div>

       <div className="min-w-0 lg:col-span-1">
         <SkillMatch />
       </div>
      </div>
      {/* Bottom Section: Recent Analysis and Suggestions */}
<div className='mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3'>

  {/* Recent Analysis - 2/3 width */}
  <div className='min-w-0 lg:col-span-2'>
    <RecentAnalysis />
  </div>

  {/* Suggestions - 1/3 width */}
  <div className='min-w-0 lg:col-span-1'>
    <Suggestions />
  </div>

</div>

    </div>
    
  )
}

export default Dashboard
