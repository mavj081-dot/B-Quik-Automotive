export interface BusinessData {
  name: string;
  address: string;
  phoneNumber?: string;
  rating?: number;
  description: string;
  mapLink: string;
  isOpen?: boolean;
  services: string[];
}

export interface GridItem {
  id: string;
  title: string;
  description: string;
  className?: string;
  bgImage?: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}