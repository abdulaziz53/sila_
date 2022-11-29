import React from "react";
import { Link } from "react-router-dom";

import "../Roles/Roles.css";

const Roles = () => {
  return (
    <div>
      <div className="add_roles_bnt">
        <div className="add_btn">
          <Link to="">Add New Roles</Link>
        </div>
      </div>
      <div className="roles_page">
        <div className="roles_content">
          <div className="roles_top">
            <i className="fa-solid fa-hashtag"></i>
            <p>Role name: </p>
            <p>Role description: </p>
            <p>Active users </p>
            <p>Role created by: </p>
            <p>Status</p>
            <p>Actions</p>
          </div>

          <div className="roles_table_top ">
            <i className=" check fa-regular fa-square-check"></i>
            <p>Safety manager </p>
            <p>Checking time and vioaltions </p>
            <p>148</p>
            <p>Super admin </p>
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

export default Roles;
