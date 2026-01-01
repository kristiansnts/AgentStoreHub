import React from 'react';
import Icon from '../components/Icon';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const CreatorDashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark animate-in slide-in-from-bottom-12 duration-500">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/90 dark:bg-gray-900/90 px-4 py-3 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-black/5">
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-lg font-bold">Creator Dashboard</h1>
        <Button variant="secondary" className="px-4 py-1.5 h-auto text-sm">
          <Icon name="add" className="text-lg mr-1" /> New
        </Button>
      </header>

      <main className="p-4 flex flex-col gap-6 pb-24 no-scrollbar overflow-y-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm border border-gray-50 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-3">
              <div className="size-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Icon name="attach_money" className="text-lg" />
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase">Revenue</span>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold">$1,240<span className="text-base opacity-40 font-normal">.50</span></span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                <Icon name="trending_up" className="text-[12px]" /> 12%
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm border border-gray-50 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-3">
              <div className="size-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Icon name="group" className="text-lg" />
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase">Users</span>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold">8.5k</span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                <Icon name="trending_up" className="text-[12px]" /> 5%
              </span>
            </div>
          </div>
        </div>

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
            <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-sm border border-gray-50 dark:border-gray-800 flex items-center gap-4">
              <div className="size-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                <Icon name="smart_toy" className="text-2xl" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-base">Support Bot Pro</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-green-50 text-green-600">Live</span>
                  <span className="text-xs text-gray-400">850 Subscribers</span>
                </div>
              </div>
              <button className="size-10 flex items-center justify-center rounded-full text-gray-300">
                <Icon name="chevron_right" />
              </button>
            </div>

            <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-sm border border-gray-50 dark:border-gray-800 flex items-center gap-4 opacity-70">
              <div className="size-14 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                <Icon name="translate" className="text-2xl" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-base">LinguaPoly Agent</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-amber-50 text-amber-600">Draft</span>
                  <span className="text-xs text-gray-400">Not published</span>
                </div>
              </div>
              <button className="size-10 flex items-center justify-center rounded-full text-gray-300">
                <Icon name="edit" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <button className="fixed bottom-24 right-4 z-40 size-14 rounded-full bg-primary shadow-2xl shadow-primary/40 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
        <Icon name="add" className="text-2xl" />
      </button>
    </div>
  );
};

export default CreatorDashboard;
