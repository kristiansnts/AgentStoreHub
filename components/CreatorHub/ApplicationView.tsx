import React, { useState } from 'react';
import { ViewType, User } from '../../types';

interface ApplicationViewProps {
    user: User;
    onSubmit: () => void;
}

const ApplicationView: React.FC<ApplicationViewProps> = ({ user, onSubmit }) => {
    const [formData, setFormData] = useState({
        creatorName: '',
        website: '',
        vision: '',
        agreed: false
    });

    const isFormValid = formData.creatorName.length > 0 && formData.vision.length > 0 && formData.agreed;

    return (
        <div className="px-4 pb-24 pt-2">
            <form className="flex flex-col gap-6 py-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-5">
                    <div className="space-y-2">
                        <label className="ml-1 text-sm font-semibold text-text-main dark:text-white">Creator Name / Company Name</label>
                        <input
                            value={formData.creatorName}
                            onChange={(e) => setFormData(prev => ({ ...prev, creatorName: e.target.value }))}
                            className="w-full rounded-xl border-none bg-surface-light p-4 text-text-main shadow-sm ring-1 ring-gray-200 placeholder:text-text-sub/50 focus:ring-2 focus:ring-primary dark:bg-surface-dark dark:text-white dark:ring-gray-800 dark:focus:ring-primary"
                            placeholder="e.g. Nexus AI Labs"
                            type="text"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="ml-1 text-sm font-semibold text-text-main dark:text-white">
                            Website / Portfolio Link <span className="text-xs font-normal text-text-sub ml-1">(Optional)</span>
                        </label>
                        <input
                            value={formData.website}
                            onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                            className="w-full rounded-xl border-none bg-surface-light p-4 text-text-main shadow-sm ring-1 ring-gray-200 placeholder:text-text-sub/50 focus:ring-2 focus:ring-primary dark:bg-surface-dark dark:text-white dark:ring-gray-800 dark:focus:ring-primary"
                            placeholder="https://"
                            type="url"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="ml-1 text-sm font-semibold text-text-main dark:text-white">Brief Description of Your Agents / Vision</label>
                        <textarea
                            value={formData.vision}
                            onChange={(e) => setFormData(prev => ({ ...prev, vision: e.target.value }))}
                            className="w-full resize-none rounded-xl border-none bg-surface-light p-4 text-text-main shadow-sm ring-1 ring-gray-200 placeholder:text-text-sub/50 focus:ring-2 focus:ring-primary dark:bg-surface-dark dark:text-white dark:ring-gray-800 dark:focus:ring-primary"
                            placeholder="Tell us about the agents you plan to build and your vision for the marketplace..."
                            rows={5}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="ml-1 text-sm font-semibold text-text-main dark:text-white">Contact Email</label>
                        <input
                            disabled
                            className="w-full rounded-xl border-none bg-gray-100 dark:bg-gray-800/50 p-4 text-text-sub shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 focus:ring-0"
                            type="email"
                            value={user.email}
                        />
                    </div>
                </div>

                <div className="mt-2 flex items-start gap-3 rounded px-1">
                    <div className="flex h-6 items-center">
                        <input
                            checked={formData.agreed}
                            onChange={(e) => setFormData(prev => ({ ...prev, agreed: e.target.checked }))}
                            className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-surface-dark"
                            id="terms"
                            type="checkbox"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label className="font-medium text-text-main dark:text-white" htmlFor="terms">Agree to Creator Terms & Conditions</label>
                        <p className="mt-1 text-xs text-text-sub dark:text-gray-400">
                            By checking this box, you agree to our <a className="font-semibold text-primary underline decoration-primary/30 underline-offset-2" href="#">Creator Agreement</a> and acknowledge that your application will be reviewed.
                        </p>
                    </div>
                </div>

                <div className="mt-4 pb-4">
                    <button
                        disabled={!isFormValid}
                        onClick={onSubmit}
                        className={`flex w-full items-center justify-center rounded-2xl py-4 text-lg font-bold text-white shadow-xl transition-all active:scale-[0.98] ${isFormValid ? 'bg-primary shadow-primary/20' : 'bg-gray-300 cursor-not-allowed'}`}
                        type="button"
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ApplicationView;
