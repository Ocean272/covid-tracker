import React from 'react';
import { useState, useEffect } from 'react';
import API from '../screens/API'



function Yvonne() {
    const [localCase,setLocalCase] = useState([]);
    const [visible, setVisible] = useState(5);

    const showMoreItems = () => {
      setVisible((prevValue) => prevValue + 5)
    }

    const showLessItems = () => {
      setVisible((prevValue) => prevValue - 5)
    }

    const getAsyncData1 = async () => {
        const resp = await API.get("/api/action/datastore_search?resource_id=6c14814b-09b7-408e-80c4-db3d393c7c15");
        if (resp.status === 200) {
          console.log(resp);
          setLocalCase(resp.data.result.records);
        }
      }
        useEffect(() =>{
          getAsyncData1();
        }, []);

        return (
          <table>
            <tbody>
            <h3>Number of local cases by Age</h3>
            <tr>
                <th>Count of Case</th>
                <th>Age Group</th>
                <th>As of Date</th>
              </tr>
              {localCase.slice(0, visible).map((a) => {
                return (
                  <tr key={a._id}>
                    <td>{a.count_of_case}</td>
                    <td>{a.age_group}</td>
                    <td>{a.pr_date}</td>
                    <br/>
                  </tr>
                );
              })}
                <button onClick={showMoreItems}>Show more</button>
                <button onClick={showLessItems}>Show less</button>
                </tbody>
              </table>
          )
        
          
}

export default Yvonne