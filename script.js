let size=64;
  

const setEvents=()=>
{
    const button=document.querySelector('#inner-button');
    button.addEventListener('click',loadGrid);
}

const setSliderText=()=>
{
    const text=document.querySelector('#inner-text');
    const sliderVal=document.querySelector('#inner-slider');

    text.textContent=sliderVal.value;
}
const createBlock=()=>{
    let div=document.createElement('div');
    let parent=document.querySelector('#inner-grid');

    div.className="cell";
    div.style.backgroundColor="white";
    div.addEventListener("mouseover",(e)=>
    {   
        
    })


    parent.appendChild(div);
}



const loadGrid=()=>
{
    const bodycontainer=document.querySelector('.inner-body');
    const deletegrid=document.querySelector('#inner-grid');
    if(deletegrid)
    {
        bodycontainer.lastChild.remove();
    }

    const gridcontainer=document.createElement('div');
    const slider=document.querySelector("#inner-slider");


    const size=slider.value;
    gridcontainer.id="inner-grid";
    gridcontainer.style.gridTemplateRows=`repeat(${size},1fr)`;
    gridcontainer.style.gridTemplateColumns=`repeat(${size},1fr)`;
    bodycontainer.appendChild(gridcontainer);

    for(let i=0;i<size*size;i++)
    {
        createBlock();
    }
}

loadGrid();
setEvents();
