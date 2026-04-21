// Bài tập :
// Bài 1 :  Tính lũy thừa power(a, b) = a^b bằng đệ quy

function luyThua(a , b){
    if(b === 1){
        return a;
    }
    return a * luyThua(a , b - 1);
}
console.log(luyThua(2,10));

// Bài 2 : Tính tổng các chữ số của một số nguyên

function sum(a){
    if(a < 1){
        return 0;
    }
    return parseInt(a % 10) + sum(a / 10);
}
console.log(sum(1234));

// Bài 3 :  Đếm số chữ số của một số

function dem(a){
    if(a < 1){
        return 0;
    }
    return 1 + dem(a / 10);
}
console.log(dem(12345));

// Bài 4 : In ra các số chẵn từ 0 -> n

function inLe(n){
    if(n % 2 === 0){
        n-=1;
    }
    if(n < 0){
        return;
    }
    console.log(n);
    inLe(n - 2);
}
inLe(8);

// Bài 5 : Dãy fibonacci

function fibonacci(n){
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(4))