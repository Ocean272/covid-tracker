import React from "react";
import { useState } from "react";

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
      <table>
        <tbody>
          <h3>Number of Local Cases based on </h3>
          <tr>
            <th>As of Date</th>
            <th>Age Group</th>
            <th>No. of Cases</th>
          </tr>

          {search(data).map((a) => {
            return (
              <tr key={a._id}>
                <td>Date : {a.pr_date}</td>
                <td>Age group : {a.age_group}</td>
                <td>No of cases : {a.count_of_case}</td>
                <br />
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Yvonne;
