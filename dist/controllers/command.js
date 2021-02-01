"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModel = exports.convertStructToClientModel = exports.fetchData = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const uuid_1 = require("uuid");
const gorestApiUrl = "https://gorest.co.in/public-api/users/";
let fetchData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientPostBody = req.body;
    if (clientPostBody.id && clientPostBody.id >= 300 && clientPostBody.id <= 320) {
        yield node_fetch_1.default(gorestApiUrl + clientPostBody.id)
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
});
exports.fetchData = fetchData;
function convertStructToClientModel(data) {
    const id = uuid_1.v4();
    const loginField = data.email.substring(0, data.email.indexOf('@'));
    const clientModel = new ClientModel(id, data.name, data.email, loginField, data.status);
    return clientModel;
}
exports.convertStructToClientModel = convertStructToClientModel;
class ClientModel {
    constructor(uuid, name, email, login, status) {
        this.uuid = uuid;
        this.name = name;
        this.email = email;
        this.login = login;
        this.status = status;
    }
}
exports.ClientModel = ClientModel;
//# sourceMappingURL=command.js.map