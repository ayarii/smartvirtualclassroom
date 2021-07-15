import { combineReducers } from "redux";
import recomandation from "./slices/recomandationslice"; 
import classs from "./slices/classsline"; 
import seance from "./slices/Seance";
import courses from "./slices/Courses";
import questions from "./slices/questionslice";
import answers from "./slices/answerslice";
import user from "./slices/User";
import tasks from './slices/Task.js'
import userdata from "./slices/userdataslice";
import grades from './slices/Grade'
import comments from './slices/commentslice'
import notifications from "./slices/notificationslice";

import { getDefaultMiddleware } from "@reduxjs/toolkit";
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
const reducers = combineReducers({
  recomandation,
  seance,
  courses,
  questions,
  answers,
  user,
  tasks ,
  userdata,
  grades,
  classs,
  comments,
  notifications,
});
export default reducers;
