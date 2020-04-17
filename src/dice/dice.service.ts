/**
 * Data Model Interfaces
 */
import express, { Request, Response } from "express";
import { Dice } from "./dice.interface";

/**
 * Service Methods
 */

export const create = async (side: number): Promise<Dice> => {
  return {
    side: side,
    value: Math.floor(Math.random() * side) + 1
  }
};