import axios from "axios";
import React, { useState, useEffect } from "react";

export const TodoList = () => {
  //

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const getUsersData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
  };
  // componentDidMount,componentDidUpdate and componentWillUnMount
  //   useEffect (2 arguments, 1st is function and 2 nd dependency Array)

  //   ComponentDidMount
  useEffect(() => {
    getUsersData();
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("Component is Updated when form changes");
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handleChange}
          value={form.firstName}
          name="firstName"
          id=""
        />

        <button className="btn">Add Todo</button>
      </form>
    </div>
  );
};
