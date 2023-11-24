import React, { useReducer } from "react";
import style from "./index.module.scss";
import { Input, Button } from "antd";
function handleTodo(e) {
  console.log(e.target.value);
}
const reducer = (state, action) => {
  switch (action.type) {
    case value:
      break;

    default:
      break;
  }
};
const Todo = () => {
  let [state, dispatch] = useReducer(reducer, {});

  return (
    <React.Fragment>
     <form>
     <div id={style.inputt}>
     <Input
       onChange={(e) => {
         handleTodo(e);
       }}
       placeholder="Add ToDo"
     />
   </div>
   <div className={style.buttonBox}>
     <Button type="primary">Add ToDo</Button>
   </div>
     </form>
    </React.Fragment>
  );
};

export default Todo;
