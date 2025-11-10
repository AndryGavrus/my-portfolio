import React from 'react';
import type { Project } from '../types';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { generatePlaceholderImage } from '../utils';
import { slideInConfig } from '../config/animations';

interface Props {
    project: Project;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
    const { t } = useTranslation();

    return (
        <motion.article
            className="card project"
            {...slideInConfig}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
        >
            <img
                className="project__thumb"
                src={project.imageDataUrl || generatePlaceholderImage(project.title)}
                alt={project.title}
                loading="lazy"
            />
            <div className="project__overlay">
                <h3 className="project__title">{project.title}</h3>
            </div>
            <div className="project__hover">
                <div className="project-hover-content">
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
