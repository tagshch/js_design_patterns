/**
* Dummy Angular provider
*/
myApp.provider('myProvider', function () {
  var configuration;

  var service = {
    getConfig: function () {
      return configuration;
    }
  };

  return {
    configure: function (config) {
      configuration = config;
    },
    $get: function () {
      return service;
    }
  }
});