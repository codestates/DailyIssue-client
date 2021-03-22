import React from "react"
import "./SideNav.css"
import {useState} from 'react';
import moment from 'moment';

function SideNav() {
  const [getMoment, setMoment]=useState(moment());
  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
  const calendarArr=()=>{

    let result = [];
    let week = firstWeek;
    for ( week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {
            Array(7).fill(0).map((data, index) => {
              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성

              if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                return(
                    <td key={index} style={{backgroundColor:'red'}} >
                      <span>{days.format('D')}</span>
                    </td>
                );
              }else if(days.format('MM') !== today.format('MM')){
                return(
                    <td key={index} style={{backgroundColor:'gray'}} >
                      <span>{days.format('D')}</span>
                    </td>
                );
              }else{
                return(
                    <td key={index}  >
                      <span>{days.format('D')}</span>
                    </td>
                );
              }
            })
          }
        </tr>
      );
    }
    return result;
  }

return (
  <div className="Side_nav">
      <div className="side">
      <div className="control">
        <button className="button" onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }}>👈</button>
        <span>{today.format('YYYY / MM ')}</span>
        <button className="button" onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} >👉</button>
      </div>
      <table>
        <tbody>
          {calendarArr()}
        </tbody>
      </table>
  </div>
  <div className="Hot_Issue">
    Hot Issue
      <ul></ul>
      <li className="li">first</li>
      <li className="li">second</li>
  </div>
  <br></br>
  </div>

);

}

export default SideNav