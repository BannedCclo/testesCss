const ballHeader = document.querySelector("#ballHeader");
const header = document.querySelector("header");
document.addEventListener("mousemove", (e) => {
  let axisX = e.x - header.getBoundingClientRect().left;
  let axisY = e.y - header.getBoundingClientRect().top;

  let finalX = axisX - ballHeader.offsetWidth / 2;
  let finalY = axisY - ballHeader.offsetHeight / 2;

  ballHeader.style.top = `${finalY}px`;
  ballHeader.style.left = `${finalX}px`;
});

const ballFooter = document.querySelector("#ballFooter");
const footer = document.querySelector("footer");
document.addEventListener("mousemove", (e) => {
  let axisX = e.x - footer.getBoundingClientRect().left;
  let axisY = e.y - footer.getBoundingClientRect().top;

  let finalX = axisX - ballFooter.offsetWidth / 2;
  let finalY = axisY - ballFooter.offsetHeight / 2;

  ballFooter.style.top = `${finalY}px`;
  ballFooter.style.left = `${finalX}px`;
});

const ballBody = document.querySelector("#ballBody");
const body = document.querySelector("body");
document.addEventListener("mousemove", (e) => {
  let axisX = e.x - body.getBoundingClientRect().left;
  let axisY = e.y - body.getBoundingClientRect().top;

  let finalX = axisX - ballBody.offsetWidth / 2;
  let finalY = axisY - ballBody.offsetHeight / 2;

  ballBody.style.top = `${finalY}px`;
  ballBody.style.left = `${finalX}px`;
});

var aux = 0;

function ballChange() {
  if (aux == 0) {
    ballHeader.style.opacity = 0;
    ballFooter.style.opacity = 0;
    ballBody.style.opacity = 0;
    aux = 1;
  } else {
    ballHeader.style.opacity = 1;
    ballFooter.style.opacity = 1;
    ballBody.style.opacity = 1;
    aux = 0;
  }
}

document.addEventListener("mouseup", () => {
  ballChange();
});

// primos
const numero = document.querySelector("#primocalc input[type='number']");
const primoButton = document.querySelector("#primocalc input[type='submit']");
const nextButton = document.querySelector(
  "#primocalc input[type='submit']:last-child"
);
const lblRes = document.querySelector("#primocalc+h1");
const formPrimo = document.querySelector("#primocalc");

function setPrimo(n) {
  let primo = +n + 1;
  while (!isPrimo(primo)) {
    primo++;
  }
  return primo;
}

function isPrimo(n) {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function setResult() {
  const param = numero.value;
  if (param < 1 || !param) {
    alert("Insira um número positivo para começar.");
    return;
  }
  lblRes.textContent = setPrimo(param);
}

function nextPrimo() {
  if (!lblRes.textContent) {
    alert("Para usar essa funcionalidade, comece calculando um número.");
    return;
  }
  lblRes.textContent = setPrimo(parseInt(lblRes.textContent));
}

numero.addEventListener("keydown", () => {
  if (e.key == "Enter") {
    setResult();
  }
});
primoButton.addEventListener("click", setResult);
formPrimo.addEventListener("submit", (e) => {
  e.preventDefault();
});
nextButton.addEventListener("click", nextPrimo);
