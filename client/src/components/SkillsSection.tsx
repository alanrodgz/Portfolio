import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Hugging Face", level: 95 },
      ],
    },
    {
      icon: "⚡",
      title: "Agent Frameworks",
      skills: [
        { name: "LangChain", level: 95 },
        { name: "AutoGen", level: 80 },
        { name: "CrewAI", level: 88 },
      ],
    },
    {
      icon: "💻",
      title: "Programming",
      skills: [
        { name: "Python", level: 98 },
        { name: "JavaScript", level: 85 },
        { name: "Go", level: 75 },
      ],
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      tags: ["AWS", "GCP", "Docker", "Kubernetes"],
    },
    {
      icon: "🗄️",
      title: "Vector Databases",
      tags: ["Pinecone", "Weaviate", "Chroma", "FAISS"],
    },
    {
      icon: "🧠",
      title: "LLM Integration",
      tags: ["OpenAI", "Anthropic", "Cohere", "Azure OpenAI"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building next-generation AI systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="skill-card bg-white p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>

                  {category.skills ? (
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-600 font-medium">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {category.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
