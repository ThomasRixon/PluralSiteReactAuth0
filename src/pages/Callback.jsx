import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const Callback = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const login = async () => {
      if (/access_token|id_token|error/.test(props.location.hash)) {
        props.auth.handleAuthentication(function() {
          setLoggedIn(true);
        });
      } else {
        setLoggedIn(true);
        throw new Error("Invalid callback URL.");
      }
    };
    login();
  }, [props.location.hash, props.auth]);
  return (
    <div>{loggedIn ? <Redirect to="/" /> : <h1>Loading in progress</h1>}</div>
  );
};

export default Callback;
