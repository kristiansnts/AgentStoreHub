
import React, { useState } from 'react';
import { ProfileHeader } from './ProfileHeader';
import { AvatarSection } from './AvatarSection';
import { FormField } from './FormField';
import { SettingsItem } from './SettingsItem';
import { UserProfile } from './types';
import Icon from '../Icon';

interface EditProfileProps {
    initialProfile?: UserProfile;
    onSave?: (profile: UserProfile) => void;
    onCancel?: () => void;
    onChangePassword?: () => void;
    onPrivacySettings?: () => void;
    onDeleteAccount?: () => void;
}

const DEFAULT_PROFILE: UserProfile = {
    displayName: 'User',
    bio: '',
    email: 'user@example.com',
    avatarUrl: 'https://via.placeholder.com/150'
};

export const EditProfile: React.FC<EditProfileProps> = ({
    initialProfile = DEFAULT_PROFILE,
    onSave,
    onCancel,
    onChangePassword,
    onPrivacySettings,
    onDeleteAccount
}) => {
    const [profile, setProfile] = useState<UserProfile>(initialProfile);
    const [hasChanges, setHasChanges] = useState(false);

    const handleFieldChange = (field: keyof UserProfile, value: string) => {
        setProfile(prev => ({ ...prev, [field]: value }));
        setHasChanges(true);
    };

    const handleSave = () => {
        if (onSave) {
            onSave(profile);
        }
        setHasChanges(false);
    };

    const handleCancel = () => {
        if (hasChanges && !confirm('Are you sure you want to discard changes?')) {
            return;
        }

        setProfile(initialProfile);
        setHasChanges(false);

        if (onCancel) {
            onCancel();
        }
    };

    const handleDeleteAccount = () => {
        if (confirm('This action is irreversible. Are you absolutely sure you want to delete your account?')) {
            if (onDeleteAccount) {
                onDeleteAccount();
            }
        }
    };

    return (
        <div className="w-full h-full bg-white dark:bg-background-dark relative flex flex-col overflow-hidden">
            <ProfileHeader onCancel={handleCancel} onSave={handleSave} hasChanges={hasChanges} />

            <div className="flex-1 overflow-y-auto no-scrollbar">
                <AvatarSection
                    imageUrl={profile.avatarUrl}
                    onAvatarClick={() => console.log('Edit avatar modal')}
                    onChangePhoto={() => console.log('File picker triggered')}
                />

                <div className="px-5 pb-8 space-y-6">
                    <FormField
                        label="Display Name"
                        value={profile.displayName}
                        onChange={(val) => handleFieldChange('displayName', val)}
                        icon="person"
                    />

                    <FormField
                        label="Bio"
                        value={profile.bio}
                        onChange={(val) => handleFieldChange('bio', val)}
                        type="textarea"
                        maxLength={150}
                    />

                    <FormField
                        label="Email"
                        value={profile.email}
                        onChange={(val) => handleFieldChange('email', val)}
                        type="email"
                        icon="mail"
                    />

                    <div className="mt-8 space-y-3">
                        <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider ml-1 mb-2">
                            Security & Privacy
                        </h3>

                        <SettingsItem
                            icon="lock_reset"
                            title="Change Password"
                            subtitle="Last updated 3 months ago"
                            iconBgColor="bg-blue-50 dark:bg-blue-900/20"
                            iconColor="text-primary"
                            onClick={onChangePassword || (() => console.log('Navigate to change password'))}
                        />

                        <SettingsItem
                            icon="shield"
                            title="Privacy Settings"
                            iconBgColor="bg-purple-50 dark:bg-purple-900/20"
                            iconColor="text-purple-600 dark:text-purple-400"
                            onClick={onPrivacySettings || (() => console.log('Navigate to privacy settings'))}
                        />
                    </div>

                    <div className="pt-8 pb-10 flex flex-col items-center">
                        <button
                            onClick={handleDeleteAccount}
                            className="group flex items-center gap-2 px-5 py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                        >
                            <Icon name="delete" className="text-red-500 dark:text-red-400 group-hover:scale-110 transition-transform" />
                            <span className="text-red-500 dark:text-red-400 font-semibold text-sm">
                                Delete Account
                            </span>
                        </button>
                        <p className="text-gray-400 dark:text-gray-600 text-xs mt-2 text-center max-w-xs">
                            This will permanently delete your profile and all associated data.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
