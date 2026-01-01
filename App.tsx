
import React, { useState } from 'react';
import { ViewState, Agent } from './types';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AgentDetail from './pages/AgentDetail';
import CreatorDashboard from './pages/CreatorDashboard';
import Button from './components/Button';
import Icon from './components/Icon';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('onboarding');
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const renderView = () => {
    switch (view) {
      case 'onboarding':
        return (
          <div className="flex flex-col h-full bg-white dark:bg-[#0f1623] animate-in fade-in duration-700">
            <div className="flex-1 flex flex-col items-center justify-center p-6 gap-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-[32px] blur-3xl scale-150 animate-pulse" />
                <div className="relative size-36 rounded-[32px] bg-gradient-to-br from-primary to-indigo-500 shadow-2xl flex items-center justify-center text-white -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Icon name="smart_toy" style={{ fontSize: 80 }} />
                </div>
              </div>
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-black tracking-tight leading-tight">
                  Welcome to <br/><span className="text-primary">AgentStore</span>
                </h1>
                <p className="text-text-sub dark:text-gray-400 text-lg font-medium max-w-[300px] mx-auto leading-relaxed">
                  The marketplace for AI agents. Discover, deploy, and automate your workflow.
                </p>
              </div>
            </div>
            <div className="p-6 pb-12 flex flex-col gap-3">
              <Button onClick={() => setView('home')} className="w-full py-4 h-auto text-lg shadow-primary/30">
                Log In
              </Button>
              <Button onClick={() => setView('home')} variant="secondary" className="w-full py-4 h-auto text-lg text-primary">
                Sign Up
              </Button>
            </div>
          </div>
        );

      case 'home':
        return <Home onSelectAgent={(agent) => { setSelectedAgent(agent); setView('detail'); }} />;

      case 'detail':
        return selectedAgent ? (
          <AgentDetail 
            agent={selectedAgent} 
            onBack={() => setView('home')} 
            onSubscribe={() => setShowSubscriptionModal(true)} 
          />
        ) : null;

      case 'profile':
        return <Profile onBack={() => setView('home')} onNavigate={setView} />;

      case 'dashboard':
        return <CreatorDashboard onBack={() => setView('profile')} />;

      default:
        return <Home onSelectAgent={(agent) => { setSelectedAgent(agent); setView('detail'); }} />;
    }
  };

  return (
    <div className="flex justify-center bg-gray-50 dark:bg-black min-h-screen font-sans selection:bg-primary/20 selection:text-primary">
      <div className="w-full max-w-md h-full min-h-screen bg-white dark:bg-[#0f1623] relative flex flex-col shadow-2xl overflow-hidden">
        
        {renderView()}

        {/* Global Bottom Nav (Show on home/profile only) */}
        {(view === 'home' || view === 'profile') && (
          <BottomNav activeTab={view === 'home' ? 'home' : 'profile'} onTabChange={setView} />
        )}

        {/* Subscription Confirmation Modal */}
        {showSubscriptionModal && (
          <div className="fixed inset-0 z-[100] flex flex-col justify-end sm:justify-center items-center px-0 sm:px-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowSubscriptionModal(false)} />
            <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-32 duration-300">
              <div className="flex flex-col items-center pt-3 pb-2 px-6">
                <div className="size-1.5 w-12 rounded-full bg-gray-200 mb-6" />
                <div className="w-full flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Confirm Subscription</h3>
                  <button onClick={() => setShowSubscriptionModal(false)} className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100">
                    <Icon name="close" />
                  </button>
                </div>
                
                <div className="text-center mb-8">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Due Today</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-black tracking-tight">{selectedAgent?.price || '$9.99'}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 mt-3 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full text-primary font-bold text-xs">
                    <Icon name="verified" className="text-sm" filled /> Pro Agent Plan
                  </div>
                </div>

                <div className="w-full space-y-4 mb-8">
                  <h4 className="text-sm font-bold text-left ml-1">Payment Method</h4>
                  <div className="p-4 rounded-2xl border-2 border-primary bg-primary/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-5 rounded-full border-2 border-primary bg-primary flex items-center justify-center">
                        <div className="size-2 rounded-full bg-white" />
                      </div>
                      <span className="font-bold">Credit Card</span>
                    </div>
                    <Icon name="credit_card" className="text-gray-400" />
                  </div>
                  
                  <div className="p-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 flex items-center justify-between opacity-60">
                    <div className="flex items-center gap-3">
                      <div className="size-5 rounded-full border-2 border-gray-300" />
                      <span className="font-bold">PayPal</span>
                    </div>
                    <Icon name="account_balance_wallet" className="text-gray-400" />
                  </div>
                </div>

                <Button className="w-full py-4 h-auto text-lg mb-4" onClick={() => {
                  setShowSubscriptionModal(false);
                  alert('Subscription successful!');
                }}>
                  <Icon name="lock" className="mr-2" /> Pay Now
                </Button>
                <p className="text-center text-[10px] text-gray-400 font-medium pb-8 flex items-center gap-1">
                  <Icon name="security" className="text-sm" /> Secure 256-bit SSL Encrypted Payment
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
