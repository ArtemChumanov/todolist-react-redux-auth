import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from 'classnames'
import "./filter-panel.css";

export default class ItemStatusFilter extends Component {
  renderFilter(filter, name) {
    let isOk = false;
    if (filter === this.props.visibilityFilter) {
      isOk = true;
    }
    console.log(this.props.visibilityFilter)
    const classNames=cn('btn',{
        ['btn-active active']:isOk,
        ['none']:false
    })
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          this.props.onFilterChange(filter);
        }}
        className={classNames}
      >
        {name}
      </button>
    );
  }
  render() {
    return (
      <div className="btn-panel">
        <div className="btn-group"> {this.renderFilter("SHOW_ALL", "All")}</div>
        <div className="btn-group">
          {this.renderFilter("IMPORTANT_ITEMS", "important")}
        </div>
        <div className="btn-group">
          {this.renderFilter("ACTIVE_ITEMS", "active")}
        </div>
        <div className="btn-group">
          {this.renderFilter("DONE_ITEMS", "done")}
        </div>
      </div>
    );
  }
}

ItemStatusFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
