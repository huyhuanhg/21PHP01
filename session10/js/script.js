// cách 1
// for (var i = 0; i <= 100; i++) {
//     var check = false;
//     if (!(i % 5) && !(i % 3)) check = true;
//     else if ((i % 5) && !(i % 3)) check = 3;
//     else if (!(i % 5) && (i % 3)) check = 5;
//
//     switch (check) {
//         case true:
//             document.write(`${i} chia het cho 15`);
//             break;
//         case 3:
//             document.write(`${i} chia het cho 3`);
//             break;
//         case 5:
//             document.write(`${i} chia het cho 5`);
//             break;
//         default:
//             document.write(`${i} Khong chia het cho 3, 5 va 15`);
//             break;
//     }
//     document.write('<br/>')
// }
// cách 2
// for (var i = 0; i <= 100; i++) {
//     if (!(i % 15)) {
//         document.write(`${i} chia het cho 15`);
//     } else if (!(i % 5)) {
//         document.write(`${i} chia het cho 5`);
//     } else if (!(i % 3)) {
//         document.write(`${i} chia het cho 3`);
//     } else
//         document.write(`${i} Khong chia het cho 3, 5 va 15`);
//     document.write('<br/>')
// }


var day = prompt();
var x;
switch (Number(day)) {
    case 2:
        x = 'month day';
        break;
    case 3:
        x = 'thu 3';
        break;
    case 4:
        x = 'thu 4';
        break;
    case 5:
        x = 'thu 5';
        break;
    case 6:
        x = 'thu 6';
        break;
    case 7:
        x = 'thu 7';
        break;
    case 8:
        x = 'sunday';
        break;
    default:
        x = 'no day';
        break;
}

document.write(x);