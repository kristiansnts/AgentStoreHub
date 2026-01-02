
import React from 'react';
import Icon from '../Icon';
import { Header } from './Header';
import { UserProfile } from './types';

interface ProfileScreenProps {
  user: UserProfile;
  showToast: boolean;
  onCloseToast: () => void;
  onConnect: () => void;
  onBack?: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ user, showToast, onCloseToast, onConnect, onBack }) => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <Header
        title="Profile Settings"
        showBack={true}
        onBack={onBack}
        rightAction={
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-text-main dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <Icon name="more_horiz" className="text-[24px]" />
          </button>
        }
      />

      <main className="flex-1 overflow-y-auto px-4 pb-24 pt-4 no-scrollbar">
        {/* Profile Info Section */}
        <section className="flex flex-col items-center gap-4 py-6">
          <div className="relative group">
            <div className="h-28 w-28 overflow-hidden rounded-full shadow-lg ring-4 ring-surface-light dark:ring-surface-dark transition-transform group-hover:scale-105">
              <img alt="User Avatar" className="h-full w-full object-cover" src={user.avatar} />
            </div>
            <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark text-text-main dark:text-white shadow-md ring-2 ring-white dark:ring-surface-dark hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Icon name="edit" className="text-[16px]" />
            </button>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold tracking-tight text-text-main dark:text-white">{user.name}</h2>
            <p className="text-sm font-medium text-text-sub dark:text-gray-400">{user.email}</p>
          </div>
        </section>

        {/* Linked Accounts Section */}
        <div className="mt-4">
          <h3 className="mb-3 ml-2 text-sm font-semibold uppercase tracking-wider text-text-sub dark:text-gray-400">Linked Accounts</h3>
          <div className="flex flex-col gap-1 overflow-hidden rounded-lg bg-surface-light dark:bg-surface-dark shadow-sm">

            {/* WhatsApp */}
            <button
              onClick={onConnect}
              className="flex w-full items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-left group"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded ${user.whatsapp ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-500 dark:bg-gray-800'}`}>
                  <Icon name="chat" className="text-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-medium text-text-main dark:text-white group-hover:text-primary transition-colors">WhatsApp</span>
                  <span className="text-xs text-text-sub dark:text-gray-400">
                    {user.whatsapp ? `Connected as ${user.whatsapp}` : 'Tap to connect'}
                  </span>
                </div>
              </div>
              <Icon name="chevron_right" className="text-text-sub dark:text-gray-500" />
            </button>

            <div className="ml-[5rem] h-px bg-gray-100 dark:bg-gray-800"></div>

            {/* Telegram */}
            <button className="flex w-full items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-left group">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-blue-50 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400">
                  <Icon name="send" className="text-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-medium text-text-main dark:text-white group-hover:text-primary transition-colors">Telegram</span>
                  <span className="text-xs text-text-sub dark:text-gray-400">Connected as {user.telegram}</span>
                </div>
              </div>
              <Icon name="chevron_right" className="text-text-sub dark:text-gray-500" />
            </button>

            <div className="ml-[5rem] h-px bg-gray-100 dark:bg-gray-800"></div>

            {/* Google */}
            <button className="flex w-full items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-left group">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-red-50 text-red-500 dark:bg-red-900/20 dark:text-red-400">
                  <Icon name="account_circle" className="text-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-medium text-text-main dark:text-white group-hover:text-primary transition-colors">Google</span>
                  <span className="text-xs text-text-sub dark:text-gray-400">Connected as {user.google}</span>
                </div>
              </div>
              <Icon name="chevron_right" className="text-text-sub dark:text-gray-500" />
            </button>
          </div>
        </div>

        {/* Subscriptions Section */}
        <div className="mt-6">
          <h3 className="mb-3 ml-2 text-sm font-semibold uppercase tracking-wider text-text-sub dark:text-gray-400">Subscriptions</h3>
          <div className="flex flex-col gap-1 overflow-hidden rounded-lg bg-surface-light dark:bg-surface-dark shadow-sm">
            <button className="flex w-full items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-left group">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
                  <Icon name="card_membership" className="text-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-medium text-text-main dark:text-white group-hover:text-primary transition-colors">Manage Subscriptions</span>
                  <span className="text-xs text-text-sub dark:text-gray-400">View active agent plans</span>
                </div>
              </div>
              <Icon name="chevron_right" className="text-text-sub dark:text-gray-500" />
            </button>
          </div>
        </div>
      </main>

      {/* Success Toast */}
      {showToast && (
        <div className="absolute bottom-[5.5rem] left-4 right-4 z-[60] flex items-center justify-between gap-3 rounded-xl bg-text-main p-4 shadow-2xl shadow-black/30 dark:bg-gray-100 transition-all animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center gap-3">
            <Icon name="check_circle" className="text-[22px] text-green-400 dark:text-green-600" />
            <span className="text-sm font-semibold text-white dark:text-text-main">WhatsApp connected successfully!</span>
          </div>
          <button
            onClick={onCloseToast}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-white/10 hover:text-white dark:text-gray-500 dark:hover:bg-black/10 dark:hover:text-black transition-colors"
          >
            <Icon name="close" className="text-[18px]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileScreen;
