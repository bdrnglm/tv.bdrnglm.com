// Creating and initialising needed variables: Actual URL + eventual argument
var index, href, v;
var url = new URL(window.location.href);
var day = url.searchParams.get("day");

href = `https://www.youtube.com/`;

// Check if argument "day" is present
if (day != null) {
	// Since "day" was present in the original URL append playlist's ID
	href += `list=${playlist}`;
	// If so check if it ranges from 0 to the biggest video number
	if (day > 0 && day <= days.length) {
		// If so appends to the new URL the ID and playlist's index of the video
		v = days[day - 1];
	  index = day;
		href += `watch?v=${v}&index=${index}&`;
	} else {
		// Otherwise it just append the "playlist" keyword to the new URL to redirect to the playlist's main page
		href += `playlist?`;
	}
} else {
	// Default behaviour
	href += `c/bdrnglm?sub_confirmation=1`;
}

// Redirect to the new URL
window.location.href = href;
