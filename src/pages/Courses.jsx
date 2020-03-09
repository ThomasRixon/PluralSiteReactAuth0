import React, { useEffect, useState } from "react";

const Courses = props => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("/courses", {
        headers: {
          Authorization: `Bearer ${props.auth.getAccessToken()}`
        }
      });
      const data = await resp.json();
      setCourses(data.courses);
    };
    getData();
  }, [props.auth]);
  return (
    <div>
      <h1>Private API</h1>
      <ul>
        {courses.map(course => {
          return <li key={course.id}>{course.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Courses;
