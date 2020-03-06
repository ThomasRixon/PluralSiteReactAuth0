import React, { useEffect, useState } from "react";

const Private = props => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("/private", {
        headers: {
          Authorization: `Bearer ${props.auth.getAccessToken()}`,
        },
      });
      const data = await resp.json();
      setMessage(data.message);
    };
    getData();
  }, [props.auth]);
  return (
    <div>
      <h1>Private API</h1>
      <p>{message}</p>
    </div>
  );
};

export default Private;
