import React from "react";
import { Link } from "react-router-dom";

import "../Users/Users.css";

const Users = () => {
  return (
    <div>
      <div className="users_filter">
        <div className="filter_inp">
          <input type="text" placeholder="Main label" />
          <input type="text" placeholder="Main label" />
          <input type="text" placeholder="Main label" />
          <input type="text" placeholder="Main label" />
        </div>
        <button>Add new user </button>
      </div>
      <div className="users_page">
        <div className="users_content">
          <div className="users_top">
            <i className="fa-solid fa-hashtag"></i>
            <p>Name:</p>
            <p>Surname </p>
            <p>username </p>
            <p>Company </p>
            <p>Role </p>
            <p>Status </p>
            <p>Actions</p>
          </div>

          <div className="users_table_top ">
            <i className=" check fa-regular fa-square-check"></i>
            <p>Ilon</p>
            <p>musk </p>
            <p>ilonmusk </p>
            <p>Venture Motor Freight LLC </p>
            <p>monitoring manager </p>
            <p>active</p>
            <div>
              <Link to="">
                <i className="edit fa-solid fa-file-pen"></i>
              </Link>
              <Link to="">
                <i className="file fa-solid fa-toggle-on"></i>
              </Link>
              <Link to="">
                <i className="delete fa-solid fa-trash"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
