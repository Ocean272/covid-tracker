import React from "react";
import { useState } from "react";

const Util = ({ data }) => {
  const [b, setB] = useState("");
  const [searchParamBed] = useState(["date"]);
  const [filterParamBed, setFilterParamBed] = useState(["All"]);
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const showLessItems = () => {
    setVisible((prevValue) => prevValue - 3);
  };

  function search(data) {
    return data.filter((item) => {
      if (item.as_of_date == filterParamBed) {
        return searchParamBed.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(b.toLowerCase()) > -1
          );
        });
      } else if (filterParamBed == "All") {
        return searchParamBed.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(b.toLowerCase()) > -1
          );
        });
      }
    });
  }

  return (
    <>
      <h3>Daily Adult ICU Bed Utilisation</h3>
      <table>
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="YYYY/MM/DD"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </label>
        <br />
        <span> Enter Date</span>
        <label
          onChange={(e) => {
            setFilterParamBed(e.target.value);
          }}
          aria-label="Date"
        >
          <option value="All"></option>
        </label>
        <br />
        <tbody>
          <tr className="table-wrapper">
            <th>Date</th>
            <th>New Hospital Admissions</th>
            <th></th>
          </tr>
          {search(data)
            .slice(0, visible)
            .map((b) => {
              return (
                <tr className="table-style" key={b._id}>
                  <td>{b.date}</td>
                  <td>{b.new_hospital_admissions}</td>
                  
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

export default Util;
