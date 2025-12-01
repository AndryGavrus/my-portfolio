import type { Project } from '../types';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { generatePlaceholderImage } from '../utils';
import { slideInConfig } from '../config/animations';
import { LinkAsButtton } from './LinkAsButtton';

type Props = {
    project: Project;
};

export const ProjectCard = ({ project }: Props) => {
    const { t } = useTranslation();

    return (
        <motion.article
            className="card project"
            {...slideInConfig}
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
                        <LinkAsButtton
                            className='btn'
                            link={project.demoUrl}
                            desc="projects.demo"
                        />

                    )}
                    {project.codeUrl && (
                        <LinkAsButtton
                            className='btn btn--ghost'
                            link={project.codeUrl}
                            desc="projects.code"
                        />

                    )}
                    {!project.demoUrl && !project.codeUrl && (
                        <p className="project__description">{t('projects.note')}</p>
                    )}
                </div>
            </div>
        </motion.article>
    );
};
