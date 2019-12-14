var listElement  = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

 function renderTodos(){
     listElement.innerHTML = ""; 


     for (todo of todos){
         var tudoElement = document.createElement('li');
         var tudoText = document.createTextNode(todo);

         var linkElement = document.createElement('a');
 
         linkElement.setAttribute('href', '#');

         var pos = todos.indexOf(todo);
         linkElement.setAttribute('onclick', 'deleteTodo( '+ pos +' )')

         var linkText = document.createTextNode("Excluir");

         linkElement.appendChild(linkText);

         tudoElement.appendChild(tudoText);
         tudoElement.appendChild(linkElement);

         listElement.appendChild(tudoElement);
     }
 }

 renderTodos();


 function addTodo(){

    var tudoText = inputElement.value;

    todos.push(tudoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
 }

 btnElement.onclick = addTodo;

 function deleteTodo(pos){
       todos.splice(pos, 1);
       renderTodos();
       saveToStorage();
 }

 function saveToStorage(){

     localStorage.setItem('list_todos', JSON.stringify(todos));
 }