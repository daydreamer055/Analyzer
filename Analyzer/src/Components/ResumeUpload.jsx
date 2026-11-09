
import React, { useRef, useState } from 'react'
import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaFileWord,
  FaTrash,
  FaCheckCircle
} from 'react-icons/fa'

const ResumeUpload = ({ onFileSelect }) => {

  const [file, setFile] = useState(null)
  const [error, setError] = useState('')
  const [isDragging, setIsDragging] = useState(false)

  const fileInputRef = useRef(null)

  // Handle file validation
  const handleFile = (selectedFile) => {
    if (!selectedFile) return

    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]

    const validExtension = /\.(pdf|docx)$/i.test(selectedFile.name)

    if (!allowedTypes.includes(selectedFile.type) && !validExtension) {
      setError('Please upload only PDF or DOCX files.')
      return
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5 MB.')
      return
    }

    setError('')
    setFile(selectedFile)

    // Send selected file to parent component
    onFileSelect?.(selectedFile)
  }

  // Browse files
  const handleChange = (e) => {
    handleFile(e.target.files?.[0])
    e.target.value = ''
  }

  // Drag events
  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFile = e.dataTransfer.files?.[0]
    handleFile(droppedFile)
  }

  // Remove selected file
  const removeFile = () => {
    setFile(null)
    setError('')
    onFileSelect?.(null)
  }

  const formatSize = (size) => {
    return (size / (1024 * 1024)).toFixed(2) + ' MB'
  }

  return (
    <div className="w-full rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-[#263B59] dark:bg-[#102A4C] sm:p-6">

      {/* Heading */}
      <div className="mb-5">
        <h2 className="text-lg font-bold text-lightText dark:text-darkText">
          Upload Your Resume
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Upload your resume to get a detailed analysis.
        </p>
      </div>

      {/* Upload Area */}
      {!file ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`flex min-h-[220px] flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition-all duration-300 ${
            isDragging
              ? 'border-blue-600 bg-blue-50 dark:bg-blue-500/15'
              : 'border-blue-200 bg-blue-50/40 dark:border-blue-500/40 dark:bg-[#0B192B]'
          }`}
        >

          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
            <FaCloudUploadAlt />
          </div>

          <h3 className="font-semibold text-slate-800 dark:text-white">
            Drag and drop your resume here
          </h3>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            or click below to browse files
          </p>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="mt-5 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Browse Files
          </button>

          <p className="mt-4 text-xs text-slate-400">
            Supported formats: PDF, DOCX (Maximum 5 MB)
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx"
            onChange={handleChange}
            className="hidden"
          />
        </div>
      ) : (

        /* Uploaded File Details */
        <div className="flex flex-col gap-4 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-500/30 dark:bg-green-500/10 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex min-w-0 items-center gap-3">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-2xl text-blue-600 dark:bg-slate-800 dark:text-blue-400">
              {file.name.toLowerCase().endsWith('.pdf')
                ? <FaFilePdf />
                : <FaFileWord />}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-800 dark:text-white">
                {file.name}
              </p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {formatSize(file.size)}
              </p>
            </div>

          </div>

          <div className="flex items-center justify-between gap-3 sm:justify-end">

            <span className="flex items-center gap-1 text-xs font-semibold text-green-700 dark:text-green-400">
              <FaCheckCircle />
              Uploaded
            </span>

            <button
              type="button"
              onClick={removeFile}
              className="rounded-lg p-2 text-red-500 transition hover:bg-red-100 dark:hover:bg-red-500/15"
              aria-label="Remove uploaded file"
            >
              <FaTrash />
            </button>

          </div>

        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="mt-3 text-sm font-medium text-red-500">
          {error}
        </p>
      )}

    </div>
  )
}

export default ResumeUpload
