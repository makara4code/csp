// script.js
function loadExternalScript() {
  try {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.13.0/dist/tf.min.js";

    // Add error handling
    script.onerror = function () {
      updateResults("Failed to load TensorFlow.js");
    };

    script.onload = () => {
      updateResults("TensorFlow.js loaded successfully");
    };

    document.head.appendChild(script);
  } catch (error) {
    console.error("Error creating script tag:", error);
    updateResults(`Error: ${error.message}`);
  }
}

function loadExternalStyle() {
  try {
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";

    style.onerror = function () {
      updateResults("Failed to load style");
    };

    style.onload = () => {
      updateResults("Style loaded successfully");
    };

    document.head.appendChild(style);
  } catch (error) {
    console.error("Error creating style tag:", error);
    updateResults(`Error: ${error.message}`);
  }
}

function loadImage() {
  try {
    const img = document.createElement("img");
    img.src = "https://picsum.photos/200/300";
    img.alt = "Random image";

    img.onerror = function () {
      updateResults("Failed to load image");
    };

    img.onload = () => {
      updateResults("Image loaded successfully");
      document.getElementById("results").appendChild(img);
    };
  } catch (error) {
    console.error("Error creating image:", error);
    updateResults(`Error: ${error.message}`);
  }
}

function updateResults(message) {
  const resultsDiv = document.getElementById("results");
  if (!resultsDiv) {
    console.error("Results div not found");
    return;
  }

  const p = document.createElement("p");
  p.textContent = message;
  resultsDiv.appendChild(p);
}
