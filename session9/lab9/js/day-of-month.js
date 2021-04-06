const GROUPMONTH1 = ['1', '3', '5', '7', '8', '10', '12'];
const GROUPMONTH2 = ['4', '6', '9', '11'];
var monthBox = document.getElementById('month');
var yearBox = document.getElementById('year');
var submitBox = document.getElementById('submit');

yearBox.style.display = 'none';
monthBox.onchange = (e) => {
    if (e.target.value == '2') {
        yearBox.style.display = 'inline';
    } else {
        yearBox.style.display = 'none';
    }
}

submitBox.onclick = (e) => {
    e.preventDefault();
    var month = monthBox.value;
    var day;


    if (GROUPMONTH1.includes(month)) {
        day = 31;
        alert(`Số ngày của tháng ${month} là ${day}`);
    } else if (GROUPMONTH2.includes(month)) {
        day = 30;
        alert(`Số ngày của tháng ${month} là ${day}`);
    } else if (month == '2') {
        var year = yearBox.value;
        var reg = /^\d+$/;
        if (reg.test(year)) {
            if (year % 100 != 0 && year % 4 == 0) {
                day = 29;
            } else day = 28;
            alert(`Số ngày của tháng 2 năm ${year} là ${day}`);
        } else {
            yearBox.value = '';
            alert('Vui lòng nhập đúng định dạng năm là số dương!');
        }
    } else {
        alert(`Vui lòng chọn tháng!!!`);
    }


}