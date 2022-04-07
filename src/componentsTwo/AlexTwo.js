import React from 'react';
import { useState, useEffect } from 'react';
import API from '../screens/API'

function Alex() {
    const [icu, setIcu] = useState([]);
    const [visible, setVisible] = useState(5);

    const showMoreItems = () => {
      setVisible((prevValue) => prevValue + 5)
    }

    const showLessItems = () => {
      setVisible((prevValue) => prevValue - 5)
    }

    const getAsyncData3 = async () => {
        const resp = await API.get("/api/action/datastore_search?resource_id=783f0c4c-caf7-4818-8683-760f3d7f0757");
        if (resp.status === 200) {
          console.log(resp);
          setIcu(resp.data.result.records);
        }
      }
        useEffect(() =>{
          getAsyncData3();
        }, []);

            return (
              <table>
                <tbody>
              <h3>7 days active cases in ICU and deaths, based on Vaccination Status</h3>
              <tr>
                <th>Count of Case</th>
                <th>Vaccination Status</th>
                <th>As of Date</th>
                <th>Clinical Status</th>
              </tr>
                {icu.slice(0, visible).map((a) => {
                  return (
                    <tr key={a._id}>
                      <td>{a.count_of_case}</td>
                      <td>{a.vaccination_status}</td>
                      <td>{a.as_of_date}</td>
                      <td>{a.clinicalstatus}</td>
                      <br />
                    </tr>
                  );
                })}
                  <button onClick={showMoreItems}>Show more</button>
                  <button onClick={showLessItems}>Show less</button>
                </tbody>
              </table>
            )
          
}

export default Alex