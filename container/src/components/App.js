import * as React from "react";

const Home = React.lazy(() => import("Home/app"));
const Profile = React.lazy(() => import("Profile/app"));

export default function App({ onChange }) {
  return (
    <div>
      <h1>Micro App</h1>
      <Home></Home>
      <Profile></Profile>
    </div>
  );
}
