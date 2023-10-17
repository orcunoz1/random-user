import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);

  const getApi = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        setData(res.data.results[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="main-container">
      <div className="container">
        {data ? (
          <div className="card">
            <img src={data.picture.large} alt={data.name.first} />
            <p className="name">
              {data.name.title} {data.name.first} {data.name.last}{" "}
            </p>
            <p className="mail">{data.email}</p>
            <p className="number"> {data.phone} </p>
            <p className="location">
              {data.location.city}-{data.location.country}
            </p>
            <p className="age"> Age: {data.dob.age} </p>
            <p className="date">
              Register Date: {data.registered.date.slice(0, 10)}{" "}
            </p>
          </div>
        ) : (
          "Data Not Found"
        )}
      </div>
      <button className="btn" onClick={() => getApi()}>
        {" "}
        Random User{" "}
      </button>
    </div>
  );
};

export default App;
