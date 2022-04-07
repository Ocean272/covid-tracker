import React from "react";
import { useState } from "react";
//import { BasePlatform } from 'chart.js';

const Yvonne = ({ data }) => {
  const [r, setR] = useState("");
  const [searchParamLC] = useState(["pr_date"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  function search(data) {
    return data.filter((item) => {
      if (item.pr_date == filterParam) {
        return searchParamLC.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(r.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
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
        {/* <BasePlatform
        data={{
          labels: ["Red","Blue","Yellow","Green","Orange"],
          datasets: [
            {
            label: 'no of Cases',
            data: [2,3,4,5,6,7],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ]
            borderWidth: 1;
            },
            {
            label: 'as of date',
            data: [3,4,5,6,7,8],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            }
          ]
        }}
        height={400}
        width={600}
        options={{maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              }
            }
          ]
        }}}
      /> */}
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
  );
};

export default Yvonne;
