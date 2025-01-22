import PropTypes from "prop-types";

function TodoCard(props) {
  const { todo, todoIndex, handleDeleteTodo, handleCompleteTodo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => {
            handleCompleteTodo(todoIndex);
          }}
          disabled={todo.complete}
        >
          <h6>Done</h6>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}

TodoCard.propTypes = {
  todo: PropTypes.object,
  todoIndex: PropTypes.number,
  handleDeleteTodo: PropTypes.func,
  handleCompleteTodo: PropTypes.func,
};

export default TodoCard;
