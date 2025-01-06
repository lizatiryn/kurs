show()
function show(){
    app.innerHTML = /*HTML*/ `
    
    <h1>TO DO</h1>

    <input type = "text" onchange='text = this.value'>
    <button onclick='addTodos()'>Add</button>
    <ul id ='todo-list'></ul>
    `
}

list = document.getElementById('todo-list')

function printTodo(){
    let html = ''
    for(let i = 0; i < todos.length; i++){
        html += /*html*/ `
            <li>
                <input type = 'checkbox'>
                <span>${todos[i]}</span>
                <button onclick = 'deleteLine(${i})'>X</button>
            </li>
        `
    }
    list.innerHTML = html
}