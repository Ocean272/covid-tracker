import React from 'react';
import { useState, useEffect } from 'react';
import API from '../screens/API'

function Farhan() {
    const [vac, setVac] = useState([]);

    const getAsyncData2 = async () => {
        const resp = await API.get("/api/action/datastore_search?resource_id=9ec89dc0-cb6b-4604-aaff-382d5e850206");
        if (resp.status === 200) {
          console.log(resp);
          setVac(resp.data.result.records);
        }
      }
        useEffect(() =>{
          getAsyncData2();
        }, []);

        return (
          <table>
            <tbody>
            <h3>Vaccination Status by Age</h3>
            <tr>
                <th>completed full regimen</th>
                <th>Age Group</th>
                <th>Unvaccinated</th>
                <th>At least one dose</th>
              </tr>
              {vac.map((v) => {
                return (
                  <tr key={v._id}>
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
          )
        
          
}

export default Farhan