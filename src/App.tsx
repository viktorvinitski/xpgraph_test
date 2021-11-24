import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import 'antd/dist/antd.css';
import Posts from "./components/Posts/Posts";

function App() {
  return (
      <>
          <Header/>
          <Posts/>
      </>
  );
}

export default App;
