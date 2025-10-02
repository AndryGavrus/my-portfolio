import React from 'react';
import { Section } from '../components/Section';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../components/ProjectCard';
import type { Project } from '../types';

const demoProjects: Project[] = [
  {
    id: 'p1',
    title: 'Dashboard UI',
    description: 'Modern analytics dashboard.',
    demoUrl: 'https://example.com/demo-dashboard',
    codeUrl: 'https://github.com/you/dashboard',
  },
  {
    id: 'p2',
    title: 'E-commerce',
    description: 'Shop with cart and checkout.',
    demoUrl: 'https://example.com/demo-shop',
    codeUrl: 'https://github.com/you/shop',
  },
  {
    id: 'p3',
    title: 'Portfolio',
    description: 'This portfolio template.',
    demoUrl: 'https://example.com/portfolio',
    codeUrl: 'https://github.com/you/portfolio',
  },
  {
    id: 'p4',
    title: 'Chat App',
    description: 'Realtime chat with websockets.',
    demoUrl: 'https://example.com/chat',
    codeUrl: 'https://github.com/you/chat',
  },
  {
    id: 'p5',
    title: 'Landing',
    description: 'Animated marketing page.',
    demoUrl: 'https://example.com/landing',
    codeUrl: 'https://github.com/you/landing',
  },
  {
    id: 'p6',
    title: 'Tasks',
    description: 'Kanban task manager.',
    demoUrl: 'https://example.com/tasks',
    codeUrl: 'https://github.com/you/tasks',
  },
];

export const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('projects.title')} subtitle={t('projects.subtitle')}>
      <div className="grid grid--3">
        {demoProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
};
