const arr1 = [1,2,3,4,4,4,5,6,6,6,7];
const arr2 = [2,3,4,9,4,52,2,2,3,6,8];

// map : là cấu trúc dữ liệu được lưu dưới dạng cặp key và value -> key có thể là bất kì kiểu dữ liệu nào 
// - sử dụng map trong các trường hợp : 
    // + đếm tần suất xuất hiện của 1 giá trị 
    let map = new Map();
    for(let num of arr1){
        map.set(num, (map.get(num) || 0 ) + 1);
    }

    // + kiểm tra 1 giá trị tồn tại trong map hay không rất nhanh chóng 
    map.has(1);

    // + nhóm chung các nhóm dữ liệu có điểm chung vào 1 nhóm 
    let arr3 =[];
    for(let num of arr2){
        if(num === 5){
            arr3.push(num)
            map.set(num , arr3)
        }
    }

// set : là cấu trúc dữ liệu cho phép lưu trữ các giá trị không trùng lặp vào set -> giá trị có thể là bất kì kiểu dữ liệu nào 
// - sử dụng set trong các trường hợp : 
    // + kiểm tra giá trị đang tồn tại trong set hay không rất nhanh chóng 
    let set = new Set();
    set.has(1);

    // + lọc các phần tử trùng nhau cho mảng 
    // + tìm điểm giao giữa 2 mảng với nhau 
    
// -> set và map có thể chuyển đổi sang arr một cách dễ dàng như string vì nó đều là object iterator -> loại object đặc biệt cho phép duyệt giá trị từ đầu đến cuối dữ liệu

// Bài tập : 

// Bài 1 : tìm chuỗi con đối xứng dài nhất 

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length < 1) return "";
    
    let start = 0;
    let end = 0;
    
    // Hàm mở rộng từ tâm left, right
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Khi kết thúc, palindrome hợp lệ nằm trong đoạn [left+1, right-1]
        // Độ dài = (right-1) - (left+1) + 1 = right - left - 1
        return right - left - 1;
    };
    
    for (let i = 0; i < s.length; i++) {
        // Trường hợp palindrome lẻ (tâm là 1 ký tự)
        const len1 = expandAroundCenter(i, i);
        // Trường hợp palindrome chẵn (tâm giữa i và i+1)
        const len2 = expandAroundCenter(i, i + 1);
        
        const len = Math.max(len1, len2);
        
        if (len > end - start) {
            // Tính lại vị trí start, end dựa trên độ dài len và tâm i
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    
    return s.substring(start, end + 1);
};

