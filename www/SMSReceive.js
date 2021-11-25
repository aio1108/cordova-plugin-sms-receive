var smsExport = {};

smsExport.startWatch = function(successCallback, failureCallback) {
	cordova.exec( successCallback, failureCallback, 'SMSReceive', 'startWatch', [] );
};

smsExport.stopWatch = function(successCallback, failureCallback) {
	cordova.exec( successCallback, failureCallback, 'SMSReceive', 'stopWatch', [] );
};

smsExport.listSMS = function(filter, successCallback, failureCallback) {
	cordova.exec( successCallback, failureCallback, 'SMSReceive', 'listSMS', [ filter ] );
};

module.exports = smsExport;
