/*************************************************************
 *     Khởi tạo giá trị ngày hôm nay cho ngày cuối kỳ        *
 *     Khởi tạo giá trị 30 ngày trước cho ngày đầu kỳ        *
 *************************************************************/
var today = new Date();
var dayEnd = String(today.getDate()).padStart(2, '0');
var monthEnd = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yearEnd = today.getFullYear();
var dateOf30DayAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)
var dayStart = String(dateOf30DayAgo.getDate()).padStart(2, '0');
var monthStart = String(dateOf30DayAgo.getMonth() + 1).padStart(2, '0'); //January is 0!
var yearStart = dateOf30DayAgo.getFullYear();
document.getElementById("date-end").value = yearEnd + '-' + monthEnd + '-' + dayEnd;
document.getElementById("date-start").value = yearStart + '-' + monthStart + '-' + dayStart;

/********************************************************************************
 *     Khởi tạo giá trị 100 năm trước đến năm nay cho thẻ select năm sinh      *
 ********************************************************************************/
var birthYearBox = document.getElementById('birth-year');
for (let i = yearEnd - 100; i <= yearEnd; i++) {
    let item = document.createElement('option');
    item.setAttribute('value', i);
    item.innerText = i;
    birthYearBox.append(item);
}
/********************************************************************************
 *            Tự động chọn năm 1995 cho năm sinh khi ấn chuột xuống             *
 ********************************************************************************/
birthYearBox.onmousedown = (e) => {
    e.target.querySelector('option[value=""]').removeAttribute('selected');
    e.target.querySelector('option[value="1995"]').setAttribute('selected', 'true');
}

/********************************************************************************
 *              Thực hiện validate các mục theo yêu cầu                         *
 ********************************************************************************/
var validate = new Validator('#electric-form');
validate.validator({
    rules: {
        '#fullname': {
            required: true,
        },
        '#birth-day': {
            required: true,
        },
        '#birth-month': {
            required: true,
        },
        '#birth-year': {
            required: true,
        },
        '#number-start': {
            required: true,
            number: true,
            notZero: true,
        },
        '#number-end': {
            required: true,
            number: true,
            bigger: '#number-start',

        },
        '#date-end': {
            large: '#date-start',
        }
    },
    message: {
        '#fullname': {
            required: 'Vui lòng nhập họ tên đầy đủ!',
        },
        '#birth-day': {
            required: 'Vui lòng nhập ngày tháng năm sinh!',
        },
        '#birth-month': {
            required: 'Vui lòng nhập ngày tháng năm sinh!',
        },
        '#birth-year': {
            required: 'Vui lòng nhập ngày tháng năm sinh!',
        },
        '#number-start': {
            required: 'Vui lòng nhập số đầu kỳ!',
            number: 'Vui lòng nhập số đầu kỳ lớn hơn 0!',
            notZero: 'Vui lòng nhập số đầu kỳ lớn hơn 0!',
        },
        '#number-end': {
            required: 'Vui lòng nhập số cuối kỳ!',
            number: 'Vui lòng nhập số đầu kỳ lớn hơn 0!',
            bigger: 'Sửa đồng hồ à?',

        },
        '#date-end': {
            large: 'Du hành thời gian?',
        }
    },
    onSubmit: function (data) {
        /********************************************************************************
         *              Hiển thị hóa đơn khi dữ liệu nhập vào đều đúng                  *
         ********************************************************************************/
        let infoElectric = new Electric(data);
        let wrapElemet = document.querySelector('.wrap');
        let billElement = document.createElement('div');
        billElement.setAttribute('id', 'bill');
        billElement.classList.add(infoElectric.gender);
        billElement.innerHTML = infoElectric.createBillElement();
        wrapElemet.append(billElement);
        let billWrap = billElement.querySelector('.bill-wrap')
        let outBox = document.createElement('div');
        outBox.classList.add('btn-exit');
        outBox.innerHTML = '<button id="exit" class="btn">Thoát</button>';
        setTimeout(function () {
            billElement.classList.add('show');
            billWrap.append(outBox);
        }, 200);


        /********************************************************************************
         *                   Xóa hóa đơn khi ấn nút thoát                               *
         ********************************************************************************/
        let btnOut = outBox.querySelector('#exit');
        btnOut.onclick = (e) => {
            e.preventDefault();
            billElement.classList.remove('show');
            setTimeout(function () {
                billElement.remove();
            }, 400)
        }
    }
})