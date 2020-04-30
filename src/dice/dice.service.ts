/**
 * Data Model Interfaces
 */
import express, { Request, Response } from "express";
import { T_Dice } from "./dice.interface";
import { C_Dice } from "./dice.class";


/**
 * Service Methods
 */

export const create = async (side: number): Promise<T_Dice> => {
  const dice = new C_Dice().get(side);
  return dice;
};