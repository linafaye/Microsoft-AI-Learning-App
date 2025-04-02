
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Activity, Settings } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-border px-6 pb-2 pt-2 z-10">
      <div className="flex justify-between items-center">
        <NavItem 
          to="/" 
          icon={<Home size={24} />} 
          label="Home" 
          isActive={isActive('/')} 
        />
        <NavItem 
          to="/explore" 
          icon={<Search size={24} />} 
          label="Explore" 
          isActive={isActive('/explore')} 
        />
        <NavItem 
          to="/progress" 
          icon={<Activity size={24} />} 
          label="Progress" 
          isActive={isActive('/progress')} 
        />
        <NavItem 
          to="/settings" 
          icon={<Settings size={24} />} 
          label="Settings" 
          isActive={isActive('/settings')} 
        />
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem = ({ to, icon, label, isActive }: NavItemProps) => {
  return (
    <Link 
      to={to} 
      className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg transition-colors ${
        isActive 
          ? 'text-brand-purple' 
          : 'text-gray-500 hover:text-brand-purple'
      }`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default BottomNav;
