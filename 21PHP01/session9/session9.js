var imgItem = document.querySelectorAll('.list img');
var avatarElement = document.querySelector('.show-info img');
let name = document.getElementById('fullname');
let ageBox = document.getElementById('age');
imgItem.forEach(function (item){
    item.onclick = (e) => {
        avatarElement.src = e.target.src;
        avatarElement.alt = e.target.alt;
        name.innerText =  e.target.alt;
        ageBox.innerText = `Age: ${e.target.getAttribute('age')}`;
    }
})