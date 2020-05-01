import React, { Component } from "react";
import PropTypes from "prop-types";
import "./todolist-item.css";

export default class Todo extends Component {
  render() {
    const {
      important,
      done,
      text,
      onImportant,
      onDone,
      onDeleted,
    } = this.props;

    const style = {
      color: important ? "red" : "black",
    };

    let className = "";
    if (done) {
      className += "line-throw";
    }
    let className2 = "fa fa-circle-thin co fa-2x";
    if (important) {
      className2 = "";
      className2 += "fa fa-check-circle co fa-2x";
    }
    return (
      <div className="list">
        <button className="btn" onClick={onImportant}>
          <i className={className2}></i>
        </button>
        <span className={className} style={style} onClick={onDone}>
          {text}
        </span>
        <div className="important-buttons">
          <button className="btn" onClick={onDeleted}>
            <i className="fa fa-trash-o de fa-2x"></i>
          </button>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  important: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onImportant: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
};
