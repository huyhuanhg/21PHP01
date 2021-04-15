var array = ['Huấn', 'Huy', 'Hoàng'];

// console.log(array.length)
// console.log(array);

// var list = document.createElement('ol');

for (let i = 0; i < array.length; i++) {
    // let listItem = document.createElement('li');
    // listItem.innerText = array[i];
    // list.append(listItem);
    // document.write((i + 1) + ". " + array[i] + '<br/>');
}
// document.querySelector('body').append(list);

var arrayNumber = [2, 4, 67, 23, 97, 24, 5, 75];
// var max = arrayNumber[0];
// var min = arrayNumber [0];
for (let i = 0; i < arrayNumber.length - 1; i++) {
    let minI = i;
    for (let j = i + 1; j < arrayNumber.length; j++) {
        if (arrayNumber[j] < arrayNumber[minI]) {
            minI = j;
        }
        // if (arrayNumber[j] > max) {
        //     max = arrayNumber[j];
        // }
        // if (arrayNumber[j] < min) {
        //     min = arrayNumber[j];
        // }
    }
    let tmp = arrayNumber[minI];
    arrayNumber[minI] = arrayNumber[i];
    arrayNumber[i] = tmp;
}
// document.write(arrayNumber);
var max = arrayNumber[arrayNumber.length - 1];
var min = arrayNumber[0];
// document.write(max +' '+ min);

var studentInfo = [
    ['Huy', 1998, 'huy@gmail.com', '0934154234'],
    ['Huan', 1995, 'huan@gmail.com', '0935906860'],
    ['Hoang', 1992, 'hoang@gmail.com', '0985356050'],
]

for (let i = 0; i < studentInfo.length; i++) {
    var str = (i + 1) + '. '
    for (let j = 0; j < studentInfo[i].length; j++) {
        str += studentInfo[i][j] + ' - ';
    }
    document.write(str)
}