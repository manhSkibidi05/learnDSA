// PHẦN 4 : TỐI ƯU VỚI MEMMOIZATION 

    // Fibonacci đơn thuần: O(2^n) - rất chậm!
    function fib(n) {
        if (n <= 1) return n;
        return fib(n-1) + fib(n-2);
    }

    console.time('fib');
    console.log(fib(40)); // Mất khoảng 1-2 giây!
    console.timeEnd('fib');

    // Fibonacci với memoization: O(n) - rất nhanh!
    function fibMemo(n, memo = {}) {
        // Base case
        if (n <= 1) return n;
        
        // Kiểm tra đã tính chưa
        if (memo[n] !== undefined) {
            return memo[n];
        }
        
        // Tính và lưu lại
        memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
        return memo[n];
    }

    console.time('fibMemo');
    console.log(fibMemo(4)); // Gần như tức thì!
    console.timeEnd('fibMemo');

    // -> mỗi lần tính ra kết quả sẽ lưu giá trị lại vào 1 đối tượng dưới dạng thuộc tính (key = n (trường hợp cần tính) , value = giá trị của trường hợp đó )

    // Bài 2 : tối ưu bài toán số cách leo cầu thang với memoization

    function cachLeo(n , memo = {}){
        if(n < 0){
            return 0;
        }
        if(n === 0){
            return 1;
        }
        if(memo[n] !== undefined){
            return memo[n];
        }
        memo[n] = cachLeo(n - 1 , memo) + cachLeo(n - 2, memo);
        return memo[n];
    }
    console.log(cachLeo(4));

    // Bài 3 : tối ưu bài toán tổ hợp C(n,k) với memoization

    function toHop(n , k , obj = {}){
        if(n === k || k === 0){
            return 1;
        }
        if(obj[n , k] !== undefined){
            return obj[n , k];
        }
        obj[n , k] = toHop(n - 1 , k) + toHop(n - 1 , k - 1);
        return obj[n , k];
    }
    console.log(toHop(5,2));

// PHẦN 5 : BÀI TẬP TỔNG HỢP   
