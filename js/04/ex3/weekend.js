/*Check if a day is weekend day or a working day. Your script will take day as an input.

  What is the day today? Saturday
  Saturday is a weekend.

  What is the day today? saturDaY
  Saturday is a weekend.

  What is the day today? Friday
  Friday is a working day.

  What is the day today? FrIDAy
  Friday is a working day.
 */
document.querySelector('.day_bttn').onclick = daysOfWeek;

function daysOfWeek() {
    let day = document.querySelector('.input_day').value.toLowerCase();
    let workingDays = 'monday/tuesday/wednesday/thursday/friday';
    let weekends = 'saturday/sunday';
    let isAWeekend = ' is a weekend.';
    let isAWorkingDay = ' is a working day.';
    let outputDay = day.charAt(0).toUpperCase() + day.slice(1);

    switch (true) {
        case workingDays.includes(day) && day.length > 5:
            document.querySelector('.out_day').innerHTML = outputDay + isAWorkingDay;
            break;
        case weekends.includes(day) && day.length > 5:
            document.querySelector('.out_day').innerHTML = outputDay + isAWeekend;
            break;
        default:
            document.querySelector('.out_day').innerHTML = 'Not a day.';
    };
}