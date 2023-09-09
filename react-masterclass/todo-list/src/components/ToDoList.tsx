import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDostate } from "../atom";
import ToDo from "./ToDo";
import { toDoSelector } from "../atom";

function ToDoList() {
  const toDos = useRecoilValue(toDostate);
  const selectorOutput = useRecoilValue(toDoSelector);
  console.log(selectorOutput);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
