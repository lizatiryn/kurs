function addTodos(){
    if (text != ''){
        todos.push(text)
    }
    else {
        return;
    }
    printTodo()
}

function deleteLine(i){
    todos.splice(i, 1)
    printTodo()
}