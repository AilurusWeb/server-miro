/**
 * Data Model Interfaces
 */

import { I_Dispenser } from "./dispenser.interface";
import { T_Rolls } from "../rollparser/rollparser.interface";
import { isFilledArray } from "../common/validators.helper";
import { C_RollParser } from "../rollparser/rollparser.class";

/**
 * Class Import
 */

 
/**
 * Class Model Interfaces
 */

/**
 * Regex Definitions
 */

const ROLL_REGEX: RegExp = /(^\d*D\d+){1}(((\+|-)\d+)+$|$)/gi;

/**
 * Class
 */

export class C_Dispenser implements I_Dispenser {
  private _rolls: T_Rolls = {};

  constructor (input: string) {
    if(typeof input === "string" && input.length > 0) {
      let strRolls = this._pinch(input);
      this._rolls = this._launch(strRolls);
    }
  }

  /**
   * Récupère les morceaux de chaines qui sont des lancés de dé
   * @param input : Chaine envoyé par l'utilisateur
   */
  private _pinch(input: string): Array<string> {
    let words = input.trim().split(" ");
    let rolls: Array<string> = [];
    rolls = words.filter(roll => roll.match(ROLL_REGEX));

    if(!isFilledArray(rolls)) return [];
    return rolls as Array<string>;
  }

  /**
   * 
   * @param strRolls 
   */
  private _launch(strRolls: Array<string>): T_Rolls {
    let rolls: T_Rolls = { type_dice: [] };
    for (const strRoll of strRolls) {
      rolls.type_dice.push( new C_RollParser(strRoll).get() );
    }
    return rolls;
  }

  
  public get (): T_Rolls {
    return this._rolls;
  }

}