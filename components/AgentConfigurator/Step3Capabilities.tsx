
import React from 'react';
import Icon from '../Icon';
import { AgentFormData } from './types';

interface Props {
  data: AgentFormData;
  onUpdate: (updates: Partial<AgentFormData>) => void;
}

const Step3Capabilities: React.FC<Props> = ({ data, onUpdate }) => {
  const removeCapability = (cap: string) => {
    onUpdate({ capabilities: data.capabilities.filter(c => c !== cap) });
  };

  const addCapability = () => {
    const newCap = prompt("Enter new capability:");
    if (newCap && !data.capabilities.includes(newCap)) {
      onUpdate({ capabilities: [...data.capabilities, newCap] });
    }
  };

  return (
    <div className="flex flex-col px-4 pt-6 gap-8 pb-32">
      {/* Step Header */}
      <div className="px-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-text-main-light dark:text-white">Step 3 of 4</span>
          <span className="text-xs font-medium text-text-sub-light dark:text-gray-400">75% Completed</span>
        </div>
        <div className="h-2 w-full bg-[#dbdee6] dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-500 ease-out" style={{ width: '75%' }}></div>
        </div>
      </div>

      {/* Agent Capabilities Section */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2 px-2">
          <div className="w-1 h-5 bg-primary rounded-full"></div>
          <h2 className="text-lg font-bold text-text-main-light dark:text-white leading-tight">Agent Capabilities</h2>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-5 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-base font-semibold text-text-main-light dark:text-white">Capabilities</h3>
              <p className="text-xs text-text-sub-light dark:text-gray-400 mt-1">Define what tasks this agent can handle.</p>
            </div>
            <button
              onClick={addCapability}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Icon name="add" className="text-lg" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.capabilities.map(cap => (
              <div key={cap} className="flex items-center gap-2 pl-3 pr-2 py-1.5 bg-field-light dark:bg-field-dark rounded-full border border-transparent hover:border-primary/20 transition-colors group">
                <span className="text-sm font-medium text-text-main-light dark:text-white">{cap}</span>
                <button
                  onClick={() => removeCapability(cap)}
                  className="p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-text-sub-light transition-colors"
                >
                  <Icon name="close" className="text-sm" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Access Section */}
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 px-2">
            <div className="w-1 h-5 bg-primary rounded-full"></div>
            <h2 className="text-lg font-bold text-text-main-light dark:text-white leading-tight">Agent Access</h2>
          </div>
          <p className="text-sm text-text-sub-light dark:text-gray-400 px-2 mt-1 ml-3">How can users access your agent?</p>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-text-main-light dark:text-gray-200 px-2">WhatsApp Integration</label>
          <div className="bg-surface-light dark:bg-surface-dark border-0 rounded-2xl p-4 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
            <div className="flex gap-4 items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-field-light dark:bg-field-dark flex items-center justify-center text-text-sub-light dark:text-gray-400 shrink-0">
                <Icon name="webhook" className="text-xl" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-main-light dark:text-white">SDK Webhook Connection</h4>
                <p className="text-xs text-text-sub-light dark:text-gray-400 mt-1 leading-relaxed">
                  Connect your WhatsApp account via our SDK to integrate a webhook. This allows automated messaging without exposing a direct phone number.
                </p>
              </div>
            </div>
            <button
              onClick={() => onUpdate({ whatsappConnected: !data.whatsappConnected })}
              className={`w-full py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm font-semibold ${data.whatsappConnected ? 'bg-green-500/10 text-green-500' : 'bg-primary/10 hover:bg-primary/20 text-primary'}`}
            >
              <Icon name={data.whatsappConnected ? 'check_circle' : 'link'} className="text-lg" />
              {data.whatsappConnected ? 'Connected' : 'Connect WhatsApp (via SDK)'}
            </button>
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-text-main-light dark:text-gray-200 px-2">Telegram Username / Phone Number</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-text-sub-light dark:text-gray-400">
              <Icon name="send" className="text-xl" />
            </div>
            <input
              className="w-full h-14 pl-12 pr-4 bg-surface-light dark:bg-surface-dark border-0 rounded-2xl text-base text-text-main-light dark:text-white placeholder:text-text-sub-light/70 dark:placeholder:text-gray-500 shadow-sm ring-1 ring-black/5 dark:ring-white/10 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
              placeholder="@username"
              type="text"
              value={data.telegramUsername}
              onChange={(e) => onUpdate({ telegramUsername: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-text-main-light dark:text-gray-200 px-2">Google Chat Email</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-text-sub-light dark:text-gray-400">
              <Icon name="mail" className="text-xl" />
            </div>
            <input
              className="w-full h-14 pl-12 pr-4 bg-surface-light dark:bg-surface-dark border-0 rounded-2xl text-base text-text-main-light dark:text-white placeholder:text-text-sub-light/70 dark:placeholder:text-gray-500 shadow-sm ring-1 ring-black/5 dark:ring-white/10 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
              placeholder="agent@example.com"
              type="email"
              value={data.googleChatEmail}
              onChange={(e) => onUpdate({ googleChatEmail: e.target.value })}
            />
          </div>
        </div>

        <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-5 flex gap-4 items-start mt-2">
          <Icon name="info" className="text-primary text-2xl shrink-0" />
          <p className="text-sm text-text-sub-light dark:text-gray-300 leading-relaxed">
            Subscribed users will access your agent via the integrated WhatsApp webhook. For Telegram and Google Chat, the contact details provided above are shared directly with subscribers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Step3Capabilities;
