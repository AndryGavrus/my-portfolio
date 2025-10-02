import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  id?: string;
}

export const Section: React.FC<React.PropsWithChildren<Props>> = ({ title, subtitle, id, children }) => {
  return (
    <section className="section" id={id}>
      <h2 className="section__title">{title}</h2>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
      {children}
    </section>
  );
};
