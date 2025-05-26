"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Wingman - Smart Dating Assistant",
      description:
        "An intelligent AI-powered dating assistant that helps users craft better conversations and improve their dating experience. Features personality analysis, conversation suggestions, and real-time coaching to enhance meaningful connections.",
      tags: ["AI Agents", "LLM Integration", "Real-time Analysis", "React", "Python"],
      website: "https://www.aismartdating.com",
      article: "https://medium.com/@alanrodriigueez/building-wingman-ai-8671adfc60a9"
    },
  ]

  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 
          className="text-2xl md:text-3xl font-bold mb-8 flex items-center"
          style={{ color: 'var(--lightest-slate)' }}
        >
          <span 
            className="font-mono text-lg mr-2"
            style={{ color: 'var(--green)' }}
          >
            03.
          </span>
          Some Things I've Built
          <div 
            className="ml-6 h-px flex-1 max-w-xs"
            style={{ backgroundColor: 'var(--lightest-navy)' }}
          ></div>
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid md:grid-cols-12 gap-4 items-center">
                {/* Project Image */}
                <div className="md:col-span-7 relative group">
                  <div 
                    className="relative overflow-hidden rounded bg-center bg-cover"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400')",
                      aspectRatio: "16 / 9"
                    }}
                  >
                    <div 
                      className="absolute inset-0 transition-all duration-300 group-hover:bg-transparent"
                      style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)' }}
                    ></div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="md:col-span-5 relative">
                  <p 
                    className="font-mono text-sm mb-2"
                    style={{ color: 'var(--green)' }}
                  >
                    Featured Project
                  </p>
                  
                  <h3 
                    className="text-2xl font-bold mb-4"
                    style={{ color: 'var(--lightest-slate)' }}
                  >
                    {project.title}
                  </h3>

                  <div 
                    className="p-6 rounded shadow-lg mb-4"
                    style={{ backgroundColor: 'var(--light-navy)' }}
                  >
                    <p 
                      className="text-base leading-relaxed"
                      style={{ color: 'var(--light-slate)' }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="font-mono text-sm"
                        style={{ color: 'var(--light-slate)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-green-400"
                      style={{ color: 'var(--lightest-slate)' }}
                      title="Read Article"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-green-400"
                      style={{ color: 'var(--lightest-slate)' }}
                      title="Visit Website"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}