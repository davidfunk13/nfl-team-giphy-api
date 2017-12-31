// document ready wrapper
$(document).ready(function () {
    //array of searches to print to buttons
    var overwatchArray = ["Overwatch", "Tracer", "Widowmaker", "Mei", "Bastion", "Doomfist", "Mercy", "Winston", "Sombra", "Hanzo", "Zenyatta", "Genji", "Mcree", "Pharah", "Reaper", "Soldier", "Junkrat", "Torbjorn", "DVA", "Orisa", "Reinhardt", "Roadhog", "Zarya", "Ana Overwatch", "Lucio", "Moira", "Symmetra"];
//function for the click event listener
    function clickButtons() {
        //variable container for the data attribute string attached to the buttons
        var hero = $(this).attr('data-hero');
        console.log(hero)
        //url querying the api
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + hero + "&api_key=3mnOK9PA7RKmAirX3qtFBIp7D2yIy0hQ&limit=5";
        $.ajax({
            url: queryUrl,
            method: 'GET'
        }).done(function (response) {
            console.log(response);
            // var newGif = $("<div class='newgif'>")
        });
    }

    $('#querybuttons').empty();
//loop looping through the array of options, creating buttons, appending text to the buttons as well as a data attribute "hero" with a class of .owbutton
    for (var i = 0; i < overwatchArray.length; i++) {
        var buttonText = $(this).text();
        var overwatchButtons = $('<button>');
        overwatchButtons.addClass("owbutton");
        overwatchButtons.text(overwatchArray[i]);
        overwatchButtons.attr("data-hero", overwatchArray[i]);
        $('#querybuttons').append(overwatchButtons);
    }
    //global click event listener
    $(document).on("click", ".owbutton", clickButtons);
});
