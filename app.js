let changeColor = () => {
  let alphaNum = "1234567890ABCDEF";
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    hash = hash + alphaNum[Math.floor(Math.random() * 16)];
  }
  return hash;
};

let btn = document.querySelector("#button");
let canvas = document.querySelector("#canvas");

let changeMyColor = () => {
  canvas.style.backgroundColor = changeColor();
};

btn.addEventListener("click", changeMyColor);
