
import React, { useState, useEffect } from 'react';
import Icon from '../Icon';

interface Props {
  onNext: () => void;
}

const Step2_ScanQR: React.FC<Props> = ({ onNext }) => {
  const [scanned, setScanned] = useState(false);

  // Simulate a scan success after 5 seconds for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setScanned(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-6 flex flex-col animate-slide-up">
      <div className="mb-8 mt-4">
        <h2 className="text-text-main-light dark:text-text-main-dark text-[28px] leading-[1.2] font-bold tracking-tight mb-3">
          Scan QR Code
        </h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">
          Open WhatsApp on your phone and scan this code to link your account.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-800/40 rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden mb-8">
        <div className={`relative transition-all duration-700 ${scanned ? 'scale-90 opacity-40 blur-sm' : 'scale-100'}`}>
          {/* Simulated QR Code */}
          <div className="size-48 bg-slate-100 dark:bg-slate-700 rounded-2xl flex flex-wrap p-2 gap-1.5 opacity-80 border border-slate-200 dark:border-slate-600">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className={`size-[26px] rounded-[4px] ${Math.random() > 0.4 ? 'bg-slate-900 dark:bg-white' : 'bg-transparent'}`} />
            ))}
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 size-12 border-4 border-slate-900 dark:border-white rounded-lg bg-white dark:bg-slate-900" />
            <div className="absolute top-0 right-0 size-12 border-4 border-slate-900 dark:border-white rounded-lg bg-white dark:bg-slate-900" />
            <div className="absolute bottom-0 left-0 size-12 border-4 border-slate-900 dark:border-white rounded-lg bg-white dark:bg-slate-900" />
          </div>
          
          {/* Scanning Animation */}
          <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/40 shadow-[0_0_15px_rgba(6,87,249,0.8)] animate-[scan_3s_linear_infinite]" />
          </div>
        </div>

        {scanned && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-500">
            <div className="size-20 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl shadow-green-500/20 mb-4 animate-[bounce_0.5s_ease-out]">
              <Icon name="check" className="text-[48px]" />
            </div>
            <p className="text-slate-900 dark:text-white font-bold text-xl">Device Linked!</p>
          </div>
        )}
      </div>

      <div className="space-y-4 mb-32">
        <div className="flex gap-4 items-start group">
          <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">1</div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Open <b>WhatsApp</b> on your phone</p>
        </div>
        <div className="flex gap-4 items-start group">
          <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">2</div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Tap <b>Menu</b> or <b>Settings</b> and select <b>Linked Devices</b></p>
        </div>
        <div className="flex gap-4 items-start group">
          <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">3</div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Tap on <b>Link a Device</b> and point your camera to this screen</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 pb-8 bg-gradient-to-t from-white via-white to-transparent dark:from-background-dark dark:via-background-dark pt-12 z-30">
        <button 
          onClick={onNext}
          className={`w-full h-14 transition-all text-white font-bold text-[17px] rounded-full shadow-lg flex items-center justify-center gap-2 group ${
            scanned ? 'bg-primary shadow-blue-500/30' : 'bg-slate-400 cursor-not-allowed opacity-50'
          }`}
          disabled={!scanned}
        >
          {scanned ? 'Continue to Webhook' : 'Waiting for scan...'}
          <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(192px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Step2_ScanQR;
