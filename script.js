const advId = document.querySelector(".adv-id");
const advice = document.querySelector(".adv");
const btn = document.querySelector(".btn");

let genAdv = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      advId.innerHTML = "ADVICE #" + data.slip.id;
      advice.innerHTML = '"' + data.slip.advice + '"';
    });
};

// genAdv();

btn.addEventListener("click", () => {
  genAdv();
});
