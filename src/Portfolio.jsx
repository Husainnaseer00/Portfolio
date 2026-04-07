import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Segoe UI', 'Trebuchet MS', sans-serif;
    background-color: #000;
    color: #fff;
  }
  
  h1, h2, h3 {
    font-family: 'Georgia', 'Garamond', serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
    border: none;
    font-family: inherit;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
`;

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
      highlights: ['120K+ daily data points processed', '89% prediction accuracy', 'Real-time market data ingestion'],
    },
    {
      id: 2,
      title: 'Social Media Engagement Optimizer',
      category: 'Content',
      description: 'AI-powered content recommendation system with engagement analytics and ranking models.',
      tech: ['OpenSearch', 'Python', 'AWS Lambda', 'Gradient Boosting', 'ML'],
      image: '🎯',
      highlights: ['18% engagement boost', 'Real-time recommendations', 'Ranking model optimization'],
    },
    {
      id: 3,
      title: 'Meme Coin Sentiment Analyzer',
      category: 'Fun',
      description: 'Hilarious project tracking sentiment of meme coins using Twitter/Reddit APIs and NLP.',
      tech: ['Twitter API', 'VADER Sentiment', 'Python', 'Reddit PRAW', 'Data Viz'],
      image: '🐕',
      highlights: ['DOGE/SHIB/PEPE tracking', 'Real-time sentiment scoring', '"To the moon! 🌙" detector'],
    },
  ];

  const NavBar = () => (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      transition: 'all 0.3s ease',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1.5rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          fontFamily: 'Georgia, serif',
        }}>HN</div>
        
        <div style={{
          display: 'none',
          gap: '2rem',
        }} className="desktop-nav">
          {['Home', 'Projects', 'Blog', 'About'].map((item) => (
            <button
              key={item}
              style={{
                color: '#d1d5db',
                backgroundColor: 'transparent',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              {item}
            </button>
          ))}
        </div>

        <button 
          style={{
            display: 'none',
            color: '#fff',
            backgroundColor: 'transparent',
          }}
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          backgroundColor: '#000',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {['Home', 'Projects', 'Blog', 'About'].map((item) => (
            <button
              key={item}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#d1d5db',
                backgroundColor: 'transparent',
                fontSize: '1rem',
                textAlign: 'left',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <section style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      padding: '5rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.1,
      }}>
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '80px',
          width: '288px',
          height: '288px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          filter: 'blur(80px)',
          mixBlendMode: 'multiply',
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '80px',
          width: '288px',
          height: '288px',
          backgroundColor: '#666',
          borderRadius: '50%',
          filter: 'blur(80px)',
          mixBlendMode: 'multiply',
        }}></div>
      </div>

      <div style={{
        maxWidth: '56rem',
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 10vw, 7rem)',
          fontFamily: 'Georgia, serif',
          fontWeight: 'bold',
          marginBottom: '2rem',
          lineHeight: 1.2,
        }}>
          Husain Naseer
        </h1>

        <p style={{
          fontSize: '1.5rem',
          color: '#d1d5db',
          marginBottom: '1.5rem',
          fontWeight: '600',
        }}>
          Data Engineer • AI Systems Builder
        </p>

        <p style={{
          fontSize: '1.125rem',
          color: '#9ca3af',
          marginBottom: '3rem',
          lineHeight: 1.5,
        }}>
          Building scalable data pipelines, machine learning systems, and real-time analytics solutions.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '3rem',
          justifyContent: 'center',
        }}>
          <button style={{
            padding: '0.75rem 2rem',
            backgroundColor: '#fff',
            color: '#000',
            fontWeight: '600',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s',
            width: 'fit-content',
            margin: '0 auto',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#e5e5e5';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#fff';
            e.target.style.transform = 'scale(1)';
          }}>
            View My Work <ArrowRight size={20} />
          </button>
          <button style={{
            padding: '0.75rem 2rem',
            border: '2px solid #fff',
            color: '#fff',
            fontWeight: '600',
            borderRadius: '0.5rem',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transition: 'all 0.3s',
            width: 'fit-content',
            margin: '0 auto',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#fff';
            e.target.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#fff';
          }}>
            Get in Touch
          </button>
        </div>

        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
        }}>
          <a href="https://github.com/Husainnaseer00" target="_blank" rel="noopener noreferrer" 
            style={{ color: '#9ca3af', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#fff'}
            onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/hnaseer2/" target="_blank" rel="noopener noreferrer"
            style={{ color: '#9ca3af', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#fff'}
            onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
            <Linkedin size={28} />
          </a>
          <a href="mailto:husainnaseer41@gmail.com"
            style={{ color: '#9ca3af', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#fff'}
            onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
            <Mail size={28} />
          </a>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite',
      }}>
        <ChevronDown size={32} style={{ color: '#fff' }} />
      </div>
    </section>
  );

  const ProjectsSection = () => (
    <section style={{
      backgroundColor: '#fff',
      padding: '5rem 1.5rem',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ color: '#000', fontSize: '0.875rem', fontWeight: '600', letterSpacing: '0.1em' }}>FEATURED WORK</p>
          <h2 style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#000', marginTop: '0.5rem' }}>
            Projects & Case Studies
          </h2>
          <p style={{ color: '#4b5563', marginTop: '1rem', maxWidth: '42rem' }}>
            Showcasing end-to-end data engineering, machine learning, and real-world impact.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        }}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: '#fff',
                border: '2px solid #000',
                borderRadius: '0.75rem',
                padding: '2rem',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{project.image}</div>
              <p style={{ color: '#000', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em' }}>● {project.category}</p>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#000', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                {project.title}
              </h3>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>{project.description}</p>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: '#000',
                      color: '#fff',
                      fontSize: '0.75rem',
                      borderRadius: '9999px',
                      fontWeight: '500',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.highlights.map((h) => (
                  <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: '#000', borderRadius: '50%' }}></div>
                    {h}
                  </div>
                ))}
              </div>

              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#000', fontWeight: '600', borderBottom: '2px solid #000', paddingBottom: '0.25rem', transition: 'gap 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.gap = '0.75rem'}
                onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}>
                Read Case Study <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const About = () => (
    <section style={{
      backgroundColor: '#000',
      padding: '5rem 1.5rem',
    }}>
      <div style={{
        maxWidth: '56rem',
        margin: '0 auto',
      }}>
        <p style={{ color: '#fff', fontSize: '0.875rem', fontWeight: '600', letterSpacing: '0.1em' }}>ABOUT ME</p>
        <h2 style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#fff', marginTop: '0.5rem', marginBottom: '2rem' }}>
          Background
        </h2>

        <div style={{
          display: 'grid',
          gap: '3rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>Experience</h3>
            <p style={{ color: '#d1d5db', lineHeight: 1.6, marginBottom: '1rem' }}>
              Data Engineer at Plus Materials (2022-2025), where I built ETL pipelines, implemented ranking models, and created real-time recommendation systems for analytics and AI applications.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: 1.6 }}>
              B.S. Computer Science from University of Georgia. Google Data Analytics Certified. Passionate about building scalable data systems.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>Tech Stack</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <p style={{ color: '#fff', fontWeight: '600', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Data & Analytics</p>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>BigQuery, dbt, SQL, Python, ETL/ELT</p>
              </div>
              <div>
                <p style={{ color: '#fff', fontWeight: '600', fontSize: '0.875rem', marginBottom: '0.5rem' }}>AI & ML</p>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>TensorFlow, Scikit-learn, VADER NLP, Sentiment Analysis</p>
              </div>
              <div>
                <p style={{ color: '#fff', fontWeight: '600', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Cloud & Infrastructure</p>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Google Cloud (BigQuery, Cloud Functions), AWS (Lambda, S3)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer style={{
      backgroundColor: '#fff',
      borderTop: '2px solid #000',
      padding: '3rem 1.5rem',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
      }}>
        <div>
          <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>© 2026 Husain Naseer. All rights reserved.</p>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/Husainnaseer00" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontSize: '0.875rem', fontWeight: '600', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#666'}
            onMouseLeave={(e) => e.target.style.color = '#000'}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/hnaseer2/" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontSize: '0.875rem', fontWeight: '600', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#666'}
            onMouseLeave={(e) => e.target.style.color = '#000'}>
            LinkedIn
          </a>
          <a href="mailto:husainnaseer41@gmail.com" style={{ color: '#000', fontSize: '0.875rem', fontWeight: '600', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#666'}
            onMouseLeave={(e) => e.target.style.color = '#000'}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );

  return (
    <div style={{
      backgroundColor: '#000',
      minHeight: '100vh',
      color: '#fff',
      fontFamily: "'Segoe UI', 'Trebuchet MS', sans-serif",
    }}>
      <style>{styles}</style>
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
      <NavBar />
      <Hero />
      <ProjectsSection />
      <About />
      <Footer />
    </div>
  );
}
