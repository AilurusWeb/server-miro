/**
 * Data Model Interfaces
 */
import express, { Request, Response } from "express";
import { Dice } from "./dice.interface";

/**
 * Class Dice 
 */
export class DiceController {
  private _default: Dice = { side: 0, value: 0 };
  private _side: number = 0;

  constructor (side: number) {
    this._side = side;
  }

  rolled () {
    if(typeof this._side !== "number") return this._default;
    return {
      side: this._side,
      value: Math.floor(Math.random() * this._side) + 1
    }
  }
}

/**
 * Service Methods
 */

export const create = async (side: number): Promise<Dice> => {
  return new DiceController(side).rolled();
};