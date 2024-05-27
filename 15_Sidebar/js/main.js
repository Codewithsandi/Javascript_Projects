fetch("https://openapi.programming-hero.com/api/course/curriculum")
  .then((response) => response.json())
  .then((data) => {
    const mileStoneData = data.data;
    console.log(mileStoneData);

    // Call loadMileStones function here
    loadMileStones(mileStoneData);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

function loadMileStones(mileStoneData) {
  const mileStones = document.querySelector(".milestones");
  mileStones.innerHTML = `${mileStoneData
    .map(function (milestone) {
      return `
        <div class="milestone border-b" id="${milestone._id}">
            <div class="flex">
                <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, '${
                  milestone._id
                }')" /></div>
                <div onclick="openMilestone(this, '${milestone._id}')">
                    <p>
                    ${milestone.name}
                    <span><i class="fas fa-chevron-down"></i></span>
                    </p>
                </div>
            </div>
            <div class="hidden_panel">
                ${milestone.modules
                  .map(function (module) {
                    return `
                        <div class="module border-b">
                            <p>${module.name}</p>
                        </div>
                    `;
                  })
                  .join("")}
            </div>
        </div>
    `;
    })
    .join("")}`;
}

function openMilestone(milestoneElement, id) {
  const currentPanel = milestoneElement.parentNode.nextElementSibling;
  const shownPanel = document.querySelector(".show");
  const activePanel = document.querySelector(".active");

  if (!currentPanel.classList.contains("show") && shownPanel) {
    shownPanel.classList.remove("show");
  }
  currentPanel.classList.toggle("show");

  if (activePanel && !milestoneElement.classList.contains(".active")) {
    activePanel.classList.remove("active");
  }
  milestoneElement.classList.add("active");

  showMileStone(id);
}

const milestoneImage = document.querySelector(".milestoneImage");
function showMileStone(id) {
  const title = document.querySelector(".title");
  const details = document.querySelector(".details");

  milestoneImage.style.opacity = 0;
  milestoneImage.src = mileStoneData[id].image;
  title.innerText = mileStoneData[id].name;
  details.innerText = mileStoneData[id].description;
}
milestoneImage.onload = function () {
  this.style.opacity = 1;
};

function markMileStone(checkbox, id) {
  const doneList = document.querySelector(".doneList");
  const milestoneList = document.querySelector(".milestones");
  const item = document.getElementById(id);

  if (checkbox.checked) {
    milestoneList.removeChild(item);
    doneList.appendChild(item);
    sortList(doneList);
  } else {
    doneList.removeChild(item);
    milestoneList.appendChild(item);
    sortList(milestoneList);
  }
}

function sortList(list) {
  Array.from(list.children)
    .sort((a, b) => a.id.localeCompare(b.id, "numeric"))
    .forEach((node) => list.appendChild(node));
}
