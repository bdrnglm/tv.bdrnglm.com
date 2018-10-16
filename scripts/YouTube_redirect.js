var index, href, v;
var url = new URL(window.location.href);
var day = url.searchParams.get("day");

if (day != null) {
	href = `https://www.youtube.com/watch?list=${playlist}`;
	if (day > 0 && day <= days.length) {
		v = days[day - 1];
	  index = day;
		href += `&v=${v}&index=${index}`;
	}
} else {
	href = `https://www.youtube.com/c/bdrnglm?sub_confirmation=1`;
}

window.location.href = href;
