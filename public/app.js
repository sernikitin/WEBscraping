// Grab the articles as a json
$.getJSON("/articles", function(data) {
  for (var i = 0; i < data.length; i++) {
   
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "<button id ='p' type='button' data-target='#exampleModal' class='btn btn-primary' data-toggle='modal' data-whatever='@getbootstrap'>"+"Notes"+"</button>"+ "</p>");
    
  }
});


// Whenever someone clicks a p tag
$(document).on("click", "#p", function(e) {
  e.preventDefault()

  // Empty the notes from the note section
  $("#notes").empty();
  // Save the id from the p tag
  var thisId = $(this).parent().attr("data-id");
console.log(thisId)
  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    // With that done, add the note information to the page
    .then(function(data) {
      console.log("inside of then")
      console.log(data);
      // The title of the article
      $("#notes").append("<h2>" + data.title + "</h2>");
      $('#savenote').empty();
       $("#savenote").append("<button   class='btn btn-primary' data-id='" + data._id + "' id='savenote'>Save</button>");
      if (data.note) {
        $("#titleinput").val(data.note.title);
        $("#bodyinput").val(data.note.body);
      }
     
    });
});

$(document).on("click", "#savenote", function() {
  var thisId = $(this).attr("data-id");

  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      $("#notes").empty();

    });

  $("#titleinput").val("");
  $("#bodyinput").val("");

});

$("#test").on("click", function () {
 console.log("was clicked")

 $.get("/scrape" ,function (data, cb) {
  // console.log(data)
}).then(function(data){
  if (data) {
     alert("done ");
  location.reload();
}

})
 
})

