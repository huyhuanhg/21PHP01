var ansewrBox = document.getElementById('ansewr');

var questionElement = document.querySelectorAll('.nav-link');
questionElement.forEach(function (questionItem) {
    questionItem.onclick = (e) => {
        ansewrBox.innerText = '';
        let navLinkActive = document.querySelector('.nav-link.active');
        let paneActive = document.querySelector('.tab-pane.active');
        navLinkActive.classList.remove('active');
        paneActive.classList.remove('active');
        e.target.classList.add('active');
        let contentBoxID = e.target.getAttribute('href');
        document.querySelector(contentBoxID).classList.add('active');
    }
})

var btnAnswer = document.querySelectorAll('.btn-answer');
btnAnswer.forEach(function (btn) {
    btn.onclick = (e) => {
        e.preventDefault();
        var regex = /^\d+$/;
        let param = e.target.parentElement.querySelector('.param').value;
        let str = 'Chỉ được nhập số lớn hơn 1 và tối đa 100';
        let functionName = e.target.getAttribute('function')
        if (regex.test(param) && Number(param) >= 2 && Number(param) <= 100) {
            str = functionQuestion[functionName](param);
        }
        ansewrBox.innerText = str;
    }
});

let refreshIcon = document.getElementById('refresh');
let numberElement = document.getElementById('number-string');
let totalChar = document.getElementById('total-char');
var typeInputNumberBox = document.getElementById('type-string-input');
typeInputNumberBox.onchange = (e) => {
    let type = e.target.value;
    if (type === '0') {
        refreshIcon.style.display = 'none';
        totalChar.style.display = 'none';
        numberElement.removeAttribute('disabled');
        numberElement.value = '';
    } else {
        refreshIcon.style.display = 'inline';
        totalChar.style.display = 'inline';
        numberElement.setAttribute('disabled', 'true');
        numberElement.value = setNumberRandom(10);
    }
}
refreshIcon.onclick = () => {
    numberElement.value = setNumberRandom(Number(totalChar.value));
}
totalChar.onchange = () => {
    numberElement.value = setNumberRandom(Number(totalChar.value));
}

var btnQuestion4 = document.getElementById('question4');
btnQuestion4.onclick = (e) => {
    e.preventDefault();
    var regex = /^\d+$/;
    let str = 'Chuỗi nhập vào không hợp lệ!';
    let param = e.target.parentElement.querySelector('.param').value;
    let sortType = document.getElementById('type-sort').value;
    if (regex.test(param)){
        str = functionQuestion.question4(param, sortType);
    }
    ansewrBox.innerText = str;
}

var functionQuestion = {
    question1: function (param) {
        param = Number(param);
        let str = '';
        let width = param;
        for (let i = 1; i <= param; i++) {
            for (let j = 1; j <= width; j++) {
                if (j <= param - i) {
                    str += '  ';
                } else {
                    str += "* ";
                }
            }
            width++;
            str += '\n';
        }
        return str;
    },
    question2: function (param) {
        param = Number(param);
        let str = '';
        let space = param - 1;
        for (let i = 1; i <= param; i++) {
            for (let j = 1; j <= space; j++) {
                str += ' ';
            }
            for (let j = 0; j < i; j++) {
                str += '* ';
            }
            space--;
            str += '\n';
        }
        return str;
    },
    question3: function (param) {
        param = Number(param);
        let str = '';
        let count = 1;
        let width = 1;
        for (let i = 1; i <= param; i++) {
            for (let j = 1; j <= width; j++) {
                str += count++ + ' ';
            }
            width++;
            str += '\n';
        }
        return str;
    },
    question4: function (param, sortType) {
        let lengthParam = param.length;
        let index = 0;
        if (sortType !== '0') {
            for (let i = 0; i < lengthParam - 1; i++) {
                index = i;
                for (let j = i + 1; j < lengthParam; j++) {
                    if (Number(param[j]) > Number(param[index])) {
                        index = j;
                    }
                }
                if (index !== i) {
                    param = swap(param, i, index);
                }
            }
        } else {
            for (let i = 0; i < lengthParam - 1; i++) {
                index = i;
                for (let j = i + 1; j < lengthParam; j++) {
                    if (Number(param[j]) < Number(param[index])) {
                        index = j;
                    }
                }
                if (index !== i) {
                    param = swap(param, i, index);
                }
            }
        }
        return param;
    }
}

function swap(param, index1, index2) {
    let str = '';
    str = param.slice(0, index1) + param[index2] + param.slice(index1 + 1, index2) + param[index1] + param.slice(index2 + 1);
    return str;
}

function setNumberRandom(totalNumber) {
    let number = '';
    for (let i = 0; i < Number(totalNumber); i++) {
        number += Math.floor(Math.random() * 10);
    }
    return number;
}
