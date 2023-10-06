import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ZoneTracker from './Pages/ZoneTracker';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import VehicleWeighting from './Pages/VehicleWeighting';
import UserTracker from './Pages/UserTracker';
import Report from './Pages/Report';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ZoneTracker",
    element: <ZoneTracker />,
  },
  {
    path: "/VehicleWeighting",
    element: <VehicleWeighting />,
  },
  {
    path: "/UserTracker",
    element: <UserTracker />,
  },
  {
    path: "/Report",
    element: <Report />,
  },
  {
    path: "/LogOut",
    element: <App />,
  },
]);

function render() {
  ReactDOM.render( <RouterProvider router={router} />, document.body);
}

render();