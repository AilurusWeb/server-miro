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

let channels = {
  id: "id_123456",
  name: "channel-5",
  users: [],
  replies: [],
  description: 'Vous etes sur channel 5',
  image: null,
  date_creation: "23/04/2020",
  locked: false,
  online: true
}