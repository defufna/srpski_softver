document.addEventListener("DOMContentLoaded", function () {
	sorttable.makeSortable(document.querySelector("table"));
	sorttable.innerSortFunction.apply(document.querySelector("th"), []);
});