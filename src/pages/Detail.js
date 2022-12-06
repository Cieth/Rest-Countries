import React from 'react';
import { useParams } from 'react-router-dom';
const Detail = () => {
  const params = useParams();
  const name = params['*'];
  console.log(name);
  return <div>{name}</div>;
};

export default Detail;
