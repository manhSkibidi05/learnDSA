// Bài 4 : contains duplicate 2 

    // đề bài : cho mảng nums và số k -> kiểm tra 2 chỉ số index i và j có trong mảng mà thỏa mãn 2 điều kiện sau : nums[i] == nums[j] và |i - j|<= k

    function containsDuplicate(nums , k){
        let hashTable = {};
        for(let i = 0 ; i < nums.length ; i++){
            if(hashTable[nums[i]]){
                j = hashTable[nums[i]];
                if( Math.abs(i - j) <= k){
                    return true;
                }
            }
            hashTable[nums[i]] = i;
        }
        return false;
    }

    let nums = [3,5,9,1,2,5,7,9,8];
    console.log(containsDuplicate(nums , 9));

// Bài 5 : drop

// Bài tập vân dụng : 

// Bài 1 : intersection of two array - giao của 2 mảng 

// đề bài : cho 2 mảng số nguyên -> tìm các giao của 2 mảng : các giá trị trùng nhau của 2 mảng 

    function intersectionTwoArray(nums1 , nums2){
        let setTemp = new Set(nums1);
        let setResult = new Set();

        for(num of nums2){
            if(setTemp.has(num)){
                setResult.add(num)
            }
        }
        return Array.from(setResult)
    }

    const arr1 = [1,2,3,4,4,4,5,6,6,6,7];
    const arr2 = [2,3,4,9,4,52,2,2,3,6,8];
    console.log(intersectionTwoArray(arr1 , arr2));

// Bài 2 : intersection two array 2 

// đề bài : cho 2 mảng số nguyên tìm giao giữa 2 mảng đếm số lần xuất hiện 

// Cho hai mảng số nguyên nums1 và nums2, hãy trả về một mảng là phần giao của chúng.
//  Mỗi phần tử trong kết quả phải xuất hiện bằng số lần mà nó xuất hiện trong cả hai mảng và bạn có thể trả về kết quả theo bất kỳ thứ tự nào.

function intersectionTwoArray2(nums1 , nums2){
    let newMap = new Map();
    let arrResult = [];

    for (let num of nums1) {
        newMap.set(num, (newMap.get(num) || 0) + 1);
    }

    for (let num of nums2) {
        if(newMap.has(num) && newMap.get(num) > 0){
            arrResult.push(num);
            newMap.set(num , newMap.get(num) - 1); 
        }
    }
    return arrResult;
}

console.log(intersectionTwoArray2(arr1 ,arr2));
