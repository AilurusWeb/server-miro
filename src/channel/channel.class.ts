/**
 * Data Model Interfaces
 */

import { I_Channel, T_Channel } from "./channel.interface";

/**
 * Data Model
 */

 
/**
 * Class Helpers
 */

import { isFilledString } from "../common/validators.helper";

/**
 * Regex Definitions
 */

const CHANNEL_ID_REGEX: RegExp = /[^a-z0-9\-\_\=]+/gi;

/**
 * Helpers
 */

let isChannelId: Function = (str: string): boolean => (str.search(CHANNEL_ID_REGEX) === -1);

/**
 * Class
 */

export class C_Channel implements I_Channel {

  constructor () {
    
  }

}