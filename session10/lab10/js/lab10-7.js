var answerBtn = document.querySelectorAll('.answer-btn');
var functionQuesstion = {
    question1: function (params) {
        let people = params[0] * params[2] - params[1];
        return `Số công nhân tổ 2 là: ${people} người`;
    },
    question2: function (params) {
        let money = params[0];
        let price = params[1];
        let candy = money / price;
        let candyShell = candy;
        while (candyShell >= params[2]) {
            candy += Math.floor(candyShell / params[2]);
            candyShell = Math.floor(candyShell / params[2]) + (candyShell % params[2]);
        }
        return `Số kẹo có thể đổi được là ${candy} cái`;
    },
    question3: function (params) {
        let marbles1 = params[0];
        let marbles2 = marbles1 * params[1];
        let count = 0;
        while (marbles2-- > marbles1++) {
            count++;
        }
        return (--marbles1 == ++marbles2) ? `Cần chuyển ${count} viên bi để 2 túi có số bi bằng nhau` : 'Số bi trong 2 túi luôn luôn chênh lệch';
    },
    question4: function (params) {
        let bookOfBinh = params[0];
        let bookOfMinh = bookOfBinh / params[1];
        let count = 0;
        while (bookOfBinh-- > bookOfMinh++ * params[2]) {
            count++;
        }
        return `Bình cần cho Minh ${count} cuốn sách`;
    },
    question5: function (params) {
        let totalMarbles = Number(params[0]);
        let redMarbles = totalMarbles + 1;
        let blueMarbles = 0;
        for (blueMarbles; blueMarbles <= totalMarbles; blueMarbles++) {
            if (--redMarbles * Number(params[2]) + blueMarbles * Number(params[1]) === Number(params[3]))
                return `Số bi xanh là: ${blueMarbles}, bi đỏ là: ${redMarbles}`;
        }
    },
    question6: function (params) {
        let totalMarbles = params[0];
        let redMarbles = totalMarbles / params[1];
        let blueMarbles = totalMarbles * params[2] / 100;
        let overMarbles = totalMarbles - redMarbles - blueMarbles;
        let whiteMarbles = 0;
        let yellowMarbles = overMarbles + 1;
        for (whiteMarbles; whiteMarbles <= overMarbles; whiteMarbles++) {
            if (whiteMarbles * params[4] / params[3] === --yellowMarbles)
                return `Đỏ: ${redMarbles}, Xanh: ${blueMarbles}, Vàng: ${yellowMarbles}, Trắng: ${whiteMarbles}`;
        }
    },
    question7: function (params) {
        var candy = params[0];
        var euro = 0;
        var usd = 0;
        // 1. trước khi đến kẹo = 0, euro = 0
        // 2. sau khi đổi kẹo = 50; euro = 0; dollar < trước khi đến
//          tại vì sau khi nhận đc 50 viên kẹo thì Buratino không còn euro nên lần đổi cuối cùng Buratino thực hiện giao dịch số 1,
//          và mỗi lần Buratino có đủ euro thì sẽ thực giao dịch số 1 vậy khi Buratino có euro <= 2 thì giao dịch trước đó
//          là giao dịch số 1

        // cách 1: đệ quy
        function getUsd (candy, euro, dollar){
            if (euro <= 2) {
                euro += Number(params[1]);
                dollar -= Number(params[2]);
            } else {
                euro -= Number(params[4]);
                dollar += Number(params[3]);
            }
            candy--;
            if (!candy && euro) return 'Không tính được';
            if (!candy && !euro) return dollar;
            else return getUsd(candy, euro, dollar);
        }

        // cách 2: sử dụng while loop
        // (chú ý điều kiện chưa chặt chẽ nếu đầu vào candy k trùng khớp thì sau khi lặp kết thúc euro có thể vẫn còn dư)
        // if (!candy && euro) usd =  'Không tính được'; thêm lệnh sau cuối vòng lặp

        // while (candy) {
        //     if (euro <= 2) {
        //         euro += 2;
        //         usd -= 3;
        //     } else {
        //         euro -= 3;
        //         usd += 5;
        //     }
        //     candy--;
        // }

        // ý tưởng cách 3:
//          lúc đến và đi đều có 0 euro vậy số euro nhận khi thực hiện giao dịch 2 bằng số euro thực hiện giao dịch 1 (số lần thục hiện giao dịch =50)
//          theo công thúc ta sẽ tính được tỉ lệ số lần làm giao dịch 1 và 2
//          giải phương trình hoặc sử dụng vòng lặp để tính ra chính xác số lần thực hiện mỗi giao dịch
//          xong lấy số usd thực hiện giao dịch 2 trừ đi số usd nhận  đượcthực hiện giao dịch 1 (kết quả 10)
// 2 * x = 3 * y trong đó (x + y = 50) => x = 30, y = 20 => $ = 10

        return `Buratino đã tốn ${getUsd(candy, euro, usd)} USD`;
    },
}

answerBtn.forEach(function (btn) {
    btn.onclick = (e) => {
        var parentElement = e.target.parentElement;
        if (!parentElement.querySelector('.answer')) {
            var answer = document.createElement('div');
            answer.classList.add('answer');
            let params = e.target.getAttribute('data').split('+');
            answer.innerText = functionQuesstion[e.target.getAttribute('function')](params);
            parentElement.append(answer)
        }
    }
})

