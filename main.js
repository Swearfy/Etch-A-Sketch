const body = document.body;
const drawBox = document.getElementById("drawBox");

const loop = 256;

for (let i = 0; i < loop; i++) {
  const div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.backgroundColor = "white";
  drawBox.append(div);
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "black";
  });
}
