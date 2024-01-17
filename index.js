let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    highlight(countEl)
    count += 1
    countEl.textContent = count
}

function highlight(btn){
    countEl.className = "";
    saveEl.className = "";
    btn.className = "active";
}

function save() {
    highlight(saveEl)
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0;
    countEl.textContent = count;
}

