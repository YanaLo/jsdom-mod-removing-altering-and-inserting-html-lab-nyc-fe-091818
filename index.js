/* Enter the code to remove the main node element under this comment */
<<<<<<< HEAD
main.remove()
// document.querySelector("#main").remove()
/* Create your new element here and assign it to newHeader */
const header =document.createElement('h1')
header.id='victory'
header.innerText="Yana is the champion"
document.body.appendChild(header)
const newHeader = document.querySelector('#victory')
=======
element.remove()
let header=
/* Create your new element here and assign it to newHeader */
const newHeader = null;
var element = document.createElement('div')
var ul = document.createElement('ul')
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}
 
element.appendChild(ul)
>>>>>>> 650072210b7977a941ef2d9c20007462aba17e5c
