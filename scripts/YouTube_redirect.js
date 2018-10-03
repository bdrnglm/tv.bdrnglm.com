var index, href, v;
var url = new URL(window.location.href);
var day = url.searchParams.get("day");

if (day != null && day > 0 && day <= days.length) {
	v = days[day - 1];
  index = day;
	href = `https://www.youtube.com/watch?v=${v}&index=${index}&list=${playlist}`;
} else {
	href = `https://www.youtube.com/c/bdrnglm?sub_confirmation=1`;
}

window.location.href = href;
