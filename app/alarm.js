// eslint-disable-next-line no-unused-vars
const peopleThatHaveUsedAlarm = [
  { name: "James", wakeUpTime: 7 },
  { name: "Susan", wakeUpTime: 13 },
  { name: "Geoff", wakeUpTime: 14 },
  { name: "Lisa", wakeUpTime: 6 }
];

function wakeup(currentTime) {
   //currentTime will be a Javascript Date object
   //https://www.w3schools.com/jsref/jsref_obj_date.asp
  const currentHour = currentTime.getHours();

  if (currentHour <= 11) {
    return "Ugggggh its too early - I'm not waking up yet";
  } else {
    return "Get up!! You're wasting the day";
  }
}



function snooze() {
  let snoozeAttempts = 20;

  //for (let i = 20; i < 20; i++) {
  //  snoozeAttempts++;
  //}
  while (snoozeAttempts <20) {
    snoozeAttempts++;
  }

  return snoozeAttempts;
}
function isLunchtime(time) {
  let hours=time.getHours();

  if (hours === 12 || hours === 13|| hours === 14 ) {
 return "Yesssss its lunch time!!!";
} 
else {
  return "No get back to work";
}
}
module.exports = {
  wakeup,
  snooze,
  isLunchtime
};
