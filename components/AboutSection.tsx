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

        <div>
          <div style={{ color: 'var(--slate)', fontSize: '20px' }}>
            <p className="mb-4">
              Hello! I'm Alan, and I enjoy creating{' '}
              <span style={{ color: 'var(--green)' }}>intelligent systems</span> that live on the internet — 
              especially ones that think, learn, and act autonomously.
            </p>
            
            <p className="mb-4">
              My journey into tech began during my undergraduate studies in{' '}
              <span style={{ color: 'var(--green)' }}>Computer Science</span> at{' '}
              <a 
                href="https://www.sjsu.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--green)' }}
              >
                San José State University
              </a>
              , where I developed a strong foundation in systems programming and software design. 
              In 2020, I became fascinated with building{' '}
              <span style={{ color: 'var(--green)' }}>autonomous agents</span> — 
              tinkering with custom AI systems taught me more than just machine learning; 
              it opened up a whole new way of thinking about how humans and machines interact.
            </p>
            
            <p className="mb-4">
              Fast-forward to now, I'm a graduate student in{' '}
              <span style={{ color: 'var(--green)' }}>Statistical Data Science</span> at{' '}
              <a 
                href="https://www.sfsu.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--green)' }}
              >
                San Francisco State University
              </a>
              , where I'm deepening my skills in probabilistic modeling, decision systems, and simulation. 
              This work directly supports my path as an aspiring{' '}
              <span style={{ color: 'var(--green)' }}>AI Agent Engineer</span>, 
              with a focus on building agents that not only act intelligently but collaborate meaningfully with humans.
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
              {' '}about building{' '}
              <a 
                href="https://www.aismartdating.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--green)' }}
              >
                Wingman AI
              </a>
              , which dives into the technical and philosophical challenges of designing AI systems 
              that enhance human relationships — not replace them. It's part of my broader mission: 
              to build AI that{' '}
              <span style={{ color: 'var(--green)' }}>augments the human experience</span>, not automate it away.
            </p>
            
            <p className="mb-4">
              Whether it's optimizing last-mile delivery routes through simulation or crafting 
              emotionally-aware agents, I'm driven by one question: How can we build AI that 
              truly serves humanity?
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
      </motion.div>
    </section>
  )
}