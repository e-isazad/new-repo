import React from "react";
import datas from "../../indexx";
let array = datas.sort((a,b)=>b.price-a.price)

function TablePrice() {
  return (
   
    <React.Fragment>
      <table border="1">
        <tr >
          <th>id</th>
          <th>name</th>
         
        </tr>
        <tbody>
        
          {array.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.price}</td>

             

            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default TablePrice;
