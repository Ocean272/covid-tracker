import React from "react";
import { useState } from "react";

const Alex = ({ data }) => {
  const [i, setI] = useState("");
  const [searchParamI] = useState(["as_of_date"]);
  const [filterParamI, setFilterParamI] = useState(["All"]);
  const [visible, setVisible] = useState(5);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 5);
  };

  const showLessItems = () => {
    setVisible((prevValue) => prevValue - 5);
  };

  function search(data) {
    return data.filter((item) => {
      if (item.as_of_date == filterParamI) {
        return searchParamI.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(i.toLowerCase()) > -1
          );
        });
      } else if (filterParamI == "All") {
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
      <h3>
        7 days active cases in ICU and deaths, based on Vaccination Status
      </h3>
      <table>
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
        <br />
        <span> Enter Date</span>
        <label
          onChange={(e) => {
            setFilterParamI(e.target.value);
          }}
          aria-label="Date"
        >
          <option value="All"></option>
        </label>
        <br />
        <tbody>
          <tr className="table-wrapper">
            <th>Count of Case in Pecentage</th>
            <th>As of Date</th>
            <th>Vaccination status</th>
            <th>Health Status</th>
          </tr>
          {search(data)
            .slice(0, visible)
            .map((i) => {
              return (
                <tr className="table-wrapper" key={i._id}>
                  <td>{i.count_of_case}</td>
                  <td>{i.as_of_date}</td>
                  <td>{i.vaccination_status}</td>
                  <td>{i.clinicalstatus}</td>
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

export default Alex;
