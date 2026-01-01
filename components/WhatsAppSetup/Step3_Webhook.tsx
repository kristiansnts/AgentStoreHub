
import React from 'react';

interface Props {
  url: string;
  onChange: (v: string) => void;
  onNext: () => void;
}

const Step3_Webhook: React.FC<Props> = ({ url, onChange, onNext }) => {
  return (
    <div className="px-6 flex flex-col">
      <div className="mb-8 mt-4">
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white mb-3">Provide your Agent's Webhook URL</h2>
        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-normal">
          Enter the HTTPS endpoint where your self-hosted agent is listening. AgentStore will forward WhatsApp events to this URL.
        </p>
      </div>

      <div className="mb-10">
        <label className="block text-[11px] font-bold text-primary uppercase tracking-widest mb-3 ml-1" htmlFor="webhook_url">Target Endpoint URL</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
            <Icon name="link" className="text-slate-400 group-focus-within:text-primary transition-colors" />
          </div>
          <input 
            className="block w-full rounded-[24px] border-2 border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 py-5 pl-14 pr-4 text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-0 shadow-sm transition-all font-medium" 
            id="webhook_url" 
            placeholder="https://your-agent.com/webhook" 
            type="url"
            value={url}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <p className="mt-3 text-[11px] text-slate-500 dark:text-slate-400 ml-1">Must be a publicly accessible HTTPS URL.</p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="hub" className="text-primary text-[20px]" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">What happens next</h3>
        </div>
        
        <div className="relative pl-3 ml-2 space-y-8">
          <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-slate-200 dark:bg-slate-700 -z-10"></div>
          
          {[
            { id: 1, title: 'Verify Connection', desc: 'We will send a test POST request to your URL to ensure it is reachable.' },
            { id: 2, title: 'Forwarding Active', desc: 'Once verified, all WhatsApp messages will be forwarded as JSON payloads.' },
            { id: 3, title: 'Response Required', desc: 'Your agent must respond with 200 OK to acknowledge receipt.' }
          ].map((item) => (
            <div key={item.id} className="relative pl-8 group">
              <div className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-300 ring-4 ring-white dark:ring-background-dark group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                {item.id}
              </div>
              <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">{item.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-5 bg-gradient-to-t from-white via-white to-transparent dark:from-background-dark dark:via-background-dark pt-12 z-30">
        <button 
          onClick={onNext}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-14 rounded-full shadow-xl shadow-primary/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group ring-4 ring-white/20 dark:ring-black/20"
        >
          <span className="text-base tracking-wide">Proceed to Verification</span>
          <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Step3_Webhook;
