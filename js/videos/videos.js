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
                        <div class="cart container-btn" onclick=""></div>
                      </div>
                    </div>
                    <label for="image-container" class="time"> 00:26 </label>
                    <label for="image-container" class="bottom">
                      كهربائي يمارس الكهرباء
                    </label>`;
  containers.forEach((container, index) => {
    const overlayElement = document.createElement("div");

    overlayElement.innerHTML = videoHtml;

    overlayElement.classList.add("overlay-element");

    container.appendChild(overlayElement);

    const textElement = document.createElement("a");
    textElement.setAttribute("href", "videos_details.html");
    textElement.classList.add("inner-link");
    container.appendChild(textElement);
  });
}

addContent(".video-container");
