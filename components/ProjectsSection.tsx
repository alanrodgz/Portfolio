"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Wingman - Smart Dating Assistant",
      description:
        "An intelligent AI-powered dating assistant that helps users craft better conversations and improve their dating experience. Features personality analysis, conversation suggestions, and real-time coaching to enhance meaningful connections.",
      image:
        "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "AI dating assistant interface showing conversation suggestions",
      tags: ["AI Agents", "LLM Integration", "Real-time Analysis"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800", "bg-green-100 text-green-800"],
      website: "https://www.aismartdating.com",
      article: "https://medium.com/@alanrodriigueez/building-wingman-ai-8671adfc60a9"
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative AI solutions that push the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-card bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-2xl transition-all duration-500 h-full group">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="project-overlay">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex gap-2 mb-2 flex-wrap">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tag}
                            className={`${project.tagColors[tagIndex]} px-2 py-1 rounded text-xs`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <a
                      href={project.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                    <div className="flex gap-2">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600"
                        title="Visit Website"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}