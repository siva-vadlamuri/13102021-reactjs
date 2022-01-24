// There will two types of components
// class component and functional component
// import/ export

import React from "react";
import Button from "./components/Button";
import ContactUs from "./components/ContactUs/ContactUs";
import { Header } from "./components/Header/Header";
import Pagination from "./components/Pagination/Pagination";
import Products from "./components/Products/Products";
import UserGreetings from "./components/UserGreetings/UserGreetings";
import Users from "./components/Users/Users";
import { Router } from "./router/Router";

import styles from "./styles/App.module.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
    };
    console.log("Constructor Called [App.js]");
  }
  // state = {

  // }
  static getDerivedStateFromProps(props, state) {
    // do  sync up with the state
    // dont never make a API call
    console.log("GetDerivedState From Props [App.js]");
    return {
      props,
    };
  }
  // myName = "React Js";

  getUsersData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    this.setState({ userData: data }, function () {
      console.log(this.state);
    });
  };
  componentDidMount() {
    // You can make a Api call
    this.getUsersData();
  }
  render() {
    console.log("Render Method [App.js]");
    console.log(this.state);
    return (
      <div>
        {/* header */}
        <Header />
        <Router />
        {/* router */}
        {/* footer */}
        {/* <Pagination /> */}
        {/* <Users userData={this.state.userData} /> */}
        {/* <h2
          style={{
            backgroundColor: "#00ff00",
            color: "#fff",
          }}
        >
          {this.myName}
        </h2>
        <div className={styles.App}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit et
          animi modi optio quod inventore ducimus error dignissimos soluta.
        </div>
        <ContactUs /> */}
        {/* <button></button> */}
        {/* <Button title="Play store" />
        <Button title="App Store" />
        <Button title="Mi Store" /> */}
        {/* <p className={styles.error}>Error Message</p>
        <div className={styles.products__main}>
          <Products
            title="Apple Iphone 13 Pro"
            price={120000}
            desc="Apple I 13 was build with M13 chip"
          />
          <Products
            title="Samsung Galaxy"
            price={80000}
            desc="Samsung galaxy is one of best mobile"
          />
          <Products
            title="Samsung Galaxy"
            price={80000}
            desc="Samsung galaxy is one of best mobile"
          />
          <Products
            title="Samsung Galaxy"
            price={80000}
            desc="Samsung galaxy is one of best mobile"
          />
          <Products
            title="Samsung Galaxy"
            price={80000}
            desc="Samsung galaxy is one of best mobile"
          />
          <Products
            title="Samsung Galaxy"
            price={80000}
            desc="Samsung galaxy is one of best mobile"
          />
          <Products
            title="Samsung Galaxy"
            price={80000}
            desc="Samsung galaxy is one of best mobile"
          />
          <Products
            title="Samsung Galaxy"
            price={80000}
            desc="Samsung galaxy is one of best mobile"
          />
        </div> */}
        {/* <Users />
        <UserGreetings /> */}
      </div>
    );
  }
}
