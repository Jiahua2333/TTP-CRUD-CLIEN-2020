import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../thunks";
import PropTypes from "prop-types";
import { StudentView } from "../views";

class StudentContainer extends Component {
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

//   handleDelete = (id) => {
//     this.props.deleteCampus(id);
//     this.props.history.push("/campuses");
//   };

//   handleEnrollStudent = (campusId, studentId) => {
//     this.props.enrollStudent(campusId, studentId);
//   };

  render() {
      console.log(this.props.student);
    return (
      <StudentView
        student={this.props.student}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    // deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
    // enrollStudent: (campusId, studentId) =>
    //   dispatch(enrollStudentThunk(campusId, studentId)),
  };
};


StudentContainer.propTypes = {
    student: PropTypes.object.isRequired,
    fetchStudent: PropTypes.func.isRequired,
  //   deleteCampus: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(StudentContainer);
