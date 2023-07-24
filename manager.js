//change timezones
//________________
// function changeTimeZone(date, timeZone) {
//     if (typeof date === 'string') {
//       return new Date(
//         new Date(date).toLocaleString('en-US', {
//           timeZone,
//         }),
//       );
//     }
//     return new Date(
//       date.toLocaleString('en-US', {
//         timeZone,
//       }),
//     );
//   }

//gets all the inputs and outputs
//_______________________________
// const timezone_one = document.querySelector('.todo .timezone input');
// const time_one = document.querySelector('.todo .time input');
// const timezone_two = document.querySelector('.done .timezone input');
// const time_two = document.querySelector('.done .time input');

//set default settings
//____________________


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

    update_options(option_time, "time")
});

format_settings.addEventListener('click', () => {
    format_settings.children[option_format].classList.remove('selected');

    if(option_format == 0){
        option_format = 1;
    }else{
        option_format = 0;
    }

    format_settings.children[option_format].classList.add('selected');

    update_options(option_format, "format")
});

//internal working
function update_options(value, setting){
    //time
    if(setting == 'time'){
        var time_value_todo = document.querySelector('.todo .time input').value;
        var time_value_done = document.querySelector('.done .time input').value;

        if(value != 0){
            //todo
            let [time, modifier] = time_value_todo.split(' ');
            let [hours, minutes] = time.split(':');
            
            if(hours === '12'){
                hours = '00';
            }if(modifier === 'PM'){
                hours = parseInt(hours, 10) + 12;
            }

            var twenty_four_hour = `${hours}:${minutes}`;
            document.querySelector('.todo .time > input').value = twenty_four_hour;

            //done
            [time, modifier] = time_value_done.split(' ');
            [hours, minutes] = time.split(':');
            
            if(hours === '12'){
                hours = '00';
            }if(modifier === 'PM'){
                hours = parseInt(hours, 10) + 12;
            }

            twenty_four_hour = `${hours}:${minutes}`;
            document.querySelector('.done .time > input').value = twenty_four_hour;
        }
        else{
            //todo
            var hours = time_value_todo.split(':')[0];
            var minutes = time_value_todo.split(':')[1];
            
            let AMorPM = 'AM';
            if(hours>12)AMorPM = 'PM';
            hours = (hours%12);

            var twelve_hour = `${hours}:${minutes} ${AMorPM}`;
            document.querySelector('.todo .time > input').value = twelve_hour;

            //done
            hours = time_value_done.split(':')[0];
            minutes = time_value_done.split(':')[1];
            
            AMorPM = 'AM';
            if(hours>12)AMorPM = 'PM';
            hours = (hours%12);

            twelve_hour = `${hours}:${minutes} ${AMorPM}`;
            document.querySelector('.done .time > input').value = twelve_hour;
        }

        if(value != 0){
            option_time = 1;
        }else{
            option_time = 0;
        }
        return
    }

    //format
    if(setting == 'format'){
        const todo = document.querySelector('.todo .date');
        const done = document.querySelector('.done .date');
        if(value != 1){
            todo.classList.remove('active');
            done.classList.remove('active');
        }else{
            todo.classList.add('active');
            done.classList.add('active');
        }

        if(value != 1){
            option_format = 0;
        }else{
            option_format = 1;
        }
    }
}