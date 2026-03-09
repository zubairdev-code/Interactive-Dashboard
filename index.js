let widjetBtn = document.querySelector(".btn");
let dashboardCont = document.querySelector(".container");
let darkMode = document.getElementById("darkmode");
let body = document.getElementById("body");
let searchBtn = document.getElementById("searchBtn")
let searchInp = document.getElementById("searchInp")
let time = document.getElementById("time")


widjetBtn.addEventListener("click", () => {
  // Card Creation
  let card = document.createElement("div");
  card.classList.add("card");
  // Title Heading
  let title = document.createElement("h2");
  title.classList.add("h2");
  title.innerText = "Widjet Title";
  card.appendChild(title);
  // Content section
  let contentDiv = document.createElement("div");
  contentDiv.classList.add("contentDiv");
  let p = document.createElement("p");
  p.innerText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus voluptas voluptate eaque fuga totam! Totam nemo magni, cum asperiores eligendi tenetur quasi sequi numquam unde soluta dolor, dolorum, eaque vero?";
  contentDiv.appendChild(p);
  card.appendChild(contentDiv);
  // Btn creation
  let btnDiv = document.createElement("div");
  btnDiv.classList.add("btnDiv");
  // Edit and Delete Btn
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("editBtn");
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("deleteBtn");

  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);
  // append in card
  card.appendChild(btnDiv);

  //Edit Btn
  editBtn.addEventListener("click", () => {
    if (p.contentEditable === "true" && title.contentEditable === "true") {
      p.contentEditable = "false";
      title.contentEditable = "false";
      editBtn.innerText = "Edit";
      plegth.style.display = "none"
      
    } else {
      p.contentEditable = "true";
      title.contentEditable = "true";
      p.focus();
      title.focus();
      plegth.style.display = "block"
      editBtn.innerText = "Save";
      
    }
  });
  //delete btn
  deleteBtn.addEventListener("click", () => {
    card.remove();
  });

//length of paragraph content
let plegth = document.createElement('p')
plegth.style.display = "none"
contentDiv.appendChild(plegth)

p.addEventListener("input", () => {
  let text = p.innerText.replace(/\s/g, "")
  plegth.innerText  = "Length is: " + text.length
})






  //color change logic

  let coloInp = document.createElement("input");
  coloInp.type = "color";
  coloInp.classList.add("color");
  btnDiv.appendChild(coloInp);


  coloInp.addEventListener("input", () => {
    card.style.backgroundColor = coloInp.value;
  });
//hide and unhide content of card 
let hideBtn = document.createElement("button")
hideBtn.innerText = "Hide"
hideBtn.setAttribute("id","hidebtn")
hideBtn.classList.add("hideBtn")
btnDiv.appendChild(hideBtn)

hideBtn.addEventListener("click",()=>{
  p.classList.toggle('hide')
  if(p.classList.contains('hide')){
    hideBtn.innerText = "Show"
  }
  else{
    hideBtn.innerText = "Hide"
  }



})



  dashboardCont.appendChild(card);
});


//Dark Mode
darkMode.addEventListener("click", () => {
  body.classList.toggle("dark");
});

searchBtn.addEventListener("click",()=>{
  let value = searchInp.value.toLowerCase()
  let cards = document.querySelectorAll('.card')
cards.forEach((card)=>{
  let title = card.querySelector(".h2")
    let text = title.innerText.toLowerCase()
    if(text.includes(value)){
      card.style.display = "block"
    }
    else{
      card.style.display = "none"
    }
  })

  searchInp.value = ""

})

// Time

setInterval(()=>{
  let clock = new Date()
  time.innerText = clock.toLocaleTimeString()
  time.setAttribute("datetime",clock.toISOString())
},1000)

  

  

