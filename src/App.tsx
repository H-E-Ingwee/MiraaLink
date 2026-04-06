import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthStore } from './store/useAuthStore';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import MarketPage from './pages/MarketPage';
import WalletPage from './pages/WalletPage';
import LearnPage from './pages/LearnPage';
import ProfilePage from './pages/ProfilePage';
import BottomNavBar from './components/organisms/BottomNavBar';
import OfflineBanner from './components/atoms/OfflineBanner';

const App = () => {
  const { user, setOffline } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    const updateOnlineStatus = () => setOffline(!navigator.onLine);
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, [setOffline]);

  const authRequired = !user && location.pathname !== '/auth' && location.pathname !== '/';

  return (
    <div className="min-h-screen bg-page text-slate-900">
      <OfflineBanner />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/auth" replace />} />
        <Route path="/market" element={user ? <MarketPage /> : <Navigate to="/auth" replace />} />
        <Route path="/wallet" element={user ? <WalletPage /> : <Navigate to="/auth" replace />} />
        <Route path="/learn" element={user ? <LearnPage /> : <Navigate to="/auth" replace />} />
        <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/auth" replace />} />
        <Route path="*" element={<Navigate to={authRequired ? '/auth' : '/'} replace />} />
      </Routes>
      {user && <BottomNavBar />}
    </div>
  );
};

export default App;
