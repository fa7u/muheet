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
    console.log("holaa");
    const overlayElement = document.createElement("div");
    // to change content according to section

    overlayElement.innerHTML = imgHtml;

    overlayElement.classList.add("overlay-element");

    container.appendChild(overlayElement);
    if (index !== 6) {
      const textElement = document.createElement("a");
      textElement.setAttribute("href", "#");
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
  if (visibleElements.length > 7) {
    const element = photoList[7];
    const elementImg = element.querySelector("img");

    const textElement = document.createElement("a");
    textElement.setAttribute("href", "#");
    textElement.textContent = "المزيد...";
    textElement.classList.add("more");
    element.appendChild(textElement);
    element.querySelector(".overlay-element").style.display = "none";

    elementImg.style.filter = "brightness(.4)";
  } else {
    const element = photoList[5];
    const elementVideo = element.querySelector("video");
    const elementImg = element.querySelector("img");
    const textElement = document.createElement("a");
    textElement.setAttribute("href", "#");
    textElement.textContent = "المزيد...";
    element.appendChild(textElement);
    elementImg.style.filter = "brightness(.4)";
  }
}

addContent(".image-container");
