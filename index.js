let menuLinks = document.getElementById("menuLinks");
let menuIcon = document.getElementById("menuIcon");

menuLinks.style.maxHeight = "0px";

menuIcon.addEventListener("click", () => {
  if (menuLinks.style.maxHeight === "0px") {
    menuLinks.style.maxHeight = "350px";
  } else {
    menuLinks.style.maxHeight = "0px";
  }
});

function showDateTime() {
  let date = new Date();
  let dateTime = date.toLocaleString();
  document.getElementById("datetime").innerHTML = dateTime;
}
