'use client';

import { ExternalLink, Github, ShoppingBag, Palette, ArrowUpRight } from 'lucide-react';
import TiltCard from './TiltCard';
import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      id: '01',
      title: 'Kirti4Arts - Full Stack Art Gallery Platform',
      date: 'April 2025',
      category: 'FULL-STACK E-COMMERCE',
      icon: Palette,
      tech: ['Node.js', 'HTML5', 'Vanilla CSS', 'JavaScript', 'REST APIs', 'Express'],
      description:
        'A full-stack e-commerce web platform for Kirti Arts enabling artists to showcase and sell paintings online. Features artwork catalog browsing, dynamic product pages with detailed pricing, responsive shopping interface, and optimized performance.',
      bullets: [
        'Built dynamic product pages for paintings with rich visual presentation and real-time pricing.',
        'Engineered responsive online gallery UI using HTML5 and pure Vanilla CSS.',
        'Optimized frontend asset loading and backend API handlers for maximum speed.',
      ],
      github: 'https://github.com/priyanshuverma2003',
      live: '#',
      color: 'purple',
    },
    {
      id: '02',
      title: 'Amazon Clone (Frontend UI)',
      date: 'Sept 2024 – Oct 2024',
      category: 'FRONTEND ARCHITECTURE',
      icon: ShoppingBag,
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'CSS Grid', 'DOM Manipulation'],
      description:
        'A pixel-perfect responsive Amazon e-commerce clone replicating core storefront capabilities: multi-category navigation bar, live product search interface, product grid, cart preview, and cross-device mobile responsiveness.',
      bullets: [
        'Replicated Amazon UI layout including search bar, dynamic category dropdowns, and cart count.',
        'Implemented modern CSS Flexbox & CSS Grid for fluid responsiveness across screen sizes.',
        'Optimized cross-browser rendering and mobile navigation UX.',
      ],
      github: 'https://github.com/priyanshuverma2003',
      live: '#',
      color: 'cyan',
    },
  ];

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>[ 02 // FEATURED WORKS ]</span>
          <h2 className={styles.sectionTitle}>CREATIVE PROJECTS</h2>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsList}>
          {projects.map((proj) => {
            const IconComponent = proj.icon;
            return (
              <TiltCard key={proj.id} className={styles.projectCard}>
                <div className={styles.cardTop}>
                  <div className={styles.badgeRow}>
                    <span className={proj.color === 'purple' ? styles.tagPurple : styles.tagCyan}>
                      [{proj.id}] // {proj.category}
                    </span>
                    <span className={styles.dateTag}>{proj.date}</span>
                  </div>

                  <div className={styles.titleRow}>
                    <div className={proj.color === 'purple' ? styles.iconWrapPurple : styles.iconWrapCyan}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className={styles.projectTitle}>{proj.title}</h3>
                  </div>

                  <p className={styles.projectDesc}>{proj.description}</p>

                  <ul className={styles.bulletPoints}>
                    {proj.bullets.map((point, idx) => (
                      <li key={idx}>
                        <span className={styles.bulletDot} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardBottom}>
                  <div className={styles.techTags}>
                    {proj.tech.map((t) => (
                      <span key={t} className={styles.techChip}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={styles.linkGroup}>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}
                    >
                      <Github size={16} />
                      <span>SOURCE</span>
                    </a>
                    <a href={proj.live} className={styles.liveButton}>
                      <span>LIVE DEMO</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
