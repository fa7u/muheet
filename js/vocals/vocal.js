function addContent(containerName) {
  // adding content to all containers
  const containers = document.querySelectorAll(containerName);

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
    const overlayElement = document.createElement("div");

    overlayElement.innerHTML = vocalHtml;

    overlayElement.classList.add("overlay-element");

    container.appendChild(overlayElement);

    const textElement = document.createElement("a");
    textElement.setAttribute("href", "#");
    textElement.classList.add("inner-link");
    container.appendChild(textElement);
  });
}

addContent(".vocal-container");

function editSpecificContainers() {
  const vocalContainers = document.querySelectorAll(".vocal-container");

  for (let i = 0; i < vocalContainers.length; i++) {
    if (i % 2 === 1) {
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
