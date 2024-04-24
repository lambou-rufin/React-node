import { store } from "admin/apps/store"
import RouterAdmin from 'admin/router'
import React from 'react'
import { Provider } from "react-redux"

const AdminRoutes: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <RouterAdmin />
      </Provider>
    </>
  )
}

export default AdminRoutes
