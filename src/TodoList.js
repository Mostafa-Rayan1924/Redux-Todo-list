import { useState } from "react";
import redux from "./redux.svg";
import { useSelector, useDispatch } from "react-redux";
import { add, del, edit } from "./Features/slice";
import Todo from "./Todo";
const TodoList = () => {
  const Todos = useSelector((state) => {
    return state.todos.result;
  });
  const dispatch = useDispatch();
  let [inp, setInp] = useState("");
  function handleAdd() {
    dispatch(
      add({
        TitleInp: inp,
      })
    );
    setInp("");
  }
  function handleDel(id) {
    dispatch(
      del({
        id,
      })
    );
  }
  function handleEdit(id, titlePrompt) {
    dispatch(
      edit({
        id: id,
        tit: titlePrompt,
      })
    );
  }
  return (
    <div className="bg-white w-[95%] mt-24 md:mt-0 md:w-1/2 rounded-lg p-3 h-fit max-h-[80vh] overflow-y-auto relative">
      <img src={redux} className=" fixed top-10 left-10 w-20 h-20 " />
      <img src={redux} className=" fixed bottom-10 right-10 w-20 h-20 " />
      <h1 className="text-center font-bold text-purple-900 text-2xl mb-8">
        Crud With Redux Toolkit
      </h1>
      <hr className="border-gray-300"></hr>
      <Todo todosItems={Todos} handleDel={handleDel} handleEdit={handleEdit} />
      <div className="flex gap-2 items-center">
        <input
          value={inp}
          onChange={(e) => {
            setInp(e.target.value);
          }}
          className="w-[70%] h-10 border border-gray-400 px-4 focus:outline-none rounded-lg "
          placeholder="عنوان المهمه"
        />
        <button
          onClick={handleAdd}
          disabled={inp == "" ? true : false}
          style={{
            width: "30%",
            height: "40px",
            borderRadius: "10px",
            color: "white",
          }}
          className={`${inp == "" ? "bg-gray-500" : "bg-purple-900"}`}>
          اضافه مهمه
        </button>
      </div>
    </div>
  );
};
export default TodoList;
