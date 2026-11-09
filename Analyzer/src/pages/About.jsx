
import React from 'react'
import {
  FaFileAlt,
  FaShieldAlt,
  FaBullseye,
  FaLightbulb,
  FaUpload,
  FaClipboardList,
  FaSearch,
  FaChartLine,
  FaReact,
  FaCode,
  FaLaptopCode,
  FaChartBar
} from 'react-icons/fa'

const About = () => {

  const features = [
    {
      icon: <FaFileAlt />,
      title: 'Resume Analysis',
      description: 'Analyze your resume and understand its strengths and weaknesses.',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400'
    },
    {
      icon: <FaShieldAlt />,
      title: 'ATS Compatibility',
      description: 'Check how well your resume is optimized for Applicant Tracking Systems.',
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400'
    },
    {
      icon: <FaBullseye />,
      title: 'Skill Matching',
      description: 'Compare your skills with the requirements of your target job.',
      color: 'bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400'
    },
    {
      icon: <FaLightbulb />,
      title: 'Smart Suggestions',
      description: 'Get useful recommendations to improve your resume.',
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400'
    }
  ]

  const steps = [
    {
      icon: <FaUpload />,
      title: 'Upload Resume',
      description: 'Upload your resume in PDF or DOCX format.'
    },
    {
      icon: <FaClipboardList />,
      title: 'Add Job Description',
      description: 'Enter the job description you want to apply for.'
    },
    {
      icon: <FaSearch />,
      title: 'Analyze Resume',
      description: 'Evaluate your resume against the job requirements.'
    },
    {
      icon: <FaChartLine />,
      title: 'View Results',
      description: 'Get scores, matched skills, and improvement suggestions.'
    }
  ]

  const technologies = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaCode />, name: 'JavaScript' },
    { icon: <FaLaptopCode />, name: 'Tailwind CSS' },
    { icon: <FaChartBar />, name: 'Recharts' }
  ]

  return (
    <div className="min-h-screen bg-white p-4 transition-colors duration-300 dark:bg-mainBg sm:p-6 lg:p-8">

      {/* Header */}
      <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white shadow-lg sm:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
          About Our Project
        </p>

        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          About Resume Analyzer
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
          Make every application count. Analyze your resume,
          discover skill gaps, improve ATS compatibility, and
          take the next step towards your dream career.
        </p>
      </section>

      {/* Introduction */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-lightText dark:text-darkText">
          What is Resume Analyzer?
        </h2>

        <p className="mt-3 max-w-4xl leading-7 text-slate-600 dark:text-slate-400">
          Resume Analyzer is a smart resume evaluation platform
          designed to help job seekers improve their resumes.
          It compares resume content with job descriptions,
          identifies matching and missing skills, evaluates
          resume readiness, and provides suggestions for improvement.
        </p>
      </section>

      {/* Features */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-lightText dark:text-darkText">
          Our Features
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-borders dark:bg-darkNav"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl ${feature.color}`}>
                {feature.icon}
              </div>

              <h3 className="font-bold text-lightText dark:text-darkText">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-lightText dark:text-darkText">
          How It Works
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-borders dark:bg-darkNav"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-lg text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                {step.icon}
              </div>

              <p className="mt-4 text-xs font-semibold text-blue-600 dark:text-blue-400">
                STEP 0{index + 1}
              </p>

              <h3 className="mt-2 font-bold text-lightText dark:text-darkText">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-borders dark:bg-darkNav sm:p-8">
        <h2 className="text-2xl font-bold text-lightText dark:text-darkText">
          Technologies We Use
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl bg-white p-4 text-lightText shadow-sm dark:bg-mainBg dark:text-darkText"
            >
              <span className="text-2xl text-blue-500">
                {tech.icon}
              </span>
              <span className="text-sm font-semibold">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-center text-white sm:p-8">
        <h2 className="text-2xl font-bold">
          Build a Better Resume. Build a Better Future.
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
          Take control of your job applications with smarter
          resume analysis and actionable feedback.
        </p>
      </section>

    </div>
  )
}

export default About
