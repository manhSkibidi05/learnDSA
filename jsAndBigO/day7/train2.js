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
