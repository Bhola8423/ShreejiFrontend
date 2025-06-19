import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import FloatingContact from '../components/common/FloatingContact';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {children}
        <FloatingContact />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;