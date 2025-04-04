const container = document.querySelector("#container");
//reference the container existing in our html file
const content = document.createElement("content");
//create a new div stored into a variable called content
content.classList.add("content");
content.textContent = "This is the way";
//add class and text to the content

container.appendChild(content);
//append this div to the container


const para = document.createElement("p");
para.classList.add("red");
para.textContent = "Hey I'm red!";
para.style.color = "red";

container.appendChild(para);

const header = document.createElement
("h3");

header.classList.add("h3");
header.textContent = "I'm a blue h3";
header.style.color = "blue";

container.appendChild(header);

const newDiv = document.createElement("div");
newDiv.classList.add("nD");
newDiv.style.border = '2px solid black';
newDiv.style.backgroundColor = "pink";

container.appendChild(newDiv);

const header1 = document.createElement("h1");
header1.classList.add("h1");
header1.textContent = "I'm a div!";

newDiv.appendChild(header1);

const para1 = document.createElement("p");
para1.classList.add("para1");
para1.textContent = "ME TOO!";

newDiv.appendChild(para1);

function alertMe(){
  alert("skrt skrt");
}

const skrt = document.querySelector("#skrt");

skrt.addEventListener("click", alertMe);

skrt.addEventListener("click", function (e) {
  console.log(e.target);
});

skrt.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

