var moneyBox = document.getElementById('money');
var priceBox = document.getElementById('price');
var changeBox = document.getElementById('change');
var submitBox = document.getElementById('submit');
submitBox.onclick = (e) => {
    e.preventDefault();
    var money = moneyBox.value * 1000;
    var price = priceBox.value;
    var change = changeBox.value;
    if (money == '' || price == '' || price == '0') {
        alert('Bạn nhập sai vui lòng nhập lại!');
        return;
    }
    var candy = (change != '0' && change != '') ? (Math.floor(money / price) + Math.floor(Math.floor(money / price) / change)) :
        (Math.floor(money / price));
    alert(`Với ${money} VND bạn đổi được ${candy} cái kẹo nhé!`);
    var voDu = change == 0 || change == '' ? Math.floor(money / price) : Math.floor(money / price) % change;

    if (money % price > 0 || voDu > 0) {
        alert(`Bạn còn dư ${money % price}VND và ${voDu} cái vỏ kẹo, hãy tiết kiệm để lần sau mua tiếp nhé!`);
    }
}