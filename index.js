// Write your code here!
const main = document.querySelector("main");
main.remove();

const newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory")

const textNode = document.createTextNode("Jacob is the champion");
newHeader.appendChild(textNode);