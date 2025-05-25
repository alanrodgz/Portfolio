import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Multi-Agent Customer Service",
      description:
        "Intelligent customer service system with specialized agents for different domains, achieving 95% resolution rate and reducing response time by 60%.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "AI chatbot interface with conversation bubbles",
      tags: ["LangChain", "OpenAI", "FastAPI"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800", "bg-green-100 text-green-800"],
    },
    {
      title: "Intelligent Document Processor",
      description:
        "AI-powered document analysis system that extracts insights from complex documents, reducing manual processing time by 80% and improving accuracy to 99.2%.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Document analysis dashboard with charts and graphs",
      tags: ["Computer Vision", "NLP", "RAG"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800", "bg-green-100 text-green-800"],
    },
    {
      title: "Autonomous Research Agent",
      description:
        "Self-directed research agent that gathers, analyzes, and synthesizes information from multiple sources, producing comprehensive research reports automatically.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Data visualization dashboard with charts and analytics",
      tags: ["AutoGen", "Web Scraping", "Data Analysis"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800", "bg-green-100 text-green-800"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative AI solutions that push the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="project-card group relative bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="project-overlay">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex gap-2 mb-2 flex-wrap">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tag}
                            className={`${project.tagColors[tagIndex]} px-2 py-1 rounded text-xs`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-700 font-semibold p-0 h-auto"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Github className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            size="lg"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
