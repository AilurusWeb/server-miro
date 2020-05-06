// src/dice/dice.class.ts

import { I_RollParser, T_Rolls, T_Roll } from "./rollparser.interface";
import { C_Dice } from "../dice/dice.class";
import { I_Dice, T_Dice, T_Dices } from "../dice/dice.interface";

import { isFilledArray } from "../common/validators.helper";
import { stringify } from "querystring";

/**
 * Regex Definitions
 */

const DICE_REGEX: RegExp = /\d*d\d+/gi;
const MODIFIER_REGEX: RegExp = /(\+\d+)|(\-\d+)/g;

/**
 * Type Data Structure
 */
type T_RollSplitted = {
  dices: string,
  modifiers: string
}

/**
 * Class RollParser 
 */
export class C_RollParser implements I_RollParser {
  
  private _roll = {} as T_Roll;

  /**
   * constructor
   */
  public constructor(roll: string) {
    if(typeof roll === "string" && roll !== "") {
      const splitted = this._split(roll);
      let _r = this._roll;
      _r.input = roll;
      _r.dices = this._dices(splitted.dices);
      _r.modifiers = this._modifiers(splitted.modifiers);
      _r.sum = this._sum(_r.dices.sum, _r.modifiers);
    }
  }

  private _split(strRoll: string): T_RollSplitted {
    let roll = { dices: strRoll, modifiers: "" };
    const cutTo = strRoll.search(MODIFIER_REGEX);
    
    if (cutTo !== -1) {
      roll.dices = strRoll.substring(0,cutTo);
      roll.modifiers = strRoll.substring(cutTo);
    }

    return roll;
  }

  private _dices(strDices: string): T_Dices {
    let dices: T_Dices = { list: [], detail: '', sum: 0 };
    let values: Array<number> = [];

    let splitted = strDices.split(/d/gi).filter(x => x);
    if (!isFilledArray(splitted)) return dices;
    
    let nbDices = 1;
    let side = 0;
    if(splitted.length < 2) {
      side = parseInt(splitted[0]);
    }
    else {
      nbDices = parseInt(splitted[0])
      side = parseInt(splitted[1]);
    }
    for (let i = 1; i <= nbDices; i++) {
      const dice = new C_Dice().get(side);
      values.push(dice.value);
      dices.list = {...dices.list, ...dice};
      dices.sum += dice.value;
    }
    dices.detail = values.join('+');
    return dices;
  }

  /**
   * 
   * @param roll (string) exemple ""
   */
  private _modifiers(strModifiers: string): number {
    const modifiers: Array<string> = strModifiers.match(MODIFIER_REGEX) || [];
    let sum = 0;

    if(!Array.isArray(modifiers)) return sum;

    for (const m of modifiers) {
      sum += parseInt(m);
    }
    return sum;
  }

  private _sum(sumDices: number, sumModifiers: number): number {
    return (typeof sumDices !== "number" && typeof sumModifiers !== "number")
      ? 0
      : sumDices + sumModifiers;
  }

  /**
   * get : Return an Object of Roll
   */
  public get(): T_Roll {
    return this._roll;
  }

}

let dices = [
  {}
]