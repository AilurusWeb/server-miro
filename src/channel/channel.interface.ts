// src/channels/channel.interface.ts

/**
 * Structure of Class Channel
 */
export interface I_Channel {
  
}

export type T_Channels = {
  [id: string]: T_Channel
}

/**
 * Structure of Data Channel
 */
export type T_Channel = {
  id: string;
  name: string;
  description: string;
  image: string;
  date_creation: string; 
  locked: boolean; 
  online: boolean; 
  users: Array<string>;
  replies: Array<string>;
}