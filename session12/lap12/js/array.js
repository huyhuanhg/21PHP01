var students = [
    ['Huy Huan', 27, 'huyhuanhg@gmail.com', 'Quang Binh'],
    ['Tran Huy', 28, 'huytran@gmail.com', 'Ha Tinh'],
    ['Huy Hoang', 25, 'huyhoang@gmail.com', 'Nghe An'],
    ['Pham Hai', 26, 'phamhai@gmail.com', 'Thanh Hoa'],
];

document.write('<h3>Danh sách sinh viên ban đầu</h3>')
for (let i = 0; i < students.length; i++) {
    document.write(i + 1 + '. ');
    for (let j = 0; j < students[i].length; j++) {
        if (j === students[i].length - 1) {
            document.write(students[i][j] + '<br/>');
        } else {
            document.write(students[i][j] + ' - ');
        }
    }
}


document.write('<h3>Danh sách sinh viên sau khi thêm</h3>')
var newStudents = [
    ['Van Teo', 21, 'vanteo@gmail.com', 'Da Nang'],
    ['Van Ty', 22, 'vanty@yahoo.com', 'Quang Tri'],
]
students = students.concat(newStudents);

for (let i = 0; i < students.length; i++) {
    document.write(i + 1 + '. ');
    for (let j = 0; j < students[i].length; j++) {
        if (j === students[i].length - 1) {
            document.write(students[i][j] + '<br/>');
        } else {
            document.write(students[i][j] + ' - ');
        }
    }
}
var updateIndex = [];
document.write('<h3>Danh sách sinh viên sau khi đổi tên Huy -> Hùng</h3>')
for (let i = 0; i < students.length; i++) {
    let lastName = students[i][0].slice(students[i][0].lastIndexOf(' ') + 1);
    if (lastName === 'Huy') {
        let firstName = students[i][0].slice(0, students[i][0].lastIndexOf(' ') + 1);
        students[i][0] = firstName + '<b>Hung</b>';
        updateIndex.push([i, 0]);
    }
}

for (let i = 0; i < students.length; i++) {
    document.write(i + 1 + '. ');
    for (let j = 0; j < students[i].length; j++) {
        if (j === students[i].length - 1) {
            document.write(students[i][j] + '<br/>');
        } else {
            document.write(students[i][j] + ' - ');
        }
    }
}

document.write('<h3>Danh sách sinh viên sau khi đổi quê quán</h3>')
/**
 * Sửa các phần tử được in đậm thành bình thường
 */
updateIndex.forEach((e) => {
    students[e[0]][e[1]] = students[e[0]][e[1]].replace('<b>', '')
    students[e[0]][e[1]] = students[e[0]][e[1]].replace('</b>', '')
})

updateIndex = [];
for (let i = 0; i < students.length; i++) {
    let province = students[i][3];
    let email = students[i][2];
    if (email.indexOf('@gmail') !== -1 && province === 'Da Nang') {
        students[i][3] = '<b>Hai Phong</b>';
        updateIndex.push([i, 3])
    }
}
for (let i = 0; i < students.length; i++) {
    document.write(i + 1 + '. ');
    for (let j = 0; j < students[i].length; j++) {
        if (j === students[i].length - 1) {
            document.write(students[i][j] + '<br/>');
        } else {
            document.write(students[i][j] + ' - ');
        }
    }
}

document.write('<h3>Danh sách sinh viên sau khi đuổi các thành phần trẻ trâu</h3>')
/**
 * Sửa các phần tử được in đậm thành bình thường
 */
updateIndex.forEach((e) => {
    students[e[0]][e[1]] = students[e[0]][e[1]].replace('<b>', '')
    students[e[0]][e[1]] = students[e[0]][e[1]].replace('</b>', '')
})
for (let i = students.length - 1; i >= 0; i--) {
    let age = students[i][1];
    if (age >= 23 && age <= 26) {
        students.splice(i, 1);
    }
}
for (let i = 0; i < students.length; i++) {
    document.write(i + 1 + '. ');
    for (let j = 0; j < students[i].length; j++) {
        if (j === students[i].length - 1) {
            document.write(students[i][j] + '<br/>');
        } else {
            document.write(students[i][j] + ' - ');
        }
    }
}