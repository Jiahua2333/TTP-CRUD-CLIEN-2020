import React from "react";
//import "./styles/CampusView.css";
import { Link } from "react-router-dom";

const StudentView = (props) => {
  //console.log(props.student);
  
  let hasCompus, id;
  if(props.student.campus){
    hasCompus = props.student.campus.name;
    id = props.student.campus.id;
  } 

  else{
       hasCompus = "None";
       id = "";
  }
  return (
    <>
    <img src={props.student.imageUrl} alt={props.student.firstName}/>
    <p>Name: {props.student.firstName} {props.student.lastName}</p>
    <p>Email: {props.student.email}</p>
    <p>GPA: {props.student.GPA}</p>
    
      {/* <StudentNameListContainer students={props.campus.students} />

      <AddStudentToCampusContainer
        campusId={props.campus.id}
        handleEnrollStudent={props.handleEnrollStudent}
      /> */}

      <Link to={`/campuses/${id}/`}>
        <p>Compus: {hasCompus}</p>
      </Link>
      <button onClick={() => props.handleDelete(props.student.id)}>
        Delete
      </button>
      <Link className="edit-link" to={`/students/${props.student.id}/edit`}>
        Edit
      </Link>
    </>
  );
};

export default StudentView;
