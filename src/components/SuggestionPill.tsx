
import React from 'react';
import { cn } from '@/lib/utils';

interface SuggestionPillProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const SuggestionPill = ({ text, onClick, className }: SuggestionPillProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-finchat-blue-light text-blue-700 rounded-full px-4 py-1 text-sm font-medium",
        "hover:bg-blue-200 transition-colors duration-150 whitespace-nowrap animate-fade-in",
        className
      )}
    >
      {text}
    </button>
  );
};

export default SuggestionPill;
