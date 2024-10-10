const table = document.querySelector(".table");
let gameStarted = false;
let time = 30;
for (let i = 1 ; i <= 10 ; i++ ){
    let tr = document.createElement("tr");

    for(let j = 1 ; j <= 10 ; j++){
        let td = document.createElement("td");
        tr.appendChild(td)
    }
    table.appendChild(tr);
};

function generateRandom(){
    let arr = []
    let random = Math.floor(Math.random() * 100);
     while(arr.length < 10){ 
       if(!arr.includes(random)){
        arr.push(random)
       }
       random = Math.floor(Math.random() * 100);
     }
    return arr;
};



function cellsCount() {
    const redCount = document.querySelector('.red-count');
    const greenCount = document.querySelector('.green-count');

    redCount.innerText = document.querySelectorAll('.red').length
    greenCount.innerText = document.querySelectorAll('.green').length

}

function checkGameResult() {
    const greenCount = document.querySelectorAll('.green').length;

    if (greenCount < 10) {
        alert("Yutkazdingiz!");
    } else {
        alert("Yutdingiz!");
    }
}


function timeCount(){
    let timeText = document.querySelector(".Time-secund");
     const intervaldID = setInterval(function() {
       if(time >= 1){
        time--
        timeText.innerText = `00:${String(time).padStart(2, '0')}`
        //    timeText.innerText = `00:${time < 10 ? '0' + time : time}`
       }else{
        clearInterval(intervaldID);
        checkGameResult();
       }
    } , 1000)

}


let cells = document.querySelectorAll("td");
let randomNumbers = generateRandom();


for(let i = 0 ; i < cells.length ; i++){
    cells[i].addEventListener('click' , () => {
      if(!gameStarted){
        gameStarted = true;
        timeCount();
      }


        randomNumbers.includes(i) 
        ? cells[i].classList.add("green") 
        : cells[i].classList.add("red");    
        cells[i].classList.add("animate");
        cellsCount()
    })

};
