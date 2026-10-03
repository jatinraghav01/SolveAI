import React from 'react';
import { AvailabilityStatus, LanguageStatus } from '@/types/anime';
import { Check, X, HelpCircle, Volume2, FileText } from 'lucide-react';

interface LanguageBadgeProps {
  language: string;
  data: LanguageStatus;
  type?: 'audio' | 'subtitle';
  isHindi?: boolean;
}

export default function LanguageBadge({
  language,
  data,
  type = 'audio',
  isHindi = false
}: LanguageBadgeProps) {
  const { status, notes } = data;

  const getStatusStyles = () => {
    switch (status) {
      case 'available':
        return {
          bg: isHindi ? 'bg-emerald-500/20 border-emerald-500/50' : 'bg-emerald-500/10 border-emerald-500/30',
          text: 'text-emerald-400',
          icon: <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
          label: 'Available'
        };
      case 'not_available':
        return {
          bg: 'bg-rose-500/10 border-rose-500/20',
          text: 'text-rose-400',
          icon: <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />,
          label: 'Not Available'
        };
      case 'unknown':
      default:
        return {
          bg: 'bg-amber-500/10 border-amber-500/30',
          text: 'text-amber-300',
          icon: <HelpCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />,
          label: 'Unable to verify'
        };
    }
  };

  const style = getStatusStyles();

  return (
    <div
      className={`inline-flex flex-col p-2.5 rounded-xl border ${style.bg} transition-all duration-200 ${
        isHindi && status === 'available' ? 'ring-1 ring-emerald-500/30 shadow-md shadow-emerald-500/10' : ''
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          {type === 'audio' ? (
            <Volume2 className="w-3.5 h-3.5 text-gray-400" />
          ) : (
            <FileText className="w-3.5 h-3.5 text-gray-400" />
          )}
          <span className={`text-xs font-semibold ${isHindi ? 'text-white font-bold' : 'text-gray-200'}`}>
            {language}
          </span>
          {isHindi && (
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold uppercase tracking-wider">
              Primary
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          {style.icon}
          <span className={`text-xs font-medium ${style.text}`}>
            {style.label}
          </span>
        </div>
      </div>
      
      {notes && (
        <span className="text-[11px] text-gray-400 mt-1 italic line-clamp-1">
          {notes}
        </span>
      )}
    </div>
  );
}
