/**
 * Data Model Interfaces
 */

import { Channel } from "./channel.interface";
import { Channels } from "./channels.interface";
import { OutputStream } from "../inputstream/inputstream.interface";
import * as InputStreamService from "../inputstream/inputstream.service";

/**
 * Data Model
 */

 
/**
 * Class Helpers
 */

import DateNow from "../common/date";

/**
 * Regex Definitions
 */

const regIsChannelId: RegExp = /[^a-z0-9\-\_\=]+/gi;

/**
 * Helpers
 */

let isChannelId: Function = (str: string): boolean => (str.search(regIsChannelId) === -1);
let strNotEmpty: Function = (str: string): boolean => (typeof str === "string" && str !== "")

/**
 * Class
 */

export class ChannelsController {
  private _channels: Channels = {};
  private _listOfChannel: Array<Channel> = [];
  private _output: OutputStream = [];

  public constructor (id: string) {
    if(isChannelId(id) && strNotEmpty(id)) {
      let channel = this.getChannel(id);
      if (channel) {
        //
      }
    }
    //
  }

  public getAll(): Channels {
    return this._channels;
  }

  public getChannel(id: string): Channel | boolean {
    const channel = this._listOfChannel.find( chan => chan.id === id );
    return (channel)? channel : false;
  }

  /**
   * Envoi la reponse pour la transformer en roll
   * @param value valeur envoyer par l'input
   */
  public submit (value: string, username?: string): object | boolean {
    let response = { time: DateNow.time() };

    if(strNotEmpty(value)) {
      let stream = InputStreamService.parse(value);
      if(stream)
        response = {...response, ...stream};
      else
        return false;
    }

    if(strNotEmpty(username))
      response = {...{name: username} ,...response};

    return response;
  }

}