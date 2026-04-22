// bài tập thực hành hash table 

    // bài 1 : valid anagram 

    // đề bài : Cho hai chuỗi s và t, kiểm tra xem t có phải là anagram của s không.

    function validAnagram(str1 , str2){
        let hashTable = {};
        for(let char of str1){
            if(!hashTable[char]){
                hashTable[char] = 0;
            }
            hashTable[char]++;
        }
        
        for(let char of str2){
            if(!hashTable[char]){
                return false;
            }
            hashTable[char]--;
            if(hashTable[char] === 0){
                delete hashTable[char];
            }
        }

        if(Object.keys(hashTable).length === 0){
            return true;
        }
        return false;
        
    }

    console.log(validAnagram(`abcdiaa`,`cbadiaa`));

    // bài 2 : top k frequent elements 

    // đề bài : ho mảng số nguyên nums và số nguyên k, trả về k phần tử xuất hiện nhiều nhất.

    function topElement(nums , k){
        let hashTable = {};
        let arrResult = [];

        if(k > nums.length){
            return [];
        }

        for(let num of nums){
            if(!hashTable[num]){
                hashTable[num] = 0
            }
            hashTable[num]++;
        }

        let arr = Object.entries(hashTable).sort((a , b) => b[1] - a[1]).slice(0 ,k);
        for(let value of arr){
            arrResult.push(value[0])
        }
        return arrResult
    }

    const nums = [1,2,9,9,1,8,9];
    console.log(topElement(nums , 4));

    // Bài 3 : two sum với map 

    // đề bài : cho 1 mảng nums và 1 target số nguyên -> tìm tổng 2 số trong mảng = target trả về 2 số đó 

    function twoSum(nums , target){
        let hashTable = new Map();

        for(let num of nums){
            let value = target - num;
            if(hashTable.has(value)){
                return [value , num];
            }
            hashTable.set(num , 1);
        }
        return [];
    }

    console.log(twoSum(nums, 18));

    // Bài 4 : contains duplicate 2 

    // đề bài : cho mảng nums và số k -> kiểm tra 2 chỉ số index i và j có trong mảng mà thỏa mãn 2 điều kiện sau : nums[i] == nums[j] và |i - j|<= k

    