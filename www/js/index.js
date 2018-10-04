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
	    
function onOffline() {}
document.addEventListener("online", onOnline, false);
 
function onOnline() {}
        
        
function didReceiveRemoteNotificationCallBack(jsonData) {}
function didOpenRemoteNotificationCallBack(jsonData) {}       
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
    alert(localStorage.ipush);
});


$("#BtnEnt" ).click(function() {
  cordova.plugins.barcodeScanner.scan(
      function (result) {
          if(result.cancelled=='0'){
          $('#inputCard').val(result.text);
          }else{}
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : false, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
	  formats : "QR_CODE",
          prompt : "Наведите на штрих код CityCard", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
});
	    
   
	    
	    
	    
 
   $(document).on("click","#payBtn",function() {
  cordova.plugins.barcodeScanner.scan(
      function (result_pay) {
          if(result_pay.cancelled=='0'){
		  alert(result_pay.text);
busPay(result_pay.text);
          }else{}
      },
      function (error_pay) {
          alert("Scanning PAY failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : false, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Наведите на QR-код в автобусе для оплаты проезда", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
});
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    

    }
};
