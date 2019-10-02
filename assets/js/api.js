// these will be appended to the page when the document loads
var movies = ["Street fighter","Terminator","Titanic","Scream","A Clockwork Orange"];

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
                }
            })
})