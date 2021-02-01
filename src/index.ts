import express from "express";
import * as commandController from "./controllers/command";
import * as bodyParser from "body-parser";
const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get( "/", ( req, res ) => {
    res.send( "Zadanie testowe Personal Data Service" );
} );

app.post("/api/v1/commands/run", commandController.fetchData);

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );