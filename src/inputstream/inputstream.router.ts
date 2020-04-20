/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import { InputStream } from "./inputstream.interface";
import * as InputStreamService from "./inputstream.service";

/**
 * Router Definition
 */

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET inputstream/:value

itemsRouter.get("/:value", async (req: Request, res: Response) => {
  const value: string = req.params.value;

  try {
    const rolls: InputStream = await InputStreamService.parse(value);

    res.status(200).send(rolls);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
