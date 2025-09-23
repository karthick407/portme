"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  Star,
  Calendar,
  User,
  Code,
  Briefcase,
  MessageSquare,
  BookOpen,
  ImageIcon,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [typingText, setTypingText] = useState("")
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [secretAccess, setSecretAccess] = useState(false)
  const [passcode, setPasscode] = useState("")

  const roles = ["Web Developer", "UI/UX Designer", "Tech Enthusiast", "Problem Solver"]
  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "UI/UX Design", level: 88 },
    { name: "Cloud Computing", level: 75 },
  ]


  
  const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
    image: "/modern-ecommerce-website.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://raju-real-estate.vercel.app",
  },
  {
    title: "AI-Powered Dashboard",
    description: "Analytics dashboard with machine learning insights and real-time data",
    image: "/ai-analytics-dashboard.png",
    tech: ["Next.js", "Python", "TensorFlow", "D3.js"],
    link: "https://student-three-sigma.vercel.app",
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication",
    image: "/mobile-banking-app.png",
    tech: ["React Native", "Firebase", "Plaid API"],
    link: "https://rajutimes.vercel.app",
  },
]

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Codebrahma Tech Solutions",
      period: "2025 - Present",
      description: "Built responsive web applications and improved user experience by 80%",
    },
    {
      title: "BCA",
      company: "Bangalore University",
      period: "2022 - 2024",
      description: "Bachelor's degree with focus on software engineering and web technologies",
    },
    {
      title: "Cabin crew member",
      company: "Frankfinn Aviation Services",
      period: "2021 - 2022",
      description: "Ensured passenger safety and provided excellent customer service on international flights",
    },
  ]

  const testimonials = [
    {
      name: "Jaya Surya",
      role: "Product Manager",
      company: "TechCorp",
      content:
        "Karthik delivered exceptional results on our project. His attention to detail and technical expertise are outstanding.",
      rating: 5,
    },
    {
      name: "Hema shree",
      role: "CTO",
      company: "StartupXYZ",
      content:
        "Working with Karthik was a game-changer for our product. He brings both technical skills and creative problem-solving.",
      rating: 5,
    },
    {
      name: "Hema baby",
      role: "Design Lead",
      company: "Creative Agency",
      content: "Karthik perfectly translated our designs into pixel-perfect, responsive web applications.",
      rating: 5,
    },
  ]

  const blogPosts = [
    {
      title: "Building Scalable React Applications in 2025",
      excerpt: "Best practices and patterns for creating maintainable React apps",
      date: "2025-01-15",
      readTime: "8 min read",
    },
    {
      title: "The Future of Web Development: AI Integration",
      excerpt: "How artificial intelligence is reshaping the development landscape",
      date: "2025-01-10",
      readTime: "12 min read",
    },
    {
      title: "Optimizing Performance in Next.js Applications",
      excerpt: "Advanced techniques for lightning-fast web applications",
      date: "2025-01-05",
      readTime: "10 min read",
    },
  ]

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentSkillIndex]
    let i = 0
    const timer = setInterval(() => {
      if (i <= currentRole.length) {
        setTypingText(currentRole.slice(0, i))
        i++
      } else {
        clearInterval(timer)
        setTimeout(() => {
          setCurrentSkillIndex((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [currentSkillIndex])

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 6 + "s"
      return particle
    }

    const heroSection = document.getElementById("home")
    if (heroSection) {
      const particlesContainer = document.createElement("div")
      particlesContainer.className = "particles"

      for (let i = 0; i < 20; i++) {
        particlesContainer.appendChild(createParticle())
      }

      heroSection.appendChild(particlesContainer)
    }

    return () => {
      const particles = document.querySelector(".particles")
      if (particles) {
        particles.remove()
      }
    }
  }, [])

  const handleSecretAccess = () => {
    if (passcode === "karthik2025") {
      setSecretAccess(true)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed navbar
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl gradient-text font-serif animate-glow">Karthik</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Services",
                "Testimonials",
                "Blog",
                "Gallery",
                "Contact",
              ].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 focus-ring animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="btn-magnetic focus-ring"
              >
                {darkMode ? <Sun className="h-5 w-5 animate-rotate" /> : <Moon className="h-5 w-5 animate-float" />}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden btn-magnetic focus-ring"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden glass-card border-t border-border/50 animate-slide-in-right">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Services",
                "Testimonials",
                "Blog",
                "Gallery",
                "Contact",
              ].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-all duration-300 w-full text-left hover-lift focus-ring animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="animate-bounce-in">
            <h1 className="text-responsive-4xl md:text-7xl font-bold font-serif mb-6">
              Hello, I'm <span className="gradient-text animate-glow">Karthik</span>
            </h1>
            <div className="text-responsive-xl md:text-2xl text-muted-foreground mb-8 h-8">
              {typingText}
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-responsive-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
              Passionate about creating exceptional digital experiences through innovative web development and
              thoughtful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="btn-magnetic neon-border text-shadow-black focus-ring"
              >
                Let's Work Together
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="btn-magnetic focus-ring"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground animate-float" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4 gradient-text">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Crafting digital solutions with passion and precision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src="/professional-developer-portrait.png"
                alt="Karthik"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-6">Building the Future, One Line at a Time</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating innovative web
                applications. My journey began with a curiosity about how websites work, and it has evolved into a deep
                expertise in modern web technologies.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I specialize in React, Next.js, and Node.js, with a keen eye for user experience and performance
                optimization. When I'm not coding, you'll find me exploring new technologies, contributing to open
                source, or mentoring aspiring developers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4 gradient-text">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-muted/30">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-responsive-3xl font-bold font-serif mb-4 gradient-text animate-glow">
        Featured Projects
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
        A showcase of my recent work and creative solutions
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card
          key={project.title}
          className="group hover-lift glass-card neon-border animate-scale-in focus-ring"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm" className="btn-magnetic">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Project
                </Button>
              </a>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-responsive-lg">{project.title}</CardTitle>
            <CardDescription className="text-responsive-sm">{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2 + techIndex * 0.1}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4 gradient-text">Experience & Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and continuous learning path
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full"></div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="animate-fade-in-up">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.company} • {exp.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4 gradient-text">Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive solutions for your digital needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Web Development",
                description: "Full-stack web applications using modern frameworks and best practices",
              },
              {
                icon: <User className="h-8 w-8" />,
                title: "UI/UX Design",
                description: "User-centered design that creates intuitive and engaging experiences",
              },
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Consulting",
                description: "Technical consulting and architecture planning for your projects",
              },
            ].map((service, index) => (
              <Card
                key={service.title}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4 gradient-text">What Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feedback from amazing people I've had the pleasure to work with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">"{testimonial.content}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4 gradient-text">Latest Blog Posts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.title}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     <section id="gallery" className="py-20">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-responsive-3xl font-bold font-serif mb-4 gradient-text animate-glow">
        KARTHIK'S Gallery
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
        Visual showcase of my creative work and projects
      </p>
    </div>

    <div className="masonry-grid">
      {[
        "/gallery/img1.jpg",
        "/gallery/img2.jpg",
        "/gallery/img3.jpg",
        "/gallery/img4.jpg",
        "/gallery/img5.jpg",
        "/gallery/img6.jpg",
        "/gallery/img7.jpg",
        "/gallery/img8.jpg",
        "/gallery/img9.jpg",
        "/gallery/img10.jpg",
        "/gallery/img11.jpg",
        "/gallery/img12.jpg",
      ].map((src, index) => (
        <div
          key={index}
          className="masonry-item relative group overflow-hidden rounded-lg hover-lift glass-card animate-scale-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <img
            src={src}
            alt={`Gallery item ${index + 1}`}
            className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <ImageIcon className="h-8 w-8 text-white animate-bounce-in" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Secret Media Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold font-serif mb-4 gradient-text flex items-center justify-center gap-2">
              <Lock className="h-8 w-8" />
              Exclusive Content
            </h2>
            <p className="text-muted-foreground mb-6">Access premium content and behind-the-scenes materials</p>
          </div>

          {!secretAccess ? (
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input
                  type="password"
                  placeholder="Enter access code"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleSecretAccess}>Access</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Hint: firstname + year</p>
            </div>
          ) : (
            <div className="animate-fade-in-up">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Exclusive Gallery</CardTitle>
                    <CardDescription>Behind-the-scenes project development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map((item) => (
                        <img
                          key={item}
                          src={`/exclusive-content-.jpg?height=150&width=150&query=exclusive content ${item}`}
                          alt={`Exclusive ${item}`}
                          className="w-full h-24 object-cover rounded"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Development Process</CardTitle>
                    <CardDescription>Time-lapse videos of coding sessions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="bg-muted rounded p-4 text-center">
                        <div className="text-2xl mb-2">🎥</div>
                        <p className="text-sm">Coding Session #1</p>
                        <p className="text-xs text-muted-foreground">Building React Components</p>
                      </div>
                      <div className="bg-muted rounded p-4 text-center">
                        <div className="text-2xl mb-2">🎥</div>
                        <p className="text-sm">Coding Session #2</p>
                        <p className="text-xs text-muted-foreground">API Integration</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold font-serif mb-4 gradient-text animate-glow">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
  <div className="animate-slide-in-left">
    <h3 className="text-responsive-2xl font-bold mb-6">Get in Touch</h3>
    <div className="space-y-4">
      
      {/* Email */}
      <a
        href="mailto:karthikv1222003@gmail.com"
        className="flex items-center gap-3 hover-lift p-3 rounded-lg glass-card"
      >
        <Mail className="h-5 w-5 text-primary animate-float" />
        <span className="text-responsive-base">karthikv1222003@gmail.com</span>
      </a>

      {/* Phone */}
      <a
        href="tel:+919663339089"
        className="flex items-center gap-3 hover-lift p-3 rounded-lg glass-card"
      >
        <Phone className="h-5 w-5 text-primary animate-float" />
        <span className="text-responsive-base">+91 9663339089</span>
      </a>

      {/* Location */}
      <a
        href="https://maps.google.com/?q=kote, kolar"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 hover-lift p-3 rounded-lg glass-card"
      >
        <MapPin className="h-5 w-5 text-primary animate-float" />
        <span className="text-responsive-base">kote, kolar</span>
      </a>
    </div>


              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-responsive-lg">Follow Me</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="btn-magnetic neon-border focus-ring bg-transparent">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="btn-magnetic neon-border focus-ring bg-transparent">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="btn-magnetic neon-border focus-ring bg-transparent">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="animate-fade-in-up glass-card neon-border">
              <CardHeader>
                <CardTitle className="text-responsive-xl">Send a Message</CardTitle>
                <CardDescription className="text-responsive-sm">I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form 
  className="space-y-4"
  onSubmit={(e) => {
    e.preventDefault();
    alert("Message sent! 🚀"); // replace with EmailJS, Formspree, or API call
  }}
>
  <div className="grid grid-cols-2 gap-4">
    <Input name="firstName" placeholder="First Name" className="focus-ring" />
    <Input name="lastName" placeholder="Last Name" className="focus-ring" />
  </div>
  <Input type="email" name="email" placeholder="Email Address" className="focus-ring" />
  <Input name="subject" placeholder="Subject" className="focus-ring" />
  <Textarea name="message" placeholder="Your Message" rows={5} className="focus-ring" />

  <Button 
    type="submit"
    className="w-full btn-magnetic neon-border text-black focus-ring"
  >
    <MessageSquare className="h-4 w-4 mr-2" />
    Send Message
  </Button>
</form>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="font-bold text-2xl gradient-text font-serif mb-4">Karthik</div>
            <p className="text-muted-foreground mb-6">
              Building exceptional digital experiences with passion and precision
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
            </div>
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground">
                © 2025 Karthik. All rights reserved. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
