const btn = document.getElementById('btn');
let box = document.getElementById('box');
var select = document.getElementById('select');
var task = document.getElementById('task');
var line = document.getElementById('line')

var standartTaskBox = document.getElementById('standartTask');
var favoriteTaskBox = document.getElementById('favoriteTask');
var expressTaskBox = document.getElementById('expressTask');

var standartList = [];
var favoriteList = [];
var expressList = [];

function selectVal(option, cleatElem, arrList) {
    if (select.value == option) {
        arrList.push(task.value);
        task.value = '';
        paintValueElem(cleatElem, arrList);
        console.log(arrList)
    }
};

btn.addEventListener('click', () => {
    if ((btn.click) && (task.value)) {
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
            arrList.splice(i, 1)
            console.log(arrList)
            paintValueElem(cleatElem, arrList)
        })
    }
};

select.addEventListener('change', (event) => {
    if (select.value === 'SelectStandart') {
        slider(800)
    } else if (select.value === 'SelectFavorite') {
        slider()
    } else if (select.value === 'SelectExpress') {
        slider(1600)
    }
});

function slider(toFrom = 0) {
    var left = 0;
    line.style.left = left - toFrom + 'px';
};