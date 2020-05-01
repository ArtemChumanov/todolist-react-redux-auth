import React from "react";
import { setVisibilityFilter } from "../../redux/actions/todos-action";
import { connect } from "react-redux";
import ItemStatusFilter from "../../components/filter/filter-panel";

const select = (state) => ({ visibilityFilter: state.visibilityFilter });

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (nextFilter) => dispatch(setVisibilityFilter(nextFilter)),

});
export default connect(select, mapDispatchToProps)(ItemStatusFilter);
