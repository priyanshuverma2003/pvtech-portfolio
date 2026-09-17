'use client';

import { ExternalLink, Github, ShoppingBag, Palette, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';
import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      id: '01',
      title: 'Kirti4Arts - Full Stack Art Gallery & E-Commerce',
      date: 'April 2025',
      category: 'FULL-STACK PLATFORM',
      icon: Palette,
      metrics: ['E-COMMERCE FLOW', 'DYNAMIC PRODUCT PAGES', 'OPTIMIZED LOAD SPEED'],
      tech: ['Node.js', 'Express', 'HTML5', 'Vanilla CSS', 'JavaScript', 'REST APIs'],
      description:
        'A comprehensive full-stack e-commerce platform built for Kirti Arts, enabling artists to showcase and sell paintings online. Built with dynamic artwork cataloging, real-time pricing calculation, responsive product browsing, and ultra-fast asset delivery.',
      bullets: [
        'Engineered responsive online art gallery and e-commerce store with modular Vanilla CSS.',
        'Created dynamic product pages for paintings including high-res visual presentation, live pricing, and descriptions.',
        'Optimized server-side handlers and frontend rendering pipelines for seamless performance.',
      ],
      github: 'https://github.com/priyanshuverma2003',
      live: 'https://priyanshuverma2003.github.io/pvtech-portfolio/',
      color: 'purple',
    },
    {
      id: '02',
      title: 'Amazon Web Storefront Clone',
      date: 'Sept 2024 – Oct 2024',
      category: 'FRONTEND ARCHITECTURE',
      icon: ShoppingBag,
      metrics: ['MULTI-CATEGORY SEARCH', 'CART STATE SYNC', 'FLEXBOX & CSS GRID'],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'Flexbox', 'DOM Engineering'],
      description:
        'A high-fidelity Amazon-inspired e-commerce clone replicating core storefront capabilities: multi-category search navigation, product showcase grid, dynamic shopping cart preview, and cross-device mobile responsiveness.',
      bullets: [
        'Replicated Amazon UI layout including search bar, dynamic category dropdowns, and cart count.',
        'Implemented modern CSS Flexbox & CSS Grid for fluid responsiveness across all device viewports.',
        'Structured modular CSS and optimized DOM manipulation for silky-smooth 60fps interaction.',
      ],
      github: 'https://github.com/priyanshuverma2003',
      live: 'https://priyanshuverma2003.github.io/pvtech-portfolio/',
      color: 'cyan',
    },
  ];

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        {/* Editorial Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>[ 02 // SELECTED AGENCY WORKS ]</span>
          <h2 className={styles.sectionTitle}>FEATURED PROJECTS</h2>
          <p className={styles.sectionSub}>
            Real-world full-stack architectures and frontend web applications designed for scale, speed, and usability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsList}>
          {projects.map((proj) => {
            const IconComponent = proj.icon;
            return (
              <TiltCard key={proj.id} className={styles.projectCard}>
                {/* Top Bar */}
                <div className={styles.cardHeader}>
                  <div className={styles.badgeGroup}>
                    <span className={proj.color === 'purple' ? styles.tagPurple : styles.tagCyan}>
                      PROJECT // {proj.id}
                    </span>
                    <span className={styles.categoryBadge}>{proj.category}</span>
                  </div>
                  <span className={styles.dateTag}>{proj.date}</span>
                </div>

                {/* Title & Icon */}
                <div className={styles.titleRow}>
                  <div className={proj.color === 'purple' ? styles.iconWrapPurple : styles.iconWrapCyan}>
                    <IconComponent size={28} />
                  </div>
                  <div>
                    <h3 className={styles.projectTitle}>{proj.title}</h3>
                  </div>
                </div>

                {/* Metric Badges */}
                <div className={styles.metricsRow}>
                  {proj.metrics.map((m, idx) => (
                    <span key={idx} className={styles.metricBadge}>
                      <Sparkles size={12} className={styles.metricIcon} />
                      {m}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className={styles.projectDesc}>{proj.description}</p>

                {/* Highlights */}
                <ul className={styles.bulletPoints}>
                  {proj.bullets.map((point, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Footer */}
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
                      data-cursor="SOURCE"
                    >
                      <Github size={16} />
                      <span>CODE REPO</span>
                    </a>
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveButton}
                      data-cursor="LIVE"
                    >
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
