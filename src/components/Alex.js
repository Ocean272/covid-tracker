import React from 'react'
import { useState } from 'react';

const Alex = ({data}) => {

  const [i, setI] = useState("");
  const [searchParamI] = useState(["as_of_date"]);
  const [filterParamI, setFilterParamI] = useState(["All"]);

  function search(data) {
    return data.filter((item) => {
      if (item.as_of_date === filterParamI) {
        return searchParamI.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(i.toLowerCase()) > -1
          );
        });
      } else if (filterParamI === "All") {
        return searchParamI.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(i.toLowerCase()) > -1
          );
        });
      }
    });
  }
  
  return (
    <>
    <h3>7 days active cases in ICU and deaths, based on Vaccination Status</h3>
    <div>
        <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="YYYY-MM-DD"
              value={i}
              onChange={(e) => setI(e.target.value)}
            />
          </label>
      </div>
      <span> Enter Date</span>
        <label
          onChange={(e) => {
            setFilterParamI(e.target.value);
          }}
          aria-label="Date"
        >
          <option value="All"></option>
        </label>
      <div>
          {search(data).map((i) => {
          return (
            <div key={i._id}>
              <p>No of cases in percentage : {i.count_of_case}</p>
              <p>Date : {i.as_of_date}</p>
              <p>Vaccination status: {i.vaccination_status}</p>
              <p>Health Status : {i.clinicalstatus}</p>
              <br />
              </div>
            );
          })}
      </div>
      {/* {data.map((a) => {
        return (
          <div key={a._id}>
            <p>Count of Case : {a.count_of_case}</p>
            <p>Vaccination Status : {a.vaccination_status}</p>
            <p>As of Date : {a.as_of_date}</p>
            <p>Clinical Status : {a.clinicalstatus}</p>
            <br />
          </div>
        );
      })} */}
    </>
  )
}

export default Alex;