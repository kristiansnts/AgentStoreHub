
import React from 'react';
import Icon from '../Icon';
import { AgentFormData } from './types';

interface Props {
  data: AgentFormData;
  onUpdate: (updates: Partial<AgentFormData>) => void;
}

const Step4Pricing: React.FC<Props> = ({ data, onUpdate }) => {
  const trialOptions = [
    { label: 'None', value: 'none' },
    { label: '3 Days', value: '3days' },
    { label: '7 Days', value: '7days' },
    { label: '14 Days', value: '14days' },
  ];

  return (
    <div className="flex flex-col px-4 py-6 gap-8 pb-32">
      {/* Monetization Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Icon name="monetization_on" className="text-primary text-xl" />
          <h2 className="text-2xl font-bold tracking-tight">Monetization</h2>
        </div>
        <p className="text-text-sub-light dark:text-slate-400 text-sm mb-5 leading-relaxed">
          Choose how users will access your agent. You can change this setting later, but existing subscribers will keep their original pricing.
        </p>
        <div className="flex p-1.5 bg-white dark:bg-surface-dark rounded-full border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <button
            onClick={() => onUpdate({ pricingType: 'free' })}
            className={`flex-1 py-3.5 rounded-full font-semibold transition-all duration-300 ${data.pricingType === 'free' ? 'bg-primary text-white shadow-md' : 'text-text-sub-light hover:bg-slate-50'}`}
          >
            Free
          </button>
          <button
            onClick={() => onUpdate({ pricingType: 'paid' })}
            className={`flex-1 py-3.5 rounded-full font-semibold transition-all duration-300 ${data.pricingType === 'paid' ? 'bg-primary text-white shadow-md' : 'text-text-sub-light hover:bg-slate-50'}`}
          >
            Paid
          </button>
        </div>
      </section>

      {/* Pricing Details */}
      {data.pricingType === 'paid' && (
        <section className="flex flex-col gap-8">
          <div className="group">
            <label className="block text-sm font-bold mb-3 ml-2 text-slate-700 dark:text-slate-200">Monthly Subscription Price</label>
            <div className="relative transition-all duration-300 transform group-focus-within:scale-[1.02]">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 text-2xl font-medium">$</span>
              <input
                className="w-full bg-white dark:bg-surface-dark border-2 border-transparent focus:border-primary/20 rounded-2xl py-6 pl-12 pr-6 text-3xl font-bold shadow-sm focus:ring-4 focus:ring-primary/10 outline-none placeholder-slate-200 dark:placeholder-slate-700 text-text-main-light dark:text-white transition-all"
                type="number"
                value={data.price}
                onChange={(e) => onUpdate({ price: e.target.value })}
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                USD / Mo
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 ml-4 mr-2">
              <p className="text-xs text-slate-400 font-medium">Platform fee (15%) applies</p>
              <p className="text-xs text-green-600 dark:text-green-400 font-bold">You earn ~${(Number(data.price || 0) * 0.85).toFixed(2)}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-3 ml-2 text-slate-700 dark:text-slate-200">Free Trial Duration</label>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-1">
              {trialOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => onUpdate({ trialDuration: opt.value as any })}
                  className={`px-6 py-3.5 rounded-xl border-2 transition-all whitespace-nowrap shadow-sm text-sm font-semibold ${data.trialDuration === opt.value ? 'border-primary bg-primary/5 text-primary' : 'bg-white dark:bg-surface-dark border-transparent text-slate-600 dark:text-slate-400'}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Listing Preview */}
      <section className="pt-2">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 ml-2">Listing Preview</h3>
        <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-primary flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 z-10">
            {data.iconUrl ? (
              <img src={data.iconUrl} className="w-full h-full object-cover rounded-2xl" alt="Preview Icon" />
            ) : (
              <Icon name="smart_toy" className="text-[32px]" filled />
            )}
          </div>
          <div className="flex-1 z-10">
            <h4 className="font-bold text-lg leading-tight text-text-main-light dark:text-white">{data.name || 'Agent Name'}</h4>
            <p className="text-xs font-medium text-slate-500 mt-1 capitalize">{data.category || 'Select Category'}</p>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="bg-[#111118] dark:bg-white text-white dark:text-[#111118] text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm">
                {data.pricingType === 'free' ? 'Free' : `$${data.price}/mo`}
              </span>
              {data.trialDuration !== 'none' && (
                <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2 py-1 rounded-lg">
                  + {data.trialDuration.replace('days', ' day trial')}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="flex gap-3 items-start pt-4 px-2">
        <div className="relative flex items-center mt-0.5">
          <input
            type="checkbox"
            id="terms"
            checked={data.termsAgreed}
            onChange={(e) => onUpdate({ termsAgreed: e.target.checked })}
            className="peer h-6 w-6 cursor-pointer appearance-none rounded-lg border-2 border-slate-300 dark:border-slate-600 checked:bg-primary checked:border-primary transition-all"
          />
          <Icon name="check" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100 text-white text-sm font-bold" />
        </div>
        <label className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed cursor-pointer select-none" htmlFor="terms">
          I agree to the <a className="text-primary font-semibold hover:underline decoration-2 underline-offset-2" href="#">AgentStore Developer Terms</a> and confirm that I have the rights to publish this agent.
        </label>
      </section>
    </div>
  );
};

export default Step4Pricing;
