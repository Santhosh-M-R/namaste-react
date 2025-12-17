import { useState } from "react";
const User = ({ name, address, number }) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-data">
      <h2>Name:{name}</h2>
      <h3>Address:{address}</h3>
      <h4>Number:{number}</h4>
      <p>count: {count}</p>
      <p>count1: {count1}</p>
    </div>
  );
};

export default User;
