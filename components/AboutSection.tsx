"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="animate-slide-up"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I am an AI Agentic Engineer focused on designing and deploying autonomous systems that reason, plan, and act toward complex goals. My work centers on building intelligent agents that go beyond static output—toward dynamic, iterative decision-making and real-world impact.
              </p>
              <p>
                With a foundation in computer science and statistical data science, I engineer agents that integrate large language models with memory, tool-use, environment interaction, and long-term planning. My approach is informed by current research in multi-agent collaboration, reinforcement learning, and human-AI alignment.
              </p>
              <p>
                I'm committed to developing agents that are robust, interpretable, and aligned with human values—capable of working alongside people to solve meaningful problems. This portfolio includes examples of research assistants, AI task managers, and multi-agent systems that reflect my ongoing exploration of autonomy, reasoning, and agency in AI.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors flex items-center">
                <GraduationCap className="mr-2 h-4 w-4" />
                MS Computer Science, Stanford
              </div>
              <div className="bg-purple-50 text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors flex items-center">
                <Award className="mr-2 h-4 w-4" />
                AI Excellence Award 2023
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Professional workspace image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern developer workspace with multiple monitors"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border"
              >
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600 font-medium">AI Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-8 -right-8 bg-white p-6 rounded-xl shadow-lg border"
              >
                <div className="text-3xl font-bold text-purple-600">5M+</div>
                <div className="text-gray-600 font-medium">Model Inferences</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}