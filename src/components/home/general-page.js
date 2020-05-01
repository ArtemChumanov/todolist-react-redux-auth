import React from "react";
import AddTodo from "../../containers/addItem/add-new-item";
import Statusfilter from "../../containers/statusFilter/Statusfilter";
import Todos from "../../containers/todos/Todos";
import "./general-page.css";

const GeneralPage = () => {
  return (
    <div className="wrap">
      <h1 className="text-center">Todo list</h1>
      <div className="wrap-content">
        <Statusfilter />
        <Todos />
        <AddTodo />
      </div>
    </div>
  );
};
export default GeneralPage;
