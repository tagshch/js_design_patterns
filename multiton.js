/**
* Example from Angular codebase
*/
function createInternalInjector(cache, factory) {
  function getService(serviceName) {
    if (cache.hasOwnProperty(serviceName)) {
      return cache[serviceName];
    } else {
      return cache[serviceName] = factory(serviceName);
    }
  }
  return {
    get: getService
    //...
  }
}