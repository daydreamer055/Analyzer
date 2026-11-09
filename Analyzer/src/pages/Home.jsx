
import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaFileAlt,
  FaShieldAlt,
  FaBullseye,
  FaLightbulb,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa'

const Home = () => {

  const features = [
    {
      icon: <FaFileAlt />,
      title: 'Resume Scoring',
      description: 'Evaluate your resume and understand its overall quality.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'ATS Compatibility',
      description: 'Check whether your resume is optimized for ATS systems.'
    },
    {
      icon: <FaBullseye />,
      title: 'Skill Matching',
      description: 'Find out how your skills match your target job.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Smart Suggestions',
      description: 'Get useful recommendations to improve your resume.'
    }
  ]

  const steps = [
    'Upload your resume',
    'Enter job description',
    'Analyze your resume',
    'Improve your profile'
  ]

  return (
    <div className="w-full overflow-hidden bg-white transition-colors duration-300 dark:bg-mainBg">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[calc(100vh-64px)] items-center">

        {/* Background image */}
        <img
          src="/newbg.avif"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/70 dark:bg-slate-950/80"></div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12">

          {/* Left content */}
          <div className="max-w-2xl text-white">

            <span className="inline-block rounded-full border border-blue-300/40 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200">
              Your Smart Resume Assistant
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Build a Resume That
              <span className="block text-blue-400">
                Gets You Noticed.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Make your job applications stronger with intelligent
              resume analysis. Check your ATS score, match your skills
              with job descriptions, and discover ways to improve.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/login"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-blue-700"
              >
                Get Started
                <FaArrowRight />
              </Link>

              <Link
                to="/about"
                className="flex items-center justify-center rounded-xl border border-white/50 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Learn More
              </Link>

            </div>

            {/* Small highlights */}
            <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate-200">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" />
                Easy to use
              </span>

              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" />
                Smart feedback
              </span>

              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" />
                ATS insights
              </span>
            </div>
          </div>

          {/* Right preview card */}
          <div className="mx-auto w-full max-w-md">

            <div className="rounded-2xl border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur dark:border-blue-300/20 dark:bg-slate-900/95">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Resume Overview
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                    Your Resume Score
                  </h2>
                </div>

                <div className="rounded-xl bg-blue-100 p-3 text-xl text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                  <FaFileAlt />
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center">
                <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full border-[12px] border-blue-500 bg-blue-50 dark:bg-slate-800">
                  <span className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                    85
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    Out of 100
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-5">

                {[
                  { name: 'ATS Readiness', value: 90 },
                  { name: 'Skills Matched', value: 75 },
                  { name: 'Resume Quality', value: 85 }
                ].map((item) => (
                  <div key={item.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-slate-700 dark:text-slate-200">
                        {item.name}
                      </span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {item.value}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}

              </div>

              <p className="mt-6 text-center text-xs text-slate-400">
                Sample dashboard preview
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl font-bold text-lightText dark:text-darkText sm:text-4xl">
              Everything You Need to Improve Your Resume
            </h2>

            <p className="mt-4 text-slate-500 dark:text-slate-400">
              Get helpful insights to make your resume more effective
              and job-ready.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-borders dark:bg-darkNav"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-lightText dark:text-darkText">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 px-5 py-20 dark:bg-darkNav sm:px-8 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-lightText dark:text-darkText sm:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step, index) => (
              <div key={index} className="text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg">
                  {index + 1}
                </div>

                <h3 className="mt-5 font-bold text-lightText dark:text-darkText">
                  {step}
                </h3>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-14 text-center text-white shadow-xl sm:px-12">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Improve Your Resume?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Take the first step towards your dream job.
            Analyze your resume and discover your potential.
          </p>

          <Link
            to="/login"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Start Now
            <FaArrowRight />
          </Link>

        </div>
      </section>

    </div>
  )
}

export default Home
