// these will be appended to the page when the document loads
var movies = ["Street fighter","Terminator","Titanic","Scream","A Clockwork Orange"];

// this will be the function for clicking the buttons appended below the search
$(document).on("click", "button", function () {
    var id = $(this).attr("id")
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + id +
        "&api_key=W6x4R780WwYgHtCIOLJvDK8tSrt1C4rt&limit=10";
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var carImage = $("<img>");
                carImage.addClass("gif");
                carImage.attr("src", results[i].images.fixed_height_still.url);
                carImage.attr("data-still", results[i].images.fixed_height_still.url);
                carImage.attr("data-animate", results[i].images.fixed_height.url);
                $("#gifContainer").prepend(carImage);
                $("#gifContainer").prepend(p)
            }
            $(".gif").on("click", function () {
                var state = $(this).attr("data-state");
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });
        })
});
function renderButtons() {
$("#buttons-view").empty();
for (var i = 0; i < topic.length; i++) {
    var a = $("<button id=" + topic[i] + ">");
    a.addClass("car-btn");
    a.attr("data-name", topic[i]);
    a.text(topic[i]);
    $("#buttons-view").append(a);
}
}
$("#add-car").on("click", function(event) {
event.preventDefault();
var topics = $("#car-input").val().trim();
topic.push(topics);
renderButtons();
});
renderButtons();