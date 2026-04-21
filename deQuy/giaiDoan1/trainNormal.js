// Bài 2.1 : Tìm UCLN của hai số a và b bằng thuật toán Euclid.

function uclnE(a , b){
    if(a % b === 0){
        return b;
    };
    return uclnE(b , a % b);
}
console.log(uclnE(1071,462));

// Bài 2.2 : Chuyển đổi thập phân sang nhị phân

function chuyenNhiPhan(n){
    if(n / 2 < 1){
        return 1;
    };
    let a = parseInt(n / 2);
    return chuyenNhiPhan(a) +""+ (n % 2);
}
console.log(chuyenNhiPhan(12));

// Bài 2.3 : Tính tổng các chữ số của một số nguyên dương n.

function sumCacChuSo(n){
    if(n < 10){
        return parseInt(n);
    }
    return parseInt(n % 10) + sumCacChuSo(n / 10);
}
console.log(sumCacChuSo(10000));

// Bài 2.4 : Cho mảng số nguyên, đếm số lượng số chẵn bằng đệ quy.

function demSoChan(arr){
    if(arr.length === 0){
        return 0;
    };
    if(arr[0] % 2 === 0){
        arr.shift();
        return 1 + demSoChan(arr);
    }else{
        arr.shift();
        return 0 + demSoChan(arr);
    }
}
const arrSo = [1,2,4,56,67,8,4,52,3,2];
console.log(demSoChan(arrSo));
