var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
   document.addEventListener("offline", onOffline, false);
function onOffline() {
ref.close();
}
document.addEventListener("online", onOnline, false);
 
function onOnline() {
var ref = cordova.InAppBrowser.open('http://citycard.smart-pavlodar.kz/app/?push='+localStorage.ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
  cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );

}
if(localStorage.ipush){}
else{}

$("#BtnEnt" ).click(function() {
var ref = cordova.InAppBrowser.open('http://citycard.smart-pavlodar.kz/app/?push='+localStorage.ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
});
        
function didReceiveRemoteNotificationCallBack(jsonData) {}
function didOpenRemoteNotificationCallBack(jsonData) {
alert('PUSH'+jsonData.notification.payload.additionalData.ssylka);
var ref = cordova.InAppBrowser.open(jsonData.notification.payload.additionalData.ssylka, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
}     
        //Настройка ПУШЕЙ ДЛЯ АЙФОНА
        var iosSettings = {};
        iosSettings["kOSSettingsKeyAutoPrompt"] = true;
        iosSettings["kOSSettingsKeyInAppLaunchURL"] = true;
        //ПОДКЛЮЧЕНИЕ ПУШЕЙ 
           window.plugins.OneSignal
          .startInit("6e9818ed-954b-48fe-96cd-3622d5252ffa")
          .handleNotificationReceived(didReceiveRemoteNotificationCallBack)
	  .handleNotificationOpened(didOpenRemoteNotificationCallBack)
          .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.None)
          .iOSSettings(iosSettings)
          .endInit();
window.plugins.OneSignal.getIds(function(ids) {
ipush = ids.userId;
localStorage.ipush=ipush;
var ref = cordova.InAppBrowser.open('http://citycard.smart-pavlodar.kz/app/?push='+ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
});
    }
};
