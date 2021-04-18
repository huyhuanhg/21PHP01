const price = {
    small: 1000,
    medium: 2000,
    big: 3500
};

const STRING_OF_NUMBER = new Array(" không ", " một ", " hai ", " ba ", " bốn ", " năm ", " sáu ", " bảy ", " tám ", " chín ");
const MONEY = new Array("", " nghìn", " triệu", " tỷ", " nghìn tỷ", " triệu tỷ");

class Electric {
    fullname;
    birthday;
    gender;
    electicNumberStart;
    electicNumberEnd;
    dateStart;
    dateEnd;

    constructor(infoObject) {
        this.fullname = infoObject.fullname;
        this.setBirthday(infoObject['birth-day'], infoObject['birth-year'], infoObject['birth-month'])
        this.gender = infoObject.gender === '1' ? 'male' : 'female';
        this.electicNumberStart = infoObject['number-start'];
        this.electicNumberEnd = infoObject['number-end'];
        this.dateStart = this.formatDay(infoObject['date-start']);
        this.dateEnd = this.formatDay(infoObject['date-end']);
    }

    setBirthday(day, month, year) {
        this.birthday = `${day}/${year}/${month}`;
    }

    /**
     * format date to DD/MM/YYYY
     * @param date
     * @returns {string}
     */
    formatDay(date) {
        let dateInfo = date.split('-');
        return `${dateInfo[2]}/${dateInfo[1]}/${dateInfo[0]}`;
    }
    formatMoney(number) {
        return number.toFixed(0).replace(/./g, function(c, i, a) {
            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
        });
    }
    getElectricNumberTotal() {
        return this.electicNumberEnd - this.electicNumberStart;
    }

    getNumberElecticByLevel(total) {
        let small = 0;
        let medium = 0;
        let big = 0;
        if (total <= 50) {
            small = total;
        } else {
            small = 50;
            if (total <= 150) {
                medium = total - small;
            } else {
                medium = 100;
                big = total - small - medium;
            }
        }
        return {
            small: small,
            medium: medium,
            big: big
        }
    }

    getTotalMoney() {
        let numberElectricOfLevel = this.getNumberElecticByLevel(this.getElectricNumberTotal());
        return numberElectricOfLevel.small * price.small + numberElectricOfLevel.medium * price.medium + numberElectricOfLevel.big * price.big;
    }

    //1. Hàm đọc số có ba chữ số;
    readerNumberlength3(length3) {
        let hundred;
        let ten;
        let unit;
        let result = "";
        hundred = parseInt(length3 / 100);
        ten = parseInt((length3 % 100) / 10);
        unit = length3 % 10;
        if (hundred == 0 && ten == 0 && unit == 0) return "";
        if (hundred != 0) {
            result += STRING_OF_NUMBER[hundred] + " trăm ";
            if ((ten == 0) && (unit != 0)) result += " linh ";
        }
        if ((ten != 0) && (ten != 1)) {
            result += STRING_OF_NUMBER[ten] + " mươi";
            if ((ten == 0) && (unit != 0)) result = result + " linh ";
        }
        if (ten == 1) result += " mười ";
        switch (unit) {
            case 1:
                if ((ten != 0) && (ten != 1)) {
                    result += " mốt ";
                } else {
                    result += STRING_OF_NUMBER[unit];
                }
                break;
            case 5:
                if (ten == 0) {
                    result += STRING_OF_NUMBER[unit];
                } else {
                    result += " lăm ";
                }
                break;
            default:
                if (unit != 0) {
                    result += STRING_OF_NUMBER[unit];
                }
                break;
        }
        return result;
    }

    convertMoneyToString(money) {
        let lan = 0;
        let i = 0;
        let number = 0;
        let result = "";
        let tmp = "";
        let position = new Array();
        if (money < 0) return "Số tiền âm !";
        if (money == 0) return "Không đồng !";
        if (money > 0) {
            number = money;
        } else {
            number = -money;
        }
        if (money > 8999999999999999) {
            //money = 0;
            return "Số quá lớn!";
        }
        position[5] = Math.floor(number / 1000000000000000);
        if (isNaN(position[5]))
            position[5] = "0";
        number = number - parseFloat(position[5].toString()) * 1000000000000000;
        position[4] = Math.floor(number / 1000000000000);
        if (isNaN(position[4]))
            position[4] = "0";
        number = number - parseFloat(position[4].toString()) * 1000000000000;
        position[3] = Math.floor(number / 1000000000);
        if (isNaN(position[3]))
            position[3] = "0";
        number = number - parseFloat(position[3].toString()) * 1000000000;
        position[2] = parseInt(number / 1000000);
        if (isNaN(position[2]))
            position[2] = "0";
        position[1] = parseInt((number % 1000000) / 1000);
        if (isNaN(position[1]))
            position[1] = "0";
        position[0] = parseInt(number % 1000);
        if (isNaN(position[0]))
            position[0] = "0";
        if (position[5] > 0) {
            lan = 5;
        } else if (position[4] > 0) {
            lan = 4;
        } else if (position[3] > 0) {
            lan = 3;
        } else if (position[2] > 0) {
            lan = 2;
        } else if (position[1] > 0) {
            lan = 1;
        } else {
            lan = 0;
        }
        for (i = lan; i >= 0; i--) {
            tmp = this.readerNumberlength3(position[i]);
            result += tmp;
            if (position[i] > 0) result += MONEY[i];
            if ((i > 0) && (tmp.length > 0)) result += ' ';//&& (!string.IsNullOrEmpty(tmp))
        }
        result = result.substring(1, 2).toUpperCase() + result.substring(2);
        return result;
    }

    createBillElement() {
        let numberElectricOfLevel = this.getNumberElecticByLevel(this.getElectricNumberTotal());
        let billHtml = `<div class="bill-wrap">
            <div class="bill-header">
                <div class="logo">
                    <img src="./imgs/logo.png" alt="LOGO">
                </div>
                <div class="heading">
                    <h1>Hóa đơn tiền điện</h1>
                </div>
            </div>
            <div class="bill-info">
                <div class="people">
                    <div class="bill-name">
                        <div class="row">
                            <div class="col-2-3"><p class="left-40">Khách Hàng:</p>
                                <p class="b-name">${this.fullname}</p></div>
                            <div class="col-1-3"><p class="left-40">Giới tính:</p>
                                <p>${this.gender === 'male' ? 'Nam' : 'Nữ'}</p></div>
                        </div>
                    </div>
                    <div class="bill-bỉthday">
                        <p class="left-40">Ngày sinh:</p>
                        <p>${this.birthday}</p>
                    </div>
                </div>
                <div class="bill-table">
                    <table>
                        <thead>
                        <tr>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Chỉ số cũ</th>
                            <th>Chỉ số mới</th>
                            <th>ĐN tiêu thụ</th>
                            <th>ĐN thực tế</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>${this.dateStart}</td>
                            <td>${this.dateEnd}</td>
                            <td>${this.electicNumberStart}</td>
                            <td>${this.electicNumberEnd}</td>
                            <td>${this.getElectricNumberTotal()}</td>
                            <td>${this.getElectricNumberTotal()}</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="no-border">
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border text-right">${numberElectricOfLevel.small}</td>
                            <td class="no-border text-right">${this.formatMoney(price.small)}</td>
                            <td class="no-border text-right">${this.formatMoney(numberElectricOfLevel.small * price.small)}</td>
                        </tr>
                        <tr class="no-border">
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border text-right">${numberElectricOfLevel.medium}</td>
                            <td class="no-border text-right">${this.formatMoney(price.medium)}</td>
                            <td class="no-border text-right">${this.formatMoney(numberElectricOfLevel.medium * price.medium)}</td>
                        </tr>
                        <tr class="no-border">
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border text-right">${numberElectricOfLevel.big}</td>
                            <td class="no-border text-right">${this.formatMoney(price.big)}</td>
                            <td class="no-border text-right">${this.formatMoney(numberElectricOfLevel.big * price.big)}</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="5" class="text-left bold">Tổng cộng:</td>
                            <td class="text-right bold">${this.getElectricNumberTotal()}</td>
                            <td></td>
                            <td class="text-right bold red">${this.formatMoney(this.getTotalMoney())} VNĐ</td>
                        </tr>
                        <tr>
                            <td colspan="8" class="x-large"><span class="bold">Số tiền viết bằng chữ: </span><span class="italic dodgerblue">
                            ${this.convertMoneyToString(this.getTotalMoney())} đồng</span> </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>`;
        return billHtml;
    }
}