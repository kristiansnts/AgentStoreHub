
import React, { useState } from 'react';
import { PLANS } from './constants';
import { Plan } from './types';
import PlanCard from './PlanCard';
import ConfirmationModal from './ConfirmationModal';
import Icon from '../Icon';

interface SubscriptionManagerProps {
    currentPlanId?: string;
    agentName?: string;
    onPlanChange?: (planId: string) => void;
    onClose?: () => void;
}

export const SubscriptionManager: React.FC<SubscriptionManagerProps> = ({
    currentPlanId = 'basic',
    agentName = 'Agent',
    onPlanChange,
    onClose
}) => {
    const [selectedPlanId, setSelectedPlanId] = useState<string>(currentPlanId);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const currentPlan = PLANS.find(p => p.id === currentPlanId) || PLANS[0];
    const selectedPlan = PLANS.find(p => p.id === selectedPlanId) || PLANS[0];

    const handleConfirmClick = () => {
        if (selectedPlanId !== currentPlanId) {
            setShowConfirmModal(true);
        }
    };

    const handleFinalConfirmation = () => {
        if (onPlanChange) {
            onPlanChange(selectedPlanId);
        }
        setShowConfirmModal(false);
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className="relative flex h-full w-full flex-col bg-white dark:bg-background-dark overflow-hidden">
            {/* Header */}
            <header className="sticky top-0 z-20 flex items-center bg-white dark:bg-background-dark p-4 pb-4 justify-between border-b border-gray-100 dark:border-gray-800">
                <button
                    onClick={onClose}
                    className="text-text-main dark:text-white flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-white/10 rounded-full transition-colors"
                >
                    <Icon name="arrow_back" className="text-2xl" />
                </button>
                <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] text-center">
                    Change Plan: {agentName}
                </h2>
                <div className="size-12"></div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 pb-24">
                <p className="text-text-main dark:text-white text-base font-bold px-1">Available Plans</p>

                <div className="flex flex-col gap-4">
                    {PLANS.map((plan) => (
                        <PlanCard
                            key={plan.id}
                            plan={plan}
                            isCurrent={plan.id === currentPlanId}
                            isSelected={plan.id === selectedPlanId}
                            onSelect={setSelectedPlanId}
                        />
                    ))}
                </div>
            </main>

            {/* Bottom Sticky Button Container */}
            <div className="sticky bottom-0 left-0 right-0 z-10 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 p-4">
                <button
                    onClick={handleConfirmClick}
                    disabled={selectedPlanId === currentPlanId}
                    className={`flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg transition-all ${selectedPlanId === currentPlanId
                            ? 'bg-gray-300 dark:bg-gray-700 shadow-none cursor-not-allowed'
                            : 'bg-primary shadow-primary/20 hover:bg-primary-dark'
                        }`}
                >
                    <span className="truncate">
                        {selectedPlanId === currentPlanId ? 'Selected Plan is Current' : 'Confirm Selection'}
                    </span>
                </button>
            </div>

            {/* Confirmation Modal */}
            <ConfirmationModal
                isOpen={showConfirmModal}
                onClose={() => setShowConfirmModal(false)}
                onConfirm={handleFinalConfirmation}
                newPlan={selectedPlan}
                currentPlan={currentPlan}
            />
        </div>
    );
};

export default SubscriptionManager;
