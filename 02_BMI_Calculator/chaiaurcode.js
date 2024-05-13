const BMI_forms = document.querySelector("form");
const results = document.getElementById("results");

BMI_forms.addEventListener("submit", (e) => {
  e.preventDefault();
  let height = parseInt(e.target.height.value);
  let weight = parseInt(e.target.weight.value);

  console.log(typeof weight);

  let bmi = (weight / ((height*height)/10000)).toFixed(2);
  results.innerText = bmi;
});
