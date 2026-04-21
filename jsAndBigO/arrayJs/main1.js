// Ôn tập các method của array với java script hiện đại 

// map() : tạo ra một mảng mới từ mảng ban đầu -> có thể tác động dữ liệu từ mảng cũ rồi lưu sang mảng mới  -> hàm có thể truyền 3 tham số 
    // + duyệt qua toàn bộ phần tử , áp dụng hàm callback
    // + trả về mảng mới cùng độ dài với mảng ban đầu

    let toys = [`LEGO`,`smart phone`,`clock`,`MOUSE`];
    let aToys = toys.map(function(value){return `a ${value}`});
    console.log(toys);
    console.log(aToys);

    // -> thay đổi giữ liệu đối với toàn mảng mà không làm thay đổi giá trị mảng cũ

// filter() : tạo ra một mảng mới từ mảng ban đầu -> lưu những giá trị thỏa mãn điều kiện của hàm -> hàm có thể truyền 3 tham số 
    // callback trả về true -> giữ lại , trả về false -> bỏ

    let uToys = toys.filter(function(value){return value === value.toUpperCase()});
    console.log(uToys);

    // -> lọc các dữ liệu phù hợp vào mảng mới mà không làm thay đổi giá trị mảng cũ

// reduce() : duyệt toàn bộ mảng và lưu/tính toán giá trị trong mảng vào tham số truyền vào hàm -> hàm này có thể truyền vào 4 tham số
    // + có thể trả về bất kỳ kiểu dữ liệu nào 
    // + sử dụng tìm min/max sum

    let allToys = toys.reduce(function(sum , currentValue){return `${sum} , ${currentValue}`}, " List:");
    console.log(allToys);

    let longToy = toys.reduce(function(long , currentValue){return currentValue.length < long.length ? long = currentValue : long }, toys[0]);
    console.log(longToy)

// slice() : cắt mảng 
    // + trả về mảng mới từ vị trí start đến vị trí end (không bao gồm end)
    // + không làm thay đổi mảng gốc
    // + có thể dùng chỉ số âm

    let halfToys = toys.slice(0,2);
    console.log(halfToys);

// splice() : thay đổi mảng 
    // + thay đổi mảng gốc
    // + xóa / thêm / thay thế phần tử tại vị trí bất kì
    // + trả về mảng với các phần tử bị thay đổi

    let deleteIndex = toys.findIndex(value => value === `clock`);
    let changeToys = toys.splice(deleteIndex ,1);
    console.log(changeToys);
    console.log(toys);

// sort() : sắp xếp mảng
    // + sắp xếp các phần tử của mảng tại chỗ -> thay đổi mảng gốc 
    // + trả về mảng đã sắp xếp 
    // + mặc định chuyển các phần tử trong mảng thành chuỗi -> sắp xếp dựa trên thứ tự unicode

    console.log(toys.sort());
    let arrSo = [5,1,3,9,2,111,2,4];
    console.log(arrSo.sort((a , b) => a - b));
    console.log(arrSo.sort((a , b) => b - a));
    