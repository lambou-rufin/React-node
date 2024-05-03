import React from "react";
import { Provider } from "react-redux";
import RouterAdmin from "../admin/routes";
import { store } from "../admin/apps/store";

const AdminRoutes: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <RouterAdmin />
      </Provider>
    </>
  );
};

export default AdminRoutes;
