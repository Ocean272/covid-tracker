import React from 'react'
import { useState } from 'react';

const Yvonne = ({data}) => {

  const [r, setR] = useState("");
  const [searchParamLC] = useState(["pr_date"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  function search(data) {
    return data.filter((item) => {
      if (item.pr_date === filterParam) {
        return searchParamLC.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(r.toLowerCase()) > -1
          );
        });
      } else if (filterParam === "All") {
        return searchParamLC.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(r.toLowerCase()) > -1
          );
        });
      }
    });
  }
      
  return (
    <>
    <h2>Number of Local Cases based on </h2>
    <div className="wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="YYYY-MM-DD"
            value={r}
            onChange={(e) => setR(e.target.value)}
          />
        </label>
      </div>
      <span> Search Date</span>
      <label
        onChange={(e) => {
          setFilterParam(e.target.value);
        }}
        aria-label="Date"
      >
        <option value="All"></option>
      </label>
      <div>

        {search(data).map((a) => {
          return (
            <div key={a._id}>
              <p>Date : {a.pr_date}</p>
              <p>Age group : {a.age_group}</p>
              <p>No of cases : {a.count_of_case}</p>
              <br />
            </div>
          );
        })}
      </div>
      {/* {data.map((a) => {
        return (
          <div key={a._id}>
            <p>Count of Case : {a.count_of_case}</p>
            <p>Age Group : {a.age_group}</p>
            <p>As of Date : {a.pr_date}</p>
            <br/>
          </div>
        );
      })} */}
    </>
  )
}

export default Yvonne;