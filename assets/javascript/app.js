$(document).ready(function () {
    var overwatchArray = ["Overwatch", "Tracer", "Widowmaker", "Mei", "Bastion", "Doomfist", "Mercy", "Winston", "Sombra", "Hanzo", "Zenyatta", "Genji", "Mcree", "Pharah", "Reaper", "Soldier", "Junkrat", "Torbjorn", "DVA", "Orisa", "Reinhardt", "Roadhog", "Zarya", "Ana Overwatch", "Lucio", "Moira", "Symmetra"];
    for (var i = 0; i < overwatchArray.length; i++) {
        var overwatchButtons = $('<button>');
        overwatchButtons.addClass("owbutton");
        overwatchButtons.text(overwatchArray[i]);
        $('#querybuttons').append(overwatchButtons);
    }
    //Example Query
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=3mnOK9PA7RKmAirX3qtFBIp7D2yIy0hQ&limit=5");
    xhr.done(function (data) {
        console.log("success got data", data);
    });
});
