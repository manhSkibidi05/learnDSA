// 1 . Khái niệm cơ bản về cây 

    // - node : một phần tử trong cây , chứa giá trị và liên kết đến các node con 
    // - root : node đầu tiên và không có cha 
    // - leaf (lá) : node không có con 
    // - edge : liên kết giữa cha và con 
    // - chiều cao (height) : số cạnh từ node xuống node lá xa nhất 
    // - độ sâu (depth) : số cạnh từ gốc đến node 
    // - bậc (degree) : số node con trực tiếp của 1 node
    
    // - biểu diễn cây nhị phân trong js :

    class treeNode{
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

// 2 . Các loại cây phổ biến 

    // - cây nhị phân : mỗi node có <= 2 con -> ứng dụng : biểu thức , cây quyết định
    // - cây nhị phân tìm kiếm (BST) : left < node < right -> ứng dụng : tìm kiếm lưu trữ có thứ tự 
    
// 3. Cài đặt cây nhị phân và các thao tác cơ bản 

    