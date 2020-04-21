/**
 * Data Model Interfaces
 */

import { OuputStream } from "./inputstream.interface";

 
/**
 * Class Model Interfaces
 */

interface RollsSorted {
  [type: string]: Array<string>;
}

interface InputStreamSchema {
  getRolls: InputStream
}


/**
 * Regex Definitions
 */

const regIsDice: RegExp = /(^\d*D\d+){1}\s?(((\+|-)\s?\d+\s?)+$|$)/gi;

const regIsMonster: RegExp = /(^\d*M\d+){1}\s?(((\+|-)\s?\d+\s?)+$|$)/gi;

/**
 * Class
 */

export class InputStreamController implements InputStreamSchema {
  private _rollsToParser: RollsSorted = {
    dices: [],
    monsters: []
    };

  private _rollsFromParser: RollsSorted = {
    dices: [],
    monsters: []
  };

  /**
   * @param response (string) Réponse émise par le chat
   */
  public constructor (response: string) {
    if(typeof response === "string" && response.length > 0) {
      this._sorted(response);
      this._dispensed();
    }
  }

  /**
   * Créer un objet associé au type du roll
   * @param rollsSorted 
   */
  private _dispensed() {

    for(const rollsType in this._rollsToParser) {

      if(rollsType === "dices")
        this._getDices( this._rollsToParser[rollsType] );
        
      if(rollsType === "monsters")
        this._getMonsters( this._rollsToParser[rollsType] );
    }
  }

  /** 
  * Tri les rolls par type de lancé
  * @param response (string) Réponse émise par le chat
  */
  private _sorted(response: string): boolean {
    let elements = response.split(" ");

    for (const el of elements) {
      if (typeof el !== "string") continue;
      if (el.match(regIsDice)) this._rollsToParser.dices.push(el);
      if (el.match(regIsMonster)) this._rollsToParser.monsters.push(el);
    }
    const dicesLength = this._rollsToParser.dices.length;
    const monstersLength = this._rollsToParser.monsters.length;
    return !(dicesLength === 0 && monstersLength === 0);
  }

  /**
   * 
   * @param strDices Array de string de lancé de dé
   */
  private _getDices (strDices: Array<string>) {
    this._rollsFromParser.dices = new DicesParser(strDices).get();
  }

  /**
   * 
   * @param strDices Array de string de lancé de monstre
   */
  private _getMonsters (strMonsters: Array<string>) {
    this._rollsFromParser.monsters = new MonstersParser(strMonsters).get();
  }

  /**
   * Retourne 
   */
  public getRolls (): InputStream {
    return this._rollsFromParser;
  }

}