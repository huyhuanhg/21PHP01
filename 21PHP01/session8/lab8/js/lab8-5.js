let leftControl = document.querySelector('i.fa-chevron-left')
let rightControl = document.querySelector('i.fa-chevron-right')
let infoPage = document.querySelector('.info-banner>span')
let bannerBox = document.querySelector('.banner>.row')
leftControl.onclick = () => {
    moveLeft(bannerBox);
}

rightControl.onclick = () => {
    moveRight(bannerBox);
}

function moveLeft(row) {
    var pages = row.clientWidth / 768;//3
    var pageNow = row.style.marginLeft;
    if (pageNow == '') pageNow = 0;
    else pageNow = pageNow.replace('px', '');
    pageNow = -pageNow / 768;
    if (infoPage.innerText == '1') {
        infoPage.innerText = '3';
    } else infoPage.innerText = infoPage.innerText - 1;
    if (pageNow == 0) {
        row.style.marginLeft = `-${(pages - 1) * 768}px`;
    } else {
        row.style.marginLeft = `-${(pageNow - 1) * 768}px`;
    }
}

function moveRight(row) {
    var pages = row.clientWidth / 768;
    var pageNow = row.style.marginLeft;
    if (pageNow == '') pageNow = 0;
    else pageNow = pageNow.replace('px', '');
    pageNow = -pageNow / 768;
    if (infoPage.innerText == '3') {
        infoPage.innerText = '1';
    } else infoPage.innerText = Number(infoPage.innerText) + 1;
    if (pageNow == pages-1) {
        row.style.marginLeft = '0';
    } else {
        row.style.marginLeft = `-${(pageNow + 1) * 768}px`;
    }
}