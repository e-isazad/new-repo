import React from "react";
import './App.css'
import Table from "./components/main/Table";
import TablePrice from "./components/main/TablePrice";
import Card from "./components/main/Card";
function App() {

  return (
    <React.Fragment>
    <Table/>
    <h4>Qiymete gore duzulus</h4>
    <TablePrice/>
    <Card/>

     
    </React.Fragment>
  )
}

export default App
