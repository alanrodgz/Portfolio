"use client"

import { Linkedin, Github, Twitter, Rss } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Articles", id: "articles" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  const services = [
    "AI Agent Development",
    "LLM Integration",
    "ML Model Training",
    "AI Consulting",
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/alan-r/", ariaLabel: "LinkedIn" },
    { icon: Github, href: "https://github.com/alanrodgz", ariaLabel: "GitHub" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold gradient-text">Alan Rodriguez</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              AI Agentic Engineer focused on designing autonomous systems that reason, plan, and act toward complex goals with real-world impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Alex Chen. All rights reserved. Built with passion for AI
            and innovation.
          </p>
        </div>
      </div>
    </footer>
  )
}