import React from 'react';
import { getHelloWorldMessage } from '../helpers/hello-world';

export const HelloWorld = () => {
  return <div>{getHelloWorldMessage()}</div>;
};

export default HelloWorld;
