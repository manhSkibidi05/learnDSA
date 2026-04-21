// - đệ quy chia ra làm 2 dạng :
    // + đệ quy tuyến tính : dạng đệ quy theo đường thẳng lúc này mỗi lần gọi lại hàm đệ quy chỉ gọi 1 lần hàm 
        // -> khi vẽ cây đệ quy sẽ chỉ là 1 đường thẳng với 1 nhánh duy nhất 
    // + đệ quy nhánh : dạng đệ quy mỗi lần gọi lại sẽ từ 2 hàm trở lên
        // -> khi vẽ cây đệ quy số nhánh chia ra phụ thuộc vào số hàm gọi lại 
// - Vẽ cây đệ quy : mỗi hàm đệ quy được gọi lại sẽ là 1 nhánh được mở ra 
    // -> xác nhận được các trường hợp bị gọi lại gây tốn bộ nhớ 
    // -> hiểu được nguyên lí hoạt động khi gọi hàm đệ quy 
// - niểm tin đệ quy : khi gọi lại hàm đệ quy hãy tin vào trường hợp khi gọi lại đó ra kết quả đúng
    // -> việc của chúna ta biết kết hợp kết quả khi sử dụng hàm đệ quy với kết quả hiện tại