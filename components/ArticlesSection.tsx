"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function ArticlesSection() {
  const articles = [
    {
      title: "Building Wingman AI: From Concept to Real-World Impact",
      description: "A deep dive into creating an AI-powered dating assistant that helps users improve their conversation skills and build meaningful connections through intelligent coaching.",
      date: "2024",
      link: "https://medium.com/@alanrodriigueez/building-wingman-ai-8671adfc60a9",
      tags: ["AI Agents", "LLM Integration", "Product Development"]
    }
  ]

  return (
    <section id="articles" className="py-24">
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
            02.
          </span>
          Some Things I've Written
          <div 
            className="ml-6 h-px flex-1 max-w-xs"
            style={{ backgroundColor: 'var(--lightest-navy)' }}
          ></div>
        </h2>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded transition-all duration-300 hover:translate-y-[-2px]"
                style={{ backgroundColor: 'var(--light-navy)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <p 
                      className="font-mono text-sm mb-2"
                      style={{ color: 'var(--green)' }}
                    >
                      {article.date}
                    </p>
                    <h3 
                      className="text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors"
                      style={{ color: 'var(--lightest-slate)' }}
                    >
                      {article.title}
                    </h3>
                  </div>
                  <ExternalLink 
                    className="h-5 w-5 ml-4 flex-shrink-0 group-hover:text-green-400 transition-colors"
                    style={{ color: 'var(--slate)' }}
                  />
                </div>
                
                <p 
                  className="text-base leading-relaxed mb-4"
                  style={{ color: 'var(--slate)' }}
                >
                  {article.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="font-mono text-xs px-3 py-1 rounded"
                      style={{ 
                        backgroundColor: 'var(--green-tint)',
                        color: 'var(--green)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}