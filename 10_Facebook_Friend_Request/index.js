const btn = document.querySelector("#btn");
let FriendType = document.querySelector(".FriendType");

let check = 0;
btn.addEventListener("click", () => {
  if (check == 0) {
    FriendType.innerHTML = "Friends";
    FriendType.style.color = "Green";
    btn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    FriendType.innerHTML = "Stranger";
    FriendType.style.color = "red";
    btn.innerHTML = "Add Friend";
    check = 0;
  }
});
