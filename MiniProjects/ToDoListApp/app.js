class ToDoList {
    #tasks = [];

    addTask(taskName) {
    this.#tasks.push ({ name: taskName, completed: false });
    console.log(`Task "${taskName}" has been added.`);
    }

    markCompleted(taskName) {

    }

    removeTask(taskName) {

    }

    listTasks() {

    }



}
const myToDo = new ToDoList();
myToDo.addTask("Learn JavaScript");
myToDo.addTask("Build a project");
