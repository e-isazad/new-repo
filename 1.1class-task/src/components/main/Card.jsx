import React from "react";
import datas from "../../indexx";

function Card() {
  return (
   
    <React.Fragment>
    
        
          {datas.sort((a,b)=>b.rating.rate-a.rating.rate).map((data,idx) => (
              <div key={idx}>
              <h2>
                {data.title}
              </h2>
              <p>
              {data.rating.rate}
              </p>

              </div>

             

          ))}
    </React.Fragment>
  );
}

export default Card;
