// LUMINENCE CALCULATOR
// Button click listener
document.getElementById("btn").addEventListener("click", btnClicked);

// event function
function btnClicked() {
  //   console.log("hi");
  //   input
  let r = +document.getElementById("r-in").value;
  let g = +document.getElementById("g-in").value;
  let b = +document.getElementById("b-in").value;

  // process
  let brightness = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);
  let msg = `Luminance = ${brightness}`;
  // output
  document.getElementById("output").innerHTML = Math.round(brightness);
}
