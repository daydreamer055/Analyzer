
import React, { useState } from 'react'

import ResumeUpload from '../Components/ResumeUpload'
import JobDescription from '../Components/JobDescription'

import { FaSearch } from 'react-icons/fa'

const Analyzer = () => {

  const [resumeFile, setResumeFile] = useState(null)

  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    companyName: '',
    description: '',
  })

  const handleAnalyze = () => {
    if (!resumeFile) {
      alert('Please upload your resume first.')
      return
    }

    if (!jobDetails.description.trim()) {
      alert('Please enter a job description.')
      return
    }

    console.log('Resume:', resumeFile)
    console.log('Job Details:', jobDetails)

    // Backend API integration will go here.
  }

  return (
    <div className="min-h-screen bg-white p-4 dark:bg-mainBg sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-lightText dark:text-darkText sm:text-3xl">
          Resume Analyzer
        </h1>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Upload your resume and compare it with your target job.
        </p>
      </div>

      {/* Upload Section */}
      <div className="mb-6">
        <ResumeUpload onFileSelect={setResumeFile} />
      </div>

      {/* Job Description Section */}
      <div className="mb-6">
        <JobDescription onJobDetailsChange={setJobDetails} />
      </div>

      {/* Analyze Button */}
      <div className="flex justify-center">
        <button
          onClick={handleAnalyze}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 sm:w-auto"
        >
          <FaSearch />
          Analyze My Resume
        </button>
      </div>

    </div>
  )
}

export default Analyzer
