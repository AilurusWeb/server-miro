/**
 * Data Model Interfaces
 */

import { C_Channel } from "./channel.class";
import { T_Channel, T_Channels } from "./channel.interface";
import { C_Dispenser } from "../dispenser/dispenser.class";
import { T_Reply } from "../reply/reply.interface";
import { C_Reply } from "../reply/reply.class";
import { T_Rolls } from "../rollparser/rollparser.interface";

/**
 * Data
 */
let channels: T_Channels = {
  "miro-id_channel": {
    id: "miro-id_channel",
    name: "JDR - Star wars",
    description: "Partie 4 - Les éclats de la force",
    image: "",
    date_creation: "29-04-2020",
    locked: false,
    online: true,
    users: [],
    replies: []
  }
};


/**
 * Service Methods
 */

export const createReply = async (username: string, input: string,): Promise<T_Reply> => {
  const rolls = new C_Dispenser(input).get();
  return new C_Reply(username, rolls).get();
};