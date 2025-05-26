"use client"

import { useState, useEffect } from "react"
import ThemeToggle from "./ThemeToggle"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Work", id: "work" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md shadow-lg"
          : ""
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(var(--navy-rgb), 0.85)' : 'transparent',
        height: isScrolled ? 'var(--nav-scroll-height)' : 'var(--nav-height)'
      }}
    >
      <div className="flex items-center justify-between px-12 sm:px-16 lg:px-20 h-full">
        <div className="flex-shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="relative group"
          >
            <svg width="42" height="42" viewBox="0 0 84 84" className="group-hover:text-green-400 transition-colors" style={{ color: 'var(--green)' }}>
              <g transform="translate(-8.000000, -2.000000)">
                <g transform="translate(11.000000, 5.000000)">
                  <polygon
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="39 0 0 22 0 67 39 90 78 68 78 23"
                  />
                  <text
                    x="39"
                    y="55"
                    fontSize="24"
                    fill="currentColor"
                    textAnchor="middle"
                    fontFamily="SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace"
                  >
                    AR
                  </text>
                </g>
              </g>
            </svg>
          </a>
        </div>

        <div className="hidden md:flex items-center">
          <ol className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="group relative py-3 px-0 transition-colors"
                  style={{ 
                    color: 'var(--lightest-slate)',
                    fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                    fontSize: '13px'
                  }}
                >
                  <span className="mr-1" style={{ color: 'var(--green)' }}>
                    0{index + 1}.
                  </span>
                  <span className="group-hover:text-green-400 transition-colors">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="/Alan-Rodriguez-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-green-400 rounded text-green-400 hover:bg-green-400/10 transition-all"
              style={{
                fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                fontSize: '13px'
              }}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}