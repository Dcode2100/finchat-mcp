
import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import ChatMessage, { MessageProps } from './ChatMessage';
import SuggestionPill from './SuggestionPill';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Client {
  id: string;
  name: string;
  accountId: string;
  avatarUrl: string;
}

interface ChatWindowProps {
  client: Client;
}

const initialMessages: MessageProps[] = [
  {
    content: "Good morning! I noticed there's been a significant uptick in your portfolio performance this week.",
    timestamp: "09:30",
    type: "sent",
    status: "read"
  },
  {
    content: "That's great news! What contributed to the growth?",
    timestamp: "09:32",
    type: "received"
  },
  {
    content: "Several of your tech investments performed well after recent product announcements. Also, the global market rebounded after the Fed's statement.",
    timestamp: "09:35",
    type: "sent",
    status: "read"
  },
  {
    content: "Should we consider rebalancing the portfolio to take advantage of this trend?",
    timestamp: "09:40",
    type: "received"
  }
];

const suggestions = [
  "I'd recommend reviewing your portfolio allocation next week when the market stabilizes.",
  "We could schedule a call to discuss investment opportunities in the renewable energy sector.",
  "Your quarterly performance report is ready. Would you like me to send it over?",
  "Based on your financial goals, I suggest increasing your retirement contributions by 5%.",
  "Have you considered our new high-yield savings account option?"
];

const ChatWindow = ({ client }: ChatWindowProps) => {
  const [messages, setMessages] = useState<MessageProps[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [activeSuggestions, setActiveSuggestions] = useState(suggestions);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMessage: MessageProps = {
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      type: "sent",
      status: "sending"
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputValue("");
    
    // Simulate message status updates
    setTimeout(() => {
      setMessages(prev => 
        prev.map((msg, i) => 
          i === prev.length - 1 ? {...msg, status: "sent"} : msg
        )
      );
    }, 1000);
    
    setTimeout(() => {
      setMessages(prev => 
        prev.map((msg, i) => 
          i === prev.length - 1 ? {...msg, status: "delivered"} : msg
        )
      );
    }, 2000);
    
    setTimeout(() => {
      setMessages(prev => 
        prev.map((msg, i) => 
          i === prev.length - 1 ? {...msg, status: "read"} : msg
        )
      );
      
      // Add simulated response after message is read
      if (Math.random() > 0.5) {
        setTimeout(() => {
          const clientResponse: MessageProps = {
            content: activeSuggestions[Math.floor(Math.random() * activeSuggestions.length)].substring(0, 50) + "...",
            timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            type: "received"
          };
          setMessages(prev => [...prev, clientResponse]);
        }, 3000);
      }
    }, 3500);
    
    // Generate new suggestions based on the message
    setActiveSuggestions(suggestions.sort(() => Math.random() - 0.5).slice(0, 3));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-window flex flex-col h-full max-h-screen bg-gray-50 rounded-lg overflow-hidden shadow-sm">
      {/* Enhanced Chat Header */}
      <div className="bg-finchat-blue-light rounded-t-lg p-4 flex items-center space-x-4 shadow-sm flex-shrink-0">
        <div className="flex items-center space-x-3">
          <img 
            src={client.avatarUrl} 
            alt={client.name} 
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
          />
          <div>
            <h2 className="text-xl font-bold text-blue-800 tracking-tight">{client.name}</h2>
            <p className="text-sm text-blue-600 opacity-80">{client.accountId}</p>
          </div>
        </div>
        <div className="ml-auto">
          <MessageCircle className="w-6 h-6 text-blue-700 opacity-70" />
        </div>
      </div>
      
      {/* Messages container with fixed width/scroll */}
      <ScrollArea className="flex-1 p-4 bg-gray-100">
        <div className="space-y-4 max-w-full pb-2 px-2">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              content={message.content}
              timestamp={message.timestamp}
              type={message.type}
              status={message.status}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      {/* Suggestions area */}
      <div className="bg-gray-100 px-4 py-3 flex-shrink-0 border-t border-gray-200">
        <div className="overflow-x-auto whitespace-nowrap py-1">
          <div className="flex gap-2 items-center">
            {activeSuggestions.map((suggestion, index) => (
              <SuggestionPill 
                key={index}
                text={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Input area with improved layout */}
      <div className="p-3 bg-white border-t border-gray-200 rounded-b-lg flex-shrink-0">
        <div className="flex items-end gap-3 ">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 min-h-[60px] max-h-[100px] resize-none rounded-lg border-gray-300 focus-visible:ring-blue-400"
          />
          <Button 
            onClick={handleSend} 
            disabled={!inputValue.trim()}
            className="bg-finchat-green-light text-green-700 hover:bg-finchat-green-DEFAULT rounded-lg px-4 py-3 h-[60px]"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
