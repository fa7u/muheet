function addContent(containerName) {
  // adding content to all containers
  const containers = document.querySelectorAll(containerName);
  const imgHtml = `
        <div class="top">
          <div class="personal-info">
            <img src="assets/profile.jpg" alt="" class="pic" />
            <h3 class="name">Majd Alozebi</h3>
          </div>
          <div class="container-buttons">
            <div class="like container-btn" onclick=""></div>
            <div class="cart container-btn" onclick=""></div>
          </div>
        </div>
        <label for="image-container" class="bottom">
          كهربائي يمارس الكهرباء
        </label>
      `;

  containers.forEach((container, index) => {
    const overlayElement = document.createElement("div");

    overlayElement.innerHTML = imgHtml;

    overlayElement.classList.add("overlay-element");

    container.appendChild(overlayElement);

    const textElement = document.createElement("a");
    textElement.setAttribute("href", "images_details.html");
    textElement.classList.add("inner-link");
    container.appendChild(textElement);
  });
}

addContent(".favorite");

function displayPagesCount() {
  const favoriteContainers = document.querySelectorAll(".favorite");
  const pagesCountElement = document.querySelector(".pages-count");

  if (favoriteContainers.length > 9) {
    pagesCountElement.style.display = "block";
  } else {
    pagesCountElement.style.display = "none";
  }
}

window.addEventListener("DOMContentLoaded", displayPagesCount);
