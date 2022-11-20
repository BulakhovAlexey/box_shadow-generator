function generateCss() {
  let insert = document.getElementById("insert").checked;
  insert = insert ? " inset" : "";
  let byX = document.getElementById("byX").value;
  let byY = document.getElementById("byY").value;
  let blur = document.getElementById("blur").value;
  let stretch = document.getElementById("stretch").value;
  let color = document.getElementById("color").value;
  let red = parseInt(color.slice(1, 3), 16);
  let green = parseInt(color.slice(3, 5), 16);
  let blue = parseInt(color.slice(5, 7), 16);
  let opacity = document.getElementById("opacity").value;
  let result = document.getElementById("result");
  let textarea = document.getElementById("codeCss");
  let str = `${insert} ${byX}px ${byY}px ${blur}px ${stretch}px rgba(${red},${green},${blue},${opacity})`;
  textarea.value = `Box-Shadow:` + str;
  result.style.boxShadow = str;
}
let items = document.querySelectorAll("form");
for (let item of items) {
  item.addEventListener("input", generateCss);
}
generateCss();
