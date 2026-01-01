
import { useState, useCallback } from 'react';
import { Step, AgentFormData, INITIAL_FORM_DATA } from './types';
import Step1Basics from './Step1Basics';
import Step2Branding from './Step2Branding';
import Step3Capabilities from './Step3Capabilities';
import Step4Pricing from './Step4Pricing';
import SuccessScreen from './SuccessScreen';
import Icon from '../Icon';

interface AgentConfiguratorProps {
    onClose?: () => void;
    onSuccess?: (data: AgentFormData) => void;
}

const AgentConfigurator = ({ onClose, onSuccess }: AgentConfiguratorProps) => {
    const [currentStep, setCurrentStep] = useState<Step>(1);
    const [formData, setFormData] = useState<AgentFormData>(INITIAL_FORM_DATA);

    const updateFormData = useCallback((updates: Partial<AgentFormData>) => {
        setFormData(prev => ({ ...prev, ...updates }));
    }, []);

    const nextStep = () => setCurrentStep(prev => (prev < 5 ? (prev + 1) as Step : prev));
    const prevStep = () => setCurrentStep(prev => (prev > 1 ? (prev - 1) as Step : prev));

    const handleFinish = () => {
        nextStep();
        if (onSuccess) {
            onSuccess(formData);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1Basics data={formData} onUpdate={updateFormData} />;
            case 2:
                return <Step2Branding data={formData} onUpdate={updateFormData} />;
            case 3:
                return <Step3Capabilities data={formData} onUpdate={updateFormData} />;
            case 4:
                return <Step4Pricing data={formData} onUpdate={updateFormData} />;
            case 5:
                return <SuccessScreen data={formData} onReset={() => {
                    setFormData(INITIAL_FORM_DATA);
                    setCurrentStep(1);
                    if (onClose) onClose();
                }} />;
            default:
                return null;
        }
    };

    const getStepTitle = () => {
        switch (currentStep) {
            case 1: return "New Agent Details";
            case 2: return "Icon & Branding";
            case 3: return "Agent Configuration";
            case 4: return "Pricing & Publishing";
            default: return "";
        }
    };

    // If success screen, render without headers/footers
    if (currentStep === 5) {
        return (
            <div className="relative flex h-full w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden">
                {renderStep()}
            </div>
        );
    }

    return (
        <div className="relative flex h-full w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden">
            {/* Sticky Header */}
            <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
                <div className="flex items-center px-4 h-14 justify-between">
                    <button
                        onClick={currentStep === 1 ? onClose : prevStep}
                        className="flex items-center justify-center size-10 rounded-full transition-colors -ml-2 hover:bg-black/5 dark:hover:bg-white/10"
                    >
                        <Icon name={currentStep === 1 ? "close" : "arrow_back_ios_new"} className="text-text-main-light dark:text-white text-2xl" />
                    </button>

                    <h1 className="text-text-main-light dark:text-white text-[17px] font-semibold leading-tight tracking-[-0.015em] absolute left-1/2 -translate-x-1/2">
                        {getStepTitle()}
                    </h1>

                    <button
                        onClick={currentStep === 4 ? handleFinish : nextStep}
                        className="flex items-center justify-center h-10 px-2 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                        <span className="text-primary text-[17px] font-semibold leading-normal">
                            {currentStep === 4 ? 'Finish' : 'Next'}
                        </span>
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="w-full px-0">
                    <div className="h-1 w-full bg-gray-200 dark:bg-gray-700">
                        <div
                            className="h-full bg-primary transition-all duration-300 ease-out shadow-[0_0_10px_rgba(6,87,249,0.3)]"
                            style={{ width: `${(currentStep / 4) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
                {renderStep()}
            </main>

            {/* Persistent Footer Actions */}
            <footer className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-black/5 dark:border-white/5 z-40 max-w-md mx-auto">
                <div className="flex items-center gap-4">
                    {currentStep > 1 && (
                        <button
                            onClick={prevStep}
                            className="flex-1 py-4 px-6 rounded-full text-base font-semibold text-text-sub-light dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                            Previous
                        </button>
                    )}
                    <button
                        onClick={currentStep === 4 ? handleFinish : nextStep}
                        className={`flex-[2] py-4 px-6 rounded-full bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:bg-primary-dark active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${currentStep === 1 ? 'w-full' : ''}`}
                    >
                        {currentStep === 4 ? 'Submit Agent for Review' : 'Next Step'}
                        <Icon name={currentStep === 4 ? 'rocket_launch' : 'arrow_forward'} className="text-lg" />
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default AgentConfigurator;
