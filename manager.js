//change timezones
//________________
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
//_______________________________
const timezone_one = document.querySelector('.todo .timezone input');
const time_one = document.querySelector('.todo .time input');
const timezone_two = document.querySelector('.done .timezone input');
const time_two = document.querySelector('.done .time input');

//set default settings
//____________________

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



//change options
//______________
const time_settings = document.querySelector('.time-setting');
const format_settings = document.querySelector('.format-setting');


//display
var option_time = 1;
var option_format = 0;

time_settings.children[option_time].classList.add('selected');
format_settings.children[option_format].classList.add('selected');

time_settings.addEventListener('click', () => {
    time_settings.children[option_time].classList.remove('selected');

    if(option_time == 0){
        option_time = 1;
    }else{
        option_time = 0;
    }

    time_settings.children[option_time].classList.add('selected');
});

format_settings.addEventListener('click', () => {
    format_settings.children[option_format].classList.remove('selected');

    if(option_format == 0){
        option_format = 1;
    }else{
        option_format = 0;
    }

    format_settings.children[option_format].classList.add('selected');
});

//internal working