class PomodoroApp {
  constructor(options) {
    let { tableTbodySelector, taskFormSelector } = options;
    this.$tableTbody = document.querySelector(tableTbodySelector);
    this.$taskForm = document.querySelector(taskFormSelector);
    this.$taskFormInput = this.$taskForm.querySelector('input');
  }

  getTasks() {
    const storedTasks = window.localStorage.getItem('tasks');
    if (storedTasks) {
      return JSON.parse(storedTasks);
    }
    return [];
  }

  addTask(task) {
    const currentTasks = this.getTasks();
    const newTasks = [...currentTasks, task];
    const stringTasks = JSON.stringify(newTasks);
    window.localStorage.setItem('tasks', stringTasks);
  }

  addTaskToTable(task, index) {
    const currentTasks = this.getTasks();
    const $newTaskEl = document.createElement('tr');
    const taskIndex = index ? index : currentTasks.length;
    $newTaskEl.innerHTML = `<th scope="row">${taskIndex}</th><td>${task.title}</td>`;
    this.$tableTbody.appendChild($newTaskEl);
    this.$taskFormInput.value = '';
  }

  handleAddTask() {
    this.$taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const task = { id: Math.random(), title: this.$taskFormInput.value };
      this.addTask(task);
      this.addTaskToTable(task);
    });
  }

  fillTasksTable() {
    const currentTasks = this.getTasks();
    currentTasks.forEach((task, index) => {
      this.addTaskToTable(task, index + 1);
    });
  }

  init() {
    this.fillTasksTable();
    this.handleAddTask();
  }
}

export default PomodoroApp;
