import React, { useState } from 'react';
import ClientList from '@/components/ClientList';
import ChatWindow from '@/components/ChatWindow';
import ClientContextPanel from '@/components/ClientContextPanel';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

const clients = [
  {
    id: '1',
    name: 'Sarah Johnson',
    accountId: 'ACC-20394',
    avatarUrl: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: '2',
    name: 'Michael Chen',
    accountId: 'ACC-18475',
    avatarUrl: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    accountId: 'ACC-93726',
    avatarUrl: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: '4',
    name: 'David Thompson',
    accountId: 'ACC-54321',
    avatarUrl: 'https://i.pravatar.cc/150?img=4'
  },
  {
    id: '5',
    name: 'Lisa Wang',
    accountId: 'ACC-87654',
    avatarUrl: 'https://i.pravatar.cc/150?img=5'
  }
];

const Index = () => {
  const [activeClientId, setActiveClientId] = useState(clients[0].id);
  const [contextPanelOpen, setContextPanelOpen] = useState(false);

  const activeClient = clients.find(client => client.id === activeClientId) || clients[0];

  return (
    <div className="h-screen bg-gray-100 p-4">
      <ResizablePanelGroup direction="horizontal" className="h-full rounded-xl bg-white shadow-lg overflow-hidden">
        {/* Left panel - Client list */}
        <ResizablePanel defaultSize={25} minSize={20} maxSize={30} className="overflow-hidden">
          <div className="h-full overflow-y-auto">
            <ClientList 
              activeClientId={activeClientId}
              setActiveClientId={setActiveClientId}
            />
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Main chat area */}
        <ResizablePanel defaultSize={75} className="overflow-hidden">
          <div className="h-full flex min-h-0">
            <div className="flex-1 min-w-0">
              <ChatWindow client={activeClient} />
            </div>
            
            {/* Right sidebar - Context panel */}
            <div className="h-full relative flex">
              <ClientContextPanel 
                client={activeClient}
                isOpen={contextPanelOpen}
                onToggle={() => setContextPanelOpen(!contextPanelOpen)}
              />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Index;
