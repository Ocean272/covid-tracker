import React from "react";
import { useState } from "react";

const Icu = ({ data }) => {
  const [i, setI] = useState("");
  const [searchParamI] = useState(["date"]);
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
        New COVID-19 ICU Admissions
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
            <th>Date</th>
            <th>New ICU Admission</th>
          </tr>
          {search(data)
            .slice(0, visible)
            .map((i) => {
              return (
                <tr className="table-wrapper" key={i._id}>
                  <td>{i.date}</td>
                  <td>{i.new_icu_admissions}</td>
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

export default Icu;
