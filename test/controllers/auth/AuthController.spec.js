const mongoose = require('mongoose');
const supertest = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');


const Server = require('../../../src/Server');
// const { openConnection, closeConnection } = require('../../../src/services/database');
const StatusCode = require('../../../src/libs/StatusCode');
const config = require('../../../src/config');
const UserModel = require('../../../src/repositories/user/UserModel');
const mockUsers = require('../../mocks/mockUsers');

describe('AuthController.spec.js', () => {
  jest.setTimeout(3000);
  
  const server = new Server(config);
  const request = supertest(server.application());
  const mongoServer = new MongoMemoryServer();

  beforeAll(async () => {

    const server = new Server(config);
    const request = supertest(server.application());

    mongoose.Promise = Promise;
    mongoServer.getUri().then((mongoUri) => {

      const mongooseOpts = {
        // options for mongoose 4.11.3 and above
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
        // useMongoClient: true, // remove this line if you use mongoose 5 and above
      };
    
      mongoose.connect(mongoUri, mongooseOpts);
    
      mongoose.connection.on('error', (e) => {
        if (e.message.code === 'ETIMEDOUT') {
          console.log(e);
          mongoose.connect(mongoUri, mongooseOpts);
        }
        // console.log(e);
      });
    
      mongoose.connection.once('open', async () => {
        console.log(`MongoDB successfully connected to ${mongoUri}`);

        await UserModel.create(mockUsers.validUser);
      });
    });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });
  

  it("should return OK for /health-check", (done) => {
    request
       .get("/health-check")
       .end((err, res) => {
          expect(res.status).toBe(StatusCode.OK);
          expect(res.text).toBe('I am OK');
          done();
       });
  });

  it('1==1', () => {
    expect(1).toBe(1);
  });


  it("should return 400 w/ empty user for /token", (done) => {
    request
       .post(`/api/auth/token`)
       .send()
       .end((err, res) => {
          expect(res.status).toBe(StatusCode.BAD_REQUEST);
          done();
       });
  });

  it("should return 400 w/ wrong username for /token", (done) => {
    request
       .post(`/api/auth/token`)
       .send(mockUsers.wrongUsername)
       .end((err, res) => {
          expect(res.status).toBe(StatusCode.BAD_REQUEST);
          done();
       });
  });

  it("should return 400 w/ wrong password for /token", (done) => {
    request
       .post(`/api/auth/token`)
       .send(mockUsers.wrongPassword)
       .end((err, res) => {
          expect(res.status).toBe(StatusCode.BAD_REQUEST);
          done();
       });
  });

  it("should return 400 w/ wrong credentials for /token", (done) => {
    request
       .post(`/api/auth/token`)
       .send(mockUsers.validUser)
       .end((err, res) => {
          expect(res.status).toBe(StatusCode.OK);
          expect(res.body.data).toHaveProperty('token');
          expect(res.body.data.token).toContain('.');
          done();
       });
  });
});