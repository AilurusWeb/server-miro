// src/channels/channels.interface.ts

import { Channel } from "./channel.interface";

interface Channels {
  [id: string]: Channel;
}

export { Channels };