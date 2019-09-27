const btn = document.getElementById ('btn');
let box = document.getElementById ('box');
var select = document.getElementById ('select');
var task = document.getElementById('task');

var standartTaskBox = document.getElementById ('standartTask');
var favoriteTaskBox =  document.getElementById ('favoriteTask'); 
var expressTaskBox = document.getElementById ('expressTask');

var standartList = [];
var favoriteList = [];
var expressList = [];

btn.addEventListener ('click', () => {
    if ((btn.click = true) && (task.value)){
        if (select.value == 'SelectStandart'){
            standartList.push (task.value);
            task.value = '';
            upgradeView ();
        }
        if (select.value == 'SelectFavorite'){
            favoriteList.push (task.value);
            task.value = '';
            upgradeView ();
        }
        if (select.value == 'SelectExpress'){
            expressList.push (task.value);
            task.value = '';
            upgradeView ();
        }
        
    }
})

task.addEventListener ('keydown', event => {
    if ((event.key === 'enter' || event.keyCode === 13) && (task.value)){
        if (select.value == 'SelectStandart'){
            standartList.push (task.value);
            task.value = '';
            upgradeView ();
        }
        if (select.value == 'SelectFavorite'){
            favoriteList.push (task.value);
            task.value = '';
            upgradeView ();
        }
        if (select.value == 'SelectExpress'){
            expressList.push (task.value);
            task.value = '';
            upgradeView ();
        }
        
    }
})

function upgradeView () {
    standartTaskBox.innerHTML='';
    favoriteTaskBox.innerHTML=''; 
    expressTaskBox.innerHTML=''; 

    for (var index=0; index < standartList.length; index++){
        let standartItems = standartList[index];
        
        
        const list = document.createElement ('div');
        list.className = 'list';

        list.innerText = standartItems;
        
        standartTaskBox.append(list);

        const delButton = document.createElement  ('input')
        delButton.type = 'button'
        delButton.className = 'taskBtn'
        delButton.value = 'Удалить'
        list.append(delButton)

        delButton.addEventListener('click', () => {
            standartList = standartList.filter(delToDoList => delToDoList !== standartItems);
            upgradeView ()
        })

        const chbox = document.createElement ('input')
        list.append(chbox)
        chbox.type = 'checkbox'
        chbox.className = 'chbox'
        chbox.addEventListener('click', ()=> {
            if(chbox.checked == false) {
                chbox.checked = true;
                list.style.textDecoration = "line-through";
                list.style.fontStyle = "italic";
                list.style.color = "gray";
            }else {
                chbox.checked = false;
                list.style.textDecoration= "none";
                list.style.fontStyle = "normal";
                list.style.color = "black";
            }
        })
        
        list.addEventListener ('click', () => {
            if(chbox.checked == false) {
                chbox.checked = true;
                list.style.textDecoration = "line-through";
                list.style.fontStyle = "italic";
                list.style.color = "gray";
            }else {
                chbox.checked = false;
                list.style.textDecoration= "none";
                list.style.fontStyle = "normal";
                list.style.color = "black";
            }
        })
    }

    for (var index=0; index < favoriteList.length; index++){
        let favoriteItems = favoriteList[index];
        
        const list = document.createElement ('div');
        list.className = 'list';

        list.innerText = favoriteItems;
        
        favoriteTaskBox.append(list);
        
        const delButton = document.createElement  ('input')
        delButton.type = 'button'
        delButton.className = 'taskBtn'
        delButton.value = 'Удалить'
        list.append(delButton)

        delButton.addEventListener('click', () => {
            favoriteList = favoriteList.filter(delToDoList => delToDoList !== favoriteItems);
            upgradeView ()
        })

        const chbox = document.createElement ('input')
        list.append(chbox)
        chbox.type = 'checkbox'
        chbox.className = 'chbox'
        chbox.addEventListener('click', ()=> {
            if(chbox.checked == false) {
                chbox.checked = true;
                list.style.textDecoration = "line-through";
                list.style.fontStyle = "italic";
                list.style.color = "gray";
            }else {
                chbox.checked = false;
                list.style.textDecoration= "none";
                list.style.fontStyle = "normal";
                list.style.color = "black";
            }
        })
        
        list.addEventListener ('click', () => {
            if(chbox.checked == false) {
                chbox.checked = true;
                list.style.textDecoration = "line-through";
                list.style.fontStyle = "italic";
                list.style.color = "gray";
            }else {
                chbox.checked = false;
                list.style.textDecoration= "none";
                list.style.fontStyle = "normal";
                list.style.color = "black";
            }
        })
    }

    for (var index=0; index < expressList.length; index++){
        let expressItems = expressList[index];
        
        const list = document.createElement ('div');
        list.className = 'list';

        list.innerText = expressItems;
        
        expressTaskBox.append(list);
        
        const delButton = document.createElement  ('input')
        delButton.type = 'button'
        delButton.className = 'taskBtn'
        delButton.value = 'Удалить'
        list.append(delButton)

        delButton.addEventListener('click', () => {
            expressList = expressList.filter(delToDoList => delToDoList !== expressItems);
            upgradeView ()
        })

        const chbox = document.createElement ('input')
        list.append(chbox)
        chbox.type = 'checkbox'
        chbox.className = 'chbox'
        chbox.addEventListener('click', ()=> {
            if(chbox.checked == false) {
                chbox.checked = true;
                list.style.textDecoration = "line-through";
                list.style.fontStyle = "italic";
                list.style.color = "gray";
            }else {
                chbox.checked = false;
                list.style.textDecoration= "none";
                list.style.fontStyle = "normal";
                list.style.color = "black";
            }
        })
        
        list.addEventListener ('click', () => {
            if(chbox.checked == false) {
                chbox.checked = true;
                list.style.textDecoration = "line-through";
                list.style.fontStyle = "italic";
                list.style.color = "gray";
            }else {
                chbox.checked = false;
                list.style.textDecoration= "none";
                list.style.fontStyle = "normal";
                list.style.color = "black";
            }
        })
    }

}



document.getElementById('favorite').onclick=slideToFavorite;
function slideToFavorite (){
  var line = document.getElementById ('line')
  var left=0;
  left = left;
  line.style.left = left +'px';
}

document.getElementById('express').onclick=slideToExpress;
function slideToExpress (){
  var line = document.getElementById ('line')
  var left=0;
  left = left - 1600;
  line.style.left = left +'px';
}

document.getElementById('standart').onclick=slideToStandart;
function slideToStandart (){
  var line = document.getElementById ('line')
  var left=0;
  left = left - 800;
  line.style.left = left +'px';
}