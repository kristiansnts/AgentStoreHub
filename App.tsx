
import React, { useState, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Agent, FlowStep, SubscriptionData } from './types';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AgentDetail from './pages/AgentDetail';
import Chat from './pages/Chat';
import CreatorDashboard from './pages/CreatorDashboard';
import Library from './pages/Library';
import SubscriptionDetails from './pages/SubscriptionDetails';
import Button from './components/Button';
import Icon from './components/Icon';
import StepFreeConfirm from './components/SubscriptionFlow/StepFreeConfirm';
import StepActivateAgent from './components/SubscriptionFlow/StepActivateAgent';
import StepPayment from './components/SubscriptionFlow/StepPayment';
import StepSuccess from './components/SubscriptionFlow/StepSuccess';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import CheckEmail from './pages/CheckEmail';
import SetNewPassword from './pages/SetNewPassword';
import PasswordSuccess from './pages/PasswordSuccess';
import ChangePassword from './pages/ChangePassword';

import { MOCK_AGENTS } from './constants';

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [authEmail, setAuthEmail] = useState('user@example.com');
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [subscriptionStep, setSubscriptionStep] = useState<FlowStep>('free-confirm');
  const [subscribedAgents, setSubscribedAgents] = useState<string[]>(MOCK_AGENTS.map(agent => agent.id));
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData>({
    planName: 'Free Forever',
    price: 0,
    isFree: true,
    agentName: '',
  });

  const handleSubscriptionNext = (nextStep: FlowStep, newData?: Partial<SubscriptionData>) => {
    if (newData) {
      setSubscriptionData(prev => ({ ...prev, ...newData }));
    }
    if (nextStep === 'success' && subscriptionData.agentId) {
      setSubscribedAgents(prev => [...prev, subscriptionData.agentId!]);
    }
    setSubscriptionStep(nextStep);
  };

  const handleSubscriptionClose = () => {
    setShowSubscriptionModal(false);
    setTimeout(() => {
      setSubscriptionStep('free-confirm');
    }, 500);
  };

  const handleSubscribe = (agent: any) => {
    setSubscriptionData({
      planName: agent.isFree ? 'Free Forever' : 'Pro Agent Plan',
      price: agent.price ? parseFloat(agent.price.replace(/[^0-9.]/g, '')) : 9.99,
      isFree: agent.isFree || false,
      agentName: agent.name,
      agentId: agent.id,
    });
    setSubscriptionStep('free-confirm');
    setShowSubscriptionModal(true);
  };

  // Determine if we should show bottom nav
  const showBottomNav = ['/home', '/profile', '/library'].includes(location.pathname);

  return (
    <div className="flex justify-center bg-gray-50 dark:bg-black min-h-screen font-sans selection:bg-primary/20 selection:text-primary">
      <div className="w-full max-w-md h-full min-h-screen bg-white dark:bg-[#0f1623] relative flex flex-col shadow-2xl overflow-hidden">

        <Routes>
          <Route path="/" element={<Navigate to="/welcome" replace />} />
          <Route path="/onboarding" element={<Navigate to="/welcome" replace />} />

          {/* Auth Routes */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword onSetEmail={setAuthEmail} />} />
          <Route path="/check-email" element={<CheckEmail email={authEmail} />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
          <Route path="/password-success" element={<PasswordSuccess />} />
          <Route path="/change-password" element={<ChangePassword />} />

          {/* App Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/agent/:id" element={<AgentDetail onSubscribe={handleSubscribe} subscribedAgents={subscribedAgents} />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<CreatorDashboard />} />
          <Route path="/library" element={<Library />} />
          <Route path="/subscription-details" element={<SubscriptionDetails />} />
        </Routes>

        {/* Global Bottom Nav */}
        {showBottomNav && (
          <BottomNav activeTab={location.pathname.substring(1)} />
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
