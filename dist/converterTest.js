"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const commandController = __importStar(require("./controllers/command"));
const chai_1 = require("chai");
require("mocha");
const uuid_1 = require("uuid");
const testUuid = uuid_1.v4();
const TestPerson = {
    id: 69,
    name: "Adam",
    email: "adamadam87@gmail.com",
    gender: "Male",
    status: "Active",
    created_at: "2020-11-12T03:50:03.796+05:30",
    updated_at: "2020-11-12T18:32:57.530+05:30"
};
const TestPersonAfterConversion = new commandController.ClientModel(testUuid, 'Adam', 'adamadam87@gmail.com', 'adamadam87', 'Active');
describe('Converter validation test', () => {
    it('checks format of generated uuid', () => {
        const re = /([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})/;
        const result = commandController.convertStructToClientModel(TestPerson);
        const OK = re.test(result.uuid);
        chai_1.expect(OK).to.equal(true);
    });
    it('checks name', () => {
        const result = commandController.convertStructToClientModel(TestPerson);
        chai_1.expect(result.name).to.equal(TestPersonAfterConversion.name);
    });
    it('checks email', () => {
        const result = commandController.convertStructToClientModel(TestPerson);
        chai_1.expect(result.email).to.equal(TestPersonAfterConversion.email);
    });
    it('checks login', () => {
        const result = commandController.convertStructToClientModel(TestPerson);
        chai_1.expect(result.login).to.equal(TestPersonAfterConversion.login);
    });
    it('checks status', () => {
        const result = commandController.convertStructToClientModel(TestPerson);
        chai_1.expect(result.status).to.equal(TestPersonAfterConversion.status);
    });
});
//# sourceMappingURL=converterTest.js.map