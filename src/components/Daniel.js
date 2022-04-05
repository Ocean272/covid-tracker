import React from "react";
import { useState } from "react";

const Daniel = ({ data }) => {

  const [b, setB] = useState("");
  const [searchParamBed] = useState(["as_of_date"]);
  const [filterParamBed, setFilterParamBed] = useState(["All"]);

  function search(data) {
    return data.filter((item) => {
      if (item.as_of_date === filterParamBed) {
        return searchParamBed.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(b.toLowerCase()) > -1
          );
        });
      } else if (filterParamBed === "All") {
        return searchParamBed.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(b.toLowerCase()) > -1
          );
        });
      }
    });
  }

  return (
    <div>
      <h3>Daily Adult ICU Bed Utilisation</h3>
      <div>
        <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="DD-MM-YY"
              value={b}
              onChange={(e) => setB(e.target.value)}
            />
          </label>
      </div>
      <span> Enter Date</span>
        <label
          onChange={(e) => {
            setFilterParamBed(e.target.value);
          }}
          aria-label="Date"
        >
          <option value="All"></option>
        </label>
      <div>
          {search(data).map((b) => {
          return (
            <div key={b._id}>
              <p>Status: {b.status}</p>
              <p>Date : {b.as_of_date}</p>
              <p>Value : {b.value}</p>
              <br />
              </div>
            );
          })}
      </div>
      {/* {data.map((a) => {
        return (
          <div key={a._id}>
            <p>Status : {a.status}</p>
            <p>As of Date : {a.as_of_date}</p>
            <p>Value : {a.value}</p>
            <br />
          </div>
        );
      })} */}
    </div>
  );
};

export default Daniel;
