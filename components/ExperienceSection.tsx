"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0)

  const jobs = [
    {
      title: "AI Agentic Engineer",
      company: "AI Smart Dating",
      range: "2024 - Present",
      url: "https://www.aismartdating.com",
      details: [
        "Write modern, performant, maintainable code for AI-powered dating platform with focus on user experience and autonomous agent systems",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Python, React, and Node.js",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      range: "2023 - 2024",
      url: "",
      details: [
        "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and React",
        "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
        "Clients included commercial and residential real estate companies, restaurant groups, and fitness studios"
      ]
    },
    {
      title: "Software Engineer",
      company: "Previous Company",
      range: "2022 - 2023",
      url: "",
      details: [
        "Developed and shipped highly interactive web applications for diverse clients including Fortune 500 companies",
        "Used various technologies including React, Vue, Node.js, and Python to build modern web applications",
        "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences"
      ]
    }
  ]

  return (
    <section 
      id="experience" 
      style={{ 
        maxWidth: '700px',
        margin: '0 auto',
        padding: '100px 0'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="numbered-heading">Where I've Worked</h2>

        <div className="flex">
          {/* Tab List */}
          <div 
            className="relative flex flex-col"
            style={{
              width: 'var(--tab-width)',
              zIndex: 3
            }}
          >
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center w-full h-12 px-5 border-l-2 text-left transition-all ${
                  activeTab === index 
                    ? 'text-green-400 border-green-400' 
                    : 'border-gray-600 hover:text-green-400'
                }`}
                style={{
                  fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                  fontSize: '13px',
                  color: activeTab === index ? 'var(--green)' : 'var(--slate)',
                  borderLeftColor: activeTab === index ? 'var(--green)' : 'var(--lightest-navy)',
                  backgroundColor: activeTab === index ? 'var(--green-tint)' : 'transparent'
                }}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Tab Panels */}
          <div className="relative ml-5 w-full">
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`w-full ${activeTab === index ? 'block' : 'hidden'}`}
              >
                <h3 
                  className="mb-1 font-medium text-xl"
                  style={{ color: 'var(--lightest-slate)' }}
                >
                  <span>{job.title}</span>
                  <span className="text-green-400" style={{ color: 'var(--green)' }}>
                    {' '}@ {' '}
                    {job.url ? (
                      <a 
                        href={job.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-link"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </span>
                </h3>

                <p 
                  className="mb-6 text-sm"
                  style={{
                    fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                    color: 'var(--light-slate)'
                  }}
                >
                  {job.range}
                </p>

                <div>
                  <ul className="list-none">
                    {job.details.map((detail, detailIndex) => (
                      <li 
                        key={detailIndex}
                        className="relative pl-8 mb-3"
                        style={{ 
                          color: 'var(--slate)',
                          fontSize: '18px'
                        }}
                      >
                        <span 
                          className="absolute left-0 text-green-400"
                          style={{ 
                            color: 'var(--green)',
                            top: '5px'
                          }}
                        >
                          ▹
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}