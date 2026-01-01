
import React, { useState } from 'react';
import Icon from '../Icon';

export const ApiSection: React.FC = () => {
  const [showKey, setShowKey] = useState(false);
  const [apiKey, setApiKey] = useState('sk_live_51M3pDq2x8L9vK4mN7jR');

  const toggleVisibility = () => setShowKey(!showKey);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    alert('API Key copied to clipboard!');
  };

  const generateNewKey = () => {
    const newKey = `sk_live_${Math.random().toString(36).substring(2, 15)}`;
    setApiKey(newKey);
    alert('New API Key generated!');
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-lg font-bold text-text-main dark:text-white">API Access & Documentation</h2>
        <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
          Active
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm border border-gray-50 dark:border-gray-800 flex flex-col gap-5">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
            <Icon name="key" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-text-main dark:text-white text-sm">Subscriber Data API</h3>
            <p className="text-xs text-text-sub dark:text-gray-400 mt-1 leading-relaxed">
              Use your secret key to pull subscriber contacts (WhatsApp, Telegram, Email) securely.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-1 pl-4 flex items-center justify-between border border-transparent focus-within:border-primary/50 transition-colors">
          <div className="flex-1 min-w-0 mr-2 py-2">
            <label className="block text-[10px] font-bold text-text-sub dark:text-gray-400 uppercase tracking-wider mb-0.5">
              Live Secret Key
            </label>
            <input
              className="bg-transparent border-none p-0 w-full text-sm font-mono text-text-main dark:text-white focus:ring-0 placeholder-gray-500 outline-none"
              readOnly
              type={showKey ? "text" : "password"}
              value={apiKey}
            />
          </div>
          <div className="flex items-center gap-1 pr-1">
            <button
              onClick={toggleVisibility}
              className="w-10 h-10 flex items-center justify-center text-text-sub hover:text-primary transition-colors rounded-lg hover:bg-black/5 dark:hover:bg-white/5 active:scale-90"
              title={showKey ? "Hide Key" : "Reveal Key"}
            >
              <Icon name={showKey ? 'visibility_off' : 'visibility'} className="text-xl" />
            </button>
            <button
              onClick={copyToClipboard}
              className="w-10 h-10 flex items-center justify-center text-text-sub hover:text-primary transition-colors rounded-lg hover:bg-black/5 dark:hover:bg-white/5 active:scale-90"
              title="Copy Key"
            >
              <Icon name="content_copy" className="text-xl" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={generateNewKey}
            className="py-3 px-4 rounded-xl bg-white dark:bg-gray-800 ring-1 ring-inset ring-gray-200 dark:ring-gray-700 text-text-main dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          >
            <Icon name="autorenew" className="text-lg text-primary group-hover:rotate-180 transition-transform duration-500" />
            Generate New Key
          </button>
          <a
            className="py-3 px-4 rounded-xl bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            href="#"
          >
            <Icon name="menu_book" className="text-lg" />
            API Documentation
          </a>
        </div>
      </div>
    </section>
  );
};
