import React from 'react';
import { useState, useEffect } from 'react';
import API from '../screens/API'

function Daniel() {
    const [util, setUtil] = useState([]);

    const getAsyncData4 = async () => {
        const resp = await API.get("/api/action/datastore_search?resource_id=b5ae6ad5-1272-41f4-a4e5-23308ad6e32d");
        if (resp.status === 200) {
          console.log(resp);
          setUtil(resp.data.result.records);
        }
      }
        useEffect(() =>{
          getAsyncData4();
        }, []);  

        return (
          <table>
            <tbody>
              <h3>Daily Adult ICU Bed Utilisation</h3>
              <tr>
                <th>Status</th>
                <th>As of Date</th>
                <th>Value</th>
              </tr>
              {util.map((a) => {
                return (
                  <tr key={a._id}>
                    <td>{a.status}</td>
                    <td>{a.as_of_date}</td>
                    <td>{a.value}</td>
                    <br />
                  </tr>
                );
              })}
                </tbody>
              </table>
          )       
}

export default Daniel