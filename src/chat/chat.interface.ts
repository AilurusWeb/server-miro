// src/chat/chat.interface.ts

import { Channels } from "../channels/channel.interface";

interface Chat {
  // configs: Configs
  channels: Channels
}

export { Chat };