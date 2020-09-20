const btn = document.getElementById('btn');
let box = document.getElementById('box');
var select = document.getElementById('select');
var task = document.getElementById('task');

var standartTaskBox = document.getElementById('standartTask');
var favoriteTaskBox = document.getElementById('favoriteTask');
var expressTaskBox = document.getElementById('expressTask');

var standartList = [];
var favoriteList = [];
var expressList = [];

function selectVal (option, cleatElem, arrList) {
    if (select.value == option){
        arrList.push (task.value);
        task.value = '';
        paintValueElem (cleatElem, arrList);
    }
}

btn.addEventListener ('click', () => {
    if ((btn.click) && (task.value)){
        selectVal('SelectStandart', standartTaskBox, standartList)
        selectVal('SelectFavorite', favoriteTaskBox, favoriteList)
        selectVal('SelectExpress', expressTaskBox, expressList)
    }
})

function paintValueElem(cleatElem, arrList) {
    cleatElem.innerHTML = '';

    for (let i = 0; i < arrList.length; i++) {
        
        let newDiv = document.createElement('div');
        newDiv.textContent = arrList[i];

        cleatElem.append(newDiv);

        let newDelBtn = document.createElement('button');
        newDiv.append(newDelBtn);
        newDelBtn.textContent = 'Delete'

        let newInputChBox = document.createElement('input');
        newInputChBox.type = 'checkbox';
        newDiv.append(newInputChBox);

        newDelBtn.addEventListener('click', () => {
            arrList = arrList.filter(delToDoList => delToDoList !== arrList[i]);
            paintValueElem(cleatElem, arrList)
        })
    }
}

select.addEventListener('change', (event)=>{
    if(select.value === 'SelectStandart'){
        slideToStandart();
    }else if (select.value === 'SelectFavorite'){
        slideToFavorite();
    }else if (select.value === 'SelectExpress'){
        slideToExpress();
    }
})

function slideToFavorite (){
  var line = document.getElementById ('line')
  var left=0;
  left = left;
  line.style.left = left +'px';
}

function slideToExpress (){
  var line = document.getElementById ('line')
  var left=0;
  left = left - 1600;
  line.style.left = left +'px';
}

function slideToStandart (){
  var line = document.getElementById ('line')
  var left=0;
  left = left - 800;
  line.style.left = left +'px';
}