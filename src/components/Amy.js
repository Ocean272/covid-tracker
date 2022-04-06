import React from "react";
import { useState, useEffect } from "react";
import API from "../screens/API";
import Alex from "./Alex";
import Yvonne from "./Yvonne";
import Farhan from "./Farhan";
import Daniel from "./Daniel";


function Amy() {
  const [localCase, setLocalCase] = useState([]);
   
  // const [r, setR] = useState("");
  // const [searchParamLC] = useState(["pr_date"]);
  // const [filterParam, setFilterParam] = useState(["All"]);
  const [vac, setVac] = useState([]);
  const [icu, setIcu] = useState([]);
  const [util, setUtil] = useState([]);

  const getAsyncData1 = async () => {
    const resp = await API.get(
      "/api/action/datastore_search?resource_id=6c14814b-09b7-408e-80c4-db3d393c7c15"
    );
    if (resp.status === 200) {
      console.log(resp);
      setLocalCase(resp.data.result.records);
    }
  };
  useEffect(() => {
    getAsyncData1();
  }, []);




  // function search(localCase) {
  //   return localCase.filter((item) => {
  //     if (item.pr_date == filterParam) {
  //       return searchParamLC.some((newItem) => {
  //         return (
  //           item[newItem].toString().toLowerCase().indexOf(r.toLowerCase()) > -1
  //         );
  //       });
  //     } else if (filterParam == "All") {
  //       return searchParamLC.some((newItem) => {
  //         return (
  //           item[newItem].toString().toLowerCase().indexOf(r.toLowerCase()) > -1
  //         );
  //       });
  //     }
  //   });
  // }

  const getAsyncData2 = async () => {
    const resp = await API.get(
      "/api/action/datastore_search?resource_id=9ec89dc0-cb6b-4604-aaff-382d5e850206"
    );
    if (resp.status === 200) {
      console.log(resp);
      setVac(resp.data.result.records);
    }
  };
  useEffect(() => {
    getAsyncData2();
  }, []);

  const getAsyncData3 = async () => {
    const resp = await API.get(
      "/api/action/datastore_search?resource_id=783f0c4c-caf7-4818-8683-760f3d7f0757"
    );
    if (resp.status === 200) {
      console.log(resp);
      setIcu(resp.data.result.records);
    }
  };
  useEffect(() => {
    getAsyncData3();
  }, []);

  const getAsyncData4 = async () => {
    const resp = await API.get(
      "/api/action/datastore_search?resource_id=b5ae6ad5-1272-41f4-a4e5-23308ad6e32d"
    );
    if (resp.status === 200) {
      console.log(resp);
      setUtil(resp.data.result.records);
    }
  };
  useEffect(() => {
    getAsyncData4();
  }, []);



  return (
    <>
      <h2>Covid Cases</h2>
      <div className="wrapper">
        {/* <label htmlFor="search-form">
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
        <h3>Number of Local Cases based on Age Group</h3>
        {search(localCase).map((a) => {
          return (
            <div key={a._id}>
              <p>Date : {a.pr_date}</p>
              <p>Age group : {a.age_group}</p>
              <p>No of cases : {a.count_of_case}</p>
              <br />
            </div>
          );
        })} */}
      
      <Daniel data={util} />
      <Farhan data={vac} />
      <Yvonne data={localCase} />
      <Alex data={icu} />
      </div>
    </>
  );
}

export default Amy;
