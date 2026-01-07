import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#C5A572] mb-4">404</h1>
        <h2 className="text-2xl text-[#fffef8] mb-6">Page Not Found</h2>
        <p className="text-[#b8b8b8] mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-[#C5A572] text-[#0a0a0a] px-8 py-3 rounded-lg font-semibold hover:bg-[#d4b885] transition-colors duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;