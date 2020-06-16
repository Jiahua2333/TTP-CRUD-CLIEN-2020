import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddStudentFormView } from "../views";
import { addStudentThunk } from "../../thunks";

class AddStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      GPA: 0,
      isValid: false,
      errors: {},
    };
  }

ValidateEmail = (email) =>{
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)){
        return true;
    }
    return false;
}

  handleChange = (e) => {
    if (e.target.name === "firstName") {
      this.setState({ firstName: e.target.value }, this.validateName);
    } 
    else if(e.target.name === "lastName"){
      this.setState({ lastName: e.target.value }, this.validateName);
    }
    else if(e.target.name === "email"){
      this.setState({ email: e.target.value });        
    }
    else if(e.target.name === "GPA"){
        this.setState({ GPA: e.target.value }, this.validateName);        
    }
    else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  validateName = () => {
    const { firstName, lastName, email } = this.state;
    let errors = { ...this.state.errors };
    // set a valid boolean to true
    let isValid = true;
    let isValidEmail = this.ValidateEmail(email);
    // check if the value is valid
    if (firstName.length < 2) {
      // if not, set the value to false and add error message
      isValid = false;
      errors.firstName = "Invalid first name";
    }
    else errors.firstName = "Valid first name";

    if (firstName.length < 2 && lastName.length <2 && isValidEmail) {
        // if not, set the value to false and add error message
        isValid = false;
        errors.lastName = "Invalid last name";
    }
    else errors.lastName = "Valid last name";

    // if (this.ValidateEmail(email)) {
    //     // if not, set the value to false and add error message
    //     isValid = false;
    //     errors.email = "Invalid email address";
    // }
    // else errors.email = "Valid email address";
    //
    // setstate with isValidName

    this.setState({ isValid, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isValid) this.props.addStudent(this.state);
  };

  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {this.state.isValid ? "" : this.state.errors.email}
        <AddStudentFormView
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          GPA={this.state.GPA}
          imageUrl={this.state.imageUrl}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student, ownProps)),
  };
};

AddStudentFormContainer.propTypes = {
    addStudent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(AddStudentFormContainer);