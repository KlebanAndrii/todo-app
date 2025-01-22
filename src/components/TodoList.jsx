import TodoCard from "./TodoCard";
import PropTypes from "prop-types";

function TodoList(props) {
  const { todos, selectedTab } = props;

  const filterTodoList = selectedTab === "All" ? todos : selectedTab === "Completed" ? todos.filter((val) => val.complete) : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todoIndex={todos.findIndex((val) => val.input == todo.input)} {...props} todo={todo} />;
      })}
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  selectedTab: PropTypes.string,
};

export default TodoList;
