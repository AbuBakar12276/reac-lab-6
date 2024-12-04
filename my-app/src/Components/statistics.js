import React from 'react';
import './statistics.css';

function Statistics({statistics}) {

  return (
    <div className="statistics">
        <div className="progress"
        style= {{width: '${activePercentage}%'}} >
            </div>
       <p>Total Users: {statistics.totalUsers}</p>
       <p>Active Users: {statistics.activeUsers}</p>
       <p>New Signups: {statistics.newSignups}</p>
       <p>Active Users Percentage: {statistics.activePercentage}</p>
    </div>
  );
}

export default Statistics;