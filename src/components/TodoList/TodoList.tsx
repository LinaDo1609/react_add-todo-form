import { listTodo } from "../../types/todoList";
import { TodoInfo } from "../TodoInfo";

export const TodoList : React.FC <listTodo>= ({todos}) => {
    return (
      <section className="TodoList">
        {todos.map((todoItem) => 
          <TodoInfo
            todo={todoItem}
            key={todoItem.id}
          /> 
        )}
      </section>
    )
};
