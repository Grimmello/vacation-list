// Business logic
function Places(place,landmarks,time) {
  this.locations = place;
  this.landmark = landmarks;
  this.timeOfYear= time;
}

$(function () {
  $("form#vacation-place").submit(function(event) {
    event.preventDefault();

    var placeName = $("input#placeName").val();
    var placeLand = $("input#placeLandmarks").val();
    var placeTime = $("input#placeTime").val();

    var newPlace = new Places(placeName, placeLand, placeTime);
    console.log(newPlace);

//  User interface logic
    $("ul.location").append("<li><span class='location'>"+ newPlace.locations +"</span></li>");

    $(".location").last().click(function() {
      $("#show-location").show();
      $("#locationList h2").text(newPlace.locations);
      $(".location-name").text(newPlace.locations);
      $(".nearby-landmarks").text(newPlace.landmark);
      $(".time-visited").text(newPlace.timeOfYear);
    });
  });
});
