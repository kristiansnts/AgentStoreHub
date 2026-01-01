
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import Button from '../components/Button';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark animate-in slide-in-from-right duration-300">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 dark:bg-gray-900/80 px-4 py-3 backdrop-blur-md">
        <button onClick={() => navigate('/home')} className="size-10 flex items-center justify-center rounded-full hover:bg-black/5">
          <Icon name="arrow_back" />
        </button>
        <h1 className="flex-1 text-center text-lg font-bold">Profile Settings</h1>
        <button className="size-10 flex items-center justify-center rounded-full hover:bg-black/5">
          <Icon name="more_horiz" />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pb-24 no-scrollbar">
        {/* User Info */}
        <section className="flex flex-col items-center gap-4 py-8">
          <div className="relative group">
            <div className="h-28 w-28 overflow-hidden rounded-full shadow-xl ring-4 ring-white transition-transform group-hover:scale-105">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHIlKOuF-iVIAfPBmrxQYbHWFw2uUp0JqYUqDcaSwT3CcrM4QAOaFbnSCxkwzeWegvarjS7UQUL6_AUJMAeayxaBkMlJfkZZ-eDX2Une13AOvQq-ZkvsLnq_VMqsOc6YedQuDGKhAwYblJQO_aATkUNAPiDOTtopBCgkbw6s3Dp2KOcqKEAUIySvRzlHjzZxpTgaivQnU8KNXSnp1kn2JdusJrPC5JxS9AJZaKngxl1F0J_uDmPQt_d48mIUQwArKvqMwq6rEtM4M"
                className="w-full h-full object-cover"
                alt="Avatar"
              />
            </div>
            <button className="absolute bottom-0 right-0 size-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-text-main shadow-md ring-2 ring-white hover:bg-gray-50 transition-colors">
              <Icon name="edit" className="text-[16px]" />
            </button>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">Alex Morgan</h2>
            <p className="text-sm font-medium text-text-sub">alex.morgan@example.com</p>
          </div>
        </section>

        {/* Linked Accounts */}
        <div className="mt-4">
          <h3 className="mb-3 ml-2 text-sm font-bold uppercase tracking-wider text-text-sub">Linked Accounts</h3>
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800">
            {[
              { icon: 'chat', label: 'WhatsApp', sub: 'Connected as +1 555-0123', color: 'bg-green-100 text-green-600' },
              { icon: 'send', label: 'Telegram', sub: 'Connected as @alex_morgan', color: 'bg-blue-100 text-blue-500' },
              { icon: 'account_circle', label: 'Google', sub: 'Connected as alex.morgan@gmail.com', color: 'bg-red-100 text-red-500' },
            ].map((item, idx) => (
              <React.Fragment key={item.label}>
                <button className="flex w-full items-center justify-between p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left group">
                  <div className="flex items-center gap-4">
                    <div className={`size-12 flex items-center justify-center rounded-xl ${item.color}`}>
                      <Icon name={item.icon} className="text-[24px]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">{item.label}</span>
                      <span className="text-xs text-text-sub">{item.sub}</span>
                    </div>
                  </div>
                  <Icon name="chevron_right" className="text-gray-400" />
                </button>
                {idx < 2 && <div className="ml-20 h-px bg-gray-50 dark:bg-gray-800" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Subscriptions */}
        <div className="mt-6">
          <h3 className="mb-3 ml-2 text-sm font-bold uppercase tracking-wider text-text-sub">Subscriptions</h3>
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800">
            <button onClick={() => navigate('/library')} className="flex w-full items-center justify-between p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left group">
              <div className="flex items-center gap-4">
                <div className="size-12 flex items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                  <Icon name="card_membership" className="text-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Manage Subscriptions</span>
                  <span className="text-xs text-text-sub">View active agent plans</span>
                </div>
              </div>
              <Icon name="chevron_right" className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Security */}
        <div className="mt-6">
          <h3 className="mb-3 ml-2 text-sm font-bold uppercase tracking-wider text-text-sub">Security</h3>
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800">
            <button onClick={() => navigate('/change-password')} className="flex w-full items-center justify-between p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left group">
              <div className="flex items-center gap-4">
                <div className="size-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Icon name="lock" className="text-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Change Password</span>
                  <span className="text-xs text-text-sub">Update your account password</span>
                </div>
              </div>
              <Icon name="chevron_right" className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Creator Studio CTA */}
        <div className="mt-6">
          <h3 className="mb-3 ml-2 text-sm font-bold uppercase tracking-wider text-text-sub">Creator Studio</h3>
          <div className="bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl p-4 border border-indigo-100 dark:border-indigo-900/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 flex items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                <Icon name="auto_fix_high" className="text-[24px]" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-indigo-900 dark:text-indigo-100">Become a Creator</span>
                <span className="text-xs text-indigo-600 dark:text-indigo-400">Apply to publish your own AI agents</span>
              </div>
            </div>
            <Button onClick={() => navigate('/dashboard')} variant="primary" className="w-full py-3 h-auto">
              Open Creator Dashboard
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
