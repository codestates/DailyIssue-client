import React from "react"
import "./SideNav.css"
import { useState } from 'react';
import moment from 'moment';
import axios from 'axios';

function SideNav(props) {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
  const handleCalenderClick = function (date) {
    if (date > today.format('YYYY-MM-DD')) return;
    props.handleDate(date);
    axios.get(`http://15.165.161.223:4000/main/${date}`, props.userinfo ? {
      headers: {
        authorization: `bear ${props.userinfo}`
      }
    } : undefined)
      .then(data => {
        console.log(data.data);
        props.handleIssue(data.data);
      })
      .catch(e => console.log("not found dailyIssue"));
    axios.get(`http://15.165.161.223:4000/main/hotissue/${date}`)
      .then(data => {
        props.handleHotIssue(data.data.hotIssues);
      })
      .catch(e => console.log("not found hotIssues"));
  };
  const handleRandomIssue = function () {
    axios.get(`http://15.165.161.223:4000/main/small?date=${props.date}`, {
      headers: {
        Authorization: `bear ${props.userinfo}`
      }
    })
      .then(data => {
        props.handleIssue(data.data);
      });
  }

  const handleHotIssueClick = function (issueId) {
    if (issueId !== undefined) {
      axios.get(`http://15.165.161.223:4000/main/small/${issueId}`, {
        headers: {
          Authorization: `bear ${props.userinfo}`
        }
      })
        .then(data => {
          props.handleIssue(data.data);
        });
    }
    else {
      if (props.date === today.format('YYYY-MM-DD')) props.toggleWriting();
    }
  }

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {
            Array(7).fill(0).map((data, index) => {
              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성
              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <td key={index} style={{ backgroundColor: 'red' }} onClick={() => handleCalenderClick(days.format('YYYY-MM-DD'))}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if (days.format('MM') !== today.format('MM')) {
                return (
                  <td key={index} style={{ backgroundColor: 'gray' }} onClick={() => handleCalenderClick(days.format('YYYY-MM-DD'))}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else {
                return (
                  <td key={index} onClick={() => handleCalenderClick(days.format('YYYY-MM-DD'))}>
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
  const hotIssues = Array(Math.min(props.hotIssues.length + 1, 3)).fill(
    {
      title: props.date === today.format('YYYY-MM-DD')
        ? 'Add new Small Issue!'
        : 'No more hot issue at this day'
    });
  props.hotIssues.forEach((hotIssue, index) => hotIssues[index] = hotIssue);
  return (
    <div className="Side_nav">
      <div className="side">
        <div className="control">
          <button className="button" onClick={() => { setMoment(getMoment.clone().subtract(1, 'month')) }}>⬅</button>
          <span>{today.format('YYYY / MM ')}</span>
          <button className="button" onClick={() => { setMoment(getMoment.clone().add(1, 'month')) }} >➡️</button>
        </div>
        <table>
          <tbody>
            {calendarArr()}
          </tbody>
        </table>
      </div>
      <div>
        <br></br>
      </div>
      <div className="RandomIssue" onClick={handleRandomIssue}>
        Go to Random issue
    </div>
      <div className="Hot_Issue">
        Hot Issues
        <ul>
          {hotIssues.map((hotIssue, index) => <li className="li" key={index} onClick={() => handleHotIssueClick(hotIssue.postId)}>{hotIssue.title}</li>)}
        </ul>
      </div>
      <br></br>
    </div>

  );

}

export default SideNav