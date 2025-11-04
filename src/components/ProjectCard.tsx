import React from 'react';
import type { Project } from '../types';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const placeholder = (title: string) => {
    const svg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#60a5fa"/>
          <stop offset="100%" stop-color="#a78bfa"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <g fill="white" font-family="Inter, Arial" text-anchor="middle">
        <text x="50%" y="48%" font-size="36" opacity="0.9">${title}</text>
        <text x="50%" y="60%" font-size="16" opacity="0.75">Project preview</text>
      </g>
    </svg>
  `);
    return `data:image/svg+xml;charset=utf-8,${svg}`;
};

interface Props {
    project: Project;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
    const { t } = useTranslation();

    return (
        <motion.article
            className="card project"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
        >
            <img
                className="project__thumb"
                src={project.imageDataUrl || placeholder(project.title)}
                alt={project.title}
                loading="lazy"
            />
            <div className="project__overlay">
                <h3 className="project__title">{project.title}</h3>
            </div>
            <div className="project__hover">
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {project.demoUrl && (
                        <a
                            className="btn"
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t('projects.demo')}
                        </a>
                    )}
                    {project.codeUrl && (
                        <a
                            className="btn btn--ghost"
                            href={project.codeUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t('projects.code')}
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
};
