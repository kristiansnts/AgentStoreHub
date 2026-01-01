
export type SetupStep = 1 | 2 | 3 | 4 | 5;

export type Provider = 'creator' | 'agentstore';

export interface LogEntry {
  id: string;
  message: string;
  timestamp: string;
  status: 'pending' | 'success' | 'info';
  icon: string;
}

export interface AppState {
  step: SetupStep;
  provider: Provider;
  phoneNumber: string;
  otp: string;
  webhookUrl: string;
  isVerifying: boolean;
  isComplete: boolean;
  logs: LogEntry[];
}
