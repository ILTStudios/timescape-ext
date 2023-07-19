//change timezones
function changeTimeZone(date, timeZone) {
    if (typeof date === 'string') {
      return new Date(
        new Date(date).toLocaleString('en-US', {
          timeZone,
        }),
      );
    }
  
    return new Date(
      date.toLocaleString('en-US', {
        timeZone,
      }),
    );
  }

//gets all the inputs and outputs
const timezone_one = document.querySelector('.todo .timezone input');
const time_one = document.querySelector('.todo .time input');
const timezone_two = document.querySelector('.done .timezone input');
const time_two = document.querySelector('.done .time input');

//set default settings

//current time
const current_time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false});
time_one.placeholder = `${current_time}`;
time_one.value = `${current_time}`;

//current timezone
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
timezone_one.placeholder = `${timezone}`;
timezone_one.value = `${timezone}`;

//changed time
time_two.placeholder = `${changeTimeZone(new Date(), 'America/Los_Angeles')}`
time_two.value = `${changeTimeZone(new Date(), 'America/Los_Angeles').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false})}`;

//changed timezone
timezone_two.placeholder = 'America/Los_Angeles';
timezone_two.value = 'America/Los_Angeles';