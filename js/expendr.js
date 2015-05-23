function call_expedia() {
	// Get top 10 places to go
	var radius = 15
	var key = API_KEY
	var long = -73.5703288
	var lat = 45.5119172

	var queryURL = "http://terminal2.expedia.com/x/geo/features?within=" + radius + "km&lng=" + long + "&lat=" + lat + "&type=point_of_interest&apikey=" + key

	$(document).ready(function(){
		$.ajax({
			url: queryURL,
			dataType: "json",
			statusCode: {
				502: function () {
					console.log("Error 502 thrown.")
				}
			},
			success: function (queryResult) {
                                // get array of all results
                                console.log("Inside AJAX call")
                                var results = queryResult;
                                var numResults = results.length;
                                var map = []
                                if (numResults > 0) {
                                	var bound = Math.min(10, numResults); // get either first ten or however many we got if below 10
                                	for (i = 0; i <= bound; i++) {
                                		var tuple = results[i]
                                		var placeName = tuple.name
                                		var placeCoords = tuple.position.coordinates
                                		console.log(placeName, placeCoords)
                                		map = map + {name : placeName, coords : placeCoords}
                                	}
                                	document.getElementById("init").innerHTML = map
                                }
                                else {
                                	document.write("Couldn't find any results! You live in a boring town, sorry.")
                                }
                            },
                            error: function(statusCode, errorThrown) {
                            	if (statusCode.status == 0) {
                            		document.write("Whoops, something went wrong in the AJAX request.")
                            	}
                            }

                        })
})
}

call_expedia()


