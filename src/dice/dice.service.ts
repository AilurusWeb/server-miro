/**
 * Data Model Interfaces
 */
import express, { Request, Response } from "express";
import { Dice } from "./dice.interface";

/**
 * Class Dice 
 */
export class DiceController {
  private _dice: Dice = { side: 0, value: 0 };

  public constructor (side: number) {
    if(typeof side === "number" && side > 0) {
      this._dice = {
        side: side,
        value: Math.floor(Math.random() * side) + 1
      }
    }
  }

  public get() {
    return this._dice;
  }
}

/**
 * Service Methods
 */

export const create = async (side: number): Promise<Dice> => {
  return new DiceController(side).get();
};