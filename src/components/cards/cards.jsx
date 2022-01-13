import React, { createFactory } from 'react';
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';
const Cards = () => {
  return( 
    <>
      <Button type="primary">PRESS ME</Button>
      <DatePicker placeholder="select date" />
    </>
 );
};

export default Cards;