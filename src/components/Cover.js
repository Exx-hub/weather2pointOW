import React, { useState, useEffect } from "react";

function Cover() {
  const [night, setNight] = useState(null);
  const time = {
    night: "far fa-moon cover",
    day: "far fa-sun cover",
  };

  useEffect(() => {
    let a = new Date();
    let hour = a.getHours();

    if (hour >= 18 || hour <= 6) {
      setNight(true);
    } else {
      setNight(night);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <i className={night ? time.night : time.day}></i>;
}

export default Cover;
