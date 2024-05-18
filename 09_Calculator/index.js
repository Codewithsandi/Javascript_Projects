const input = document.querySelector("#inputBox");
const buttons = document.querySelectorAll("button");

let lastInputWasOperator = false;

buttons.forEach((e) => {
  e.addEventListener("click", (val) => {
    const value = val.target.innerHTML;

    if (value == "AC") {
      input.value = "";
      lastInputWasOperator = false;
    } else if (value == "DEL") {
      input.value = input.value.slice(0, input.value.length - 1);
      lastInputWasOperator = isOperator(input.value[input.value.length - 1]);
      console.log(lastInputWasOperator);
    } else if (value == "=") {
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = "Error";
      }
      lastInputWasOperator = false;
    } else if (isOperator(value)) {
      if (input.value !== "") {
        if (lastInputWasOperator) {
          input.value = input.value.slice(0, -1) + value;
        } else {
          input.value += value;
        }
        lastInputWasOperator = true;
      }
    } else {
      input.value += value;
      lastInputWasOperator = false;
    }
    console.log(value);
  });
});

function isOperator(char) {
  return ['+', '-', '*', '/', '%'].includes(char);
}
