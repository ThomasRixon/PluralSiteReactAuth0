import React, { useState, useEffect } from "react";

const Profile = props => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUserProfile();
  });

  const loadUserProfile = () => {
    props.auth.getProfile((profile, err) => {
      setProfile(profile);
      setError(err);
    });
  };

  if (!profile) return null;

  return (
    <div>
      <h1>Profile</h1>
      <p>{error ? error : profile.nickname}</p>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
};

export default Profile;
