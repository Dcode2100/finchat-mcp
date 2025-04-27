
import React from 'react';
import { cn } from '@/lib/utils';
import { Check, CheckCheck } from 'lucide-react';

export interface MessageProps {
  content: string;
  timestamp: string;
  type: 'sent' | 'received';
  status?: 'sending' | 'sent' | 'delivered' | 'read';
}

const ChatMessage = ({ content, timestamp, type, status = 'read' }: MessageProps) => {
  const isSent = type === 'sent';
  
  return (
    <div className={cn(
      "flex mb-4 w-full",
      isSent ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[75%] p-3 rounded-xl break-words",
        isSent 
          ? "bg-finchat-blue-DEFAULT text-blue-800 rounded-tr-none" 
          : "bg-white text-gray-800 rounded-tl-none shadow-sm"
      )}>
        <p className="whitespace-pre-wrap text-sm">{content}</p>
        <div className={cn(
          "flex items-center text-xs mt-1 gap-1",
          isSent ? "justify-end" : "justify-start",
          isSent ? "text-blue-700/70" : "text-gray-400"
        )}>
          <span>{timestamp}</span>
          {isSent && (
            status === 'sending' ? (
              <span className="opacity-50">•</span>
            ) : status === 'sent' ? (
              <Check className="h-3 w-3" />
            ) : status === 'delivered' ? (
              <CheckCheck className="h-3 w-3" />
            ) : (
              <CheckCheck className="h-3 w-3 text-finchat-blue-dark" />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
