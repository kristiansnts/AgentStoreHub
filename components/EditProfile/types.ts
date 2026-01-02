
export interface UserProfile {
  displayName: string;
  bio: string;
  email: string;
  avatarUrl: string;
}

export interface SettingsItemProps {
  icon: string;
  title: string;
  subtitle?: string;
  iconBgColor: string;
  iconColor: string;
  onClick: () => void;
}
