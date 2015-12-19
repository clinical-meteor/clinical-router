
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

  it('Router can navigate the browser window from one Url to another.', function () {
    return client.execute(function () {
      expect(window.location.hostname).to.equal("localhost");
      expect(window.location.pathname).to.equal("/");
      Router.go('/success');
    }).then(function(){
      client.wait(1000, "", function(){
        expect(window.location.hostname).to.equal("localhost");
        expect(window.location.pathname).to.equal("/success");
      });
    });
  });
});
