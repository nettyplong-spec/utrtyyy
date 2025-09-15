import { ReactNode } from "react";
import { BottomNavigation } from "./BottomNavigation";
import { MobileHeader } from "./MobileHeader";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="min-h-screen bg-background">
      <MobileHeader />
      <main className={`${isHome ? 'pt-0' : 'pt-16'} pb-20`}>
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};