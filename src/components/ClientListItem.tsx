
import React from 'react';
import { cn } from '@/lib/utils';

interface ClientListItemProps {
  name: string;
  accountId: string;
  lastMessage: string;
  avatarUrl: string;
  isActive: boolean;
  onClick: () => void;
  unreadCount?: number;
}

const ClientListItem = ({
  name,
  accountId,
  lastMessage,
  avatarUrl,
  isActive,
  onClick,
  unreadCount = 0
}: ClientListItemProps) => {
  return (
    <div 
      className={cn(
        "flex items-center p-3 mb-2 rounded-xl hover-scale hover-shadow cursor-pointer transition-colors duration-150",
        isActive ? "bg-finchat-blue-light" : "bg-white hover:bg-finchat-blue-light/30"
      )}
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={avatarUrl} 
          alt={name} 
          className="w-10 h-10 rounded-full object-cover border-2 border-white"
        />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-finchat-green-dark text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </div>
      <div className="ml-3 flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-blue-700 truncate">{name}</h3>
          <span className="text-xs text-gray-400">10:30</span>
        </div>
        <p className="text-xs text-gray-500">{accountId}</p>
        <p className="text-sm text-gray-600 truncate">{lastMessage}</p>
      </div>
    </div>
  );
};

export default ClientListItem;
