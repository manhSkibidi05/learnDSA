// Two Pointer : Hai con trỏ 

// - Hai con trỏ là kĩ thuật sử dụng 2 con trỏ ( 2 chỉ số ) để duyệt mảng/chuỗi từ 2 đầu hoặc cùng 1 đầu nhưng khác nhau về tốc độ 

// - Các dạng phổ biến : 
    // + Đối đầu : 1 con trỏ ở đầu và 1 con trỏ ở cuối di chuyển đều nhau dần vào giữa 
    // + cùng chiều : 1 con trỏ chạy nhanh và 1 con trỏ chạy chậm di chuyển đến phần tử cuối
    // + cửa sổ : 2 con trỏ cùng chiều 1 con trỏ dùng để trượt và 1 con trỏ dùng để thu hẹp

// Bài tập ngày 4 : 
// Bài 1 : kiểm tra 1 chuỗi có đối xứng nhau hay không , không kể những kí tự đặc biệt và không phân biệt hoa thường

    // Xử lí chuỗi với regex 
    // Regex (regular expression) : là một ngôn ngữ mô tả mẫu để tìm kiếm , kiểm tra hoặc thay thế văn bản 

        // 1. cú pháp regex cơ bản
            // - tạo regex trong js : dùng dấu /kí tự/ 
            const regex1 = /abc/;
            // - dùng new RegExp() : dùng khi pattern động
            const regex2 = new RegExp(`abc`);

        // 2. các hàm cơ bản với regex
            // replace : thay thế chuỗi 
            const testRegex = `hello javascript newbie`;
            console.log(testRegex.replace(/javascript/ , `js`));

        // 3. bộ kí tự -> dùng dấu [] để tập hợp kí tự 
            const testRegex2 = `Hello Myfriend %`;
            console.log(testRegex2.match(/[a-z]/i));
            // -> tìm chuỗi từ a-z : a đến z , i : không phân biệt hoa thường


    // cách 1 : sử dụng reverse 
    function isPalindrome(string){
        string = string.toLowerCase().replace(/[^a-z0-9]/g, ``);
        stringReverse = ``;
        for(let i = string.length - 1 ; i >=0 ; i--){
            stringReverse+=string[i];
        }
        return string === stringReverse;
    }
    console.log(isPalindrome(`alo 123`));
    console.log(isPalindrome(`al o oLa**&&`));
    // -> độ phức tạp O(n) : duyệt toàn bộ chuỗi , chạy chậm khi sử dụng 1 con trỏ 
    
    // cách 2 : hàm đệ quy với two pointer (hai con trỏ )
    function isPalindrome2(string , left = 0 , right = string.length- 1){
        string = string.toLowerCase().replace(/[^a-z0-9]/g, ``);
        if(left === right || left > right){
            return true;
        }
        if(string[left] !== string[right]){
            console.log(string[left]);
            console.log(string[right])
            return false;
        }
        return isPalindrome2(string , left + 1 , right - 1);
    }
    // console.log(isPalindrome2("A man, a plan, a canal: Panama"));
    console.log(isPalindrome2("aloola"));
    // console.log(isPalindrome2("race a car"));
    
    // cách 3 : two pointer 
    // hàm kiểm tra kí tự đặc biệt 
    function charValid(char){
        // input : là 1 kí tự 
        // output : true/false
        // kiểm tra kí tự nhập vào có phải là không nằm trong khoảng a-z , 0-9 , A-Z hay không
        if(char.match(/[^a-z0-9A-Z]/g)){
            // nếu phải -> kí tự đặc biệt trả về false 
            return false;
        }
        // nếu không phải -> trả về true
        return true;
    }

    // hàm kiểm tra chuối đối xứng 
    // đầu vào là 1 chuỗi 
    // đầu ra là true/false
    function isPalindrome3(string){
        // sử dụng 2 con trỏ duyệt chuỗi -> 2 con trỏ khác chiều nhau
        let left = 0;
        let right = string.length - 1;
        // vị trí của con trỏ trái luôn nhỏ hơn con trỏ phải -> nếu lớn hơn đi quá giữa chuỗi kết thúc vòng lặp
        while(left < right){
            // kiểm tra nếu kí tự ở vị trí hiện tại là kí tự đặc biệt di chuyển 1 đơn vị -> cho tới khi không phải kí tự đặc biệt và vẫn phải < con trỏ phải
            while(left < right && !charValid(string[left])){
                left++;
            }
            while(left < right && !charValid(string[right])){
                right--;
            }
            // kiểm tra kí tự lúc này không phải đặc biệt và không phân biệt hoa thường có bằng nhau không 
            if(string[left].toLowerCase() !== string[right].toLowerCase()){
                return false;
            }
            // di chuyển mỗi con trỏ thêm 1 đơn vị kiểm tra kí tự kế tiếp 
            left++;
            right--;
        }
        // kiểm tra hết chuỗi mà không trả về false -> chuỗi đối xứng trả về true
        return true;
    }
    console.log(isPalindrome3("A man, a plan, a canal: Panama"));
    console.log(isPalindrome3("race a car"));

    // 
    