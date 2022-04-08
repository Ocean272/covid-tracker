import React from "react";
import { useState } from "react";


const Localcase = ({ data }) => {
  const [r, setR] = useState("");
  const [searchParamLC] = useState(["pr_date"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const [visible, setVisible] = useState(5);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 5);
  };

  const showLessItems = () => {
    setVisible((prevValue) => prevValue - 5);
  };

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
      <h3 className="child-header">Number of Local Cases based on Age Group</h3>
      <table>
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
        <br />
        <span> Search Date</span>
        <label
          onChange={(e) => {
            setFilterParam(e.target.value);
          }}
          aria-label="Date"
        >
          <option value="All"></option>
        </label>
        <tbody>
          <tr className="table-wrapper">
            <th>Date</th>
            <th>Age Group</th>
            <th>Number of Cases</th>
          </tr>
          {search(data)
            .slice(0, visible)
            .map((a) => {
              return (
                <tr key={a._id}>
                  <td>{a.pr_date}</td>
                  <td>{a.age_group}</td>
                  <td>{a.count_of_case}</td>
                  <br />
                </tr>
              );
            })}
          <button onClick={showMoreItems}>Show more</button>
          <button onClick={showLessItems}>Show less</button>
        </tbody>
      </table>
    </>
  );
};

export default Localcase;
