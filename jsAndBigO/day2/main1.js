// Lý thuyết ngày 2 : Big O notation

// - Big O mô tả cách thời gian chạy tăng lên khi dữ liệu đầu vào lớn dần
// - Các loại Big O cơ bản (từ nhanh đến chậm) :
    // + O(1) : hằng số -> nhanh nhất không phụ thuộc vào kích thước dữ liệu
    // + O(log n) : logarit -> mỗi bước chia đôi dữ liệu 
    // + O(n) : tuyến tính -> tỉ lệ thuận với kích thước dữ liệu 
    // + O(n log n) : tuyến tính -log -> sắp xếp hiệu quả 
    // + O(n^2) : bình phương -> chậm tránh dùng với dữ liệu lớn 
    // + O(2^n) : mũ -> rất chậm gần như không dùng được 

    // minh họa : 
        // + O(1) : hằng số 
            function getValue(arr){
                return arr[0];
                // luôn mất 1 bước dù dữ liệu truyền vào là mảng có 10 hay 1000 phần tử
            }

        // + O(n) : tuyến tính
            function findMax(arr){
                let max = arr[0];
                for(value of arr){
                    if(value > max){
                        max = value
                    }
                    return max;
                }
                // mất n bước lặp lại lúc này n = kích thước của mảng -> kích thước càng lớn chạy càng chậm
            }

        // + O(n^2) : Bình phương
        function findDuplicates(arr) {
            for (let i = 0; i < arr.length; i++) {        // n lần
                for (let j = i + 1; j < arr.length; j++) { // n lần mỗi i
                    if (arr[i] === arr[j]) return true;    // Tổng cộng ~ n²/2 bước
                }
            }
            return false;
            // vòng lặp lồng nhau vòng lặp đầu mất n x n lần vòng lặp sau
        }

        // Bài tập 1 : Two sum -> tổng 2 phần tử trong mảng = 1 số bất kì trả về vị trí index của 2 phần tử đó 
        // Cách 1 : dùng 2 vòng lặp 

        let arr = [1,2,3,4,5,6,7,8,9,10];
        function twoSum1(arr , target){
            for(let i = 0 ; i < arr.length - 1 ; i++){
                for(let j = i + 1 ; j < arr.length - 1 ; j++){
                    if(arr[i] + arr[j] === target){
                        let newArr = [];
                        newArr.push(i);
                        newArr.push(j);
                        return newArr;
                    }
                }
            }
        }
        console.log(twoSum1(arr , 15));
        // -> dùng 2 vòng lặp độ phức tạp bình phương của dữ liệu : dữ liệu càng lớn gấp đôi dữ liệu đó lên chạy chậm hơn O(n) gấp đôi 

        // Cách 2 : 2 con trỏ đầu và cuối với 1 mảng được sắp xếp 

        function twoSum2(arr, target , left = 0 , right = arr.length - 1){
            let sum = arr[left] + arr[right];
            while(sum !== target && left !== right){
                if(target > sum){
                    left+=1;
                }else{
                    right-=1;
                }
                sum =  arr[left] + arr[right];
            }
            if(sum !== target){
                return [];
            }
            let newArr = [];
            newArr.splice(0 , 0 , left , right);
            return newArr;
        }
        console.log(twoSum2(arr , 15));

        function twoSum22(arr , target , left = 0 , right = arr.length - 1){
            if(arr[left] + arr[right] === target){
                let newArr = [];
                newArr.splice(0 , 0 , left , right);
                return newArr;
            }
            if(left === right ){
                return [];
            }
            if(arr[left] + arr[right] > target){
                return twoSum22(arr , target , left , right - 1);
            }
            return twoSum22(arr , target , left + 1 , right );
            
        }
        console.log(twoSum22(arr,100));

        