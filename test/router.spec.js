
const supertest = require('supertest');
const Server = require('../src/Server');
const StatusCode = require('../src/libs/StatusCode');
const config = require('../src/config');


describe('router.spec.js', () => {
  const server = new Server(config);
  const request = supertest(server.application());


  it("should return OK for /health-check", (done) => {
    request
       .get("/health-check")
       .end((err, res) => {
          expect(res.status).toBe(StatusCode.OK);
          expect(res.text).toBe('I am OK');
          done();
       });
  });

  it('should return 404 for GET /fake-url w/ .then()', () => {
     return request
        .get('/fake-url')
        .then(res => {
           expect(res.status).toBe(StatusCode.NOT_FOUND);
        });
  });
});
