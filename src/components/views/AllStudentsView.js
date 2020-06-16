import React from "react";
//import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div className="all-students">There are no students</div>;
  }

  return (
    <div className="all-students">
       <Link to="/students/new" className="add-student">
        New Student
      </Link>
      <div>
        {props.allStudents.map((student) => (
          <div key={student.id}>
            <Link to={`/students/${student.id}`}>
                <h3>{student.firstName}  {student.lastName}</h3>
            </Link>
            {/* <img src={campus.imageUrl} width="200px" alt={campus.name} />
            <p>{campus.students.length} students</p> */}
            <button onClick={() => props.handleDelete(student.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
