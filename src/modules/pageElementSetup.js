import {createTaskButton, createTaskForm} from './task/createTask.js';

function todoHeaderSetup() {

    const todoHeader = document.createElement("header");
    todoHeader.id = "todo-header";

    return todoHeader;

}

function todoSidebarSetup() {

    const todoSidebar = document.createElement("section");
    todoSidebar.id = "todo-sidebar";

    return todoSidebar;

}

function todoMainSetup() {

    const todoMain = document.createElement("section");
    todoMain.id = "todo-main";

    todoMain.appendChild(createTaskButton());
    todoMain.appendChild(createTaskForm("main"));

    return todoMain;

}

export {todoHeaderSetup,todoSidebarSetup,todoMainSetup}