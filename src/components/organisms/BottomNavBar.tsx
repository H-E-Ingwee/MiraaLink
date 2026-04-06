import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

const tabs = [
  { path: '/dashboard', label: 'Home', icon: '🏠' },
  { path: '/market', label: 'Market', icon: '🛒' },
  { path: '/wallet', label: 'Wallet', icon: '💼' },
  { path: '/learn', label: 'Learn', icon: '📚' },
  { path: '/profile', label: 'Profile', icon: '👤' }
];

const BottomNavBar = () => {
  const { user } = useAuthStore();

  if (!user) return null;

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 text-[11px] font-semibold transition ${
                isActive ? 'text-miraa-500' : 'text-slate-500'
              }`
            }
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavBar;
