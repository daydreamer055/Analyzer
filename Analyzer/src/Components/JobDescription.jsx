
import React, { useState } from 'react'
import {
  FaBriefcase,
  FaBuilding,
  FaAlignLeft,
  FaTrash
} from 'react-icons/fa'

const JobDescription = ({ onJobDetailsChange }) => {

  const [jobTitle, setJobTitle] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [description, setDescription] = useState('')

  const handleChange = (field, value) => {
    const updatedDetails = {
      jobTitle: field === 'jobTitle' ? value : jobTitle,
      companyName: field === 'companyName' ? value : companyName,
      description: field === 'description' ? value : description,
    }

    if (field === 'jobTitle') setJobTitle(value)
    if (field === 'companyName') setCompanyName(value)
    if (field === 'description') setDescription(value)

    onJobDetailsChange?.(updatedDetails)
  }

  const clearFields = () => {
    setJobTitle('')
    setCompanyName('')
    setDescription('')

    onJobDetailsChange?.({
      jobTitle: '',
      companyName: '',
      description: '',
    })
  }

  return (
    <div className="w-full rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-[#263B59] dark:bg-[#102A4C] sm:p-6">

      {/* Heading */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-lightText dark:text-darkText">
            Job Description
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Enter the details of the job you are applying for.
          </p>
        </div>

        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600 dark:bg-blue-500/15 dark:text-blue-400 sm:flex">
          <FaBriefcase />
        </div>
      </div>

      {/* Job Title and Company */}
      <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

        {/* Job Title */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            <FaBriefcase className="text-blue-500" />
            Job Title
          </label>

          <input
            type="text"
            value={jobTitle}
            onChange={(e) => handleChange('jobTitle', e.target.value)}
            placeholder="e.g. Frontend Developer"
            className="w-full rounded-lg border border-blue-100 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-[#0B192B] dark:text-white dark:placeholder:text-slate-500"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            <FaBuilding className="text-blue-500" />
            Company Name
          </label>

          <input
            type="text"
            value={companyName}
            onChange={(e) => handleChange('companyName', e.target.value)}
            placeholder="e.g. Google"
            className="w-full rounded-lg border border-blue-100 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-[#0B192B] dark:text-white dark:placeholder:text-slate-500"
          />
        </div>

      </div>

      {/* Job Description Textarea */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <FaAlignLeft className="text-blue-500" />
          Paste Job Description
        </label>

        <textarea
          value={description}
          onChange={(e) => handleChange('description', e.target.value)}
          rows={7}
          placeholder="Paste the complete job description here...

Example:
We are looking for a React Developer with experience in JavaScript, React, Tailwind CSS, REST APIs and Git."
          className="w-full resize-y rounded-lg border border-blue-100 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-[#0B192B] dark:text-white dark:placeholder:text-slate-500"
        />

        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs text-slate-400">
            Include skills, qualifications and job responsibilities.
          </p>

          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {description.length} characters
          </p>
        </div>
      </div>

      {/* Clear Button */}
      {(jobTitle || companyName || description) && (
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={clearFields}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50 dark:hover:bg-red-500/10"
          >
            <FaTrash />
            Clear Details
          </button>
        </div>
      )}

    </div>
  )
}

export default JobDescription
