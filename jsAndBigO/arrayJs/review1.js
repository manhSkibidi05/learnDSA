// các phương thức mới của arr trong js giúp cho mình dễ dàng thao tác hơn với các dữ liệu trong mảng

// reduce() : có 4 tham số có thể truyền vào hàm callback -> 2 tham số bắt buộc là giá trị ban đầu : giá trị do mình khai báo , giá trị hiện tại : giá trị nằm trong mảng
// -> phương thức này sẽ duyệt qua toàn bộ mảng và mỗi lần duyệt sẽ gọi hàm callback 
// -> dùng để tính tổng các giá trị trong mảng , min , max hay tạo ra mảng mới

const arr = [1,2,4,56,7,8];
const sumArr =  arr.reduce((sum ,value)=>sum +=value,0);
console.log(sumArr);

// filter() : tạo ra mảng mới với các giá trị thỏa mãn điều kiện từ mảng cũ 
// -> duyệt qua toàn bộ mảng mỗi lần gọi lại hàm callback : với các phần tử tmdk thêm vào mảng mới
// -> dùng để lọc dữ liệu tính toán dễ dàng hơn

const arr5 = arr.filter(value => value > 5);
console.log(arr5);

// find() : tìm kiếm giá trị đầu tiên tmdk trong mảng
// -> duyệt từng phần tử trong mảng trả về giá trị đầu tiên tmdk của callback 

const arrFirstChan = arr.find(value => value % 2 === 0);
console.log(arrFirstChan)

// map() : tạo ra mảng mới lưu giá trị được trả về bởi hàm callback
// -> duyệt tất cả các phần tử trong mảng mỗi lần duyệt gọi hàm callback nhận giá trị trả về lưu  vào mảng mới trả về mảng mới
// -> tạo mảng mới dựa trên giá trị từ mảng cũ

const arrDouble = arr.map(value => value *1.98);
console.log(arrDouble);

// sort() : sắp xếp các phần tử trong mảng theo thứ tự bảng mã ACII 
// -> sắp xếp theo nhỏ -> lớn hoặc ngược lại phải sử dụng hàm callback so sánh các dữ liệu được trả về là âm hay dương : > 0 đổi chỗ , <= 0 giữ nguyên
// -> làm thay đổi mảng cũ 

arr.sort((a , b) => a - b);
console.log(arr);

// slice() : tạo ra mảng mới với các phần tử cũ được cắt bởi phương thức này từ vị trí index a đến sát vị trí index b

const arrNew = arr.slice(0,2);
console.log(arrNew);

// splice() : xóa 1 phần tử ở vị trí index khỏi mảng hoặc thêm phần tử mới vào vị trí index
// -> làm thay đổi mảng gốc

arr.splice(1,1);
console.log(arr);

