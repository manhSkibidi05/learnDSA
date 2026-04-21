// - kĩ thuật sử dụng 2 con trỏ là : dùng khi để duyệt dữ liệu thay vì dùng 1 con trỏ đi qua từng dữ liệu thì ta sử dụng 2 con trỏ di chuyển trong cơ sở dữ liệu
    // -> giúp các thao tác nhanh gọn hơn rút ngắn thời gian lặp
// - các kiểu dùng 2 con trỏ :
    // + 2 con trỏ ngược chiều : 1 con từ vị trí ban đầu 1 con vị trí cuối cùng đi dần vào giữa -> vd : kiểm tra đối xứng 
    // + 2 con trỏ cùng chiều : 1 con trỏ chậm và 1 con trỏ nhanh 

// Bài tập 2 : 2 con trỏ cùng chiều 

// đề bài : Cho mảng đã sắp xếp tăng dần, xóa các phần tử trùng lặp tại chỗ (in-place) sao cho mỗi phần tử chỉ xuất hiện một lần. Trả về độ dài mới của mảng.

function  removeDuplicates(nums){
    if(nums.length === 0) return 0;
    let luuChu = 0;
    for(let i = 0 ; i < nums.length ; i++){
        let current = nums[i];
        if(current === luuChu){
            nums.splice(i , 1);
            continue;
        }
        luuChu = current;
    }
    return nums;
}

console.log(removeDuplicates([1,1,2,3,3,4,4,4,5,6,6]));

// Bài tập 3 : two sum với mảng đã được sắp xếp tăng dần -> chỉ dùng O(1) bộ nhớ 

function twoSum(target , nums){
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        let sum = nums[left] + nums[right];
        if(sum === target) return [left, right];
        else if(sum > target) right--;
        else left++;
    }
    return [];
}
console.log(twoSum(14 , [1,2,3,4,5,6,7,9]));