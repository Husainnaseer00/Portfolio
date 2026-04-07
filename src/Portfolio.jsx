import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Stock Market Price Prediction Pipeline',
      category: 'Finance',
      description: 'End-to-end ETL pipeline predicting stock prices using machine learning and BigQuery.',
      tech: ['BigQuery', 'Python', 'dbt', 'TensorFlow', 'API Integration'],
      image: '📈',
      link: '#',
      highlights: ['120K+ daily data points processed', '89% prediction accuracy', 'Real-time market data ingestion'],
    },
    {
      id: 2,
      title: 'Social Media Engagement Optimizer',
      category: 'Content',
      description: 'AI-powered content recommendation system with engagement analytics and ranking models.',
      tech: ['OpenSearch', 'Python', 'AWS Lambda', 'Gradient Boosting', 'ML'],
      image: '🎯',
      link: '#',
      highlights: ['18% engagement boost', 'Real-time recommendations', 'Ranking model optimization'],
    },
    {
      id: 3,
      title: 'Meme Coin Sentiment Analyzer 🚀',
      category: 'Fun',
      description: 'Hilarious project tracking sentiment of meme coins using Twitter/Reddit APIs and NLP.',
      tech: ['Twitter API', 'VADER Sentiment', 'Python', 'Reddit PRAW', 'Data Viz'],
      image: '🐕',
      link: '#',
      highlights: ['DOGE/SHIB/PEPE tracking', 'Real-time sentiment scoring', '"To the moon! 🌙" detector'],
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Building Real-Time Data Pipelines with BigQuery',
      category: 'Data Engineering',
      excerpt: 'A deep dive into ETL architecture, optimization techniques, and production best practices.',
      readTime: '8 min read',
      date: 'Coming Soon',
    },
    {
      id: 2,
      title: 'RAG Systems: Bridging LLMs and Your Data',
      category: 'AI/ML',
      excerpt: 'How to build retrieval-augmented generation systems that let AI reason over your documents.',
      readTime: '6 min read',
      date: 'Coming Soon',
    },
    {
      id: 3,
      title: 'Search Technology: From Keywords to Semantics',
      category: 'Search',
      excerpt: 'Exploring hybrid search, embeddings, and how modern systems find what users actually mean.',
      readTime: '7 min read',
      date: 'Coming Soon',
    },
  ];

  const NavBar = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur shadow-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-serif font-bold text-white">HN</div>
        
        <div className="hidden md:flex gap-8 text-sm">
          {['Home', 'Projects', 'Blog', 'About'].map((item) => (
            <button
              key={item}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              {item}
            </button>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="flex flex-col gap-4 p-6">
            {['Home', 'Projects', 'Blog', 'About'].map((item) => (
              <button
                key={item}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <section className="min-h-screen bg-black pt-20 pb-20 px-6 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h1 className="text-8xl md:text-9xl font-serif font-bold text-white mb-8 leading-tight">
          Husain Naseer
        </h1>

        <p className="text-2xl text-gray-300 mb-6 font-semibold">
          Data Engineer • AI Systems Builder
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Building scalable data pipelines, machine learning systems, and real-time analytics solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
            View My Work <ArrowRight size={20} />
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all">
            Get in Touch
          </button>
        </div>

        <div className="flex gap-6 justify-center">
          <a href="https://github.com/Husainnaseer00" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/hnaseer2/" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <Linkedin size={28} />
          </a>
          <a href="mailto:husainnaseer41@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={28} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  );

  const ProjectsSection = () => (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-black text-sm font-semibold tracking-wider">FEATURED WORK</span>
          <h2 className="text-5xl font-serif font-bold text-black mt-2">Projects & Case Studies</h2>
          <p className="text-gray-600 mt-4 max-w-2xl">Showcasing end-to-end data engineering, machine learning, and real-world impact.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white border-2 border-black rounded-xl p-8 hover:border-black hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animation: `slideIn 0.6s ease-out ${idx * 0.1}s both`,
              }}
            >
              <div className="text-5xl mb-4">{project.image}</div>
              <span className="text-black text-xs font-semibold tracking-wider">● {project.category}</span>
              <h3 className="text-2xl font-serif font-bold text-black mt-3 mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-6">{project.description}</p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-black text-white text-xs rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6 space-y-2">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    {h}
                  </div>
                ))}
              </div>

              <a href={project.link} className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all border-b-2 border-black pb-1">
                Read Case Study <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );

  const BlogSection = () => (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-black text-sm font-semibold tracking-wider">INSIGHTS & LEARNINGS</span>
          <h2 className="text-5xl font-serif font-bold text-black mt-2">Blog</h2>
          <p className="text-gray-700 mt-4">Technical deep-dives, project walkthroughs, and lessons from building data systems.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border-2 border-black rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-black text-xs font-semibold">● {post.category}</span>
                <span className="text-gray-600 text-xs">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-black mb-3 group-hover:underline transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="text-gray-600 text-sm">{post.date}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  const About = () => (
    <section className="bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-white text-sm font-semibold tracking-wider">ABOUT ME</span>
        <h2 className="text-5xl font-serif font-bold text-white mt-2 mb-8">Background</h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Experience</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Data Engineer at Plus Materials (2022-2025), where I built ETL pipelines, implemented ranking models, and created real-time recommendation systems for analytics and AI applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              B.S. Computer Science from University of Georgia. Google Data Analytics Certified. Passionate about building scalable data systems.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Tech Stack</h3>
            <div className="space-y-3">
              <div>
                <p className="text-white font-semibold text-sm mb-2">Data & Analytics</p>
                <p className="text-gray-400 text-sm">BigQuery, dbt, SQL, Python, ETL/ELT</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-2">AI & ML</p>
                <p className="text-gray-400 text-sm">TensorFlow, Scikit-learn, VADER NLP, Sentiment Analysis</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-2">Cloud & Infrastructure</p>
                <p className="text-gray-400 text-sm">Google Cloud (BigQuery, Cloud Functions), AWS (Lambda, S3)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-white border-t-2 border-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-gray-700 text-sm">© 2026 Husain Naseer. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/Husainnaseer00" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors text-sm font-semibold">
              GitHub
            </a>
            <a href="https://linkedin.com/in/hnaseer2/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors text-sm font-semibold">
              LinkedIn
            </a>
            <a href="mailto:husainnaseer41@gmail.com" className="text-black hover:text-gray-600 transition-colors text-sm font-semibold">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="bg-black min-h-screen text-white" style={{ fontFamily: "'Georgia', 'Garamond', serif" }}>
      <style>{`
        * {
          font-family: 'Segoe UI', 'Trebuchet MS', sans-serif;
        }
        .font-serif {
          font-family: 'Georgia', 'Garamond', 'Times New Roman', serif;
        }
        h1, h2, h3 {
          font-family: 'Georgia', 'Garamond', serif;
        }
      `}</style>

      <NavBar />
      <Hero />
      <ProjectsSection />
      <BlogSection />
      <About />
      <Footer />
    </div>
  );
}
