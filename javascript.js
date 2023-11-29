setInterval(showtime,1000);  
function showtime(){
  let time = new Date();
let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  am_pm = "am";

  if (hour >= 12) {
      if (hour > 12) hour -= 12;
      am_pm = "PM";
  } else if (hour == 0) {
      hr = 12;
      am_pm = "AM";
  }
  hour =
    hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  let currenttime = hour+" : "+min+" : "+sec+" : "+am_pm;
  textcon.innerHTML = currenttime;

  }
 
showTime();
