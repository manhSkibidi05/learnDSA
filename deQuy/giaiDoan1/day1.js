// Đệ quy : RECURSION

// Đệ quy là một phương pháp giải quyết vấn đề đưa vấn đề cần giải quyết ban đầu thành những vấn đề con tương tự nhưng nhỏ hơn 
// -> đệ quy thể hiện qua một hàm tự gọi lại chính nó

// Một hàm đệ quy điển hình sẽ luôn có hai phần chính 
// 1. Trường hợp cơ sở (base case) : Đây là điều kiện dừng của hàm . Nó là trường hợp đơn giản nhất , có thể chạy ngay lập tức mà không cần gọi lại chính nó 
// -> thiếu phần này đệ quy sẽ chạy mãi mãi
// 2. Trường hợp đệ quy (Recursive case) : Phần này hàm sẽ gọi lại chính nó để giải quyết vấn đề con nhỏ hơn , tiến dần về trường hợp cơ sở 

// Giai đoạn 1 : 
// 1. Hiểu rõ  2 thành phần bắt buộc là trường hợp cơ sở và trường hợp đệ quy -> tập xác định nó trong mọi bài toán sử dụng đệ quy
// 2. Tư duy tin tưởng vào đệ quy -> đừng cố mô phỏng chi tiết từng bước trong đầu . Thay vào đó hãy tin rằng nó sẽ đưa về kết quả đúng cho bài toán nhỏ hơn 
// -> nhiệm vụ của bạn kết hợp kết quả đó để giải bài toán hiện tại 
// _____________________________________________________________________________________________________________________________________

// __________________________________GIAI ĐOẠN 1___________________________________

// BƯỚC 1 : Hiểu rõ 2 trường hợp luôn xảy ra trong đệ quy 
    // + Trường hợp cơ sở (Base case) : trường hợp đơn giản nhất -> điều kiện dừng kết thúc đệ quy khi rơi vào trường hợp này
    // -> Tránh cho lặp vô tận 
    // + Trường hợp đệ quy (Recursive case) : trường hợp này đưa bài toán lớn trở về bài toán tương tự nhưng nhỏ hơn làm cho trường hợp này tiến gần đến trường hợp cơ sở
    // -> gọi lại chính nó giúp bài toán được chia nhỏ dần 

// BƯỚC 2 : Thực hành
    // Bài 1 : in ra các số từ n đếm ngược về 0
    function demNguoc(n){
        if(n < 0){
            return;
        }else{
            console.log(n);
            demNguoc(n - 1);
        }
    }
    demNguoc(3);
    
    // Bài 1.2 : in ra các số từ 0 đến n 
    function demXuoi(n){
        if(n < 0){
            return;
        }else{
            demXuoi(n-1);
            console.log(n);
        }
    }
    demXuoi(3);

    // Bài 2 : Tính tổng từ 1 đến n 
    function tong(n){
        if(n === 1){
            return 1;
        }
        return n+ tong(n - 1);
    }
    console.log(tong(5));
    
    // Bài 3 : Tính giai thừa của n -> n! = 1 * 2 * ...*n;
    function giaiThua(n){
        if(n < 1){
            return;
        }
        if(n === 1){
            return 1;
        }
        return n * giaiThua(n - 1);
    }
    console.log(giaiThua(5));

    // Niềm tin vào đệ quy -> n * giaiThua(n-1) hãy tin rằng n * !(n-1) -> tin rằng khi đệ quy sẽ trả về đúng với giá trị cần tìm 
    // -> lúc này nhiệm vụ của mình lấy kết quả giá trị thông qua đệ quy đó nhân với hàm hiện tại để ra kết quả cuối cùng n 