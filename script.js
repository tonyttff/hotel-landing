/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("menu");
    var y = document.body;
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.style.overflow = "";
    } else {
      x.style.display = "flex";
      y.style.overflow = "hidden";
    }
  }