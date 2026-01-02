
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import Button from '../components/Button';
import EditProfile from '../components/EditProfile';
import { UserProfile } from '../components/EditProfile/types';
import WhatsAppConnect from '../components/WhatsAppConnect';
import GoogleChatConnect from '../components/GoogleChatConnect';
import TelegramConnect from '../components/TelegramConnect';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showWhatsAppConnect, setShowWhatsAppConnect] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState<string | undefined>(undefined);
  const [showGoogleChatConnect, setShowGoogleChatConnect] = useState(false);
  const [googleEmail, setGoogleEmail] = useState<string | undefined>(undefined);
  const [showTelegramConnect, setShowTelegramConnect] = useState(false);
  const [telegramUsername, setTelegramUsername] = useState<string | undefined>(undefined);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [userProfile, setUserProfile] = useState<UserProfile>({
    displayName: 'Alex Morgan',
    bio: 'AI enthusiast and prompt engineer building the future of autonomous agents.',
    email: 'alex.morgan@example.com',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHIlKOuF-iVIAfPBmrxQYbHWFw2uUp0JqYUqDcaSwT3CcrM4QAOaFbnSCxkwzeWegvarjS7UQUL6_AUJMAeayxaBkMlJfkZZ-eDX2Une13AOvQq-ZkvsLnq_VMqsOc6YedQuDGKhAwYblJQO_aATkUNAPiDOTtopBCgkbw6s3Dp2KOcqKEAUIySvRzlHjzZxpTgaivQnU8KNXSnp1kn2JdusJrPC5JxS9AJZaKngxl1F0J_uDmPQt_d48mIUQwArKvqMwq6rEtM4M'
  });
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark animate-in slide-in-from-right duration-300">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 dark:bg-gray-900/80 px-4 py-3 backdrop-blur-md">
        <button onClick={() => navigate('/home')} className="size-10 flex items-center justify-center rounded-full hover:bg-black/5">
          <Icon name="arrow_back" />
        </button>
        <h1 className="flex-1 text-center text-lg font-bold">Profile Settings</h1>
        <div className="size-10"></div>
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
            <button
              onClick={() => setShowEditProfile(true)}
              className="absolute bottom-0 right-0 size-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-text-main shadow-md ring-2 ring-white hover:bg-gray-50 transition-colors"
            >
              <Icon name="edit" className="text-[16px]" />
            </button>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">{userProfile.displayName}</h2>
            <p className="text-sm font-medium text-text-sub">{userProfile.email}</p>
          </div>
        </section>

        {/* Linked Accounts */}
        <div className="mt-4">
          <h3 className="mb-3 ml-2 text-sm font-bold uppercase tracking-wider text-text-sub">Linked Accounts</h3>
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800">
            {/* WhatsApp */}
            <button
              onClick={() => setShowWhatsAppConnect(true)}
              className="flex w-full items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700 transition-colors text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="size-12 flex items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400">
                  <Icon name="chat" className="text-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">WhatsApp</span>
                  <span className="text-xs text-text-sub">
                    {whatsappNumber ? `Connected as ${whatsappNumber}` : 'Not connected'}
                  </span>
                </div>
              </div>
              <Icon name="chevron_right" className="text-gray-400" />
            </button>
            <div className="ml-20 h-px bg-gray-50 dark:bg-gray-800" />

            {/* Telegram */}
            <button
              onClick={() => setShowTelegramConnect(true)}
              className="flex w-full items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700 transition-colors text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="size-12 flex items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400">
                  <Icon name="send" className="text-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Telegram</span>
                  <span className="text-xs text-text-sub">
                    {telegramUsername ? `Connected as ${telegramUsername}` : 'Not connected'}
                  </span>
                </div>
              </div>
              <Icon name="chevron_right" className="text-gray-400" />
            </button>
            <div className="ml-20 h-px bg-gray-50 dark:bg-gray-800" />

            {/* Google Chat */}
            <button
              onClick={() => setShowGoogleChatConnect(true)}
              className="flex w-full items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700 transition-colors text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="size-12 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  <Icon name="chat_bubble" className="text-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">Google Chat</span>
                  <span className="text-xs text-text-sub">
                    {googleEmail ? `Connected as ${googleEmail}` : 'Not connected'}
                  </span>
                </div>
              </div>
              <Icon name="chevron_right" className="text-gray-400" />
            </button>
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

        {/* Logout Section */}
        <div className="mt-6 mb-8">
          <button
            onClick={() => {
              if (confirm('Are you sure you want to logout?')) {
                // Clear any stored auth data
                localStorage.removeItem('authToken');
                // Navigate to welcome/login page
                navigate('/welcome');
              }
            }}
            className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/20 active:scale-[0.98] transition-all group"
          >
            <Icon name="logout" className="text-[24px] text-red-600 dark:text-red-400" />
            <span className="text-base font-bold text-red-600 dark:text-red-400">Logout</span>
          </button>
        </div>
      </main>

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-background-dark">
          <EditProfile
            initialProfile={userProfile}
            onSave={(updatedProfile) => {
              setUserProfile(updatedProfile);
              setShowEditProfile(false);
              alert('Profile updated successfully!');
            }}
            onCancel={() => setShowEditProfile(false)}
            onChangePassword={() => {
              setShowEditProfile(false);
              navigate('/change-password');
            }}
            onDeleteAccount={() => {
              if (confirm('Are you sure? This will permanently delete your account.')) {
                alert('Account deleted');
                navigate('/home');
              }
            }}
          />
        </div>
      )}

      {/* WhatsApp Connect Modal */}
      {showWhatsAppConnect && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-background-dark">
          <WhatsAppConnect
            initialScreen='connect'
            initialProfile={{
              name: userProfile.displayName,
              email: userProfile.email,
              avatar: userProfile.avatarUrl,
              whatsapp: whatsappNumber,
              telegram: undefined,
              google: undefined
            }}
            onConnected={(phone) => {
              setWhatsappNumber(phone);
              setShowWhatsAppConnect(false);
              setSuccessMessage('WhatsApp connected successfully!');
              setShowSuccessToast(true);

              // Auto hide toast after 5 seconds
              setTimeout(() => {
                setShowSuccessToast(false);
              }, 5000);
            }}
            onClose={() => setShowWhatsAppConnect(false)}
          />
        </div>
      )}

      {/* Google Chat Connect Modal */}
      {showGoogleChatConnect && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-background-dark">
          <GoogleChatConnect
            initialScreen='connect'
            initialProfile={{
              name: userProfile.displayName,
              email: userProfile.email,
              avatar: userProfile.avatarUrl,
              googleChat: googleEmail,
              whatsapp: undefined,
              telegram: undefined
            }}
            onConnected={(email) => {
              setGoogleEmail(email);
              setShowGoogleChatConnect(false);
              setSuccessMessage('Google Chat connected successfully!');
              setShowSuccessToast(true);

              // Auto hide toast after 5 seconds
              setTimeout(() => {
                setShowSuccessToast(false);
              }, 5000);
            }}
            onClose={() => setShowGoogleChatConnect(false)}
          />
        </div>
      )}

      {/* Telegram Connect Modal */}
      {showTelegramConnect && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-background-dark">
          <TelegramConnect
            initialScreen='connect'
            initialProfile={{
              name: userProfile.displayName,
              email: userProfile.email,
              avatar: userProfile.avatarUrl,
              telegram: telegramUsername,
              whatsapp: undefined,
              googleChat: undefined
            }}
            onConnected={(username) => {
              setTelegramUsername(username);
              setShowTelegramConnect(false);
              setSuccessMessage('Telegram connected successfully!');
              setShowSuccessToast(true);

              // Auto hide toast after 5 seconds
              setTimeout(() => {
                setShowSuccessToast(false);
              }, 5000);
            }}
            onClose={() => setShowTelegramConnect(false)}
          />
        </div>
      )}

      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed bottom-24 left-4 right-4 z-[110] flex items-center justify-between gap-3 rounded-xl bg-text-main p-4 shadow-2xl shadow-black/30 dark:bg-gray-100 transition-all animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center gap-3">
            <Icon name="check_circle" className="text-[22px] text-green-400 dark:text-green-600" />
            <span className="text-sm font-semibold text-white dark:text-text-main">{successMessage}</span>
          </div>
          <button
            onClick={() => setShowSuccessToast(false)}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-white/10 hover:text-white dark:text-gray-500 dark:hover:bg-black/10 dark:hover:text-black transition-colors"
          >
            <Icon name="close" className="text-[18px]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
