import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import TablesContainer from "./TablesContainer/TablesContainer"

const Main = () => {
  return (
    <>
      <main>
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/table" element={<TablesContainer/>} />
          <Route path="/*" element={<Navigate to={"/home"} />} />
        </Routes>
      </main>
    
    </>
  )
};

export default Main;
