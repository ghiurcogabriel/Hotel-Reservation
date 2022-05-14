import React from 'react';
import "./App.css";

import {
  Route,
  Routes
} from 'react-router-dom';
// import {
//   useLocation,
//   useNavigate,
//   useParams
// } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";
import Error from "./pages/Error";

import Navbar from './Components/Navbar';

// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return (
//       <Component
//         {...props}
//         router={{ location, navigate, params }}
//       />
//     );
//   }

//   return ComponentWithRouterProp;
// }

// const InfoRoute = withRouter(SingleRooms);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/rooms" element={<Rooms/>} />
        <Route exact path="/rooms/:slug" element={<SingleRooms/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </>
  ); 
}

export default App;
