import {Task} from "./taskObject";
import {renderTask} from "./renderTask";

function createTaskButton() {
    
    const createTaskButton = document.createElement("button");
    createTaskButton.id = "todo-create-task-button";
    createTaskButton.innerText = "Add new task";

    return createTaskButton;

}

function createTaskForm(projectName) {

    const createTaskForm = document.createElement("form");
    createTaskForm.id = "todo-create-task-form-" + projectName;
    createTaskForm.dataset.project = projectName;

    const createTaskFormTitleField = document.createElement("input");
    createTaskFormTitleField.id = "todo-create-task-title";
    createTaskFormTitleField.type = "text";
    createTaskFormTitleField.name = "task-title";

    const createTaskFormDescriptionField = document.createElement("input");
    createTaskFormDescriptionField.id = "todo-create-task-description";
    createTaskFormDescriptionField.type = "textarea";
    createTaskFormDescriptionField.name = "task-description";

    const createTaskFormDueDateField = document.createElement("input");
    createTaskFormDueDateField.id = "todo-create-task-due-date";
    createTaskFormDueDateField.type = "date";
    createTaskFormDueDateField.name = "task-due-date";

    const createTaskFormPriorityField = document.createElement("select");
    createTaskFormPriorityField.id = "todo-create-task-priority";
    createTaskFormPriorityField.name = "task-priority";

    const lowPriorityOption = new Option('Low', 'low');
    const medPriorityOption = new Option('Medium', 'medium');
    const highPriorityOption = new Option('High', 'high');

    const createTaskFormSubmit = document.createElement("input");
    createTaskFormSubmit.type = "submit";

    createTaskFormPriorityField.add(lowPriorityOption, undefined);
    createTaskFormPriorityField.add(medPriorityOption, undefined);
    createTaskFormPriorityField.add(highPriorityOption, undefined);

    createTaskForm.appendChild(createTaskFormTitleField);
    createTaskForm.appendChild(createTaskFormDescriptionField);
    createTaskForm.appendChild(createTaskFormDueDateField);
    createTaskForm.appendChild(createTaskFormPriorityField);
    createTaskForm.appendChild(createTaskFormSubmit);

    createTaskForm.addEventListener('submit', createNewTask);
    
    return createTaskForm;

}

function createNewTask(e) {
    e.preventDefault();

    const createTaskFormData = new FormData(this);

    let newTaskTitle = createTaskFormData.get('task-title');
    let newTaskDescription = createTaskFormData.get('task-description');
    let newTaskDueDate = createTaskFormData.get('task-due-date');
    let newTaskPriority = createTaskFormData.get('task-priority');

    let newTask = new Task(this.dataset.project, newTaskTitle, newTaskDescription, newTaskDueDate, newTaskPriority);

    renderTask(newTask);
}

export {createTaskButton, createTaskForm};