
function timeoutLog(value, timeout) {
  setTimeout(() => console.log(value), timeout);
}

// 1st way

window.Singleton = function () {
  if (Singleton.instance) {
    return Singleton.instance;
  }

  Singleton.instance = this;

  return this;
}

timeoutLog("1st way", 0);
timeoutLog(Singleton.call({ initDate: (new Date()).getMilliseconds() }), 25);
timeoutLog(Singleton(), 50);
timeoutLog(Singleton(), 75);
timeoutLog("", 90);


// 2nd way

function _Singleton(instance) {
  if (!_Singleton.instance) {
    _Singleton.instance = instance;
  }
  return _Singleton.instance;
}

timeoutLog("2nd way", 100);
timeoutLog(_Singleton({ initDate: (new Date()).getMilliseconds() }), 125);
timeoutLog(_Singleton(), 150);
timeoutLog(_Singleton(), 175);

