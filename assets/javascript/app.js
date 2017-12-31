$(document).ready(function () {
    var overwatchArray = ["Overwatch", "Tracer", "Widowmaker", "Mei", "Bastion", "Doomfist", "Mercy", "Winston", "Sombra", "Hanzo", "Zenyatta", "Genji", "Mcree", "Pharah", "Reaper", "Soldier", "Junkrat", "Torbjorn", "DVA", "Orisa", "Reinhardt", "Roadhog", "Zarya", "Ana Overwatch", "Lucio", "Moira", "Symmetra"];

    $(document).on("click", ".owbutton", function () {
        var buttonText = $(this).text();
        console.log(buttonText);

    });

        var hero = $(this).attr('data-hero');
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=3mnOK9PA7RKmAirX3qtFBIp7D2yIy0hQ&limit=5";

        $.ajax({
            url: queryUrl,
            method: 'GET'
        }).done(function (response) {
            console.log(response);
        });

        $('#querybuttons').empty();

        for (var i = 0; i < overwatchArray.length; i++) {
            var overwatchButtons = $('<button>');
            overwatchButtons.addClass("owbutton");
            overwatchButtons.text(overwatchArray[i]);
            overwatchButtons.attr("data-hero", overwatchArray[i]);
            $('#querybuttons').append(overwatchButtons);
        }
});
