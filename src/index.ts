/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { Server as http } from "http";
import { listen as ioServer } from "socket.io";
import { ExtendedSocket } from "./socket";
import fetch from 'node-fetch';
import cors from "cors";
import helmet from "helmet";
import mustacheExpress from "mustache-express";
// Routing
import { pageRouter } from "./page/page.router";
import { channelRouter } from "./channel/channel.router";
import { diceRouter } from "./dice/dice.router";
// Routing Exceptions
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/notFound.middleware";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
const serverHttp = new http(app);
const io = ioServer(serverHttp);

/**
 *  App Configuration
 */

app.engine('html', mustacheExpress())
app.use(helmet());
app.use(cors());
app.use('/static', express.static('static'));
app.set('view engine', 'html');
app.set('views', './views');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// Routing
app.use("/channel", channelRouter);
app.use("/dice", diceRouter);
app.use("/", pageRouter);
// Routing Exceptions
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Socket IO
 */
let clients = 0;
io.on('connection', function (ioSocket) {
  const socket = <ExtendedSocket>ioSocket;
  clients++;

  socket.on('new player', function (user) {
    socket.username = user.name;
    socket.listUsers = [];
    socket.listUsers.push(user.name);
  })

  socket.on('player rolled', function (data) {
    io.emit('watch my rolled', data)
  })

  socket.on('disconnect', function () {
    clients--;
    if (clients === 0) {
      // save base de donnée 
    }
    io.emit('user disconnected');
  });
});


/**
 * Server Activation
 */

const server = serverHttp.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


/**
 * Webpack HMR Activation 
 */

type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}


declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
