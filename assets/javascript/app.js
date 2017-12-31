// document ready wrapper
$(document).ready(function () {
    //array of searches to print to buttons
    var queryButtonsDiv = $('#querybuttons')
    var unitedStatesCities = ["Baltimore", "Atlanta", "Houston", "Detroit", "Los Angeles", "Boston", "Denver", "Miami", "Las Vegas", "New York", "Chicago", "Philadelphia", "New Orleans", "Milwaukee", "Kansas City", "Seattle", "Dallas", "Cleveland", "St. Louis"];
//function for the click event listener
    function clickButtons() {
        //variable container for the data attribute string attached to the buttons
        var searchTerms = $(this).attr('data-city');
        console.log(searchTerms)
        //url querying the api
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + searchTerms + "&api_key=3mnOK9PA7RKmAirX3qtFBIp7D2yIy0hQ&limit=10";
        $.ajax({
            url: queryUrl,
            method: 'GET'
        }).done(function (response) {
            console.log({"API Response": response});
            console.log({"Results length": response.data});
            for (var j = 0; j < response.data.length; j++) {
                var gifUrl = response.data[j].images.fixed_width.url;
                console.log(gifUrl);
                newGif = $("<img>").attr("src", gifUrl);
                $('#results').append(newGif);
            }

$()
            // var newGif = $("<div class='newgif'>")
        });
    }

    $('#querybuttons').empty();
//loop looping through the array of options, creating buttons, appending text to the buttons as well as a data attribute "hero" with a class of .owbutton
    for (var i = 0; i < unitedStatesCities.length; i++) {
        var buttonText = $(this).text();
        var cityButtons = $('<button>');
        cityButtons.addClass("owbutton");
        cityButtons.text(unitedStatesCities[i]);
        cityButtons.attr("data-city", unitedStatesCities[i]);
       queryButtonsDiv.append(cityButtons);
    }
    //global click event listener
    $(document).on("click", ".owbutton", clickButtons);
});
