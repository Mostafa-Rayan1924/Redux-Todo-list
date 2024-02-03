import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: [
    {
      id: 1,
      title: "sasa",
    },
  ],
};

export const TodosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    add: (currentState, action) => {
      let inputTitle = action.payload.TitleInp;
      let newTodo = {
        id: currentState.result.length + 1,
        title: inputTitle,
      };
      currentState.result.push(newTodo);
    },

    del: (currentState, action) => {
      currentState.result = currentState.result.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    edit: (currentState, action) => {
      currentState.result.map((item) => {
        if (item.id == action.payload.id) {
          item.title = action.payload.tit;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, del, edit } = TodosSlice.actions;

export default TodosSlice.reducer;
