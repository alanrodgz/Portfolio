import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

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
                I'm a passionate AI Agent Engineer with 5+ years of experience
                building intelligent systems that solve real-world problems. My
                expertise spans from natural language processing to computer
                vision, with a focus on creating autonomous agents that can
                think, learn, and adapt.
              </p>
              <p>
                Currently, I lead AI initiatives at cutting-edge tech companies,
                where I design and implement multi-agent systems, conversational
                AI, and intelligent automation solutions that have processed
                millions of interactions and improved operational efficiency by
                over 40%.
              </p>
              <p>
                When I'm not coding AI systems, you'll find me contributing to
                open-source projects, writing technical blogs, or exploring the
                latest developments in artificial general intelligence and
                machine consciousness.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Badge
                variant="secondary"
                className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors"
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                MS Computer Science, Stanford
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-50 text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors"
              >
                <Award className="mr-2 h-4 w-4" />
                AI Excellence Award 2023
              </Badge>
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
  );
}
