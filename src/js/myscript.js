const shelfRow = document.querySelector(".shelf-row");
var moveClicking = document.querySelector(".book-cover").clientWidth + 20;;
var imagePadding = 20;
var scrolling = 0;

function moveBack() {
  shelfRow.scrollTo({
    top: 0,
    left: (scrolling -= moveClicking),
    behavior: "smooth",
  });

  if (scrolling < 0) {
    scrolling = 0;
  }

  console.log("Scrolling: ", scrolling);
}

function moveFoward() {
  if (scrolling <= shelfRow.scrollWidth - shelfRow.clientWidth) {
    shelfRow.scrollTo({
      top: 0,
      left: (scrolling += moveClicking),
      behavior: "smooth",
    });
  }
  console.log("Scrolling: ", scrolling);
}

