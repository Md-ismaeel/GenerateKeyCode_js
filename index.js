

let txt = document.querySelector(".text");
let box = document.querySelector(".box");

document.addEventListener("keydown", (e) => {
  box.classList.add("active");

  let keyName = e.keyCode === 32 ? "space" : e.key;
  box.querySelector(".keyCode").innerText = e.keyCode;
  box.querySelector(".keyName").innerText = keyName;
  box.querySelector(".keyCode").innerText = e.keyCode;
  box.querySelector(".key span").innerText = keyName;
  box.querySelector(".code span").innerText = e.keyCode;

  txt.innerText = `Pressed key`;
//   console.log(e);
});
