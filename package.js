Package.describe({
  name: 'clinical:router',
  summary: 'Routing specifically designed for Meteor',
  version: '2.0.18',
  git: 'https://github.com/clinical-meteor/clinical-router'
});

Npm.depends({
  'body-parser': '1.12.4'
});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.3');

  // meteor dependencies
  api.use('underscore');
  api.use('webapp', 'server');
  api.use('deps', 'client');
  api.use('ui');
  api.use('templating');

  // for cloning
  api.use('ejson');

  // for dynamic scoping with environment variables
  api.use('meteor');

  // main namespace and utils
  api.use('iron:core@1.0.11');
  api.imply('iron:core');

  // ui layout
  api.use('iron:layout@1.0.8');

  // connect like middleware stack for client/server
  api.use('clinical:router-middleware-stack@2.1.0');

  // client and server side url utilities and compiling
  api.use('clinical:router-url@2.1.0');

  // for reactive urls and pushState in the browser
  api.use('clinical:router-location@2.1.0');

  // DEPRECATE:  Remove iron:controller if possible
  // for RouteController which inherits from this
  // api.use('iron:controller@1.0.12');
  api.use('iron:controller@1.0.8');

  api.add_files('lib/current_options.js');
  api.add_files('lib/http_methods.js');
  api.add_files('lib/route_controller.js');
  api.add_files('lib/route_controller_server.js', 'server');
  api.add_files('lib/route_controller_client.js', 'client');
  api.add_files('lib/route.js');
  api.add_files('lib/router.js');
  api.add_files('lib/hooks.js');
  api.add_files('lib/helpers.js');
  api.add_files('lib/router_client.js', 'client');
  api.add_files('lib/body_parser_server.js', 'server');
  api.add_files('lib/router_server.js', 'server');
  api.add_files('lib/plugins.js');
  api.add_files('lib/global_router.js');
  api.add_files('lib/templates.html');

  // symbol exports
  api.export('Router');
  api.export('RouteController');
});

Package.on_test(function (api) {
  api.use('clinical:router');
  api.use('tinytest');
  api.use('test-helpers');
  api.use('tracker');

  api.add_files('tests/helpers.js');
  api.add_files('tests/route_test.js');
  api.add_files('tests/router_test.js');
  api.add_files('tests/route_controller_test.js');
});
