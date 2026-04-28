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


// - review day 0 :
    //  - cây là cấu trúc dữ liệu phi tuyến tính mỗi dữ liệu được lưu trữ dưới dạng node (1 node bao gồm dữ liệu và có thể chứa con trỏ trỏ đến node con )
    
    // - các thuật ngữ cần nhớ : 
        // + root : rễ cây node này là node đầu và không có cha chỉ có con
        // + leaf : lá cây node này không có con 
        // + edge : liên kết giữa cha và con 
        // + chiều cao (height) : số cạnh từ node xuống lá xa nhất 
        // + độ sâu (depth) : số cạnh từ gốc đến node 
        // + bậc (degree) : số node con trực tiếp của 1 node 
        
    // - các loại cây phổ biến : 
        // + cây nhị phân : cây này 1 node có số lượng con <= 2 
        
    // - biểu diễn cây nhị phân :

    class binaryTree{
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    // - cách xác định chiều cao (height) và độ sâu (depth) của 1 cây 
        // + độ sâu (depth) : xác định vị trí node hiện tại và tính số cạnh từ vị trí node đó đến root (node rễ ) -> node root có depth = 0;
        // + chiều cao (height) : xác định vị trí node hiện tại và tính số cạnh từ vị trí node đó đến leaf (node lá) sâu nhất dưới nó -> các node leaf có height = 0