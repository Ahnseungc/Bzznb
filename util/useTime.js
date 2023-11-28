import { useState } from 'react';

const useTime = (dt) => {
  const unix_timestamp = dt;
  const date = new Date(unix_timestamp * 1000);
  const years = date.getFullYear();
  const months = date.getMonth() + 1;
  const months_str = date.toDateString();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();
  if (hours < 10) {
    var formattedTime = '0' + hours + ':' + minutes.substr(-2);
  } else {
    var formattedTime = hours + ':' + minutes.substr(-2);
  }
  const TimeObject = {
    Years: years,
    Months_str: months_str,
    Days: days,
    Months: months,
    FormattedTime: formattedTime,
  };

  return TimeObject;
};

export default useTime;
