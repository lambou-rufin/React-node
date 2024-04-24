import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLoginPage from "./AuthLogin";

const AuthPageAdmin: FC<any> = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthLoginPage />} />
      <Route path="*" element={<Navigate to="login" replace={true} />} />
    </Routes>
  );
};

export default AuthPageAdmin;
