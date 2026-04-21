// Đệ quy là một giải thuật giải quyết các bài toán bằng cách chia nhỏ chúng thành các bài toán nhỏ hơn 
// Các bước để giải quyết bài toán bằng giải thuật đệ quy :
    // + B1 : xác định đầu vào và đầu ra 
        // -> dựa vào yêu cầu đề bài cho xác định bài toán cho gì và yêu cầu gì
    // + B2 : xác định base case trường hợp cơ sở 
        // -> trường hợp cơ sở là trường hợp đơn giản nhất và là điểm dừng khi sử dụng đệ quy tránh lặp vô tận
        // -> xác định xem đây là trường hợp đơn giản nhất chưa , còn có thể chia nhỏ được trường hợp này nữa không
    // + B3 : xác định recursive case trường hợp đệ quy 
        // -> trường hợp đệ quy là trường hợp giúp chia nhỏ bài toán từ lớn thành bài toán nhỏ hơn tương tự bằng cách gọi lại chính mình
        // -> xác định xem cách để chia nhỏ bài toán hơn và đưa gần về với trường hợp cơ sở , cách kết hợp kết quả hiện tại với các kết quả sau khi gọi đệ quy 
    // + B4 : viết code và test bài toán 
// Khi sử dụng đệ quy hãy tin vào đệ quy -> khi gọi lại hàm đệ quy hãy tin rằng kết quả khi gọi sẽ ra theo những gì đã được tính 
// -> hình dung đệ quy như là ngăn xếp (stack) mỗi lần gọi lại chính mình sẽ thêm hàm mới lên đầu và những hàm mới được gọi sẽ chạy trước , những hàm gọi trước chạy sau
// -> đệ quy sẽ kết thúc khi các hàm được gọi chạy hết trở lại với hàm ban đầu trả về kết quả bằng cách kết hợp kết quả lại với nhau