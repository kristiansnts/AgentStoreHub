
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import { MOCK_AGENTS, CATEGORIES } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredAgents = MOCK_AGENTS.filter(a => a.isFeatured);
  const topAgents = MOCK_AGENTS;

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      {/* Search Header */}
      <header className="sticky top-0 z-20 bg-white/95 dark:bg-[#0f1623]/95 backdrop-blur-sm px-4 py-3 flex items-center gap-3">
        <div className="size-10 flex items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
          <Icon name="smart_toy" className="text-2xl" />
        </div>
        <div className="flex-1 relative">
          <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]" />
          <input
            type="text"
            placeholder="Search Agents..."
            className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-full pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div className="relative cursor-pointer" onClick={() => navigate('/profile')}>
          <div className="size-10 rounded-full bg-gray-200 bg-cover bg-center border-2 border-white dark:border-gray-800" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4E7gfPKSogVgetWMX1BLu7lIPjp6M168KwobHGAFEoXNX20ElfXE-z3ZFgz56AfQw2h5vwQOgQTTVGe8OlCsaDz0Qv41dacdIVVOPO6XPdJgBoUdLuw48XDo00v6n3TisOQ_BU-3qjoWrNiPx3YWu_JpSKf4CQS00O0sXnnkEB-LHzhI4wPMSCCrdC9E8fLoYkMgzbPQwAT-fPlbGu1RsnwcdoEFyndlDIIXLtFF-WpFx5ptKem1oLakedhCHkPzhVx4VzdJnacI')` }} />
          <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
      </header>

      {/* Categories */}
      <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar pb-2 snap-x">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`snap-start flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
              ? 'bg-primary text-white shadow-lg shadow-primary/25'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Section */}
      <section>
        <div className="flex items-center justify-between px-4 mb-4">
          <h2 className="text-xl font-bold tracking-tight">Featured</h2>
          <button className="text-primary text-sm font-semibold">See All</button>
        </div>
        <div className="flex overflow-x-auto gap-4 px-4 pb-4 snap-x snap-mandatory no-scrollbar">
          {featuredAgents.map(agent => (
            <div
              key={agent.id}
              onClick={() => navigate(`/agent/${agent.id}`)}
              className="snap-center relative flex-shrink-0 w-[85%] aspect-[16/9] rounded-[24px] overflow-hidden shadow-lg group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img src={agent.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={agent.name} />
              <div className="relative z-20 h-full flex flex-col justify-end p-5 text-white">
                <div className="inline-flex items-center self-start px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-bold uppercase mb-2">
                  <Icon name="verified" className="text-[14px] mr-1" filled /> Featured
                </div>
                <h3 className="text-2xl font-bold leading-tight mb-1">{agent.name}</h3>
                <p className="text-white/80 text-sm line-clamp-1">{agent.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Agents List */}
      <section className="px-4 pb-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight">Top Agents</h2>
          <Icon name="sort" className="text-gray-400" />
        </div>
        <div className="flex flex-col gap-6">
          {topAgents.map(agent => (
            <div
              key={agent.id}
              onClick={() => navigate(`/agent/${agent.id}`)}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <img
                src={agent.image}
                className="size-[72px] rounded-2xl object-cover shadow-sm bg-gray-50 border border-gray-100 dark:border-gray-800"
                alt={agent.name}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-text-main dark:text-white truncate">{agent.name}</h3>
                <p className="text-xs text-text-sub dark:text-gray-400 truncate mb-1">by {agent.provider}</p>
                <div className="flex items-center gap-1 text-amber-500">
                  <Icon name="star" className="text-[16px]" filled />
                  <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{agent.rating}</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${agent.isFree
                  ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200'
                  }`}>
                  {agent.isFree ? 'GET' : agent.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
