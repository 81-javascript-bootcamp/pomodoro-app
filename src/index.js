import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import PomodoroApp from './app';

let pomodoroApp = new PomodoroApp({
  tableTbodySelector: '#table-tbody',
  taskFormSelector: '#task-form',
});

pomodoroApp.init();
