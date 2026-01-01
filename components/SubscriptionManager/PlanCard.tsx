
import React from 'react';
import { Plan } from './types';
import Icon from '../Icon';

interface PlanCardProps {
  plan: Plan;
  isSelected: boolean;
  isCurrent: boolean;
  onSelect: (id: string) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isSelected, isCurrent, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(plan.id)}
      className={`relative flex flex-col gap-3 rounded-2xl border-2 p-5 shadow-sm transition-all cursor-pointer ${isCurrent
          ? 'border-primary bg-primary/5 dark:bg-primary/10'
          : isSelected
            ? 'border-primary bg-white dark:bg-gray-900 ring-1 ring-primary'
            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-primary/50'
        }`}
    >
      {isCurrent && (
        <div className="absolute -top-3 left-4 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Current Plan
        </div>
      )}

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-text-main dark:text-white text-lg font-bold">{plan.name}</h3>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-text-main dark:text-white text-2xl font-bold tracking-tight">${plan.price}</span>
            <span className="text-text-sub dark:text-gray-400 text-sm font-normal">/month</span>
          </div>
        </div>
        <div className={isCurrent || isSelected ? 'text-primary' : 'text-gray-300 dark:text-gray-600'}>
          <Icon
            name={isCurrent || isSelected ? 'radio_button_checked' : 'radio_button_unchecked'}
            className="text-[28px]"
            filled={isCurrent || isSelected}
          />
        </div>
      </div>

      <div className={`h-px w-full my-1 ${isCurrent ? 'bg-primary/20' : 'bg-gray-100 dark:bg-gray-800'}`}></div>

      <ul className="flex flex-col gap-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-text-main dark:text-white">
            <Icon
              name="check"
              className={`text-[20px] ${isCurrent || isSelected ? 'text-primary' : 'text-text-sub dark:text-gray-400'}`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;
