import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import TablesContainer from "./TablesContainer/TablesContainer"
import Register1 from "./Register1/Register1"
import Register2 from "./Register2/Register2"


const Main = () => {
  return (
    <>
      <main>
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/table" element={<TablesContainer/>} />
          <Route path="/signup" element={<Register1/>} />
          <Route path="/signup/user" element={<Register2/>} />


          <Route path="/*" element={<Navigate to={"/home"} />} />
        </Routes>
      </main>
    
    </>
  )
};

export default Main;
