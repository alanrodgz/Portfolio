"use client"

import { motion } from "framer-motion"

export default function ContactSection() {
  return (
    <section 
      id="contact"
      style={{ 
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '100px 0'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p 
          className="numbered-heading"
          style={{
            position: 'relative',
            marginBottom: '20px',
            counterIncrement: 'section',
            color: 'var(--green)',
            fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
            fontSize: 'clamp(14px, 5vw, 16px)',
            fontWeight: '400'
          }}
        >
          <span style={{ marginRight: '10px' }}>04.</span>
          What's Next?
        </p>

        <h2 
          className="title"
          style={{
            fontSize: 'clamp(40px, 5vw, 60px)',
            color: 'var(--lightest-slate)',
            lineHeight: '1.1'
          }}
        >
          Get In Touch
        </h2>

        <p 
          style={{
            marginTop: '20px',
            fontSize: '20px',
            maxWidth: '540px',
            color: 'var(--slate)',
            margin: '20px auto 0'
          }}
        >
          Although I'm not currently looking for any new opportunities, my inbox is 
          always open. Whether you have a question or just want to say hi, I'll 
          try my best to get back to you!
        </p>

        <a
          href="mailto:alanrodriigueez@gmail.com"
          className="email-link"
          style={{
            color: 'var(--green)',
            backgroundColor: 'transparent',
            border: `1px solid var(--green)`,
            borderRadius: 'var(--border-radius)',
            padding: '1.25rem 1.75rem',
            fontSize: '14px',
            fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
            lineHeight: '1',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'var(--transition)',
            marginTop: '50px',
            display: 'inline-block'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--green-tint)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  )
}