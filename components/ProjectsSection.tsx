"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
// Using your AI Wingman screenshot

export default function ProjectsSection() {
  const featuredProjects = [
    {
      title: "AI Wingman - Smart Dating Assistant",
      description: "An intelligent AI-powered dating assistant that helps users craft better conversations and improve their dating experience. Features personality analysis, conversation suggestions, and real-time coaching to enhance meaningful connections.",
      tech: ["React", "Node.js", "OpenAI", "Python", "FastAPI", "LangChain"],
      github: "",
      external: "https://www.aismartdating.com",
      image: "/wingman-ai-screenshot.png"
    }
  ]

  const otherProjects = [
    {
      title: "Building Wingman AI Article",
      description: "A comprehensive technical deep-dive into creating an AI-powered dating assistant, covering the challenges of building systems that enhance human relationships.",
      tech: ["Technical Writing", "AI Ethics", "Product Development"],
      github: "",
      external: "https://medium.com/@alanrodriigueez/building-wingman-ai-8671adfc60a9"
    }
  ]

  return (
    <section 
      id="work"
      style={{ 
        maxWidth: '1000px',
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
        <h2 className="numbered-heading">Some Things I've Built</h2>

        {/* Featured Projects */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative grid md:grid-cols-12 gap-4 items-center"
            >
              {/* Project Image */}
              <div className="relative md:col-span-7 group">
                <div className="project-image">
                  <a 
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded"
                      style={{
                        borderRadius: 'var(--border-radius)',
                        filter: 'grayscale(100%) contrast(1) brightness(90%)',
                        transition: 'var(--transition)'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.filter = 'none'
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.filter = 'grayscale(100%) contrast(1) brightness(90%)'
                      }}
                    />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="relative md:col-span-5 flex flex-col justify-center">
                <div>
                  <p 
                    className="mb-2"
                    style={{
                      margin: '10px 0',
                      color: 'var(--green)',
                      fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                      fontSize: '13px',
                      fontWeight: '400'
                    }}
                  >
                    Featured Project
                  </p>

                  <h3 
                    className="project-title"
                    style={{
                      color: 'var(--lightest-slate)',
                      fontSize: 'clamp(24px, 5vw, 28px)',
                      margin: '0 0 20px'
                    }}
                  >
                    <a 
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {project.title}
                    </a>
                  </h3>

                  <div 
                    className="project-description"
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      padding: '25px',
                      borderRadius: 'var(--border-radius)',
                      backgroundColor: 'var(--light-navy)',
                      color: 'var(--light-slate)',
                      fontSize: '18px',
                      boxShadow: `0 10px 30px -15px var(--shadow)`
                    }}
                  >
                    <p>{project.description}</p>
                  </div>

                  <ul 
                    className="project-tech-list"
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      position: 'relative',
                      zIndex: 2,
                      margin: '25px 0 10px',
                      padding: 0,
                      listStyle: 'none'
                    }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <li 
                        key={techIndex}
                        style={{
                          margin: '0 20px 5px 0',
                          color: 'var(--light-slate)',
                          fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                          fontSize: '13px',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div 
                    className="project-links"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      marginTop: '10px',
                      marginLeft: '-10px',
                      color: 'var(--lightest-slate)'
                    }}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 hover:text-green-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 hover:text-green-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-24">
          <h3 
            className="text-center mb-12"
            style={{
              color: 'var(--lightest-slate)',
              fontSize: 'clamp(24px, 5vw, 32px)',
              margin: '0 0 50px'
            }}
          >
            Other Noteworthy Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card group"
                style={{
                  padding: '2rem 1.75rem',
                  backgroundColor: 'var(--light-navy)',
                  borderRadius: 'var(--border-radius)',
                  transition: 'var(--transition)',
                  cursor: 'default',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div 
                      className="project-top"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '35px'
                      }}
                    >
                      <div className="folder" style={{ color: 'var(--green)' }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="project-links flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-green-400 transition-colors"
                          style={{ color: 'var(--light-slate)' }}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition-colors"
                        style={{ color: 'var(--light-slate)' }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <h3 
                    className="project-title mb-3"
                    style={{
                      margin: '0 0 10px',
                      color: 'var(--lightest-slate)',
                      fontSize: '22px'
                    }}
                  >
                    <a 
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: 'inherit', 
                        textDecoration: 'none',
                        position: 'static'
                      }}
                      className="hover:text-green-400 transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <div 
                    className="project-description"
                    style={{
                      color: 'var(--light-slate)',
                      fontSize: '17px'
                    }}
                  >
                    <p>{project.description}</p>
                  </div>
                </div>

                <ul 
                  className="project-tech-list"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexGrow: 1,
                    flexWrap: 'wrap',
                    padding: 0,
                    margin: '20px 0 0',
                    listStyle: 'none'
                  }}
                >
                  {project.tech.map((tech, techIndex) => (
                    <li 
                      key={techIndex}
                      style={{
                        fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                        fontSize: '12px',
                        lineHeight: '1.75',
                        color: 'var(--light-slate)'
                      }}
                    >
                      {tech}
                      {techIndex < project.tech.length - 1 && (
                        <span style={{ margin: '0 5px' }}>·</span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}