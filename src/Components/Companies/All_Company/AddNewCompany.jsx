import React from "react";

import "../../Companies/Style/Companies.css";

const AddNewCompany = () => {
  return (
    <div>
      <div className="add_btn">
        <div className="add_content">
          <a href="#">
            Add new company
            <i className="plus-icon fa-solid fa-plus"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddNewCompany;
