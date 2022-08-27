import React from "react";
import { useState, useEffect } from "react";
import API from "../screens/API";
import ART from "./ART.js";
import Support from "./Support";
import "../index.css";

function Overview() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);

  useEffect(() => {
    getAsyncData1();
    getAsyncData2();
    getAsyncData3();
    getAsyncData4();
  }, []);

  const getAsyncData1 = async () => {
    const resp = await API.get(
      "/api/action/datastore_search?resource_id=6c14814b-09b7-408e-80c4-db3d393c7c15"
    );
    if (resp.status === 200) {
      console.log(resp);
      setData1(resp.data.result.records[0]);
    }
  };

  const getAsyncData2 = async () => {
    const resp = await API.get(
      "/api/action/datastore_search?resource_id=9ec89dc0-cb6b-4604-aaff-382d5e850206"
    );
    if (resp.status === 200) {
      console.log(resp);
      setData2(resp.data.result.records[0]);
    }
  };

  const getAsyncData3 = async () => {
    const resp = await API.get(
      "/api/action/datastore_search?resource_id=b80ebe54-72a6-407c-8691-8cafb80c81a9"
    );
    if (resp.status === 200) {
      console.log(resp);
      setData3(resp.data.result.records[6]);
    }
  };

  const getAsyncData4 = async () => {
    const resp = await API.get(
      "/api/action/datastore_search?resource_id=d6fa745b-4e22-4853-b3e7-53bdbf403c09"
    );
    if (resp.status === 200) {
      console.log(resp);
      setData4(resp.data.result.records[0]);
    }
  };

  return (
    <>
      <table>
        <tbody>
          <h3>Active Cases Overview</h3>
          <tr>
            <th>Count of Case</th>
            <th>Age Group</th>
            <th>As of Date</th>
          </tr>
          <tr key={data1._id}>
            <td>{data1.count_of_case}</td>
            <td>{data1.age_group}</td>
            <td>{data1.pr_date}</td>
          </tr>
        </tbody>
        <tbody>
          <h3>Vaccination Overview</h3>
          <tr>
            <th>Completed Full Regimen</th>
            <th>Age group</th>
            <th>Unvaccinated</th>
            <th>At least One Dose </th>
          </tr>
          <tr key={data2._id}>
            <td>{data2.completed_full_regimen}</td>
            <td>{data2.age}</td>
            <td>{data2.unvaccinated}</td>
            <td>{data2.at_least_one_dose}</td>
          </tr>
        </tbody>
        <tbody>
          <h3>Number in ICU Overview</h3>
          <tr>
            <th>Date</th>
            <th>New ICU Admissions</th>
          </tr>
          <tr key={data3._id}>
            <td>{data3.date}</td>
            <td>{data3.new_icu_admissions}</td>
          </tr>
        </tbody>
        <tbody>
          <h3>Hospitalization Overview</h3>
          <tr>
            <th>Date</th>
            <th>New Hospital Admissions</th>
          </tr>
          <tr key={data4._id}>
            <td>{data4.date}</td>
            <td>{data4.new_hospital_admissions}</td>
                  
          </tr>
        </tbody>
      </table>
      <br />
      <div className="icons">
        <br />
        <ART />
        <br />
        <Support />
      </div>
    </>
  );
}

export default Overview;
