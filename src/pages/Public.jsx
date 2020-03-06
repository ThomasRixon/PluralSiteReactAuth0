import React, { useEffect, useState } from "react";

const Public = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("/public");
      const data = await resp.json();
      setMessage(data.message);
    };
    getData();
  }, []);
  return (
    <div>
      <h1>Public API</h1>
      <p>{message}</p>
    </div>
  );
};

export default Public;
