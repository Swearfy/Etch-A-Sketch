const body = document.body;
const drawBox = document.getElementById("drawBox");
const reset = document.getElementById("reset");

function box(size) {
  let x = 800 / size;
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

box(5);

reset.addEventListener("click", () => {
  let x = drawBox.getElementsByTagName("div");
  for (let i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "white";
  }
});
