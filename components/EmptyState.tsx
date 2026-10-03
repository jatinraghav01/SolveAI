import React from 'react';
import { SearchX, AlertTriangle, HelpCircle, RefreshCw } from 'lucide-react';

interface EmptyStateProps {
  type?: 'not_found' | 'error' | 'unverified';
  title?: string;
  description?: string;
  onReset?: () => void;
}

export default function EmptyState({
  type = 'not_found',
  title,
  description,
  onReset
}: EmptyStateProps) {
  const getDetails = () => {
    switch (type) {
      case 'error':
        return {
          icon: <AlertTriangle className="w-10 h-10 text-rose-400" />,
          defaultTitle: 'Something went wrong. Please try again.',
          defaultDesc: 'We encountered an error while searching for streaming information.',
          buttonText: 'Retry Search',
        };
      case 'unverified':
        return {
          icon: <HelpCircle className="w-10 h-10 text-amber-400" />,
          defaultTitle: 'Current availability could not be verified.',
          defaultDesc: 'Licensing rights for this title could not be confirmed with 100% confidence. Fake data is never shown.',
          buttonText: 'Try Another Title',
        };
      case 'not_found':
      default:
        return {
          icon: <SearchX className="w-10 h-10 text-accent-cyan" />,
          defaultTitle: 'Anime not found',
          defaultDesc: 'We couldn’t find matching anime records. Try checking the title spelling or searching for another popular anime.',
          buttonText: 'Clear Search',
        };
    }
  };

  const details = getDetails();

  return (
    <div className="w-full bg-dark-card border border-dark-border rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center my-6 shadow-xl">
      <div className="p-4 rounded-2xl bg-dark-bg border border-dark-border mb-4 shadow-inner">
        {details.icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-2">
        {title || details.defaultTitle}
      </h3>

      <p className="text-sm text-gray-400 max-w-md mb-6 leading-relaxed">
        {description || details.defaultDesc}
      </p>

      {onReset && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-bg hover:bg-dark-cardHover text-white font-medium text-sm border border-dark-border hover:border-accent-purple/50 transition-all duration-200"
        >
          <RefreshCw className="w-4 h-4 text-accent-cyan" />
          <span>{details.buttonText}</span>
        </button>
      )}
    </div>
  );
}
