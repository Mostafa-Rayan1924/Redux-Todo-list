import edit from "./edit.png";
import del from "./del.jpeg";

const Todo = ({ todosItems, handleDel, handleEdit }) => {
  let todosMap = todosItems.map((item, index) => {
    return (
      <div
        key={index}
        className="bg-[#a9a9fa] p-5 flex flex-wrap flex-col lg:flex-row justify-center items-center text-center md:text-start md:justify-between rounded-lg my-5 transition-all duration-300 hover:bg-[#8989f9] gap-2 ">
        <div className="w-[70%] flex-1">
          <h2 className="text-white  text-md">{item.title}</h2>
        </div>
        <div className="w-[30%] flex gap-2 justify-center md:justify-end cursor-pointer">
          <img
            onClick={() => {
              let editMsg = window.prompt("");
              handleEdit(item.id, editMsg);
            }}
            className="w-[40px] h-[40px] border  bg-white rounded-full"
            src={edit}
          />
          <img
            onClick={() => {
              handleDel(item.id);
            }}
            className="w-[40px] h-[40px] border bg-white rounded-full"
            src={del}
          />
        </div>
      </div>
    );
  });
  return <>{todosMap}</>;
};

export default Todo;
