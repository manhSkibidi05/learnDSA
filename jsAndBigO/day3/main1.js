// sliding window : cửa sổ trượt 
    // - là một kỹ thuật duy trì một cửa sổ con và trượt nó qua mảng , thay vì tạo lại cửa sổ từ đầu mỗi lần 
    // -> cửa sổ sẽ có từ 2 phần tử trở lên mỗi lần trượt thay đổi 1 phần tử và giữ nguyên các phần tử còn lại 

// Bài tập 1 : Best Time to Buy and Sell Stock

// đề bài : Cho mảng prices với prices[i] là giá cổ phiếu ngày thứ i. Bạn được phép mua 1 lần và bán 1 lần (không thể bán trước khi mua).
//  Tìm lợi nhuận lớn nhất có thể đạt được. Nếu không thể có lợi nhuận, trả về 0.

// cách 1 : dùng for lông nhau 

const prices = [3,5,9,8,1,2,10,11,2,5];

function findMaxProfit(arr){
    let maxProfit = 0;
    let profit = 0;
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i + 1 ; j <arr.length ; j++){
            profit = arr[j] - arr[i];
            if(profit > maxProfit){
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}
console.log(findMaxProfit(prices));

// cách 2 : 

function findMaxProfit2(arr){
    let maxProfit = 0;
    let profit = 0;
    let minPrice = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < minPrice){
            minPrice = arr[i];
            continue;
        }
        profit = arr[i] - minPrice;
        if(profit > maxProfit){
            maxProfit = profit;
        }
    }
    return maxProfit;
}
console.log(findMaxProfit2(prices));

// Bài tập 2 : maximun subarray

// đề bài : Cho mảng số nguyên (có thể âm), tìm mảng con liên tiếp có tổng lớn nhất.

function maxSubArray(arr){
    let sumMax = 0;
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++){
        sum = arr[i];
        for(let j = i + 1 ; j < arr.length ; j++){
            sum += arr[j];
            if(sum > sumMax){
                sumMax = sum;
            }
        }
    }
    return sumMax;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1,0,-3,2,5,9 ]));
// độ phức tạp O(n^2) -> lặp lồng nhau

// giải bằng giải thuật kadane's : độ phức tạp O(n) -> 1 lần lặp 

function maxSubArray2(numbers){
    let currentValue = numbers[0];
    let maxValue = 0;
    for(let i = 1 ; i < numbers.length ; i++){
        currentValue = Math.max(currentValue + numbers[i] , numbers[i]);
        maxValue = Math.max(maxValue , currentValue);
    }
    return maxValue;
}
console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray2([1,0,-3,2,5,9 ]));

// - kĩ thuật slide window : mỗi lần lặp qua một mảng sẽ giữ nguyên giá trị  1 hoặc 2 phần tử trở lên  -> sau khi tính toán so sánh giá trị với phần tử hiện tại 
// nếu giá trị phù hợp với yêu cầu đề bài thay thế chúng 
// - giải thuật kadane : so sánh tổng giá trị từ phần từ trước đến phần tử hiện tại với phần tử hiện tại nếu phần tử hiện tại lớn hơn tổng thì tổng tử phần tử hiện tại 
// sẽ lớn hơn và lưu 1 biến giá trị tối đa để so sánh với tổng trả về giá trị tối đa đó 
// -> dùng để tính tổng hàm con liên tiếp tối đa trong 1 mảng