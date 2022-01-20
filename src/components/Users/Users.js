import React, { Component } from "react";

export default class Users extends Component {
  // constructor() {
  //   super();
  //   console.log("User Component is called");
  // }
  state = {
    userData: this.props.userData,
  };
  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>email</th>
              <th>city</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            {console.log(this.state.userData && this.state.userData.length > 0)}
            {this.props.userData &&
              this.props.userData.length > 0 &&
              this.props.userData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
