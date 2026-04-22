// hash table (bảng băm) & group anagrams

// 1. lý thuyết 
    // - hash table hay bảng băm là 1 cấu trúc dữ liệu cho phép dữ liệu dưới dạng cặp khóa - giá trị (key-value). Nó sử dụng hàm băm (hash function) để biến khóa thành
    // một chỉ số trong mảng , giúp việc truy xuất dữ liệu trở nên cực nhanh trung bình 0(1)

    // - trong js có 2 lựa chọn chính : 
        // + object {} - đơn giản nhưng khóa chính chỉ là string hoặc symbol
        // + map new Map() - khóa có thể là bất kì kiểu dữ liệu nào , giữ thứ tự , có kích thước .size
    
    // - khi nào nên dùng hash table : + đếm tần suất + lưu cache / ghi nhớ kết quả làm bộ nhớ đệm tạm thời 
        // + kiểm tra nhanh sự tồn tại của 1 giá trị được lưu trong bảng băm + nhóm các phần tử theo 1 đặc điểm chung

    // vd : đếm số lần xuất hiện của 1 kí tự 

    // đầu vào 1 string , đầu ra 1 bảng băm chứa các căp key và value : key là kí tự và value số lần xuất hiện của kí tự đó trong chuỗi 

    function tanSuat(str){
        const hashTable = {};
        for(char of str){
            if(char.match(/[a-zA-Z0-9]/)){
                if(!hashTable[char]){
                    hashTable[char] = 0;
                }
                let value = hashTable[char];
                hashTable[char] = value + 1;
            }
        }
        return hashTable;
    }

    const str = `check my check`;
    const hashTable = tanSuat(str);
    console.log(hashTable);

// 2. bài tập trọng tâm : group anagrams 

// đề bài : Cho một mảng các chuỗi strs, hãy nhóm các anagram (những từ được tạo thành bằng cách đảo thứ tự các chữ cái của nhau) lại với nhau. 
// Kết quả trả về dưới dạng mảng các mảng con (thứ tự không quan trọng).

    function groupAnagrams(strs){
        let arr = [];
        let hashTable = {};

        for(let str of strs){
            let value = str.split(``).sort().join(``);
            if(!hashTable[value]){
                hashTable[value] = [];
            }
            hashTable[value].push(str);
        }

        for(let value in hashTable){
            arr.push(hashTable[value]);
        }

        return arr;
    }

    const strings = [`abc` , `aaa` , `bcb` , `cba` , `bbc` , `bac`];
    console.log(groupAnagrams(strings));