export const getCurrentDate = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  const dateDisp = date < 10 ? "0" + date : date;
  let month = newDate.getMonth() + 1;
  const monthDisp = month < 10 ? "0" + month : month;
  let year = newDate.getFullYear();

  return year + "-" + monthDisp + "-" + dateDisp;
};
export const getCurrentDateWithTime = (returnInLine = false) => {
  let newDate = new Date();
  let date = newDate.getDate();
  const dateDisp = date < 10 ? "0" + date : date;
  let month = newDate.getMonth() + 1;
  const monthDisp = month < 10 ? "0" + month : month;
  let year = newDate.getFullYear();
  let hour = newDate.getHours();
  const hourDisp = hour < 10 ? "0" + hour : hour;
  let minutes = newDate.getMinutes();
  const minutesDisp = minutes < 10 ? "0" + minutes : minutes;
  let seconds = newDate.getSeconds();
  const secondsDisp = seconds < 10 ? "0" + seconds : seconds;

  if (!returnInLine) {
    return (
      year +
      "-" +
      monthDisp +
      "-" +
      dateDisp +
      " " +
      hourDisp +
      ":" +
      minutesDisp +
      ":" +
      secondsDisp
    );
  } else {
    return (
      year +
      "-" +
      monthDisp +
      "-" +
      dateDisp +
      "T" +
      hourDisp +
      ":" +
      minutesDisp +
      ":" +
      secondsDisp
    );
  }
};
