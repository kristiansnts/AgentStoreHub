
import React, { useState, useCallback } from 'react';
import { ViewState, Agent, FlowStep, SubscriptionData } from './types';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AgentDetail from './pages/AgentDetail';
import CreatorDashboard from './pages/CreatorDashboard';
import Library from './pages/Library';
import SubscriptionDetails from './pages/SubscriptionDetails';
import Button from './components/Button';
import Icon from './components/Icon';
import StepFreeConfirm from './components/SubscriptionFlow/StepFreeConfirm';
import StepActivateAgent from './components/SubscriptionFlow/StepActivateAgent';
import StepPayment from './components/SubscriptionFlow/StepPayment';
import StepSuccess from './components/SubscriptionFlow/StepSuccess';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('onboarding');
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [subscriptionStep, setSubscriptionStep] = useState<FlowStep>('free-confirm');
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData>({
    planName: 'Free Forever',
    price: 0,
    isFree: true,
    agentName: '',
  });

  const handleSubscriptionNext = useCallback((nextStep: FlowStep, newData?: Partial<SubscriptionData>) => {
    if (newData) {
      setSubscriptionData(prev => ({ ...prev, ...newData }));
    }
    setSubscriptionStep(nextStep);
  }, []);

  const handleSubscriptionClose = () => {
    setShowSubscriptionModal(false);
    setTimeout(() => {
      setSubscriptionStep('free-confirm');
    }, 500);
  };

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
                  Welcome to <br /><span className="text-primary">AgentStore</span>
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
            onSubscribe={() => {
              setSubscriptionData({
                planName: selectedAgent.isFree ? 'Free Forever' : 'Pro Agent Plan',
                price: selectedAgent.price ? parseFloat(selectedAgent.price.replace(/[^0-9.]/g, '')) : 9.99,
                isFree: selectedAgent.isFree || false,
                agentName: selectedAgent.name,
              });
              setSubscriptionStep('free-confirm');
              setShowSubscriptionModal(true);
            }}
          />
        ) : null;

      case 'profile':
        return <Profile onBack={() => setView('home')} onNavigate={setView} />;


      case 'dashboard':
        return <CreatorDashboard onBack={() => setView('profile')} />;

      case 'library':
        return <Library onBack={() => setView('profile')} onNavigate={setView} />;

      case 'subscription-details':
        return <SubscriptionDetails onBack={() => setView('library')} />;


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
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleSubscriptionClose} />
            <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-32 duration-300 max-h-[90vh] flex flex-col">

              {subscriptionStep === 'free-confirm' && (
                <StepFreeConfirm
                  data={subscriptionData}
                  onClose={handleSubscriptionClose}
                  onConfirm={() => handleSubscriptionNext('activate-agent', { planName: 'Pro Agent Plan', price: 9.99, isFree: false })}
                />
              )}

              {subscriptionStep === 'activate-agent' && (
                <StepActivateAgent
                  data={subscriptionData}
                  onClose={handleSubscriptionClose}
                  onBack={() => handleSubscriptionNext('free-confirm')}
                  onConfirm={(platformData) => handleSubscriptionNext('payment-confirm', platformData)}
                />
              )}

              {subscriptionStep === 'payment-confirm' && (
                <StepPayment
                  data={subscriptionData}
                  onClose={handleSubscriptionClose}
                  onBack={() => handleSubscriptionNext('activate-agent')}
                  onSuccess={() => handleSubscriptionNext('success')}
                />
              )}

              {subscriptionStep === 'success' && (
                <StepSuccess
                  data={subscriptionData}
                  onClose={handleSubscriptionClose}
                  onReset={handleSubscriptionClose}
                />
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
