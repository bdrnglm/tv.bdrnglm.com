var index, v;
var url = new URL(window.location.href);
var day = url.searchParams.get("day");

if (day != null && day > 0 && day <= days.length) {
	v = days[day - 1];
  index = day;
} else {
	v = days[days.length - 1];
  index = days.length;
}

window.location.href = (`https://www.youtube.com/watch?v=${v}&index=${index}&list=${playlist}`);
