window.addEventListener("resize", function (e) {
  let screenSize = window.innerWidth;
  document.querySelector("#span").innerHTML = screenSize;
});

// 1.We are adding an event listener to the window object.
// 2.We are using the window.innerWidth property to get the width of the screen.
// 3.We are using the document.querySelector() method to get the element with the id of span.
// 4.Display of the Screen with in px
