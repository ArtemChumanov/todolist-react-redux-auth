import React, { useEffect, useState } from "react";
import Todo from "../todolistItem/todolist-item";
import PropTypes from "prop-types";
import "./todolist.css";
const TodoList = ({
  products,
  onDeleted,
  getAllItems,
  error,
  updateTodo,
}) => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      getAllItems();
    }, 1000);
    return () => {
      // Return callback to run on unmount.
      window.clearInterval(timer);
    };
  }, []);
//console.log(products);
  if (error) {
     alert(error);
    return <p>Server is not connected</p>;
  }

  const elements = products.map((item) => {
    const { id, ...itemprops } = item;

    console.log(item);
    return (
      <li key={id} className="list-group-item">
        <Todo
          {...itemprops}
          onImportant={() =>
            updateTodo(id, {
              ...item,
              important: !item.important,
            })
          }
          onDone={() =>
            updateTodo(id, {
              ...item,
              done: !item.done,
            })
          }
          onDeleted={() => onDeleted(id, item)}
        />
      </li>
    );
  });

  return <ul className="group-list-item">{elements}</ul>;
};

TodoList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      important: PropTypes.bool.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ),
  updateTodo: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
};
export default TodoList;
