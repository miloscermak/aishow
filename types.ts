import React from 'react';

export interface EventDetail {
  icon: React.ReactNode;
  label: string;
  value: string;
  subValue?: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}