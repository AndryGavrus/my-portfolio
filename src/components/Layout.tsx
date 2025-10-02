import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="app-root">
      <Header />
      <main className="main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
