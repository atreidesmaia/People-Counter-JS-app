// initialize the count as 0
// listen for the clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// connect id from HTML with js
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0


function increment () {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


