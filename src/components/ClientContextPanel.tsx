
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ClientContextPanelProps {
  client: {
    id: string;
    name: string;
    accountId: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}

const ClientContextPanel = ({ client, isOpen, onToggle }: ClientContextPanelProps) => {
  return (
    <div className={cn(
      "h-full flex flex-col bg-white rounded-lg shadow-sm transition-all duration-300",
      isOpen ? "w-80" : "w-0 opacity-0"
    )}>
      <div className="relative">
        <button 
          onClick={onToggle}
          className="absolute -left-10 top-2 bg-finchat-blue-light text-blue-700 p-2 rounded-full shadow-md hover:bg-finchat-blue-DEFAULT transition-colors duration-150"
        >
          <ChevronRight className={cn(
            "h-5 w-5 transition-transform duration-150",
            !isOpen && "rotate-180"
          )} />
        </button>

        <Tabs defaultValue="info" className="w-full">
          <TabsList className="w-full rounded-t-lg bg-finchat-blue-light grid grid-cols-4">
            <TabsTrigger value="info" className="text-sm">Info</TabsTrigger>
            <TabsTrigger value="history" className="text-sm">History</TabsTrigger>
            <TabsTrigger value="notes" className="text-sm">Notes</TabsTrigger>
            <TabsTrigger value="scripts" className="text-sm">Scripts</TabsTrigger>
          </TabsList>
          
          <ScrollArea className="h-[calc(100vh-130px)] p-4">
            <TabsContent value="info" className="mt-0">
              <h3 className="text-lg font-semibold text-blue-700">Client Information</h3>
              <div className="mt-3 space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Contact Details</h4>
                  <p className="text-sm mt-1">example@client.com</p>
                  <p className="text-sm">(555) 123-4567</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Account Manager</h4>
                  <p className="text-sm mt-1">Alex Rodriguez</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Account Status</h4>
                  <div className="flex items-center mt-1">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-green-700 font-medium">Active</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Portfolio Value</h4>
                  <p className="text-base font-medium mt-1">$328,450.78</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="mt-0">
              <h3 className="text-lg font-semibold text-blue-700">Interaction History</h3>
              <div className="mt-3 space-y-4">
                <div className="border-l-2 border-finchat-blue-DEFAULT pl-3 py-1">
                  <p className="text-sm font-medium">Portfolio Review Call</p>
                  <p className="text-xs text-gray-500">April 18, 2025 - 11:30 AM</p>
                  <p className="text-sm mt-1">Discussed Q1 performance and rebalancing strategy. Client interested in sustainable investments.</p>
                </div>
                
                <div className="border-l-2 border-finchat-blue-DEFAULT pl-3 py-1">
                  <p className="text-sm font-medium">Advisory Meeting</p>
                  <p className="text-xs text-gray-500">March 5, 2025 - 2:00 PM</p>
                  <p className="text-sm mt-1">Reviewed retirement planning goals. Adjusted risk tolerance profile.</p>
                </div>
                
                <div className="border-l-2 border-finchat-blue-DEFAULT pl-3 py-1">
                  <p className="text-sm font-medium">Account Setup</p>
                  <p className="text-xs text-gray-500">January 12, 2025 - 9:15 AM</p>
                  <p className="text-sm mt-1">Completed onboarding process and initial investment allocation.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="notes" className="mt-0">
              <h3 className="text-lg font-semibold text-blue-700">Client Notes</h3>
              <div className="mt-3 space-y-4">
                <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-100">
                  <p className="text-xs text-gray-500">April 20, 2025</p>
                  <p className="text-sm mt-1">Client mentioned interest in tech sector ETFs for next allocation.</p>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-100">
                  <p className="text-xs text-gray-500">March 8, 2025</p>
                  <p className="text-sm mt-1">Children's college fund is a priority. Planning for 2028 enrollment.</p>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-100">
                  <p className="text-xs text-gray-500">February 15, 2025</p>
                  <p className="text-sm mt-1">Prefers communication via WhatsApp. Best time to reach: afternoons.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="scripts" className="mt-0">
              <h3 className="text-lg font-semibold text-blue-700">Call Scripts</h3>
              <div className="mt-3 space-y-4">
                <div className="bg-finchat-green-light/50 rounded-lg p-3 border border-finchat-green-light">
                  <p className="text-sm font-medium text-green-700">Quarterly Review</p>
                  <p className="text-sm mt-2 text-gray-700">
                    "Hello [Client Name], I'm calling regarding your quarterly portfolio review. Your investments have [grown/declined] by X% this quarter, [outperforming/underperforming] the market by Y%. I'd like to discuss some adjustments to optimize your portfolio based on current market trends."
                  </p>
                </div>
                
                <div className="bg-finchat-green-light/50 rounded-lg p-3 border border-finchat-green-light">
                  <p className="text-sm font-medium text-green-700">Retirement Planning</p>
                  <p className="text-sm mt-2 text-gray-700">
                    "Based on your retirement timeline and goals, I've analyzed your current contribution rate. To meet your target retirement income of $X per month, we should consider [increasing contributions/adjusting allocation/adding specific investment vehicle]."
                  </p>
                </div>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </div>
  );
};

export default ClientContextPanel;
