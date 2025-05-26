"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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
    { label: "Articles", id: "articles" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md shadow-lg"
          : ""
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold transition-colors"
            style={{ color: 'var(--green)' }}
          >
            AR
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-mono text-sm transition-colors hover:text-green-400"
                style={{ color: 'var(--lightest-slate)' }}
              >
                <span style={{ color: 'var(--green)' }}>
                  0{index + 1}.
                </span>{" "}
                {item.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              className="ml-4 px-4 py-2 font-mono text-sm border border-green-400 text-green-400 hover:bg-green-400/10 transition-all rounded"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}