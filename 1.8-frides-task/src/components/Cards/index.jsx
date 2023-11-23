import React from 'react';
import { Card } from 'antd';
import axios from 'axios';

const { Meta } = Card;
function Cardsx (){
    axios('https://655ed20f879575426b43fd2e.mockapi.io/api/user').then((respons)=>{
        let datas=respons.data
    })
  return(
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://cdn.pixabay.com/photo/2020/05/06/14/26/field-5137778_1280.jpg" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
    
  </Card>
  )
};
export default Cardsx;