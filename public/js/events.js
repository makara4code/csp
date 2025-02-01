document.addEventListener("DOMContentLoaded", function () {
  // Delegate click events to buttons with specific classes
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("load-script-btn")) {
      loadExternalScript();
    } else if (event.target.classList.contains("load-style-btn")) {
      loadExternalStyle();
    } else if (event.target.classList.contains("load-image-btn")) {
      loadImage();
    }
  });
});
