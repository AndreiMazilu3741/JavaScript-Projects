function displayCountry (city) {
    var cityIn = city.getAttribute ("data-city");
    alert(cityIn + " is in " + city.innerHTML + "!");
}