// src/channels/channel.interface.ts

interface Channel {
  id: string;
  name: string;
  users: Array<string>; // User par la suite
  replies: Array<string>; // Reply par la suite
  description: string;
  image: string; // Image en cover
  date_creation: string; 
  locked: boolean; 
  online: boolean; 
}

export { Channel };