function createTaskBlock() {
    
    const createTaskBlock = document.createElement("div");
    createTaskBlock.classList.add("todo-add-task-block");
    
    const createTaskButton = document.createElement("button");
    createTaskButton.classList.add("todo-add-task-button");
    createTaskButton.innerText = "Task";

    createTaskBlock.appendChild(createTaskButton);

    return createTaskBlock;

}

export {createTaskBlock};