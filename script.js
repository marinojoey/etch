const container = document.querySelector('#container')
const resetEl = document.querySelector(".reset")

container.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = "rgb(97, 7, 30)"
    }
);

for (i=0; i<256; i++) {
    const div = document.createElement('div')
    div.classList.add('square')
    container.appendChild(div)
    resetEl.addEventListener('click', e => {
        div.style.backgroundColor = 'rgb(7, 110, 110)'
        }
    )
}
