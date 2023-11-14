import React from "react";
import datas from "../../indexx";

function Table() {
  return (
    <React.Fragment>
      <table border="1">
        <thead>
          <th>id</th>
          <th>name</th>
          <th>price</th>
          <th>category</th>
          <th>rate</th>
          <th>count</th>
        </thead>
        <tbody>
          {datas.map((data) => (
            <tr key={data.id}>
              <td >{data.id}</td>
              <td >{data.title}</td>
              <td >{data.price}</td>
              <td >{data.category}</td>
              <td >{data.rating.rate}</td>
              <td >{data.rating.count}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Table;
