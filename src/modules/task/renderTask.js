function renderTask(taskObject) {
    
    let projectTaskContainer = document.getElementById(taskObject.project).getElementsByClassName('todo-list-container').item(0);

    let newTaskElement = document.createElement('div');
    newTaskElement.classList.add('task-item');

    let newTaskElementTitle = document.createElement('div');
    newTaskElementTitle.classList.add('task-item-title');
    newTaskElementTitle.innerText = taskObject.title;

    let newTaskElementDescription = document.createElement('div');
    newTaskElementDescription.classList.add('task-item-description');
    newTaskElementDescription.innerText = taskObject.description;

    let newTaskElementDueDate = document.createElement('div');
    newTaskElementDueDate.classList.add('task-item-dueDate');
    newTaskElementDueDate.innerText = taskObject.dueDate;

    let newTaskElementPriority = document.createElement('div');
    newTaskElementPriority.classList.add('task-item-priority');
    newTaskElementPriority.innerText = taskObject.priority;

    newTaskElement.appendChild(newTaskElementTitle);
    newTaskElement.appendChild(newTaskElementDescription);
    newTaskElement.appendChild(newTaskElementDueDate);
    newTaskElement.appendChild(newTaskElementPriority);

    projectTaskContainer.appendChild(newTaskElement);

}

export {renderTask}