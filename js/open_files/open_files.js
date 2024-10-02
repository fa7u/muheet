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
            <div class="basket container-btn" onclick=""></div>
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
    textElement.setAttribute("href", "open_files_details.html");
    textElement.classList.add("inner-link");
    container.appendChild(textElement);
  });
}

addContent(".open-file-container");
