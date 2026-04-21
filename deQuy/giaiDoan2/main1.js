// GIAI ĐOẠN 2 : THỰC HÀNH CÓ CẤU TRÚC 

// - Mục tiêu giai đoạn 2 : 
    // + vẽ được cây đệ quy cho các bài toán phức tạp 
    // + phân loại các dạng bài đệ quy 
    // + áp dụng Recursive Leap of Faith một cách tự nhiên 
    // + Bắt đầu tối ưu với kĩ thuật nhớ 

// PHẦN 1 : VẼ CÂY ĐỆ QUY 

    // 1.1 Cây đệ quy là gì 
        // -> cây đệ quy là cách trực quan hóa các lời gọi hàm đệ quy giúp bạn 
            // + hình dung được độ phức tạp -> đếm số lần hàm được gọi lại
            // + phát hiện các lời gọi bị lặp lại -> những hàm gọi lại bị trùng cần tối ưu
            // + hiểu được luồn chạy của chương trình
    // Bài 1 : tổ hợp (n , k ) bằng công thức pascal

    function toHop(n , k){
        if(k === n || k === 0){
            return 1;
        }
        return toHop(n - 1, k) + toHop(n - 1 , k - 1);
    }
    console.log(toHop(5,2));

    // Bài 2 : leo cầu thang n bậc 

    function cachLeo(n){
        if(n === 1){
            return 1;
        }
        if(n === 2){
            return 2;
        }
        return cachLeo(n - 1) + cachLeo(n - 2);
    }
    console.log(cachLeo(6));

// PHẦN 2 : PHÂN LOẠI CÁC DẠNG BÀI ĐỆ QUY 

    // DẠNG 1 : ĐỆ QUY TUYẾN TÍNH 
    // - Dạng đệ quy tuyến tính hàm gọi lại chính nó 1 lần  
    // -> lúc vẽ cây đệ quy sơ đồ đi theo 1 đường thẳng  

    // DẠNG 2 : ĐỆ QUY PHÂN NHÁNH
    // - Dạng đệ quy phân nhánh hàm gọi lại chính nó >= 2 lần 
    // -> lúc vẽ cây đệ quy chia ra >= 2 nhánh chính và các nhánh con

// PHẦN 3 : RECURSIVE LEAP OF FAITH (NIỀM TIN ĐỆ QUY)

    // -> thay vì mô phỏng từng bước bằng cách thay số vào thì hãy tin tưởng vào lời gọi đệ quy sẽ ra kết quả đúng 
    // -> việc của chúng ta kết hợp các kết quả của các lời gọi đệ quy đó 

    function cachDoiTien(n){
        if(n < 0){
            return 0;
        }
        if(n === 0){
            return 1;
        }
        return cachDoiTien(n - 1) + cachDoiTien(n - 2) + cachDoiTien(n - 5);
    }
    console.log(cachDoiTien(5))
































