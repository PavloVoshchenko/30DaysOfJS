/*Check if the season is Autumn, Winter, Spring or Summer.
If the user input is:

September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
 */
document.querySelector('.month_bttn').onclick = month;

function month() {
    let month = document.querySelector('.input_month').value.toLowerCase();
    let autumn = 'september/october/november';
    let winter = 'december/january/february';
    let spring = 'march/april/may';
    let summer = 'june/july/august';

    switch (true) {
        case autumn.includes(month) && month.length > 0:
            document.querySelector('.out_month').innerHTML = 'Autumn';
            break;
        case winter.includes(month) && month.length > 0:
            document.querySelector('.out_month').innerHTML = 'Winter';
            break;
        case spring.includes(month) && month.length > 0:
            document.querySelector('.out_month').innerHTML = 'Spring';
            break;
        case summer.includes(month) && month.length > 0:
            document.querySelector('.out_month').innerHTML = 'Summer';
            break;
        default:
            document.querySelector('.out_month').innerHTML = 'Not a season.';
    };
}