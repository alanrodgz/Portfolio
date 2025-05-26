"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="flex flex-col justify-center min-h-screen"
      style={{ 
        paddingTop: 'var(--nav-height)',
        maxWidth: '1000px',
        margin: '0 auto'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 
          className="mb-5 ml-1"
          style={{ 
            color: 'var(--green)',
            fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
            fontSize: 'clamp(14px, 5vw, 16px)',
            fontWeight: '400'
          }}
        >
          Hi, my name is
        </h1>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="big-heading"
        style={{ color: 'var(--lightest-slate)' }}
      >
        Alan Rodriguez.
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="big-heading mt-2"
        style={{ color: 'var(--slate)' }}
      >
        I build things for the web.
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-5 max-w-2xl"
        style={{ 
          color: 'var(--slate)',
          fontSize: '20px',
          lineHeight: '1.3'
        }}
      >
        I'm an AI Agentic Engineer specialized in building exceptional digital experiences. 
        Currently, I'm focused on designing autonomous systems that reason, plan, and act 
        toward complex goals with real-world impact at{' '}
        <a 
          href="https://www.aismartdating.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-link"
          style={{ color: 'var(--green)' }}
        >
          AI Smart Dating
        </a>
        .
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12"
      >
        <a
          href="#contact"
          className="inline-block px-7 py-5 border border-green-400 text-green-400 hover:bg-green-400/10 transition-all"
          style={{
            fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
            fontSize: '14px',
            borderRadius: 'var(--border-radius)',
            textDecoration: 'none'
          }}
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Check out my work!
        </a>
      </motion.div>
    </section>
  )
}