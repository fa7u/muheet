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
    if (index !== 6) {
      const textElement = document.createElement("a");
      textElement.setAttribute("href", "videos_details.html");
      textElement.classList.add("inner-link");
      container.appendChild(textElement);
    }
  });

  // adding "more" text to a specific container

  const photoList = document.querySelectorAll(containerName);
  console.log(photoList);
  // if there are more than 6 elements , brightness and text applied on element

  visibleElements = [];

  for (const container of photoList) {
    if (window.getComputedStyle(container).display !== "none") {
      visibleElements.push(container);
      console.log(visibleElements);
    }
  }
  console.log("visible length " + visibleElements.length);
  if (visibleElements.length > 7) {
    const element = photoList[7];
    const elementVideo = element.querySelector("video");

    const textElement = document.createElement("a");
    textElement.setAttribute("href", "videos_page.html");
    textElement.textContent = "المزيد...";
    textElement.classList.add("more");
    element.appendChild(textElement);

    element.querySelector(".overlay-element").style.visibility = "hidden";
    elementVideo.style.filter = "brightness(.4)";
  } else {
    const element = photoList[5];
    const elementVideo = element.querySelector("video");
    const textElement = document.createElement("a");
    textElement.setAttribute("href", "videos_page.html");
    textElement.textContent = "المزيد...";
    textElement.classList.add("more");
    element.appendChild(textElement);
    elementVideo.style.filter = "brightness(.4)";
  }
}

addContent(".video-container");
