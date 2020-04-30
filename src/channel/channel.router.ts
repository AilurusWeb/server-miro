/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as channelService from "./channel.service";
import { T_Rolls } from "../rollparser/rollparser.interface";
import { T_Reply } from "../reply/reply.interface";
import { Console } from "console";

let rolls_test = {

}


/**
 * Router Definition
 */

export const channelRouter = express.Router();

/**
 * Controller Definitions
 */

// GET /rolled

channelRouter.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).render('chat');
  } catch (e) {
    res.status(404).send(e.message);
  }

});

channelRouter.get("/rolled", async (req: Request, res: Response) => {
  const user: string = req.params.user;
  const rolls: string = req.params.rolls;
  let reply = await channelService.createReply(user, rolls); 
  try {
    res.status(200).send({ reply: reply });
  } catch (e) {
    res.status(404).send(e.message);
  }

});

// POST /rolled

channelRouter.post("/rolled", async (req: Request, res: Response) => {
  try {
    const user: string = req.body.user;
    const rolls: string = req.body.rolls;
    let reply = await channelService.createReply(user, rolls) as T_Reply;
    
    res.status(201).send(reply);
  } catch (e) {
    res.status(404).send(e.message);
  }
});