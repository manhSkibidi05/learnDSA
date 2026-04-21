// Bài 1.1 :  Viết hàm đệ quy in ra các số từ 1 đến n.

function inSo(n){
    if(n === 0){
        return;
    };
    inSo(n - 1);
    console.log(n);
}
inSo(5);

// Bài 1.2 : Tính tổng các số lẻ từ 1 đến n

function tongLe(n){
    if(n % 2 === 0){
        n-=1;
    };
    if(n === 1){
        return 1;
    };
    return n + tongLe(n - 2);
}
console.log(tongLe(10));

// Bài 1.3 : Đếm số lượng chữ số của một số nguyên dương n.

function demSo(n){
    if(n < 1){
        return 0;
    };
    return 1 + demSo(n / 10);
}
console.log(demSo(12345));

// Bài 1.4 : Tính giai thừa kép (double factorial) n!!

function giaiThuaKep(n){
    if(n === 2){
        return 2;
    }
    if(n === 1){
        return 1;
    }
    return n * giaiThuaKep(n - 2);
}
console.log(`giai thừa kép của 8 : ${giaiThuaKep(8)}`);
console.log(`giai thừa kép của 9 : ${giaiThuaKep(9)}`);

