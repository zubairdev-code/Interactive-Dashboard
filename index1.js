let editBtn = document.getElementById("edit");
let deleteBtn = document.getElementById("del");
let title = document.getElementById("h2");
let para = document.getElementById("p");
let card = document.getElementById("card");
let colorInp = document.getElementById("color");
let hideBtn = document.getElementById("hideBtn")
let plength = document.getElementById("plength")

editBtn.addEventListener("click", () => {
  if (title.contentEditable === "true" && para.contentEditable === "true") {
    title.contentEditable = "false";
    para.contentEditable = "false";
    editBtn.innerText = "Edit";
    plength.style.display = "none"
  } else {
    title.contentEditable = "true";
    para.contentEditable = "true";
    title.focus();
    para.focus();
    editBtn.innerText = "Save";
    plength.style.display = "block"
  }
});

deleteBtn.addEventListener("click", () => {
  card.remove();
});
colorInp.addEventListener("input", () => {
  card.style.backgroundColor = colorInp.value;
});

hideBtn.addEventListener("click",()=>{
  para.classList.toggle("hide")
  if(para.classList.contains("hide")){
    hideBtn.innerText = "Show"
  }
  else{
    hideBtn.innerText = "Hide"
  }

})

para.addEventListener("input",()=>{
  let text = para.innerText.replace(/\s/g, "")
  plength.innerText = "Length is: " + text.length

})