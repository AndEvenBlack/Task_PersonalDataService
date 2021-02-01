import * as commandController from './controllers/command';
import { expect } from 'chai';
import 'mocha';
import { v4 } from 'uuid';

const testUuid = v4();

const TestPerson = {
  id:69,
  name:"Adam",
  email:"adamadam87@gmail.com",
  gender:"Male",
  status:"Active",
  created_at:"2020-11-12T03:50:03.796+05:30",
  updated_at:"2020-11-12T18:32:57.530+05:30"
};

const TestPersonAfterConversion = new commandController.ClientModel(testUuid, 'Adam', 'adamadam87@gmail.com', 'adamadam87', 'Active');

describe('Converter validation test', () => {
  it('checks format of generated uuid', ()     => {
    const re = /([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})/;
    const result = commandController.convertStructToClientModel(TestPerson);
    const OK = re.test(result.uuid);
    expect(OK).to.equal(true);
  });
  it('checks name', ()     => {
    const result = commandController.convertStructToClientModel(TestPerson);
    expect(result.name).to.equal(TestPersonAfterConversion.name);
  });
  it('checks email', ()     => {
    const result = commandController.convertStructToClientModel(TestPerson);
    expect(result.email).to.equal(TestPersonAfterConversion.email);
  });
  it('checks login', ()     => {
    const result = commandController.convertStructToClientModel(TestPerson);
    expect(result.login).to.equal(TestPersonAfterConversion.login);
  });
  it('checks status', ()     => {
    const result = commandController.convertStructToClientModel(TestPerson);
    expect(result.status).to.equal(TestPersonAfterConversion.status);
  });
});