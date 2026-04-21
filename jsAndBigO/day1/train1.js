// Bài tập ngày 1 : thao tác cơ bản với String và Array 

// Bài 1 : đảo ngược chuỗi 

console.log(`____________BÀI 1___________`);
// cách 1 : dùng vòng for
let chuoi = `hello world`
function stringReverse(string){
    let reverse = "";
    for(let i = string.length - 1 ; i >= 0  ; i--){
        reverse += string[i];
    }
    return reverse;
}
console.log(stringReverse(chuoi));

// cách 2 : sử dụng các phương thức có sẵn 
let stringReverse2 = chuoi.split("").reverse().join("");
console.log(stringReverse2);

// cách 3 : sử dụng đệ quy 

function stringReverse3(string , count = string.length - 1){
    if(count === 0){
        return string[count];
    }
    return string[count] + stringReverse3(string , count - 1);
}
console.log(stringReverse3(chuoi));

// Bài 2 : kiểm tra chuỗi đối xứng (Palindrome)

let chuoi2 = `A man a plan a canal Panama`;
let chuoi3 = `cái déo gì đấy@`;
chuoi2 =  chuoi2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
console.log(chuoi2);

function doiXung(stringMoi , first = 0 , last = stringMoi.length - 1){
    if(first >= last){
        return true;
    }
    if(stringMoi[first] === stringMoi[last]){
        return  doiXung(stringMoi , first+ 1 , last - 1);
    }
    return false;
    
}
console.log(doiXung(chuoi2));

// Bài 3 : tìm số lớn thứ hai trong 1 mảng mà không sắp xếp lại mảng 

let arr = [1,2,3,4 ,99,5,6,7,8];
let max = -Infinity;
let second = -Infinity;

function findSecond(arr){
    for(num of arr){
        if(num > max){
            second = max;
            max = num;
        }else if(num > second && num !== max){
            second = num;
        }
    }
    return second === -Infinity?0:second;
}
console.log(findSecond(arr));
