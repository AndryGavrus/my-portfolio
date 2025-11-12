import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main className="main">
                <div className="container">{children}</div>
            </main>
            <Footer />
        </>
    );
};
