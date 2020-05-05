/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";

/**
 * Router Definition
 */

export const pageRouter = express.Router();

/**
 * Controller Definitions
 */

// GET /home

pageRouter.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).render('home');
  } catch (e) {
    res.status(404).send(e.message);
  }

});
