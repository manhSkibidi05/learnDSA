// Bài 2 : Hệ thống điểm sinh viên 

const students = [
    { id: 1, name: "Nguyen Van A", scores: [8, 7, 9], class: "CNTT1" },
    { id: 2, name: "Tran Thi B", scores: [9, 9, 10], class: "CNTT2" },
    { id: 3, name: "Le Van C", scores: [6, 7, 5], class: "CNTT1" },
    { id: 4, name: "Pham Thi D", scores: [8, 8, 7], class: "CNTT2" },
    { id: 5, name: "Hoang Van E", scores: [10, 9, 9], class: "CNTT1" },
    { id: 6, name: "Vo Thi F", scores: [7, 8, 8], class: "CNTT2" }
];

// 2.1 : điểm trung bình của mỗi sinh viên 

const studentsWithAvg = students.map(s => ({
    ...s,
    avgScore: s.scores.reduce((sum, score) => sum + score, 0) / s.scores.length
}));
console.log("1. Sinh viên với điểm TB:", studentsWithAvg);

// 2.2 : lọc sinh viên có điểm tb >= 8

const studentsAvgHigh = studentsWithAvg.filter(currentValue => currentValue.avgScore >= 8);
console.log(studentsAvgHigh);

// 2.3 : sắp xếp sinh viên điểm tb giảm dần 

const studentsAvgDown = [...studentsWithAvg].sort((a , b) => b.avgScore - a.avgScore);
console.log(studentsAvgDown)

// 2.4 : tính điểm trung bình của từng lớp 

const studentsTrueClass = studentsWithAvg.reduce((objNew ,currentValue) => {
    if(!objNew[currentValue.class]){
        objNew[currentValue.class] = [];
    }
    objNew[currentValue.class].push(currentValue);
    return objNew
},{})

console.log(studentsTrueClass);

// 2.5 :lấy top 3 sinh viên điểm tb cao nhất 

const studentsTopThree = studentsAvgDown.slice(0,3);
console.log(studentsTopThree);

// 2.6 : thêm sinh viên mới vào vị trí thứ 3 

const newStudent = { id: 69, name: "Nguyen Van dau", scores: [9, 9, 9], class: "CNTT1",avgScore : 9 };
studentsWithAvg.splice(2,0,newStudent);


// 2.7 : xóa sinh viên có id = 3 

studentsWithAvg.splice(studentsWithAvg.findIndex(value=> value.id === 3),1);
console.log(studentsWithAvg);