const body = document.body;
const center = document.getElementById("center");
const reset = document.getElementById("reset");
const slider = document.getElementById("idk");
const bottom = document.getElementById("bottom");
function box(size) {
  const drawBox = document.createElement("div");
  drawBox.id = "drawBox";
  drawBox.style.display = "flex";
  drawBox.style.flexWrap = "wrap";
  drawBox.style.width = "600px";
  drawBox.style.height = "600px";
  drawBox.style.border = "6px solid black";
  drawBox.style.overflow = "auto";

  center.insertBefore(drawBox, bottom);

  let x = 600 / size;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.style.width = x + "px";
      div.style.height = x + "px";
      div.style.backgroundColor = "white";
      div.style.margin = "0";
      div.style.padding = "0";
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
      });
      drawBox.append(div);
    }
  }
}

function clearBox() {
  const box = document.getElementById("drawBox");
  box.remove();
}

reset.addEventListener("click", () => {
  let x = drawBox.getElementsByTagName("div");
  for (let i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "white";
  }
});

slider.addEventListener("input", (e) => {
  box(e.target.value);
  clearBox();
});

box(16);
