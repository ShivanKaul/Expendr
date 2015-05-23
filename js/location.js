latitude = 0
longitude = 0

function get_location(){
	if ( "geolocation" in navigator) {
		console.log("if...")
		navigator.geolocation.getCurrentPosition(set_location, location_error)
	} else {
		add_error("No Location", "Your current browser does not support geolocation. As such this app will not work.")
	}
} 

function set_location(position) {
	console.log("setting location")
	latitude = position.coords.latitude;
	longitude = positions.coords.longitude;
}

function location_error(err){
	add_error("Error location self", err.message); 
}

get_location()
