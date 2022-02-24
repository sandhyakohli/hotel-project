const listView = document.querySelector("#list-view");
const mapView = document.querySelector("#map-view");
function handleView(event) {
  event.preventDefault();
  if (event.target.className.includes("list-view-btn")) {
    document
      .getElementsByClassName("map-view-btn")[0]
      .classList.remove("btn-primary");

    document
      .getElementsByClassName("list-view-btn")[0]
      .classList.add("btn-primary");
    mapView.style.display = "none";
    listView.style.display = "grid";
  } else if (event.target.className.includes("map-view-btn")) {
    document
      .getElementsByClassName("list-view-btn")[0]
      .classList.remove("btn-primary");

    document
      .getElementsByClassName("map-view-btn")[0]
      .classList.add("btn-primary");

    listView.style.display = "none";
    mapView.style.display = "initial";
  }
}
