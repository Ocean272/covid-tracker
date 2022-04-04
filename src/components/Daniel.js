import React from "react";

const Daniel = ({ data }) => {
  return (
    <div>
      <h3>Daily Adult ICU Bed Utilisation</h3>
      {data.map((a) => {
        return (
          <div key={a._id}>
            <p>Status : {a.status}</p>
            <p>As of Date : {a.as_of_date}</p>
            <p>Value : {a.value}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Daniel;
