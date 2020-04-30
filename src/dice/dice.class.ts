// src/dice/dice.class.ts

import { I_Dice, T_Dice } from "./dice.interface";

/**
 * Class Dice 
 */
export class C_Dice implements I_Dice {

  public get (side: number): T_Dice {
    return {
      side: side,
      value: Math.floor(Math.random() * side) + 1
    };
  }

}