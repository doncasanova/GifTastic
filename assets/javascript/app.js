//create an array of topics of interest
var topics = ["gardening", "music", "cars"]
var still = "still"
var stuff;
//using a loop create buttons
for (var i = 0; i < topics.length; i++) {

    // Then dynamically generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie to our button
    a.addClass(" test p-2 m-1 ");
    // Adding a data-attribute
    a.attr("data-name", topics[i]);
    // Providing the initial button text
    a.text(topics[i]);
    // Adding the button to the buttons-view div
    $("#topic-buttons").append(a);
}
    function dataState() {

    $(".gif").on("click", function () {

        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        console.log(state + " still or animated")
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
            // $(this).attr('src', src.replace('.gif', '_anim.gif'));
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

    });
    }


    //------------------------------------------------------------------------------------------------------
    //runs displayTopicInfo





    displayTopicInfo()


    function displayTopicInfo() {
        $("button").on("click", function (event) {
            var stuff = $(this).attr("data-name");

            $("#gifs-appear-here").empty();
            var queryURL = "http://api.giphy.com/v1/gifs/search?q= " + stuff + "&api_key=qENDlgCU7sKs2b61knLcGfykWxz1Osrs&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                var results = response.data;
                console.log(response);
                //   $("#topic-buttons").text(JSON.stringify(response));
                //   renderButtons();

                // }

                // .then(function (response) {
                // Storing an array of results in the results variable


                // displayTopicInfo()
                // Looping over every result item
                for (var i = 0; i < results.length; i++) {

                    // Only taking action if the photo has an appropriate rating
                    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                        // Creating a div with the class "item"
                        var gifDiv = $("<div class='item'>");

                        // Storing the result item's rating
                        var rating = results[i].rating;

                        // Creating a paragraph tag with the result item's rating
                        var p = $("<p>").text("Rating: " + rating);

                        // Creating an image tag
                        var topicsImage = $("<img>");

                        topicsImage.addClass("gif");
                        // Giving the image tag an src attribute of a proprty pulled off the
                        // result item
                        // topicsImage.attr("src", results[i].images.fixed_height.url );

                       
                        topicsImage.attr("src", results[i].images.fixed_height_still.url,);
                        topicsImage.attr("data-still", results[i].images.fixed_height_still.url,);
                        topicsImage.attr("data-animate", results[i].images.fixed_height.url, "data-state", still);

                        //  response.data[i].images.fixed_height_still.url;
            //    imageUrlAnimate = response.data[i].images.fixed_height.url;
                        // Adding a data-attribute
                        // topicsImage.attr("data-still", still);
                        // Appending the paragraph and personImage we created to the "gifDiv" div we created
                        gifDiv.append(p);
                        gifDiv.append(topicsImage);

                        // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                        $("#gifs-appear-here").prepend(gifDiv);
                        dataState()
                    }

                }
            });
        });
    }
