// src/dice/dice.interface.ts

/**
 * Dice class structure
 */
export interface I_Dice {
  get(side: number): T_Dice
}


/**
 * Dice data structure
 */
export type T_Dice = {
  side: number,
  value: number
}

/**
 * Dices data structure
 */
export type T_Dices = {
  list: Array<T_Dice>,
  detail: string,
  sum: number
}

let list = [
  {value: 2, side: 6},
  {value: 3, side: 6},
  {value: 4, side: 6}
]