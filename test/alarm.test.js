const alarm = require('../app/alarm');

test('Moans if too early', () => {
  let timeNow = new Date();
  timeNow.setHours(11);
  expect(alarm.wakeup(timeNow)).toBe("Ugggggh its too early - I'm not waking up yet");
});

test('Snoozing for a set amount', () => {
  expect(alarm.snooze()).toBe(20);
});

test('Check is it lunch', () => {
  let timeNow = new Date();
  timeNow.setHours(13);
  expect(alarm.isLunchtime(timeNow)).toBe("Yesssss its lunch time!!!");
});

test('Check it is not lunch', () => {
  let timeNow = new Date();
  timeNow.setHours(11);
  expect(alarm.isLunchtime(timeNow)).toBe("No get back to work");
});




