$( document ).ready(function() {
console.log('Ready');
gHeight=$(document).height();
console.log(gHeight+' - высота');
myMap ='';
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
	
$.ajax({type: 'POST',url: 'api/cardSearch.php',data:{cardNo:inputCard},
success: function(data) {
console.log(data);
response = JSON.parse(data);
console.log(response.resp);
if(response.resp=='error'){
		$('#alertCardError').html('Карта не найдена. Повторите попытку').show();
}else{
		$('#alertCardError').html('Добро пожаловать '+response.sotrFam+' '+response.sotrName+' '+response.sotrOtc).show();
		localStorage.userId=response.id;
}
}
});
}

//КАРТА
function showMAP(){
$('#MAP').empty();
$('#MAP').height(gHeight+'px');

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
	
myMap.geoObjects.add(new ymaps.Placemark([52.2635,76.7936],{hintContent: "ДОБРОЛЮБОВА, 23"},{       iconLayout: "default#image",  iconImageHref: "bus.png",              iconColor: "#0095b6"}))
}
}


});