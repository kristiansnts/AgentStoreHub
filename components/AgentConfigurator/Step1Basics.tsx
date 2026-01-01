
import React from 'react';
import { AgentFormData } from './types';
import Icon from '../Icon';

interface Props {
  data: AgentFormData;
  onUpdate: (updates: Partial<AgentFormData>) => void;
}

const Step1Basics: React.FC<Props> = ({ data, onUpdate }) => {
  return (
    <div className="flex flex-col px-5 pt-6 gap-8">
      {/* Header Info */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs font-bold uppercase tracking-wide">
            Step 1 of 4
          </span>
        </div>
        <h2 className="text-text-main-light dark:text-white text-[28px] font-bold leading-tight tracking-tight">
          Let's start with the basics
        </h2>
        <p className="text-text-sub-light dark:text-gray-400 text-base font-normal leading-relaxed">
          Define your AI agent's identity. This is what users will see first in the AgentStore.
        </p>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-text-main-light dark:text-gray-200 text-sm font-semibold ml-1" htmlFor="agent-name">
            Agent Name
          </label>
          <input
            className="w-full h-14 px-5 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-white text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
            id="agent-name"
            type="text"
            placeholder="e.g., Code Master 3000"
            value={data.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-text-main-light dark:text-gray-200 text-sm font-semibold ml-1" htmlFor="category">
            Category
          </label>
          <div className="relative">
            <select
              className="w-full h-14 pl-5 pr-12 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm appearance-none cursor-pointer"
              id="category"
              value={data.category}
              onChange={(e) => onUpdate({ category: e.target.value })}
            >
              <option disabled value="">Select a category</option>
              <option value="productivity">Productivity</option>
              <option value="writing">Writing & Editing</option>
              <option value="coding">Coding Assistant</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="education">Education</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center text-text-sub-light dark:text-gray-400">
              <Icon name="expand_more" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end ml-1">
            <label className="text-text-main-light dark:text-gray-200 text-sm font-semibold" htmlFor="description">
              Short Description
            </label>
          </div>
          <div className="relative">
            <textarea
              className="w-full p-5 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-white text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm resize-none"
              id="description"
              maxLength={150}
              placeholder="Briefly describe what your agent does..."
              rows={4}
              value={data.description}
              onChange={(e) => onUpdate({ description: e.target.value })}
            />
            <div className="absolute bottom-3 right-4 text-xs font-medium text-text-sub-light dark:text-gray-500 bg-surface-light dark:bg-surface-dark px-1 rounded">
              {data.description.length}/150
            </div>
          </div>
          <p className="text-xs text-text-sub-light dark:text-gray-400 ml-1">
            This will be displayed on the agent card in the marketplace.
          </p>
        </div>
      </div>

      {/* Pro Tip Card */}
      <div className="mt-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 flex gap-4 items-start">
        <Icon name="lightbulb" className="text-primary mt-0.5" />
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold text-text-main-light dark:text-white">Pro Tip</h3>
          <p className="text-xs text-text-sub-light dark:text-gray-300 leading-normal">
            Agents with clear, action-oriented names perform 40% better. Try "Python Debugger" instead of "Code Helper".
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1Basics;
