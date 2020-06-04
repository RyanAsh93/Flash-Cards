console.log("loaded");
 
let state = {
  originalCards: [],
  showCards: [],
}

// var greeting = "what is your name?"

// var name = prompt(greeting)
// alert(name)


// function addACard() {
//   const question = prompt("add info here")
//   document.getElementById("popup").innerHTML = question
// }

function editACard() {
  console.log("edit clicked")
}

function deleteACard() {
  console.log("delete clicked")
}

function addACard() {
	var item = document.getElementById('cardInput').value
	var text = document.createTextNode(item)
	var newItem = document.createElement('li')
	newItem.appendChild(text)
  document.getElementById('cardList').appendChild(newItem)
}
