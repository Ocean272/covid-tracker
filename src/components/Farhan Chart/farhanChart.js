import React from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

const farhanChart = ({ data }) => {
  const [v, setV] = useState("");
  const [searchParamVac] = useState(["age"]);
  const [filterParamV, setFilterParamV] = useState(["All"]);
  const [userData, setUserData] = useState({
    labels: data.map((v) => v.age),
    datasets: [
      {
        label: "Completed Full Regimen",
        data: data.map((v) => v.completed_full_regimen),
      },
      {
        label: "Unvaccinated",
        data: data.map((v) => v.unvaccinated),
      },
      {
        label: "Atleast One Dose",
        data: data.map((v) => v.at_least_one_dose),
      },
    ],
  });

  return (
    <>
      <label
        onChange={(e) => {
          setFilterParamV(e.target.value);
        }}
        aria-label="Date"
      >
        <option value="All"></option>
      </label>
      <div>
        <Bar chartData={userData} />
      </div>
    </>
  );
};

export default farhanChart;
