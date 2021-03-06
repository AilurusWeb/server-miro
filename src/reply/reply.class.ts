
import moment from "moment-timezone";
/**
 * Data Model Interfaces
 */

import { I_Reply, T_Reply } from "./reply.interface";
import { ROLL_TYPES, T_Roll, T_Rolls } from "../rollparser/rollparser.interface";
import { T_Dice, T_Dices } from "../dice/dice.interface";

/**
 * Enums
 */


/**
 * Regex Definitions
 */

const ROLL_REGEX: RegExp = /(^\d*D\d+){1}\s?(((\+|-)\s?\d+\s?)+$|$)/gi;


/**
 * Class
 */

export class C_Reply implements I_Reply {
  private _username: string = "";
  private _time: string = "";
  private _rolls: T_Rolls = {};

  constructor (username: string, rolls: T_Rolls) {
    moment.locale('fr');
    this._username = username;
    this._time = moment().format('LTS');
    this._rolls = rolls;
  }

  public get (): T_Reply {
    return {
      username: this._username,
      date: this._time, 
      rolls: this._rolls
    };
  }

}