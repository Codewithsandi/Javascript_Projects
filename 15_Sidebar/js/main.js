// fetch("https://openapi.programming-hero.com/api/course/curriculum")
//   .then((val) => val.json())
//   .then((data) => console.log(data.data[0].name));

const mileStoneData = JSON.parse(data).data;

console.log(mileStoneData);

function loadMileStones() {
  const mileStones = document.querySelector(".milestones");
  mileStones.innerHTML = `${mileStoneData
    .map(function (milestone) {
      return `
        <div class="milestone border-b">
            <div class="flex">
                <div class="checkbox"><input type="checkbox" /></div>
                <div onclick="openMilestone(this,${milestone._id})">
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

function openMilestone(milestoneElement,id) {
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

  showMileStone(id)
}

const milestoneImage = document.querySelector(".milestoneImage")
function showMileStone(id) {
    const title = document.querySelector(".title")
    const details = document.querySelector(".details")

    milestoneImage.style.opacity = 0
    milestoneImage.src = mileStoneData[id].image
    title.innerText = mileStoneData[id].name
    details.innerText = mileStoneData[id].description
}
milestoneImage.onload = function(){
    this.style.opacity = 1
}

loadMileStones();
