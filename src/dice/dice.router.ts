/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as diceService from "./dice.service";
import { Dice } from "./dice.interface";

/**
 * Router Definition
 */

export const diceRouter = express.Router();

/**
 * Controller Definitions
 */

// GET dice/

diceRouter.get("/:side", async (req: Request, res: Response) => {
  try {
    const side: number = parseInt(req.params.side, 10);
    if(isNaN(side)) {
      throw "Le dé lancé doit être un nombre";
    }
    if(side === 0) {
      throw "Le dé lancé doit être supérieur à zéro";
    }
    else {
      const dice: Dice = await diceService.create(side);
      res.status(200).send(dice);
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});