/*Write a code which  can give grades to students according to theirs scores:

90-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

document.querySelector('.score_bttn').onclick = myScore;

function myScore() {
    let score = parseInt(document.querySelector('.input_score').value);

    switch (true) {
        case 89 < score && score < 101:
            document.querySelector('.out_score').innerHTML = 'A';
            break;
        case 89 > score && score > 79:
            document.querySelector('.out_score').innerHTML = 'B';
            break;
        case 79 > score && score > 69:
            document.querySelector('.out_score').innerHTML = 'C';
            break;
        case 69 > score && score > 59:
            document.querySelector('.out_score').innerHTML = 'D';
            break;
        case 59 > score && score > 49:
            document.querySelector('.out_score').innerHTML = 'E';
            break;
        case 49 > score && score > 0:
            document.querySelector('.out_score').innerHTML = 'F';
            break;
        default:
            document.querySelector('.out_score').innerHTML = ' No grades.';
    };
}