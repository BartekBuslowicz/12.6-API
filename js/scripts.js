var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);
function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}
function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
    	$('<img />', {src: item.flag}).appendTo('#countries');
        $('<li>').text(item.name + ' a nazwa stolicy to ' + item.capital).appendTo(countriesList);
    });
}