import React from "react";
import { Route, Routes } from "react-router-dom";
import All_Companies from "./Components/Companies/All_Company/All_Companies";
import Invoice from "./Components/Companies/Invoice/Invoice";
import Subckribtions from "./Components/Companies/Subckriptions/Subckribtions";
import CompaniesPage from "./Pages/CompaniesPage";
import RolesPage from "./Pages/RolesPage";
// import TruckPage from "./Pages/TruckPage";
import UsersPage from "./Pages/UsersPage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/companies"
          element={<CompaniesPage /> && <All_Companies />}
        />
        <Route path="/all_companies" element={<All_Companies />} />
        <Route path="/subckribtions" element={<Subckribtions />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/users" element={<UsersPage />} />
        {/* <Route path="/truck" element={<TruckPage />} /> */}
      </Routes>
    </>
  );
};

export default MainRoutes;
