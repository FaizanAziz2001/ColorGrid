let size = 64;
let current_color = 'black';
let mouseTrigger = false;

const setEvents = () => {
    const setbtn = document.querySelector('#inner-button');
    const clearbtn=document.querySelector('#clear-btn');
    const erasebtn=document.querySelector('#erasor');

    setbtn.addEventListener('click', loadGrid);
    clearbtn.addEventListener('click',loadGrid);
    erasebtn.addEventListener('click',()=>{current_color='white'});
}

const changeColor = (e) => {
    if (e.type == "mouseover" && mouseTrigger == true)
        e.target.style.backgroundColor = current_color;
    else if (e.type == "mousedown" && mouseTrigger == false)
        mouseTrigger = true;
    else if (e.type == "mousedown" && mouseTrigger == true)
        mouseTrigger = false;
}
const setSliderText = (value) => {
    const text = document.querySelector('#inner-text');
    text.textContent = value;
}
const createBlock = () => {
    let div = document.createElement('div');
    let parent = document.querySelector('#inner-grid');

    div.className = "cell";
    div.addEventListener("mouseover", changeColor);
    div.addEventListener("mousedown", changeColor);


    parent.appendChild(div);
}

const updateColor = (value) => {
    current_color = value;
}



const loadGrid = () => {
    const bodycontainer = document.querySelector('.inner-body');
    const deletegrid = document.querySelector('#inner-grid');
    if (deletegrid) {
        bodycontainer.lastChild.remove();
    }

    const gridcontainer = document.createElement('div');
    const slider = document.querySelector("#inner-slider");


    const size = slider.value;
    gridcontainer.id = "inner-grid";
    gridcontainer.style.gridTemplateRows = `repeat(${size},1fr)`;
    gridcontainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
    bodycontainer.appendChild(gridcontainer);

    for (let i = 0; i < size * size; i++) {
        createBlock();
    }
}

window.onload = () => {
    loadGrid();
    setEvents();

}
