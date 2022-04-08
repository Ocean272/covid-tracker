import React from "react";
import { useState } from "react";

const Vac = ({ data }) => {
  const [v, setV] = useState("");
  const [searchParamVac] = useState(["age"]);
  const [filterParamV, setFilterParamV] = useState(["All"]);

  function search(data) {
    return data.filter((item) => {
      if (item.age == filterParamV) {
        return searchParamVac.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(v.toLowerCase()) > -1
          );
        });
      } else if (filterParamV == "All") {
        return searchParamVac.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(v.toLowerCase()) > -1
          );
        });
      }
    });
  }

  return (
    <>
      <h3 className="child-header">Number of Vaccinated people based on Age Group</h3> 
      <table>
      <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Enter Age"
            value={v}
            onChange={(e) => setV(e.target.value)}
          />
        </label>
      <br />
      <span> Search Age</span>
      <label
        onChange={(e) => {
          setFilterParamV(e.target.value);
        }}
        aria-label="Date"
      >
        <option value="All"></option>
      </label>
        <tbody>
         
          <tr className="table-wrapper">
            <th>Completed Full Regimen</th>
            <th>Age Group</th>
            <th>Unvaccinated</th>
            <th>At least One Dose</th>
          </tr>

          {search(data).map((v) => {
            return (
              <tr className="table-style" key={v._id}>
                <td>{v.completed_full_regimen}</td>
                <td>{v.age}</td>
                <td>{v.unvaccinated}</td>
                <td>{v.at_least_one_dose}</td>
                <br />
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Vac;
