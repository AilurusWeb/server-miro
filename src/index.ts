/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { Server as http } from "http";
import { listen as ioServer } from "socket.io";
import fetch from 'node-fetch';
import cors from "cors";
import helmet from "helmet";
import mustacheExpress from "mustache-express";
// Routing
import { itemsRouter } from "./items/items.router";
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// Routing
app.use("/items", itemsRouter);
app.use("/dice", diceRouter);
// Routing Exceptions
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Socket IO
 */
let clients = 0;
io.on('connection', function (socket) {
  clients++;

  socket.on('user', function (user) {
    let private_msg = {
      from: user.name,
      msg: "Salut tout le monde :)"
    };
    socket.broadcast.emit('response', private_msg);
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