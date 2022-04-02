import React from 'react'

const Alex = ({data}) => {
  return (
    <>
    <h3>7 days active cases in ICU and deaths, based on Vaccination Status</h3>
      {data.map((a) => {
        return (
          <div key={a._id}>
            <p>Count of Case : {a.count_of_case}</p>
            <p>Vaccination Status : {a.vaccination_status}</p>
            <p>As of Date : {a.as_of_date}</p>
            <p>Clinical Status : {a.clinicalstatus}</p>
            <br />
          </div>
        );
      })}
    </>
  )
}

export default Alex;