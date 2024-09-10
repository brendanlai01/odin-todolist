import "./style.css";
import { addContainerListener, cancelListener, submitTaskListener } from "./addTaskListener.js";
import { createTests } from './createTask.js';
import createDefaultHeader from './createHeader.js';
import addProjectListeners from "./addProjectListener.js";
import { addSidebarTaskListeners } from "./filterTasks";


createDefaultHeader();
addProjectListeners();
addSidebarTaskListeners();
addContainerListener();
submitTaskListener();
cancelListener();
createTests();