import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchCampusThunk,
  deleteCampusThunk,
  enrollStudentThunk,
  //fetchStudentThunk
} from "../../thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
  }

  handleDelete = (id) => {
    this.props.deleteCampus(id);
    this.props.history.push("/campuses");
  };

  handleEnrollStudent = (campusId, studentId) => {
    const id = this.props.match.params.id
    this.props.enrollStudent(campusId, studentId);
    this.props.history.push(`/campuses/${id}`);
    
  };

  render() {
    return (
      <CampusView
        campus={this.props.campus}
        handleDelete={this.handleDelete}
        handleEnrollStudent={this.handleEnrollStudent}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    //fetchStudent:(id) => dispatch(fetchStudentThunk(id)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
    enrollStudent: (campusId, studentId) =>
      dispatch(enrollStudentThunk(campusId, studentId)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
