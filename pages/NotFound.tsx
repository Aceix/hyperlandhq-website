import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="bg-white px-6 pt-40 pb-40 flex flex-col items-center text-center">
      <SEO
        title="Page Not Found | HyperlandHQ"
        description="The page you're looking for doesn't exist or has moved."
        path="/404"
        noindex
      />
      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.4em] block mb-6">
        404
      </span>
      <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight leading-tight mb-8">
        Page not found
      </h1>
      <p className="text-neutral-500 max-w-md mb-10">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center bg-neutral-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-neutral-800 transition-colors text-[13px]"
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
