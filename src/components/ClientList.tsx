
import React from 'react';
import ClientListItem from './ClientListItem';
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';

const clients = [
  {
    id: '1',
    name: 'Sarah Johnson',
    accountId: 'ACC-20394',
    lastMessage: 'Thanks for the update on my investment portfolio',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    unreadCount: 3
  },
  {
    id: '2',
    name: 'Michael Chen',
    accountId: 'ACC-18475',
    lastMessage: 'When can we discuss the new savings plan?',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
    unreadCount: 0
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    accountId: 'ACC-93726',
    lastMessage: 'I\'ll need to transfer funds to my account',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    unreadCount: 1
  },
  {
    id: '4',
    name: 'David Thompson',
    accountId: 'ACC-54321',
    lastMessage: 'Looking forward to our meeting tomorrow',
    avatarUrl: 'https://i.pravatar.cc/150?img=4',
    unreadCount: 0
  },
  {
    id: '5',
    name: 'Lisa Wang',
    accountId: 'ACC-87654',
    lastMessage: 'Please send me the updated report',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    unreadCount: 0
  }
];

interface ClientListProps {
  activeClientId: string;
  setActiveClientId: (id: string) => void;
}

const ClientList = ({ activeClientId, setActiveClientId }: ClientListProps) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-bold text-blue-700 mb-3">Clients</h2>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search clients..." 
            className="pl-9 bg-white border-gray-200 rounded-lg focus-visible:ring-blue-400"
          />
        </div>
        <button className="w-full bg-finchat-green-light text-green-700 font-medium rounded-lg p-2 mb-4 flex items-center justify-center hover:bg-finchat-green-DEFAULT transition-colors duration-150">
          <Plus size={18} className="mr-1" />
          New Client
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {clients.map(client => (
          <ClientListItem
            key={client.id}
            name={client.name}
            accountId={client.accountId}
            lastMessage={client.lastMessage}
            avatarUrl={client.avatarUrl}
            isActive={activeClientId === client.id}
            onClick={() => setActiveClientId(client.id)}
            unreadCount={client.unreadCount}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientList;
