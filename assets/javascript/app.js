//create an array of topics of interest
var topics = [ "gardening", "music", "cars" ]
//using a loop create buttons
for (var i = 0; i < topics.length; i++) {

    // Then dynamically generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie to our button
    a.addClass(" test p-2 m-1 ");
    // Adding a data-attribute
    // a.attr("data-name", movies[i]);
    // Providing the initial button text
    a.text(topics[i]);
    // Adding the button to the buttons-view div
    $("#topic-buttons").append(a);
  }
  $("#topic-buttons").on("click", function(event) {

      console.log ('test')
  });


//   var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=qENDlgCU7sKs2b61knLcGfykWxz1Osrs&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });

function displayTopicInfo() {

    // var stuff = $(this).attr("data-name");
    var stuff = "music"
    var queryURL = "http://api.giphy.com/v1/gifs/search?q= " + stuff + "&api_key=qENDlgCU7sKs2b61knLcGfykWxz1Osrs&limit=5";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log("success got data", response);
    //   $("#topic-buttons").text(JSON.stringify(response));
    //   renderButtons();
    });
  }
  displayTopicInfo()
  // Function for displaying movie data
//   function renderButtons() {