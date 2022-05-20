import React from "react";

const DateTime = () => {
  const newDate = new Date();
  const showDate = newDate.toDateString();
  const showTime = newDate.toLocaleTimeString();

  return (
    <div className="date">
      <span>{showDate}</span> | <span>{showTime}</span>
    </div>
  );
};
export default DateTime;
