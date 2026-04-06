import { BookOpen, Home, ShoppingCart, User, Wallet } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

const tabs = [
  { path: '/dashboard', label: 'Soko', icon: <Home size={20} /> },
  { path: '/market', label: 'Market', icon: <ShoppingCart size={20} /> },
  { path: '/wallet', label: 'Pochi', icon: <Wallet size={20} /> },
  { path: '/learn', label: 'Soma', icon: <BookOpen size={20} /> },
  { path: '/profile', label: 'Profile', icon: <User size={20} /> }
];

const BottomNavBar = () => {
  const { user } = useAuthStore();

  if (!user) return null;

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 text-[11px] font-semibold transition ${
                isActive ? 'text-emerald-600' : 'text-slate-500'
              }`
            }
          >
            {tab.icon}
            <span>{tab.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavBar;
