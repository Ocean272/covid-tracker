import React from 'react'

const Yvonne = ({data}) => {
  return (
    <>
    <h3>Number of local cases by Age</h3>
      {data.map((a) => {
        return (
          <div key={a._id}>
            <p>Count of Case : {a.count_of_case}</p>
            <p>Age Group : {a.age_group}</p>
            <p>As of Date : {a.pr_date}</p>
            <br/>
          </div>
        );
      })}
    </>
  )
}

export default Yvonne