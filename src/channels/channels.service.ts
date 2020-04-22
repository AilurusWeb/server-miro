/**
 * Data Model Interfaces
 */

import { Channel } from "./channel.interface";
import { Channels } from "./channels.interface";
import { ChannelsController } from "./channel.class";

/**
 * In-Memory Store
 */


/**
 * Service Methods
 */

export const findAll = async (): Promise<Channels> => {
  return new ChannelsController().getAll();
};

export const find = async (id: string): Promise<Channels> => {
  return new ChannelsController().getChannel(id);
};