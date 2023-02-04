import {createTaskButton, createTaskForm} from '../task/createTask.js';
import {Project} from './projectObject.js';

function setupProjectSpace(projectName) {

    let todoProject = new Project(projectName);
    
    let todoMainContainer = document.createElement("section");
    todoMainContainer.id = projectName;

    const todoListContainer = document.createElement("div");
    todoListContainer.classList.add("todo-list-container");

    const todoFormContainer = document.createElement("div");
    todoFormContainer.classList.add("todo-form-container");
    todoFormContainer.appendChild(createTaskButton());
    todoFormContainer.appendChild(createTaskForm(projectName));

    todoMainContainer.appendChild(todoListContainer);
    todoMainContainer.appendChild(todoFormContainer);

    return todoMainContainer;

}

export {setupProjectSpace}