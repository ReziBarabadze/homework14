// დავალება 1

let title = document.getElementById("title");

title.textContent = "ვენეცია";

let text = document.getElementById("text");

text.textContent = "ვენეცია ვენეტოს რეგიონის დედაქალია. სახელი მომდინარეობს აქ მაცხოვრებელი ანტიკური პერიოდის ხალხისგან, რომლებსაც ვენეტები ეწოდებოდათ.";

// დავალება 2

title.className = "h2_class";

text.style.fontSize = "20px";
text.style.color = "#ffff00";

// დავალება 3

let firstBox = document.querySelector(".box");

let circle = document.createElement("div");

firstBox.appendChild(circle);
circle.classList.add = ("circle_box");
circle.classList.add = ("circle_box_second")

circle.style.width ="200px";
circle.style.height = "200px";
circle.style.backgroundColor = "yellow";
circle.style.margin = "auto";
circle.style.borderRadius = "50%";
circle.style.marginBlock = "20px"; 

// დავალება 4 --- mouseover & mouseout --- ვერ დავწერე :/ 

function circle_box(x){
  x.style.backgroundColor = "yellow";
}
function circle_box_second(x){
  x.style.backgroundColor = "red";
}

// დავალება 5

let button = document.createElement("button");

button.textContent = "DELETE CIRCLE";

firstBox.appendChild(button)

button.className = "button_style";

button.addEventListener("click", ()=>{
  
  button.style.marginTop = "20px";
  
  if(button.textContent === "DELETE CIRCLE"){
    button.textContent = "RETURN CIRCLE";
    circle.style.display = "none";
  }else{
    button.textContent = "DELETE CIRCLE";
    circle.style.display = "block";
  }
})