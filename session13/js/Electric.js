const price = {
    small: 1000,
    medium: 2000,
    big: 3500
};

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
        this.setBirthday(infoObject['birth-day'],infoObject['birth-year'], infoObject['birth-month'] )
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
                            <td class="no-border text-right">${price.small}</td>
                            <td class="no-border text-right">${numberElectricOfLevel.small * price.small}</td>
                        </tr>
                        <tr class="no-border">
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border text-right">${numberElectricOfLevel.medium}</td>
                            <td class="no-border text-right">${price.medium}</td>
                            <td class="no-border text-right">${numberElectricOfLevel.medium * price.medium}</td>
                        </tr>
                        <tr class="no-border">
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border"></td>
                            <td class="no-border text-right">${numberElectricOfLevel.big}</td>
                            <td class="no-border text-right">${price.big}</td>
                            <td class="no-border text-right">${numberElectricOfLevel.big * price.big}</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="5" class="text-left bold">Tổng cộng:</td>
                            <td class="text-right bold">${this.getElectricNumberTotal()}</td>
                            <td></td>
                            <td class="text-right bold">${this.getTotalMoney()}</td>
                        </tr>
                        <tr>
                            <td colspan="8" class="x-large"><span class="bold">Số tiền viết bằng chữ: </span><span class="italic dodgerblue">
                            Hàm này chưa được xây dựng</span> </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>`;
        return billHtml;
    }
}