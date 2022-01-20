import React, { Component } from "react";
import styles from "../../styles/Contact.module.css";

export default class ContactUs extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
  };
  handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
    // this.setState({isLoggedIn: false})
    console.log(value);
  };
  // firstName 4
  // lastName 4
  // email @

  // formik
  validateTheForm = () => {
    // "",false,undefined,null,0
    let firstNameErr = "";
    let lastNameErr = "";
    let emailErr = "";
    if (this.state.firstName.length < 4) {
      firstNameErr = "First name should be 4 characters";
    }
    if (this.state.lastName.length < 4) {
      lastNameErr = "last name should be 4 characters";
    }
    if (!this.state.email.includes("@")) {
      emailErr = "Invalid Email";
    }

    if (firstNameErr || lastNameErr || emailErr) {
      this.setState({ firstNameErr, lastNameErr, emailErr });
      return false;
    } else {
      this.setState({ firstNameErr, lastNameErr, emailErr });
      return true;
    }

    // if firstname 4, lastName 4 and email @ true else false
  };
  handleClick = (e) => {
    e.preventDefault();
    const isFormValid = this.validateTheForm();
    if (isFormValid) {
      alert("Success");
      //  submit the data to backend
    } else {
    }
    // Never mutate the state directly
    // this.state.name = "nextjs";
    // this.setState({ name: "nextjs" }, function () {
    //   console.log(this.state);
    // });
    console.log(this.state);
    // alert("Successfully submit");
  };
  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <form>
          <div>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <p style={{ color: "red" }}>{this.state.firstNameErr}</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="last Name"
              name="lastName"
              onChange={this.handleChange}
            />
            <p style={{ color: "red" }}>{this.state.lastNameErr}</p>
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
          />
          <p style={{ color: "red" }}>{this.state.emailErr}</p>

          <button onClick={this.handleClick}>Contact Us</button>
        </form>
        <div>
          <p>{this.state.name}</p>
        </div>
      </div>
    );
  }
}
