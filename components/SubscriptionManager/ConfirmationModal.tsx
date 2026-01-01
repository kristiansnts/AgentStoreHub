
import React from 'react';
import { Plan } from './types';
import Icon from '../Icon';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  newPlan: Plan;
  currentPlan: Plan;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  newPlan,
  currentPlan,
}) => {
  if (!isOpen) return null;

  const priceDifference = Math.abs(newPlan.price - currentPlan.price);
  const proratedAmount = (priceDifference * 0.55).toFixed(2); // Simplified proration calculation

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-[340px] flex flex-col gap-4 rounded-3xl bg-white dark:bg-gray-900 p-6 shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="flex flex-col gap-1 text-center">
          <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-tight">Confirm Plan Change</h2>
          <p className="text-text-sub dark:text-gray-400 text-sm font-normal">Review your new subscription details</p>
        </div>

        <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 overflow-hidden mt-2">
          <div className="flex flex-col gap-1 p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <p className="text-primary text-xs font-bold uppercase tracking-wider">New Plan</p>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-text-main dark:text-white text-lg font-bold">{newPlan.name} Plan</span>
              <span className="text-text-main dark:text-white text-base font-medium">${newPlan.price}/mo</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-gray-50 dark:bg-gray-800">
            <p className="text-text-sub dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Current</p>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-text-sub dark:text-gray-400 text-base font-medium">{currentPlan.name} Plan</span>
              <span className="text-text-sub dark:text-gray-400 text-sm font-normal">${currentPlan.price}/mo</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 items-start px-1">
          <Icon name="info" className="text-primary text-[20px] shrink-0 mt-0.5" filled />
          <p className="text-text-sub dark:text-gray-400 text-xs leading-relaxed">
            You will be charged a prorated amount of <span className="text-text-main dark:text-white font-semibold">${proratedAmount}</span> immediately. Your new billing cycle starts today.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={onConfirm}
            className="flex w-full cursor-pointer items-center justify-center rounded-full h-12 bg-primary text-white text-base font-bold tracking-wide shadow-sm hover:bg-primary-dark transition-colors"
          >
            Confirm Change
          </button>
          <button
            onClick={onClose}
            className="flex w-full cursor-pointer items-center justify-center rounded-full h-12 bg-transparent text-primary text-base font-bold tracking-wide hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
