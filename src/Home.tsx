"use client"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { ArrowRight, Github, ExternalLink, Code, Palette, Database, Menu, X } from "lucide-react"
import { useState } from "react"

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const projects = [
    {
      title: "Pokemon App",
      description:
        "Interactive Pokemon explorer built with TypeScript, featuring search and detailed Pokemon information.",
      href: "/pokemon",
      tags: ["TypeScript", "React", "Tailwind CSS", "API Integration", "Intersection Observer", "HTML5", "JavaScript"],
      icon: "🎮",
    },
    {
      title: "Drag & Drop Todo",
      description: "Modern task management app with intuitive drag-and-drop functionality and real-time updates.",
      href: "/todo",
      tags: ["TypeScript", "React", "Tailwind CSS", "Drag & Drop", "State Management", "HTML5"],
      icon: "✅",
    },
    {
      title: "GitHub Search",
      description: "Powerful GitHub repository search tool with advanced filtering and user-friendly interface.",
      href: "/gitHubSearch",
      tags: ["TypeScript", "React", "Tailwind CSS", "GitHub API", "Search", "HTML5", "JavaScript"],
      icon: "🔍",
    },
    {
      title: "Menu swift",
      description: "A group project from the HNG12 program. A modern restaurant menu app that allows you to generate a Qr code for your customers to make their orders in real time.",
    externalUrl : "https://visit.menu/",
      tags: ["TypeScript", "React", "Tailwind CSS", "GitHub API", "Search", "HTML5", "JavaScript", "Zustand for state management"],
      icon: "🍽️",
    },
    {
      title: "Retask App",
      description: "A pure Html and CSS task management app with seamless navigation ",
    externalUrl : "https://retaskaapp.netlify.app/",
      tags: ["HTML", "CSS",  "HTML5", "flexbox", "css grid", "Sass", "Scss" ],
      icon: "⏰",
    },
  ]

  const skills = [
    { name: "HTML5", level: "", icon: <Code className="w-5 h-5" /> },
    { name: "Tailwind CSS", level: "", icon: <Palette className="w-5 h-5" /> },
    { name: "JavaScript", level: "", icon: <Code className="w-5 h-5" /> },
    { name: "TypeScript", level: "", icon: <Code className="w-5 h-5" /> },
    { name: "React", level: "", icon: <Code className="w-5 h-5" /> },
    { name: "Angular", level: "", icon: <Database className="w-5 h-5" /> },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-900">
    
      <header id="header" className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <a className="text-xl font-bold text-purple-400 cursor-pointer" 

           href="#"
            >Nnalue Fabian</a>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Skills
              </button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                onClick={() => window.open("https://github.com", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>

            <button
              className="md:hidden text-gray-400 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left text-gray-400 hover:text-white transition-colors py-2"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-400 hover:text-white transition-colors py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left text-gray-400 hover:text-white transition-colors py-2"
                >
                  Skills
                </button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent w-fit"
                  onClick={() => {
                    window.open("https://github.com/sealite92", "_blank")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

     
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 border-gray-700">
              Frontend Developer
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-balance text-white">
              Hi, I'm <span className="text-purple-400">Nnalue Fabian</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
              A passionate frontend developer with experience in HTML5, CSS, JavaScript, TypeScript, React, and Angular.
              Explore my collection of modern web applications showcasing clean code and intuitive design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent w-full sm:w-auto"
                onClick={() => scrollToSection("skills")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                My Skills
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Get to know more about my journey as a frontend developer and my passion for creating exceptional web
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                I'm a dedicated frontend developer with a passion for creating intuitive and engaging web applications.
                My journey in web development started with curiosity about how websites work, and has evolved into a
                deep appreciation for clean code, user experience, and modern development practices.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                I specialize in building responsive, accessible, and performant web applications using modern
                technologies like React, TypeScript, and CSS. I believe in writing maintainable code and creating
                seamless user experiences that make a difference.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="border-purple-500 text-purple-400">
                  Problem Solver
                </Badge>
                <Badge variant="outline" className="border-purple-500 text-purple-400">
                  Detail Oriented
                </Badge>
                <Badge variant="outline" className="border-purple-500 text-purple-400">
                  Team Player
                </Badge>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 md:p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Location</span>
                  <span className="text-white">Nigeria</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Experience</span>
                  <span className="text-white">2+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Focus</span>
                  <span className="text-white">Frontend Development</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Availability</span>
                  <span className="text-green-400">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section id="skills" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">Technical Skills</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              My expertise spans across modern web technologies with a focus on creating efficient and scalable
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-purple-400">{skill.icon}</div>
                    <h3 className="font-semibold text-white">{skill.name}</h3>
                  </div>
                  {/* <Badge
                    variant="outline"
                    className={`text-xs ${
                      skill.level === "Advanced"
                        ? "border-green-500 text-green-400"
                        : "border-yellow-500 text-yellow-400"
                    }`}
                  >
                    {skill.level}
                  </Badge> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    
      <section id="projects" className="py-12 md:py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Each project demonstrates different aspects of modern TypeScript development, from API integration to
              interactive user interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-800 border-gray-700 flex justify-between"
              >
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl md:text-2xl">{project.icon}</span>
                    <CardTitle className="text-lg md:text-xl group-hover:text-purple-400 transition-colors text-white">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm md:text-base leading-relaxed text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                  asChild
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                    // onClick={() => (window.location.href = project.href)}
                  >
                    <a href={project.externalUrl || project.href} 
                    target={project.externalUrl ? "_blank" : "_self"}
                     rel={project.externalUrl ? "noopener noreferrer" : undefined} >
                    Explore Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    
      <footer className="py-8 md:py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-4">
            <p className="text-gray-400 text-sm md:text-base">
              Built by Nnalue Fabian with TypeScript, React.js, and Tailwind CSS
            </p>
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <a onClick={() => window.open("https://github.com", "_blank")} className="text-gray-400 hover:text-purple-400 transition-colors text-sm md:text-base">
                GitHub
              </a>
              <a onClick={() => window.open("https://www.linkedin.com/in/fabian-nnalue/", "_blank")} className="text-gray-400 hover:text-purple-400 transition-colors text-sm md:text-base">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm md:text-base">
                Twitter
              </a>
            </div>
            <p className="text-xs md:text-sm text-gray-500">© 2024 Nnalue Fabian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
