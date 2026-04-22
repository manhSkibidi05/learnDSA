// ôn tập hôm trước :

    // - hash table (bảng băm) : cho phép lưu trữ dữ liệu dưới dạng cặp key-value
    // - sử dụng hash table khi : + đếm tần suất xuất hiện của một giá trị 
        // + lưu trữ kết quả -> dùng như 1 bộ nhớ đệm 
        // + kiểm tra sự tồn tại của 1 giá trị nhanh
        // + nhóm các phần tử có điểm chung vào 1 nhóm
    // - có 2 cấu trúc dữ liệu lưu trữ đã học :
        // + object = {} : key chỉ được là string và symbol 
        // + map = new Map() : key có thể là bất kỳ kiểu dữ liệu nào và lưu trữ có thứ tự 
        
// set và map so sánh và xét các trường hợp sử dụng :

    // Set - tập hợp : là một tập hợp các giá trị duy nhất (không trùng lặp) -> bạn có thể lưu bất kỳ kiểu dữ liệu nào 

    // - cách hoạt động : + sử dụng cơ chế hash table tương tự map để lưu trữ các giá trị
        // + mỗi giá trị chỉ xuất hiện 1 lần -> nếu giá trị đã tồn tại nó sẽ bị bỏ qua
        // + thứ tự các phần tử trong set là theo thứ tự chèn 

    // - các thao tác chính : + add(value) : thêm giá trị -> O(1)
        // + delete(value) : xóa giá trị -> O(1)
        // + has(value) : kiểm tra tồn tại -> O(1)
        // + clear() : xóa tất cả -> O(1)
        // + size() : số lượng phần tử

    const mySet = new Set();

    mySet.add(`đấu kiếm`);
    mySet.add(`đấu kiếm 1`);
    mySet.add(`đấu kiếm 1`);
    mySet.add([1,2,3]);
    mySet.add({name : `bằng`});
    console.log(mySet);

    // sử dụng khi : 
        // + lưu các giá trị không trùng lặp 
        let numArr = [1,2,2,3,3,5,5,6];
        let numSet = new Set();
        numArr.forEach((value)=>{
            numSet.add(value)
        });
        console.log(numSet)

        // + kiểm tra nhanh sự tồn tại của 1 giá trị trong set -> lúc này set không có truy xuất 1 giá trị 
        console.log(numSet.has(10));
        console.log(numSet.has(5));

        // + lưu danh sách các phần tử đã xử lý
        // + tìm giao , hợp , hiệu của 2 tập hợp
        // + đảm bảo không có phần tử trùng trong mảng

    // - sử dụng map khi : 
        // + cần ánh xạ khóa (bất kì kiểu dữ liệu) đến giá trị 

        let newMap = new Map();
        newMap.set({name : `nhím`} , `bằng 10 thì a phải 9`);
        newMap.set(10 , `7`);
        console.log(newMap.get(10));
        
        // + đếm tần suất xuất hiện của 1 giá trị 
        // + lưu giá trị -> sử dụng như bộ nhớ đệm