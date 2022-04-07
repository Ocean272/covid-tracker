import React from "react";
import { useState } from "react";

const Daniel = ({ data }) => {
  const [b, setB] = useState("");
  const [searchParamBed] = useState(["as_of_date"]);
  const [filterParamBed, setFilterParamBed] = useState(["All"]);
  const [visible, setVisible] = useState(5);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 5);
  };

  const showLessItems = () => {
    setVisible((prevValue) => prevValue - 5);
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
    <div>
      <div>
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="DD/MM/YY"
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
      <br />
      <table>
        <tbody>
          <h3>Daily Adult ICU Bed Utilisation</h3>
          <tr>
            <th>Status</th>
            <th>As of Date</th>
            <th>Value</th>
          </tr>

          {search(data)
            .slice(0, visible)
            .map((b) => {
              return (
                <tr key={b._id}>
                  <td>{b.status}</td>
                  <td>{b.as_of_date}</td>
                  <td>{b.value}</td>
                  <br />
                </tr>
              );
            })}

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
          <button onClick={showMoreItems}>Show more</button>
          <button onClick={showLessItems}>Show less</button>
        </tbody>
      </table>
    </div>
  );
};

export default Daniel;
