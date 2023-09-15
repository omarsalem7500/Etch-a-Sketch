const container = document.querySelector("#container");
const erase = document.querySelector("#eraser");
const clear = document.querySelector("#clear");
const rainbow = document.querySelector("#rainbow");
const black = document.querySelector("#black");
const grid_size = document.querySelector("#grid_size");
erase.addEventListener("click", erase_div);
black.addEventListener("click", black_div);
clear.addEventListener("click", clear_board);
rainbow.addEventListener("click", RGB);
grid_size.addEventListener("click", gridsize);
const divs = document.getElementsByClassName("pixels");

let Mode = "black";





function create_grid(){
    
    dimension = prompt("Set a grid size", 16);
   
    for(let  i = 0; i < dimension*dimension ; i++){
        const div = document.createElement('div'); 
        div.classList.add("pixels");
        
        width = 100/Math.sqrt(dimension*dimension);
        div.style.width = width + "%";
        div.addEventListener("mouseover", ()=>{
            if (Mode == "eraser"){
                div.style.backgroundColor = "white";
            }

            else if(Mode == "RGB") {
            
            div.style.backgroundColor = getRandomColor();
            
            }
            else{
                div.style.backgroundColor = "black";
            }
        } )
        
        
        container.appendChild(div);
    }
    
}

create_grid();


function erase_div(){
    
    Mode = "eraser";
    
}

function black_div(){

    Mode = "black";
    
}

function clear_board(){

    Mode = "clear";
    for(let i =0; i < divs.length; i++){
        divs[i].style.backgroundColor = "white";
             }
            
             container.pixels.style.backgroundColor = "white";
         }
    

function RGB(){
    Mode = "RGB"
   
}

function gridsize(){
    // for(let i =0; i < divs.length; i++){
    //     divs[i].remove();
    //          }
    removeAllChildNodes(container);
    
    
    
    create_grid();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// function option(event){
//     if(Mode == "eraser"){
//         erase_div(event.target);
//     }
//     else{
//         black_div(event.target);
//     }
// }

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

