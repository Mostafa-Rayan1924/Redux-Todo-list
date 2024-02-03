import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "../Features/slice";
export const store = configureStore({
  reducer: {
    todos: TodosReducer,
  },
});
