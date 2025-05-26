"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript", 
    "React",
    "Node.js",
    "Python",
    "LangChain",
    "OpenAI GPT",
    "AutoGen",
    "FastAPI",
    "Vector Databases"
  ]

  return (
    <section 
      id="about" 
      className="numbered-heading-section"
      style={{ 
        maxWidth: '900px',
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
        <h2 className="numbered-heading">About Me</h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div className="md:col-span-2">
            <div style={{ color: 'var(--slate)', fontSize: '20px' }}>
              <p className="mb-4">
                Hello! My name is Alan and I enjoy creating things that live on the internet. 
                My interest in AI development started back in 2020 when I decided to try 
                building autonomous systems — turns out hacking together custom AI agents 
                taught me a lot about machine learning and human-computer interaction!
              </p>
              
              <p className="mb-4">
                Fast-forward to today, and I've had the privilege of building software for 
                an{' '}
                <a 
                  href="https://www.aismartdating.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--green)' }}
                >
                  AI-powered dating platform
                </a>
                , a{' '}
                <a 
                  href="#" 
                  style={{ color: 'var(--green)' }}
                >
                  research laboratory
                </a>
                , and a{' '}
                <a 
                  href="#" 
                  style={{ color: 'var(--green)' }}
                >
                  digital product studio
                </a>
                . My main focus these days is building accessible, inclusive products and 
                digital experiences for a variety of clients.
              </p>
              
              <p className="mb-4">
                I also recently{' '}
                <a 
                  href="https://medium.com/@alanrodriigueez/building-wingman-ai-8671adfc60a9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--green)' }}
                >
                  published an article
                </a>
                {' '}about building Wingman AI, which covers the technical and philosophical 
                challenges of creating AI systems that enhance human relationships.
              </p>

              <p>Here are a few technologies I've been working with recently:</p>
              
              <ul className="grid grid-cols-2 gap-0 mt-5 overflow-hidden list-none">
                {technologies.map((tech, index) => (
                  <li 
                    key={index} 
                    className="relative pl-5 mb-2"
                    style={{ 
                      fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                      fontSize: '13px',
                      color: 'var(--slate)'
                    }}
                  >
                    <span 
                      className="absolute left-0 text-green-400"
                      style={{ color: 'var(--green)' }}
                    >
                      ▹
                    </span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative max-w-xs">
            <div className="block relative w-full">
              <div className="wrapper relative group">
                <div 
                  className="img relative border-2 border-solid rounded transition-all"
                  style={{ 
                    borderColor: 'var(--green)',
                    borderRadius: 'var(--border-radius)'
                  }}
                >
                  <img
                    src="/api/placeholder/300/300"
                    alt="Headshot"
                    className="relative border-0 w-full max-w-full align-middle rounded filter mix-blend-multiply grayscale contrast-100 transition-all group-hover:filter-none group-hover:mix-blend-normal"
                    style={{ borderRadius: 'var(--border-radius)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}