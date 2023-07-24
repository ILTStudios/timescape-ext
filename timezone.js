let timezone_arr = {
    "Lord Howe Standard Time (LHST)":"Australia/Lord_Howe",
    "Australian Eastern Time (AET)":"Australia/Sydney",
    "Australian Central Standard Time (ACT)":"Australia/Sydney",
    "Japan Standard Time (JST)":"Asia/Tokyo",
    "Australian Central Western Standard Time (ACWST)":"Australia/Darwin",
    "China Standard Time (CST)":"Asia/Shanghai",
    "Western Indonesian Time (WIB)":"Asia/Jakarta",
    "India Standard Time (IST)":"Asia/Kolkata",
    "Uzbekistan Time (UZT)":"Asia/Samarkand",
    "Gulf Standard Time (GST)":"Atlantic/South_Georgia",
    "Iran Standard Time (IRST)":"Iran",
    "Eastern European Summer Time (EEST)":"Asia/Beirut",
    "Central European Summer Time (CEST)":"Africa/Ceuta",
    "British Summer Time (BST)":"Europe/Belfast",
    "Greenwich Mean Time (GMT)":"Africa/Abidjan",
    "Cape Verde Time (CVT)":"Atlantic/Cape_Verde",
    "Western Greenland Summer Time (WGST)":"America/Nuuk",
    "Newfoundland Daylight Time (NDT)":"Canada/Newfoundland",
    "Argentina Time (ART)":"America/Argentina/ComodRivadavia",
    "Eastern Daylight Time (EDT)":"US/Eastern",
    "Central Daylight Time (CDT)":"US/Central",
    "Central Standard Time (CST)":"America/Chicago",
    "Pacific Daylight Time (PDT)":"Canada/Pacific",
    "Alaska Daylight Time (AKDT)":"America/Anchorage",
    "Hawaii-Aleutian Daylight Time (HDT)":"US/Aleutian",
    "Marquesas Time (MART)":"Pacific/Marquesas",
    "Hawaii Standard Time (HST)":"America/Adak",
    "Niue Time (NUT)":"Pacific/Niue",
    "Anywhere on Earth (AoE)":"Africa/Abidjan",
};

//variables
const timezone_one = document.querySelector('.todo .timezone .select-btn');
const time_one = document.querySelector('.todo .time input');
const timezone_two = document.querySelector('.done .timezone .select-btn');
const time_two = document.querySelector('.done .time input');

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


for(const [key, value] of Object.entries(timezone_arr)){
    let li_todo = `<li onclick="update_name(this, 0)" value="${key}"> ${key} </li>`;
    document.querySelector('.tz_options_todo').insertAdjacentHTML('beforeend', li_todo);

    let li_done = `<li onclick="update_name(this, 1)" value="${key}"> ${key} </li>`;
    document.querySelector('.tz_options_done').insertAdjacentHTML('beforeend', li_done);
}

//updates select-btn
function update_name(name, identifier){
    name.parentElement.parentElement.parentElement.children[0].innerText = name.innerText;
    
    //disable all popups
    done_content.style.display = 'none';
    is_done_on = false;
    todo_content.style.display = 'none';
    is_on = false;

    if(identifier == 0){
        var zone_value = timezone_one.innerHTML;
        var time_value = time_one.value;

        var zone = timezone_arr[zone_value];
        console.log(zone, zone_value, time_value);

        console.log(new Date(time_value));
    }

    update_timezone();
}


//search method
const search_inp_todo = document.querySelector('.todo >div .timezone .content .search > input');
search_inp_todo.addEventListener('keyup', () => {
    let arr = [];
    var search_value = search_inp_todo.value.toLowerCase();

    arr = Object.keys(timezone_arr).filter(data => {
        return data.toLowerCase().includes(search_value);
    }).map(data => `<li onclick="update_name(this)">${data}</li>`).join("")
    search_inp_todo.parentElement.parentElement.children[1].innerHTML = arr ? arr : `<li>Oops! Country not found</li>`;
});

const search_inp_done = document.querySelector('.done >div .timezone .content .search > input');
search_inp_done.addEventListener('keyup', () => {
    let arr = [];
    var search_value = search_inp_done.value.toLowerCase();

    arr = Object.keys(timezone_arr).filter(data => {
        return data.toLowerCase().includes(search_value);
    }).map(data => `<li onclick="update_name(this)">${data}</li>`).join("")
    search_inp_done.parentElement.parentElement.children[1].innerHTML = arr ? arr : `<li>Oops! Country not found</li>`;
});



//display
var is_on = false;
var is_done_on = false;
const todo_content = document.querySelector('.todo >div .timezone .content');
const done_content = document.querySelector('.done >div .timezone .content');
document.querySelector('.todo >div .timezone .select-btn').addEventListener('click', () => {
    if(is_on == false){
        done_content.style.display = 'none';
        is_done_on = false;

        todo_content.style.display = 'unset';
        is_on = true;
        search_inp_todo.focus();
    }else{
        todo_content.style.display = 'none';
        is_on = false;
    }
});
document.querySelector('.done >div .timezone .select-btn').addEventListener('click', () => {
    if(is_done_on == false){
        todo_content.style.display = 'none';
        is_on = false;

        done_content.style.display = 'unset';
        is_done_on = true;
        search_inp_done.focus();
    }else{
        done_content.style.display = 'none';
        is_done_on = false;
    }
});

window.addEventListener('click', (elmn) => {
    if(elmn.target.classList.value == 'extension-div'){
        todo_content.style.display = 'none';
        is_on = false;
        done_content.style.display = 'none';
        is_done_on = false;
    }
});


//actual converting
//current time
const current_time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false});
time_one.placeholder = `${current_time}`;
time_one.value = `${current_time}`;

//current timezone
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

//current date
document.querySelector('.todo .date').textContent = `${new Date().toUTCString().slice(5, 16)}`;


//when both inputs are prepared
function update_timezone(){
    let timezone_todo = document.querySelector('.todo .timezone .select-btn').innerHTML;
    let timezone_done = document.querySelector('.done .timezone .select-btn').innerHTML;
    let time_todo = document.querySelector('.todo .time > input').value;
    let time_done = document.querySelector('.done .time > input').value;

    if(timezone_todo.includes('<span>') || timezone_done.includes('<span>')){
        return
    }else{
        

    }
}


//changed time
// time_two.placeholder = `${changeTimeZone(new Date(), 'America/Los_Angeles')}`
// time_two.value = `${changeTimeZone(new Date(), 'America/Los_Angeles').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false})}`;

//changed date
var new_date = `${changeTimeZone(new Date(), 'America/Los_Angeles')}`
document.querySelector('.done .date').textContent = `${changeTimeZone(new Date(), 'America/Los_Angeles').toUTCString().slice(5, 16)}`


