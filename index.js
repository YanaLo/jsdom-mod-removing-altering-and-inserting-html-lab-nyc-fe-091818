/* Enter the code to remove the main node element under this comment */
main.remove()
// document.querySelector("#main").remove()
/* Create your new element here and assign it to newHeader */
const header =document.createElement('h1')
header.id='victory'
header.innerText="Yana is the champion"
document.body.appendChild(header)
const newHeader = document.querySelector('#victory')
