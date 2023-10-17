import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Container = () => {
  const [data, setData] = useState([]);

  const getApi = () => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="main-container">
      <div className="container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.picture.large} alt="" />
            <p>
              {item.name.first} {item.name.last}
            </p>
          </div>
        ))}
      </div>
      <button className="btn" onClick={() => getApi()}>
        {" "}
        Random User{" "}
      </button>
    </div>
  );
};

export default Container;
