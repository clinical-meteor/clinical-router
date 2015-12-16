
describe('clinical:router', function () {
  var server = meteor();
  var client = browser(server);

  beforeEach(function () {
    server.execute(function () {

    }).then(function (value){

    });
  });
  afterEach(function () {
    server.execute(function () {

    });
  });

  it('Router should exist on the client', function () {
    return client.execute(function () {
      expect(Router).to.exist;
    });
  });

  it('Router should exist on the server', function () {
    return server.execute(function () {
      //expect(typeof Router).to.equal("undefined");
      expect(Router).to.exist;
    });
  });
});
