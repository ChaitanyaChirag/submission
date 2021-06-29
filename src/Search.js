
import React from 'react'
import { useState }  from 'react';
import {Link} from "react-router-dom"
function Search() {
    const dataList = [
        {
          "Subject":"Python",
          "Day": "Monday",
          "Time": "4PM",
         
        },
        {
          "Subject":"Java",
          "Day": "Wednesday",
          "Time": "5PM",
         
        },
        {
          "Subject":"HTML",
         "Day": "Saturday",
          "Time": "9AM",
         
        }
      ];
     
      const [searchText, setSearchText] = useState("");
      const [data, setData] = useState(dataList);
     
      
      const excludeColumns = ["Day", "Time"];
     
      
      const handleChange = value => {
        setSearchText(value);
        filterData(value);
      };
     
      
      const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setData(dataList);
        else {
          const filteredData = dataList.filter(item => {
            return Object.keys(item).some(key =>
              excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
            );
          });
          setData(filteredData);
        }
      }
     
      return (
        <center>
        <div className="App">
          <h2>Class Schedule</h2>
           <input
            
            type="text"
            className="search"
            placeholder="Type to search..."
            value={searchText}
            onChange={e => handleChange(e.target.value)}
          />
          <div className="box-container">
          <tr>
                <th className="thsearch">Subject</th>
            <th className="thsearch">Week Day</th>
            <th className="thsearch">Time for May</th>
          </tr>
            {data.map((d, i) => {
              return <div key={i} >
                <table className="tablesearch">
                
          
                <tr>
                    <td className="tdsearch">
                        {d.Subject}
                    </td>
                    <td className="thsearch">
                        {d.Day}
                    </td>
                    <td className="thsearch">
                        {d.Time}
                    </td>
    
                </tr>
                 
          
            </table>
      
              
              </div>
            })}
            
            {data.length === 0 && <span><tr>
                <th>Subject</th>
            <th>Week Day</th>
            <th>Time for May</th>
          </tr>
          </span>}
          </div>

        </div>
 <Link to="/schedule"><button className="searchbutton">View Schedule</button></Link>
 <hr/>
        </center>
        
      );
}
export default Search;