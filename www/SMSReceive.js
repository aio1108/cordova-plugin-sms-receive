var smsExport = {};

smsExport.startWatch = function () {
  return new Promise((successCallback, failureCallback) => {
    cordova.exec(
      successCallback,
      failureCallback,
      "SMSReceive",
      "startWatch",
      []
    );
  });
};

smsExport.stopWatch = function () {
  return new Promise((successCallback, failureCallback) => {
    cordova.exec(
      successCallback,
      failureCallback,
      "SMSReceive",
      "stopWatch",
      []
    );
  });
};

smsExport.listSMS = function (filter = {}) {
  return new Promise((successCallback, failureCallback) => {
    cordova.exec(successCallback, failureCallback, "SMSReceive", "listSMS", [
      filter,
    ]);
  });
};

module.exports = smsExport;
