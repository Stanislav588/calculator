const countDisplay = document.querySelector(".counter p");

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "%":
        let percentValue = countDisplay.innerText + "/100";
        countDisplay.innerText = eval(percentValue);
        break;
      case "AC":
        countDisplay.innerText = "0";
        break;

      case "=":
        try {
          countDisplay.innerText = eval(countDisplay.innerText);
        } catch (e) {
          countDisplay.innerText = "Error";
        }
        break;
      default:
        if (countDisplay.textContent.length >= 8) {
          return;
        }
        if (countDisplay.innerText === "/") {
          return;
        }
        if (countDisplay.innerText === "+/-") {
          return;
        }
        if (countDisplay.innerText === "*") {
          return;
        }

        if (countDisplay.innerText === "0" && countDisplay.innerText !== ".") {
          countDisplay.innerText = e.target.innerText;
        } else {
          countDisplay.innerText += e.target.innerText;
          break;
        }
    }
  });
});
