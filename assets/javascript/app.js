$(document).ready(function () {
    var queryButtonsDiv = $('#querybuttons');
    var nflTeams = ["Baltimore Ravens", "Atlanta Falcons", "Houston Texans", "Detroit Lions", "Los Angeles Rams", "New England Patriots", "Denver Broncos", "Miami Dolphins", "Buffalo Bills", "Chicago Bears", "Philadelphia Eagles", "New Orleans Saints", "Green Bay Packers", "Kansas City Cheifs", "Seattle Seahawks", "Dallas Cowboys", "Cleveland Browns"];

    function clickButtons() {
        var searchTerms = $(this).attr('data-team');
        console.log(searchTerms)
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + searchTerms + "&api_key=3mnOK9PA7RKmAirX3qtFBIp7D2yIy0hQ&limit=10";
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).done(function(response) {
            console.log({"API Response": response});
            for (var j = 0; j < response.data.length; j++) {
                gifContainer = $("<div class='container'>");
                var gifUrl = response.data[j].images.fixed_width.url;
                var gifRating = response.data[j].rating;
                ratingText = $('<p>').text(gifRating);
                var gifTitle = response.data[j].title;
                var gifImage = $("<img>").attr("src", gifUrl);
                $('#results').append(gifContainer);
                gifContainer.append(gifImage);
                gifContainer.append("Rating: " + gifRating);
                $('#results').prepend(gifContainer);
                
            }
        });
    }
    function displayButtons(){
        for (var i = 0; i < nflTeams.length; i++) {
            var buttonText = $(this).text();
            var teamButtons = $('<button>');
            teamButtons.addClass("teambutton");
            teamButtons.text(nflTeams[i]);
            teamButtons.attr("data-team", nflTeams[i]);
           queryButtonsDiv.append(teamButtons);
        }
    }
    displayButtons();
    //global click event listener
    $(document).on("click", ".teambutton", clickButtons);
});
