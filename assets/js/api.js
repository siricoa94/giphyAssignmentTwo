// these will be appended to the page when the document loads
var movies = ["Street fighter","Terminator","Titanic","Scream","A Clockwork Orange"];

// this will be the function for clicking the buttons appended below the search
$(document).on("click", "button", function (){
    var id = $(this).attr("id")
    var queryURL =     $(document).on("click", "button", function () {
        var id = $(this).attr("id")
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + id +
            "&api_key=W6x4R780WwYgHtCIOLJvDK8tSrt1C4rt&limit=10";
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function (response){
                var results = response.data;
                for (var i = 0; i <results.length; i++){
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var movieImg = $("<img>");
                    movieImg.addClass("gif");
                    movieImg.attr("src", results[i].images);
                    $("#giffContainer").prepend(movieImg);
                    $("#giffContainer").prepend(p)

                }
            })
})