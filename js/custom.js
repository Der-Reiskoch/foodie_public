const cookieContainer = document.getElementById("cookie-container");
const cookieButton = document.getElementById("cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("foodie.yamwoonsen.de.cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("foodie.yamwoonsen.de.cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);



function lazyLoadImages() {
    var images = document.getElementsByTagName("img");

    for (var ii = 0; ii < images.length; ii++) {
      var img = images[ii];
      var dataSource = img.getAttribute("data-src");
      if (img.hasAttribute("data-src") && dataSource !== "") {
        img.setAttribute("src", dataSource);

        if (img.removeAttribute !== undefined) {
          img.removeAttribute("data-src");
        } else {
          img.setAttribute("data-src", "");
        }
      }
    }
}

lazyLoadImages();