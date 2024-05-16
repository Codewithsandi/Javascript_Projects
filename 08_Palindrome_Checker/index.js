document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#input");
  const btn = document.querySelector("#btn");

  const checkPalindrome = () => {
    const inputValue = input.value.trim();
    const reverseValue = inputValue.split("").reverse().join("");

    if (input.value.trim() === "" || input.value.trim().length < 2) {
      alert("Write Something with at least two characters");
    } else {
      if (inputValue === reverseValue) {
        alert("Palindrome");
      } else {
        alert("Not Palindrome");
      }
      input.value = "";
    }
  };
  btn.addEventListener("click", checkPalindrome);
});
