import React from "react";
// import { useSelector } from "react-redux";

const Welcome = () => {
    // const {user} = useSelector((state) => state.auth); 
  return (
    <div>
        <h1 className="title">Dashboard</h1>
        <h2 className="subtitle">Selamat Datang</h2>
    </div>
  );
};
// <strong>{user && user.name}</strong> 
export default Welcome;