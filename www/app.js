$( document ).ready(function() {
console.log('Ready');
	
gHeight=$(document).height();
console.log(gHeight+' - высота');
myMap ='';
//
function busPay(busId){
	alert(busId);
}	
	
//WELCOME
if(localStorage.userId){
		$('#welcome').html('Карта<br><b>'+localStorage.cardNo+'</b><hr>Баланс карты<br><b>'+localStorage.balans+' тенге</b>\
	<br><button type="button" class="btn btn-primary btn-lg" id="payBtn" style="width:70%;border-radius:50px;margin-top:25px;">ОПЛАТИТЬ ПРОЕЗД</button>');
	checkBalans(localStorage.cardNo);
}
function checkBalans(inputCard){
	console.log('Функция checkBalans со значением '+inputCard);
	
$.ajax({type: 'POST',url: 'http://citycard.smart-pavlodar.kz/app/api/cardSearch.php',data:{cardNo:inputCard,push:localStorage.ipush},
success: function(data) {
response = JSON.parse(data);
console.log(response.resp);
if(response.resp=='error'){
}else{
		localStorage.userId=response.id;
		localStorage.bar=response.bar;
		localStorage.balans=response.balans;
		localStorage.FIO=response.FIO;
}
}
});
}
//Листалка блоков
$( ".showBlock" ).click(function() {
	blname=$(this).attr('blname');
	$('.useBlock').hide();
	$('#'+blname).show();
	delete myMap;

	if(blname=='MAP'){
		showMAP();
	}
});
//Привязка карты
$( "#addCard" ).click(function() {
inputCard=$('#inputCard').val();
	$('#alertCardError').hide();
if(!inputCard){
	console.log('Не указан номер карты');
	$('#alertCardError').html('Не указан номер карты').show();
}else{
	console.log('Карта указана, запуск функции');
	authCard(inputCard);
}
});

function authCard(inputCard){
	console.log('Функция authCard со значением '+inputCard);
	
$.ajax({type: 'POST',url: 'http://citycard.smart-pavlodar.kz/app/api/cardSearch.php',data:{cardNo:inputCard,push:localStorage.ipush},
success: function(data) {
console.log(data);
response = JSON.parse(data);
console.log(response.resp);
if(response.resp=='error'){
		$('#alertCardError').html('Карта не найдена. Повторите попытку').show();
}else{
		localStorage.userId=response.id;
		localStorage.cardNo=response.bar;
		localStorage.bar=response.bar;
		localStorage.balans=response.balans;
		localStorage.FIO=response.FIO;
	$('.useBlock').hide();
	$('#cardBlock').show();
		$('#welcome').html('Карта<br><b>'+localStorage.cardNo+'</b><hr>Баланс карты<br><b>'+localStorage.balans+' тенге</b>\
	<br><button type="button" class="btn btn-primary btn-lg" id="payBtn" style="width:70%;border-radius:50px;margin-top:25px;">ОПЛАТИТЬ ПРОЕЗД</button>');
}
}
});
}

//КАРТА
function showMAP(){
$('#MAP').empty();
$('#MAP').height(gHeight+'px');
	
$.getScript( "http://citycard.smart-pavlodar.kz/api/map/map.php");

ymaps.ready(init);
var myMap, 
myPlacemark;
function init(){
 myMap = new ymaps.Map('MAP', {
center: [52.2635,76.7936],
zoom: 15 ,
controls: []
}),
firstButton = new ymaps.control.Button("Кнопка");
myMap.controls.add(firstButton, {float: 'right'});
	
myMap.geoObjects.add(new ymaps.Placemark([52.2635,76.7936],{hintContent: "ДОБРОЛЮБОВА, 23"},{       iconLayout: "default#image",  iconImageHref: "img/bus.png",              iconColor: "#0095b6"}))
}
}

$.getScript( "http://citycard.smart-pavlodar.kz/app/mainScript.php");
	
});
