
import React, { useState } from 'react';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { Agent } from '../types';

interface AgentDetailProps {
  agent: Agent;
  onBack: () => void;
  onSubscribe: () => void;
}

const AgentDetail: React.FC<AgentDetailProps> = ({ agent, onBack, onSubscribe }) => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0f1623] animate-in slide-in-from-bottom-12 duration-500 overflow-y-auto no-scrollbar">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/90 dark:bg-gray-900/90 px-4 py-3 backdrop-blur-md">
        <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full hover:bg-black/5">
          <Icon name="arrow_back" />
        </button>
        <button className="size-10 flex items-center justify-center rounded-full hover:bg-black/5">
          <Icon name="ios_share" />
        </button>
      </header>

      <main className="px-5 pb-40">
        <div className="flex flex-row gap-5 items-start mt-4">
          <img 
            src={agent.image} 
            className="size-24 rounded-[24px] object-cover shadow-lg border border-gray-100" 
            alt={agent.name} 
          />
          <div className="flex-1 flex flex-col pt-1">
            <div className="flex items-center gap-1.5 mb-1">
              <h1 className="text-2xl font-bold leading-none tracking-tight">{agent.name}</h1>
              <Icon name="verified" className="text-primary text-[20px]" filled />
            </div>
            <p className="text-text-sub dark:text-gray-400 text-[15px] font-medium leading-tight mb-4">
              Your {agent.category} Assistant
            </p>
            <div className="flex items-center gap-2">
              <Button variant="primary" onClick={onSubscribe} className="px-6 py-2 h-auto text-sm">
                Subscribe
              </Button>
              <Button variant="secondary" className="px-4 py-2 h-auto text-sm">
                Open
              </Button>
              <button className="size-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500">
                <Icon name="more_horiz" className="text-[20px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between mt-8 px-2 py-4 border-y border-gray-100 dark:border-gray-800">
          <div className="flex flex-col items-center gap-0.5 w-1/3 border-r border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-1 font-bold text-lg">
              {agent.rating} <Icon name="star" className="text-amber-400 text-[18px] mb-0.5" filled />
            </div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">12K Ratings</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 w-1/3 border-r border-gray-100 dark:border-gray-800">
            <div className="font-bold text-lg">10k+</div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">Users</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 w-1/3">
            <div className="font-bold text-lg">#4</div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">{agent.category}</span>
          </div>
        </div>

        {/* Description */}
        <section className="pt-6">
          <p className="text-text-main dark:text-gray-200 text-base leading-relaxed">
            {agent.description} This agent understands natural language and syncs instantly with your existing workflows. Experience the future of AI automation today.
          </p>
          <button className="mt-2 text-primary text-sm font-bold">Read more</button>
        </section>

        {/* Preview screenshots */}
        <section className="mt-8">
          <h3 className="text-xl font-bold mb-4">Preview</h3>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 snap-x">
            {[1, 2].map(i => (
              <div key={i} className="snap-center shrink-0 w-[240px] h-[480px] rounded-[32px] bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm flex items-center justify-center">
                 <Icon name="image" className="text-gray-300 text-4xl" />
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Reviews</h3>
            <button className="text-primary text-sm font-semibold">See All</button>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-[24px] p-5">
            <div className="flex justify-between items-start mb-2">
              <div className="flex flex-col">
                <span className="text-xs font-bold">Sarah Jenkins</span>
                <div className="flex text-amber-400 gap-0.5 mt-0.5">
                  {[1,2,3,4,5].map(i => <Icon key={i} name="star" className="text-[14px]" filled />)}
                </div>
              </div>
              <span className="text-[10px] text-gray-400 font-bold">2d ago</span>
            </div>
            <h4 className="text-sm font-bold mb-1">Literal game changer</h4>
            <p className="text-sm text-text-sub leading-relaxed">
              I stopped using my calendar app entirely. I just tell Fin what to do and it happens. The natural language processing is scary good.
            </p>
          </div>
        </section>

        {/* Information Table */}
        <section className="mt-8">
          <h3 className="text-xl font-bold mb-4">Information</h3>
          <div className="flex flex-col gap-4">
            {[
              { k: 'Provider', v: agent.provider },
              { k: 'Category', v: agent.category },
              { k: 'Language', v: 'English, Spanish +4' },
            ].map(row => (
              <div key={row.k} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                <span className="text-sm text-gray-500">{row.k}</span>
                <span className="text-sm font-semibold">{row.v}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Full-width Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-t border-gray-200/50 dark:border-gray-700/50 z-50 shadow-[0_-4px_30px_rgb(0,0,0,0.05)] flex flex-col items-center max-w-md mx-auto">
        <Button onClick={onSubscribe} className="w-full py-4 h-auto text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
          Subscribe <span className="opacity-70 font-normal">- {agent.price || '$9.99/mo'}</span>
        </Button>
        <div className="flex items-center gap-1.5 mt-3">
          <Icon name="verified_user" className="text-green-500 text-[14px]" filled />
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Cancel anytime • Secure SSL Payment</p>
        </div>
      </div>
    </div>
  );
};

export default AgentDetail;
