// Hash Map trong js 

    // - Hash Map được thể hiện qua Object {} và Map new Map() 
    // -> cả 2 đều cho phép lưu trữ cặp key-value  giúp việc truy xuất dữ liệu rất nhanh

    // - Map new Map() :
        // + key type : Bất kỳ (Object , function , number)
        // + thứ tự : Giữ đúng thứ tự thêm vào 
        // + hiệu năng : Tốt hơn nhiều với thêm , xóa
        // + kích thước : map.size
        // + iteration : dùng for...of trực tiếp

    // - các thao tác dùng với Object :
    let hashMap = {};

    // 1. thêm phần tử :
    hashMap[`age`] = 18;
    hashMap[`name`] = `rush`;
    hashMap[`dmm`] = `fuck off`;
    console.log(hashMap);

    // 2. sửa phần tử :
    hashMap[`age`] = 19;
    console.log(hashMap);

    // 3. xóa phần tử :
    delete hashMap[`age`];
    console.log(hashMap);

    // 4. kiểm tra tồn tại
    console.log(hashMap.hasOwnProperty(`name`));

    // 5. duyệt các phần tử 
    Object.values(hashMap).forEach(value=> console.log(value));

    // - các thao tác dùng với map (hiện đại hơn , nhiều tính năng) :

    const map = new Map();

    // 1. thêm dữ liệu 
    map.set(`name`,`bằng`);
    map.set(`age`,19);
    map.set(`vamos`,19);
    map.set({1:`anh`} , `đất nước`);
    

    // 2. lấy dữ liệu
    console.log(map.get(`name`));
    
    // 3.kiểm tra tồn tại
    console.log(map.has(`age`));

    // 4.xóa phần tử 
    map.delete(`age`);
    console.log(map.get(`age`));

    // 5.duyệt các phần tử
    map.forEach(value=>console.log(value));

    // - độ phức tạp các thao tác trên hash map :
        // - với các thao tác cơ bản trên dữ liệu được lưu trong map : thêm , sửa , xóa , tồn tại -> độ phức tạp trung bình là O(1)
            // -> nhưng khi đối với các bài toán chưa biết trước key phải duyệt trong map -> độ phức tạp là O(n)
            // - thao tác duyệt tất cả các dữ liệu trong map -> độ phức tạp là O(n)

    // Bài tập two sum : tìm 2 số trong 1 mảng có tổng bằng 1 số bất kì -> trả về vị trí index 2 số đó
    let arr = [1,2,5,8,0,11,23]
    function twoSum(arr , target){
        let map = {};
        for(let index = 0 ; index < arr.length ; index++){
            let b = target - arr[index];
            if(map[b] !== undefined){
                return [map[b] , index] ;
            }
            map[arr[index]] = index;
            console.log(map[b]);
        }
    }
    console.log(twoSum(arr,16));


    // - lưu dữ liệu thánh key và value được gọi chung là hash map -> 3 cách triển khai : object , new Map() , new Set()
        // - nên dùng lưu dữ liệu phù hợp với các thao tác : lấy giữ liệu O(1)
        // - dùng trong các trường hợp :
            // + lưu dữ liệu làm bộ nhớ đệm -> dùng trong đệ quy giảm số lần lặp
            // + đếm số phần tử xuất hiện trong 1 mảng
            // + nhóm các nhóm dữ liệu 
        // -> dùng object làm hash map khi key đơn giản -> key chỉ là kiểu tring
        // -> dùng map làm hash map khi key phức tạp , có thứ tự 