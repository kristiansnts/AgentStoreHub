import React, { useState, useCallback } from 'react';
import Icon from '../components/Icon';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ViewType, User } from '../types';
import { IMAGES, MY_AGENTS } from '../constants';
import ApplicationView from '../components/CreatorHub/ApplicationView';
import SuccessView from '../components/CreatorHub/SuccessView';
import AgentConfigurator from '../components/AgentConfigurator';
import { ApiSection } from '../components/CreatorDashboard/ApiSection';
import { StatCard } from '../components/CreatorDashboard/StatCard';

const CreatorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<ViewType>(ViewType.DASHBOARD);
  const [user, setUser] = useState<User>({
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    isCreator: true,
    avatarUrl: IMAGES.USER_AVATAR
  });

  const handleNavigate = useCallback((view: ViewType) => {
    setActiveView(view);
  }, []);

  const handleApplicationSubmit = () => {
    setTimeout(() => {
      setActiveView(ViewType.SUCCESS);
      setUser(prev => ({ ...prev, isCreator: true }));
    }, 500);
  };

  const getPageTitle = () => {
    switch (activeView) {
      case ViewType.DASHBOARD: return 'Creator Dashboard';
      case ViewType.APPLICATION: return 'Creator Application';
      case ViewType.SUCCESS: return 'Application Status';
      case ViewType.CREATE_AGENT: return 'Create New Agent';
      default: return 'Nexus AI';
    }
  };

  // Render Dashboard Content (extracted from original)
  const renderDashboard = () => (
    <div className="flex flex-col gap-6 pb-24 no-scrollbar overflow-y-auto px-4">
      {/* Stats Grid */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-lg font-bold">Performance Overview</h3>
          <button className="text-primary text-sm font-bold">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <StatCard
            id="revenue"
            label="Revenue (30d)"
            value="$1,240"
            icon="attach_money"
            color="emerald"
          />
          <StatCard
            id="users"
            label="Total Subscribers"
            value="8.5k"
            icon="group"
            color="blue"
          />
        </div>
      </div>

      {/* API Access Section */}
      <ApiSection />

      {/* Alerts Horizontal Scroll */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-lg font-bold">Alerts</h3>
          <button className="text-primary text-sm font-bold">Clear All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x">
          {[
            { icon: 'check_circle', label: "'CodeHelper' Approved", color: 'text-green-600' },
            { icon: 'star', label: "New Review on 'Fin'", color: 'text-amber-500' },
          ].map((alert, i) => (
            <div key={i} className="snap-start flex min-w-max h-10 items-center gap-2 px-4 rounded-full border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
              <Icon name={alert.icon} className={`text-xl ${alert.color}`} />
              <span className="text-sm font-semibold whitespace-nowrap">{alert.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* My Agents Section */}
      <div>
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-lg font-bold">My Agents</h3>
          <button className="size-8 rounded-full bg-gray-100 flex items-center justify-center">
            <Icon name="filter_list" className="text-gray-500" />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {MY_AGENTS.map((agent) => (
            <div key={agent.id} className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-sm border border-gray-50 dark:border-gray-800 flex items-center gap-4">
              <div className="size-14 min-w-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white overflow-hidden">
                {agent.imageUrl ? (
                  <img src={agent.imageUrl} alt={agent.name} className="w-full h-full object-cover" />
                ) : (
                  <Icon name="smart_toy" className="text-2xl" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-base truncate">{agent.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${agent.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                    {agent.status || 'Draft'}
                  </span>
                  <span className="text-xs text-text-sub dark:text-gray-400 truncate">{agent.description}</span>
                </div>
              </div>
              <button className="size-10 flex items-center justify-center rounded-full text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Icon name="chevron_right" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setActiveView(ViewType.CREATE_AGENT)}
        className="fixed bottom-24 right-4 z-40 size-14 rounded-full bg-primary shadow-2xl shadow-primary/40 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
      >
        <Icon name="add" className="text-2xl" />
      </button>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark animate-in slide-in-from-bottom-12 duration-500">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/90 dark:bg-gray-900/90 px-4 py-3 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <button
          onClick={() => activeView === ViewType.DASHBOARD ? navigate(-1) : setActiveView(ViewType.DASHBOARD)}
          className="size-10 flex items-center justify-center rounded-full hover:bg-black/5"
        >
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">{getPageTitle()}</h1>

        {/* Toggle View for Demo Purposes or Header Actions */}
        {activeView === ViewType.DASHBOARD ? (
          <Button variant="secondary" className="px-4 py-1.5 h-auto text-sm" onClick={() => setActiveView(ViewType.CREATE_AGENT)}>
            <Icon name="add" className="text-lg mr-1" /> New
          </Button>
        ) : (
          <div className="w-10"></div>
        )}
      </header>

      <main className="flex-1 overflow-y-auto w-full">
        {activeView === ViewType.DASHBOARD && renderDashboard()}
        {activeView === ViewType.APPLICATION && <ApplicationView user={user} onSubmit={handleApplicationSubmit} />}
        {activeView === ViewType.SUCCESS && <SuccessView onNavigate={handleNavigate} />}
        {activeView === ViewType.CREATE_AGENT && (
          <AgentConfigurator
            onClose={() => setActiveView(ViewType.DASHBOARD)}
            onSuccess={(data) => {
              console.log('Agent created:', data);
              // You can add logic here to save the agent data
            }}
          />
        )}
      </main>
    </div>
  );
};

export default CreatorDashboard;
