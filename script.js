const btn = document.querySelector('button')
const grid = document.querySelector('.grid')
const [inputW, inputH] = document.querySelectorAll('input')

btn.onclick = showGrid

function showGrid() {
    const width = inputW.value
    const height = inputH.value
    grid.innerHTML = `
        ${`<div class="cell"></div>`.repeat(width * height)}
    `
    grid.style.width = width * 50 + 'px'
}