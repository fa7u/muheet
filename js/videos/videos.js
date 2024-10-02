function addContent(containerName) {
  // adding content to all containers
  const containers = document.querySelectorAll(containerName);

  const videoHtml = `
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
                    <label for="image-container" class="time"> 00:26 </label>
                    <label for="image-container" class="bottom">
                      كهربائي يمارس الكهرباء
                    </label>`;
  containers.forEach((container, index) => {
    const overlayElement = document.createElement("div");
    // to change content according to section
    if (containerName == ".video-container") {
      overlayElement.innerHTML = videoHtml;
    } else if (containerName == ".vocal-container") {
      overlayElement.innerHTML = videoHtml;
    } else {
      overlayElement.innerHTML = imgHtml;
    }

    overlayElement.classList.add("overlay-element");

    container.appendChild(overlayElement);

    const textElement = document.createElement("a");
    textElement.setAttribute("href", "videos_details.html");
    textElement.classList.add("inner-link");
    container.appendChild(textElement);
  });
}

addContent(".video-container");
