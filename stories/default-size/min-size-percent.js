/* eslint-disable */

import React from 'react';
import Resizable from '../../src';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
};

export default () => (
  <Resizable
    style={style}
    defaultSize={{
      width: 200,
      height: 200,
    }}       
    minWidth="10%"
    minHeight="50%"
  >
    001
  </Resizable>
);
