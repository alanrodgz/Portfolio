"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  const technologies = [
    "LangChain",
    "OpenAI GPT",
    "AutoGen",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "FastAPI",
    "Vector Databases"
  ]

  return (
    <section id="about" className="py-24">
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
            01.
          </span>
          About Me
          <div 
            className="ml-6 h-px flex-1 max-w-xs"
            style={{ backgroundColor: 'var(--lightest-navy)' }}
          ></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div 
              className="text-lg leading-relaxed space-y-4"
              style={{ color: 'var(--slate)' }}
            >
              <p>
                Hello! I'm Alan, an AI Agentic Engineer focused on designing and deploying 
                autonomous systems that reason, plan, and act toward complex goals with 
                real-world impact.
              </p>
              
              <p>
                My journey in AI began with a fascination for systems that could think and 
                act independently. Today, I specialize in creating multi-agent systems that 
                can collaborate, learn, and adapt to solve complex problems autonomously.
              </p>
              
              <p>
                I'm particularly interested in the intersection of multi-agent collaboration 
                and human-AI alignment, working to ensure that autonomous systems not only 
                achieve their goals but do so in ways that benefit humanity.
              </p>

              <p>Here are a few technologies I've been working with recently:</p>
              
              <div className="grid grid-cols-2 gap-2 mt-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <span 
                      className="text-sm mr-2"
                      style={{ color: 'var(--green)' }}
                    >
                      ▹
                    </span>
                    <span 
                      className="font-mono text-sm"
                      style={{ color: 'var(--slate)' }}
                    >
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div 
              className="relative z-10 w-full max-w-xs mx-auto"
            >
              <div 
                className="relative bg-center bg-cover rounded filter grayscale hover:grayscale-0 transition-all duration-300"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400')",
                  aspectRatio: "1 / 1"
                }}
              >
                <div 
                  className="absolute inset-0 border-2 rounded translate-x-4 translate-y-4 -z-10"
                  style={{ borderColor: 'var(--green)' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}