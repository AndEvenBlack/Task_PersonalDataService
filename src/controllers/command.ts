import {Request, Response} from "express";
import fetch from "node-fetch"
import { v4 } from "uuid";

const gorestApiUrl = "https://gorest.co.in/public-api/users/"

export let fetchData = async (req: Request, res: Response) => {
    const clientPostBody = req.body;
    if(clientPostBody.id && clientPostBody.id >= 300 && clientPostBody.id <= 320) {
        await fetch(gorestApiUrl + clientPostBody.id)
            .then((gorestResp) => gorestResp.json())
            .then(gorestBody => {
                console.log(convertStructToClientModel(gorestBody.data));
                res.sendStatus(200);
            })
            .catch((reason) => {
                res.sendStatus(404);
            });
    }
    else {
        res.sendStatus(404);
    }
}

export function convertStructToClientModel(data: any) {
    const id = v4();
    const loginField = data.email.substring(0, data.email.indexOf('@'));
    const clientModel = new ClientModel(id, data.name, data.email, loginField, data.status);

    return clientModel;
}

export class ClientModel {
    uuid: string
    name: string
    email: string
    login: string
    status: string

    constructor(uuid:string, name:string, email:string, login:string, status:string) {
        this.uuid = uuid;
        this.name = name;
        this.email = email;
        this.login = login;
        this.status = status;
    }
}