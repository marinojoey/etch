const container = document.querySelector('#container')

container.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = "rgb(97, 7, 30)"
    }
);
for (i=0; i<256; i++) {
    const div = document.createElement('div')
    div.classList.add('square')
    container.appendChild(div)
}


