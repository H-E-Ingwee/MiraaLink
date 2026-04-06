import { useAuthStore } from '../../store/useAuthStore';

const OfflineBanner = () => {
  const isOffline = useAuthStore((state) => state.isOffline);

  if (!isOffline) return null;

  return (
    <div className="sticky top-0 z-30 bg-slate-700 px-4 py-3 text-center text-sm text-white shadow-sm">
      You are offline. Showing saved data.
    </div>
  );
};

export default OfflineBanner;
