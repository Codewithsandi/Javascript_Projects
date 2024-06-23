let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  displayBagIcon();
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
}

function displayBagIcon() {
  let bag_item_count = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bag_item_count.style.visibility = "visible";
    bag_item_count.innerText = bagItems.length;
  } else {
    bag_item_count.style.visibility = "hidden";
  }
}

function displayItemOnHomePage() {
  let items_container_element = document.querySelector(".items-container");

  if (!items_container_element) {
    return;
  }

  let innerHTMLElements = "";

  items.forEach((item) => {
    innerHTMLElements += ` 
        <div class="item-container">
            <img class="item-image" src="${item.image}" alt="item image" />
            <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">RS ${item.current_price}</span>
                <span class="original-price">RS ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}%)</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>
`;
  });

  items_container_element.innerHTML = innerHTMLElements;
}
