var questions = [
    {
        question: 'Chúng ta đặt JavaScript bên trong phần tử HTML nào?',
        answerA: '<js>',
        answerB: '<javascript>',
        answerC: '<script>',
        answerD: '<scripting>',
        answerRight: 'C',
    },
    {
        question: 'HTML là viết tắt của gì?',
        answerA: 'Hyperlinks and Text Markup Language',
        answerB: 'Home Tool Markup Language',
        answerC: 'Hyper Text Marketing Language',
        answerD: 'Hyper Text Markup Language',
        answerRight: 'D',
    },
    {
        question: 'CSS là viết tắt của gì?',
        answerA: 'Colorful Style Sheets',
        answerB: 'Computer Style Sheets',
        answerC: 'Cascading Style Sheets',
        answerD: 'Creative Style Sheets',
        answerRight: 'C',
    },
    {
        question: 'Trong javascript làm thế nào để bạn viết "Hello World" trong một hộp cảnh báo?',
        answerA: 'alert("Hello World");',
        answerB: 'msg("Hello World");',
        answerC: 'msgBox("Hello World");',
        answerD: 'alertBox("Hello World");',
        answerRight: 'A',
    },
    {
        question: 'Ai là người đưa ra các tiêu chuẩn Web?',
        answerA: 'Microsoft',
        answerB: 'The World Wide Web Consortium',
        answerC: 'Mozilla',
        answerD: 'Google',
        answerRight: 'B',
    },
]

var startBtn = document.getElementById('start');
var wrapBox = document.querySelector('.wrap');
var questionBox = document.querySelector('.question-group');
var question = document.querySelector('#question>h3');
var answerA = document.getElementById('answer_A');
var answerB = document.getElementById('answer_B');
var answerC = document.getElementById('answer_C');
var answerD = document.getElementById('answer_D');
var audioBox = document.getElementById('playAudio');
var i = 0;
function createQuestion() {
    question.innerText = questions[i].question;
    answerA.innerText = 'A. ' + questions[i].answerA;
    answerB.innerText = 'B. ' + questions[i].answerB;
    answerC.innerText = 'C. ' + questions[i].answerC;
    answerD.innerText = 'D. ' + questions[i].answerD;
    setTimeout(() => {
        questionBox.classList.add('active');
    }, 1000)
}

function reset(btn, msgBox) {
    btn.onclick = (e) => {
        msgBox.remove();
        i = 0;
        document.querySelector('.success').remove();
        createQuestion();
    }
}

startBtn.onclick = () => {
    wrapBox.classList.add('start');
    audioBox.querySelector('source').setAttribute('src', 'media/start.ogg');
    audioBox.load();
    createQuestion();
}
var answerItems = document.querySelectorAll('#answer-group li>p');

answerItems.forEach((item) => {
    item.onclick = (e) => {
        let data = e.target.id.charAt(e.target.id.length - 1);
        let effectErrorBox = document.createElement('span');
        let effectSuccessBox = document.createElement('span');
        let msgBox = document.createElement('div');
        msgBox.setAttribute('id', 'msg')
        effectErrorBox.classList.add('error');
        effectSuccessBox.classList.add('success');
        if (data === questions[i].answerRight) {


            e.target.parentElement.append(effectSuccessBox);
            i++;
            if (i === 5) {
                audioBox.querySelector('source').setAttribute('src', 'media/win.ogg');
                audioBox.load();
            } else {
                audioBox.querySelector('source').setAttribute('src', 'media/true.ogg');
                audioBox.load();
            }
            setTimeout(() => {
                questionBox.classList.remove('active');
            }, 1200);
            if (i === 5) {
                setTimeout(() => {
                    msgBox.innerHTML = `<div>
                                            <div><h1>Chiến Thắng</h1></div>
                                            <button class="btn">Chơi lại</button>
                                        </div>`;
                    wrapBox.append(msgBox);
                    reset(msgBox.querySelector('button'), msgBox);
                }, 1400);
            } else {
                setTimeout(() => {
                    document.querySelector('.success').remove();
                    createQuestion();
                }, 1400);
            }
        } else {
            e.target.parentElement.append(effectErrorBox);
            audioBox.querySelector('source').setAttribute('src', 'media/false.ogg');
            audioBox.load();
            document.getElementById('answer_' + questions[i].answerRight).parentElement.append(effectSuccessBox);
            setTimeout(() => {
                questionBox.classList.remove('active');
            }, 1200);
            msgBox.innerHTML = `<div>
                                    <div><h1>Game over</h1></div>
                                    <button class="btn">Chơi lại</button>
                               </div>`;
            reset(msgBox.querySelector('button'), msgBox);
            setTimeout(() => {
                document.querySelector('.error').remove();
                wrapBox.append(msgBox);
            }, 1400);
        }
    }
})