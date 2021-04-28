var nav = document.querySelector('nav');
var mbIcon = document.querySelector('.moblie-icon');

mbIcon.onclick = (e) => {
    nav.classList.toggle('active');
}

var downIcon = document.querySelectorAll('.fa-chevron-down');

downIcon.forEach((icon) =>{
    icon.onclick = (e)=>{
        let menuLV2 = e.target.parentElement.querySelector('ul');
        menuLV2.classList.toggle('open');
    }
})