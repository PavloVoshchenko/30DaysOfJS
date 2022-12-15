/*Write a program which tells the number of days in a month.

  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 days.

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days. */

document.querySelector('.m_bttn').onclick = numberOfDays;

function numberOfDays() {
    let month = prompt('Enter a month:').toLowerCase();
    let outputMonth = month.charAt(0).toUpperCase() + month.slice(1);
    let thirtyOneDaysMonth = 'january,march,may,july,august,october,december'
    let thirtyDaysMonth = 'april,june,september,november'
    let february = 'february'


    switch (true) {
        case thirtyOneDaysMonth.includes(month) && month.length >= 3:
            document.querySelector('.out_days_number').innerHTML = outputMonth + ' has 31' + ' days.';
            break;
        case thirtyDaysMonth.includes(month) && month.length > 3:
            document.querySelector('.out_days_number').innerHTML = outputMonth + ' has 30' + ' days.';
            break;
        case february.includes(month) && month.length > 0:
            document.querySelector('.out_days_number').innerHTML = outputMonth + ' has 28' + ' days.';
            break;
        default:
            document.querySelector('.out_days_number').innerHTML = 'Not a month.';
    };
}