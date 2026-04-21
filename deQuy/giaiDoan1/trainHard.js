// Bài 3.1 :  Kiểm tra mảng đối xứng (Palindrome)

function kiemTraMangDoiXung(arr){
    if(arr.length === 0){
        return 1;
    };
    if(arr[0] === arr[arr.length - 1]){
        arr.pop();
        arr.shift();
        return 1 * kiemTraMangDoiXung(arr);
    }else{
        arr.pop();
        arr.shift();
        return 0 * kiemTraMangDoiXung(arr);
    }
};
arrMoi = [1,2,3,4,4,3,2,1];
console.log(kiemTraMangDoiXung(arrMoi));

// Bài 3.2 : Tính tổ hợp chập k của n (C(n,k))

// Bài 3.3 : Tháp Hà Nội đơn giản

// Bài 3.4 : Tính căn bậc hai theo phương pháp Babylon

// Bài 4.1 : dãy số tribonacci 

function tribonacci(n){
    if(n === 0 || n === 1){
        return 0;
    };
    if(n === 2){
        return 1;
    };
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}
console.log(`dãy tribonacci của 10 là :  ${tribonacci(9)}`);

// Bài 4.2 : Tìm số lớn nhất trong mảng

function findMax(arr , index = 1){
    if(index === arr.length){
        return arr[0];
    }
    if(arr[0] > arr[index]){
        return findMax(arr , index + 1);
    }
    if(arr[index] > arr[0]){
        let temp = arr[0];
        arr[0] = arr[index];
        arr[index] = temp;
        return findMax(arr , index + 1);
    }
}
const arr = [2,1,9,188,3,10,6,5];
console.log(`giá trị lớn nhất trong mảng là : ${findMax(arr)}`);

// Bài 4.3 : Đảo ngược chuỗi                                                                                                                                                   

function stringReverse(stringR , index){
    if(index === 0){
        return stringR[index];
    }
    return  stringR[index] + stringReverse(stringR , index - 1);
}

const string = `toi mua bo kho`;                                                                     
console.log(stringReverse(string,string.length -1 ));