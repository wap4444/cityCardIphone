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
        
        
function didReceiveRemoteNotificationCallBack(jsonData) {
alert('Внутренний пуш|'+jsonData.payload.additionalData.ssylka);
}
function didOpenRemoteNotificationCallBack(jsonData) {
alert('Внешний|'+jsonData.payload.additionalData.ssylka);
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
});


$(document).on("click","#BtnEnt",function() {
  cordova.plugins.barcodeScanner.scan(
      function (result) {
          if(result.cancelled=='0'){
          $('#inputCard').val(result.text);
		  localStorage.bar=result.text;
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
		  
$.ajax({type: 'GET',url: 'http://bus.smart-pavlodar.kz/BUSPAY.php',data:{busId:result_pay.text,card:localStorage.bar},
success: function(data) {
alert(data);
	
	
$.ajax({type: 'POST',url: 'http://citycard.smart-pavlodar.kz/app/api/cardSearch.php',data:{cardNo:localStorage.cardNo,push:localStorage.ipush},
success: function(data) {
response = JSON.parse(data);
console.log(response.resp);
if(response.resp=='error'){
}else{
		localStorage.userId=response.id;
		localStorage.bar=response.bar;
		localStorage.balans=response.balans;
		localStorage.FIO=response.FIO;
	
	$('#welcome').html('Карта<br><b>'+localStorage.cardNo+'</b><hr>Баланс карты<br><b>'+localStorage.balans+' тенге</b>\
	<br><button type="button" class="btn btn-primary btn-lg" id="payBtn" style="width:70%;border-radius:50px;margin-top:25px;">ОПЛАТИТЬ ПРОЕЗД</button>');

}
}
});
	
	
}
});
		  
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
	  formats : "QR_CODE",
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
