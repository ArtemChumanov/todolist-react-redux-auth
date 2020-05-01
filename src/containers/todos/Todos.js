import { VisibilityFilters } from "../../redux/types/todos-types";

import { connect } from "react-redux";
import {
  getAllItems,
  onDeleted,
  updateTodo
} from "../../redux/actions/todos-action";
import TodoList from "../../components/todolist/todolist";

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.IMPORTANT_ITEMS:
      return todos.filter((todo) => todo.important);
    case VisibilityFilters.ACTIVE_ITEMS:
      return todos.filter((todo) => !todo.done);
    case VisibilityFilters.DONE_ITEMS:
      return todos.filter((todo) => todo.done);
  }
}
const select = (state) => ({
  products: selectTodos(state.todos.todos, state.visibilityFilter),
  error: state.todos.error,
});

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (id, todo) => dispatch(updateTodo(id, todo)),
  onDeleted: (id) => dispatch(onDeleted(id)),
  getAllItems: () => dispatch(getAllItems()),
});

export default connect(select, mapDispatchToProps)(TodoList);
