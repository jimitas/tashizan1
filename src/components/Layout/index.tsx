import React from "react";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="body flex flex-col min-h-screen">
      <main className="container mx-auto flex-grow mt-8 md:mt-10 lg:mt-12">
        <div className="mt-5 text-2xl md:text-3xl lg:text-4xl text-center font-bold">{title}</div>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
