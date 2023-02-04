class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(newTask) {
        this.tasks.push(newTask);
    }

    removeTask(deletedTask) {
        let taskIndex = this.tasks.indexOf(deletedTask);

        if (taskIndex >= 0) {
            this.tasks.splice(taskIndex, 1);
        }
    }
}

export {Project}