var fullName = prompt();
fullName = fullName.trim();
var newFullName = fullName;
while (newFullName.indexOf(' ') !== -1) {
    newFullName = newFullName.substring(0, newFullName.indexOf(' ')).trim() + newFullName.substring(newFullName.indexOf(' ')).trim();
}

var length = newFullName.length;
var lastName = fullName.substring(fullName.lastIndexOf(' ')).trim();
var firstName = fullName.substring(0, fullName.indexOf(' ')).trim();
var midName = newFullName.replace(lastName, '').replace(firstName, '');
newFullName = fullName.replace(lastName, '21PHP01');
var charN = 0;
var newFullName2 = fullName;
while (newFullName2.indexOf('n') !== -1) {
    charN++;
    newFullName2 = newFullName2.substring(newFullName2.indexOf('n') + 1)
}
console.log('ten day du co ' + length + " ki tu k tin dau cach");
console.log('ho co ' + firstName.length + ' ki tu');
console.log('ten dem co ' + midName.length + ' ki tu');
console.log('ten co ' + lastName.length + ' ki tu');
console.log('co ' + charN + " ki tu n");

var newElement = document.createElement('div');
var fullNameBox = document.getElementById('full-name');
for (let i = 0; i < fullName.length; i++) {
    if (fullName[i].toLowerCase() === 'a' || fullName[i].toLowerCase() === 't' || fullName[i].toLowerCase() === 'n') {
        newElement.innerHTML += `<span class="bg-yellow">${fullName[i]}</span>`
    } else newElement.innerHTML += fullName[i];
}
fullNameBox.append(newElement);