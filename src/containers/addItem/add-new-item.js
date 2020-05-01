import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNewItem } from "../../redux/actions/todos-action";
import "./add-new-item.css";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        className="d-flex flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addNewItem(input.value, false, false));
          input.value = "";

        }}
      >
        <input className="form-control " ref={(node) => (input = node)} />
        <button type="submit" className="btn btn-add">
          <i className="fa fa-plus-circle co circle-btn"></i>
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
