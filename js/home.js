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
  const vocalHtml = ` <div class="vocal-info">
                    <div class="play-BT" onclick=""></div>
                    <label for="vocal-info" class="name-cat">
                      <h2 class="name">اسم الصوت</h2>
                      <h2 class="category">الفئة : تأثيرات</h2>
                    </label>
                    <label for="vocal-info" class="time">
                      <h2 class="time">0:00 - 1:40</h2>
                      <h2 class="BPM">BPM 112</h2>
                    </label>
                  </div>`;

  containers.forEach((container, index) => {
    console.log("holaa");
    const overlayElement = document.createElement("div");
    // to change content according to section

    if (containerName == ".video-container") {
      overlayElement.innerHTML = videoHtml;
    } else if (containerName == ".vocal-container") {
      overlayElement.innerHTML = vocalHtml;
    } else {
      overlayElement.innerHTML = imgHtml;
    }

    overlayElement.classList.add("overlay-element");

    container.appendChild(overlayElement);
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
  if (visibleElements.length > 6) {
    const element = photoList[6];
    const elementVideo = element.querySelector("video");

    const elementImg = element.querySelector("img");

    const textElement = document.createElement("a");
    textElement.setAttribute("href", "#");
    textElement.textContent = "المزيد...";
    textElement.classList.add("more");
    element.appendChild(textElement);
    element.querySelector(".overlay-element").style.display = "none";
    if (containerName == ".video-container") {
      elementVideo.style.filter = "brightness(.4)";
    } else if (containerName == ".vocal-container") {
      element.querySelector(".overlay-element").style.display = "block";
    } else {
      elementImg.style.filter = "brightness(.4)";
    }
  } else {
    const element = photoList[5];
    const elementVideo = element.querySelector("video");
    const elementImg = element.querySelector("img");
    const textElement = document.createElement("a");
    textElement.setAttribute("href", "#");
    textElement.textContent = "المزيد...";
    textElement.classList.add("more");
    element.appendChild(textElement);
    // just to avoid runtime error i split video and image
    if (containerName == ".video-container") {
      elementVideo.style.filter = "brightness(.4)";
    } else if (containerName == ".vocal-container") {
      // do nothing just avoid runtime error
    } else {
      elementImg.style.filter = "brightness(.4)";
    }
  }
}

addContent(".image-container");

addContent(".video-container");

addContent(".vector-container");

addContent(".open-file-container");

addContent(".vocal-container");

// to play video on hover
// const videoContainers = document.querySelectorAll(".video-container");

// videoContainers.forEach((container) => {
//   container.addEventListener("mouseover", () => {
//     const video = container.querySelector("video");
//     video.play();
//   });

//   container.addEventListener("mouseout", () => {
//     const video = container.querySelector("video");
//     video.pause();
//   });
// });

function editSpecificContainers() {
  const vocalContainers = document.querySelectorAll(".vocal-container");

  for (let i = 0; i < vocalContainers.length; i++) {
    if (i % 3 === 1) {
      console.log(i);
      vocalContainers[i].style.backgroundColor = "var(--blue-orchid-color)"; // Change background color

      for (let j = 0; j < vocalContainers.length; j++) {
        const overlayElement =
          vocalContainers[i].querySelector(".overlay-element");

        // change the whole content color to white by changing the value of the color
        overlayElement.style.setProperty("--blue-orchid-color", "white");
      }
    }
  }
}

window.addEventListener("DOMContentLoaded", editSpecificContainers);
