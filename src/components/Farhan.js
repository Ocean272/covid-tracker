import React from "react";

const Farhan = ({ data }) => {
  return (
    <>
      <h3>Vaccination Status by Age</h3>
      <form>
        <button>Search</button>
      </form>
      {data.map((v) => {
        return (
          <div key={v._id}>
            <p>completed full regimen : {v.completed_full_regimen}</p>
            <p>Age Group : {v.age}</p>
            
            <p>At least one dose : {v.at_least_one_dose}</p>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default Farhan;
