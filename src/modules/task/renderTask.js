function renderTask(taskObject) {
    
    let projectTaskContainer = document.getElementById(taskObject.project).getElementsByClassName('todo-list-container').item(0);

    console.log(projectTaskContainer);


}

export {renderTask}