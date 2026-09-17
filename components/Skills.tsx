'use client';

import { Layout, Server, Wrench, Code } from 'lucide-react';
import TiltCard from './TiltCard';
import styles from './Skills.module.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Engineering',
      icon: Layout,
      tag: '[ FRONTEND ]',
      skills: [
        { name: 'HTML5', level: 'Expert', desc: 'Semantic markup, accessibility, DOM structures' },
        { name: 'CSS3 / Vanilla CSS', level: 'Expert', desc: 'Flexbox, Grid, CSS animations, Responsive Design' },
        { name: 'React.js', level: 'Advanced', desc: 'Hooks, state management, component architecture' },
        { name: 'Next.js', level: 'Advanced', desc: 'App router, SSR, SSG, performance optimization' },
      ],
      color: 'cyan',
    },
    {
      title: 'Backend & Database',
      icon: Server,
      tag: '[ BACKEND ]',
      skills: [
        { name: 'Node.js', level: 'Advanced', desc: 'Server runtime, async event loop, Express APIs' },
        { name: 'JavaScript (ES6+)', level: 'Expert', desc: 'Async/await, promises, functional JS' },
        { name: 'MongoDB', level: 'Proficient', desc: 'NoSQL document modeling, indexing' },
        { name: 'Mongoose', level: 'Proficient', desc: 'Schema validation, middleware, ODM queries' },
      ],
      color: 'purple',
    },
    {
      title: 'Tools & Protocols',
      icon: Wrench,
      tag: '[ WORKFLOW ]',
      skills: [
        { name: 'Git & GitHub', level: 'Expert', desc: 'Branching, PRs, version control workflows' },
        { name: 'SQL', level: 'Proficient', desc: 'Relational data queries, join operations' },
        { name: 'REST APIs', level: 'Advanced', desc: 'API endpoints, JSON payload handling, HTTP methods' },
        { name: 'DOM Optimization', level: 'Advanced', desc: 'Asset minification, bundle optimization, DOM cleanup' },
      ],
      color: 'green',
    },
  ];

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>[ 03 // TECHNICAL STACK ]</span>
          <h2 className={styles.sectionTitle}>SKILLS MATRIX</h2>
        </div>

        {/* Categories Grid */}
        <div className={styles.grid}>
          {skillCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <TiltCard key={cat.title} className={styles.categoryCard}>
                <div className={styles.categoryHeader}>
                  <div className={styles.iconBox}>
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <span className={styles.categoryTag}>{cat.tag}</span>
                    <h3 className={styles.categoryTitle}>{cat.title}</h3>
                  </div>
                </div>

                <div className={styles.skillsList}>
                  {cat.skills.map((s) => (
                    <div key={s.name} className={styles.skillItem}>
                      <div className={styles.skillTop}>
                        <span className={styles.skillName}>{s.name}</span>
                        <span className={styles.skillLevel}>{s.level}</span>
                      </div>
                      <p className={styles.skillDesc}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
