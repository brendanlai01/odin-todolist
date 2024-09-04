import "./style.css";
import { addContainerListener, cancelListener, submitTaskListener } from "./addTaskListener.js";
import createDefaultHeader from './createHeader.js';

addContainerListener();
submitTaskListener();
cancelListener();