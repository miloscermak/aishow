import React, { useState } from 'react';
import { MessageSquare, Send, Sparkles } from 'lucide-react';
import { askAIHost } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Ahoj! Jsem virtuální asistent Senty a Miloše. Zeptej se mě na cokoliv o show!' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!query.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setIsLoading(true);

    const response = await askAIHost(query);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border-4 border-pop-black shadow-hard mt-12 overflow-hidden">
      <div className="bg-pop-black text-white p-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-pop-yellow" />
        <h3 className="font-comic text-xl tracking-wide">Zeptej se AI (Powered by Gemini)</h3>
      </div>
      
      <div className="h-64 overflow-y-auto p-4 bg-gray-50 space-y-3">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 border-2 border-pop-black shadow-hard-sm rounded-lg ${
              msg.role === 'user' ? 'bg-pop-blue text-white' : 'bg-white text-pop-black'
            }`}>
              <p className="text-sm md:text-base">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-3 border-2 border-pop-black rounded-lg">
              <p className="text-sm italic text-gray-500">AI přemýšlí...</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t-4 border-pop-black bg-pop-yellow flex gap-2">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Co vás zajímá?"
          className="flex-1 p-2 border-2 border-pop-black outline-none focus:ring-2 focus:ring-pop-red"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className="bg-pop-red text-white p-2 border-2 border-pop-black hover:bg-red-600 active:translate-y-1 transition-all disabled:opacity-50"
        >
          <Send className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};