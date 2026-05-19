// Tuần 1 - Ngày 4 : Cây nhị phân tìm kiếm (BST) và validate BST

// - Cây nhị phân tìm kiếm (Binary Search Tree - BST) - một cấu trúc dữ liệu cực kỳ quan trọng , giúp tìm kiếm chèn , xóa nhanh (O(logn)) nếu cây cân bằng
// -> Trọng tâm là bài toán kiểm tra 1 cây có phải BST hợp lệ hay không 

    // Lý thuyết trọng tâm 
    // 1. Cây nhị phân tìm kiếm là gì ? 

    // - BST là cây nhị phân thỏa mãn tính chất bất biến :
        // + Với mọi node : 
        // Tất cả node trong cây con trái đều có giá trị nhỏ hơn giá trị hiện tại 
        // Tất cả node trong cây con phải đều có giá trị lớn hơn giá trị hiện tại 
        // + Không có giá trị trùng lặp (thường vậy , nếu có thì quy ước bên trái hoặc phải)
        
    // 2. Tại sao cần kiểm tra BST ? 
    
    // - Nhiều bài toán yêu cầu thao tác trên BST (tìm kiếm , thêm , xóa , tìm k nhỏ nhất ...) trước hết phải biết cây đã cho có đúng
    // là BST hay không 
    // - Duyệt inorder trên BST sẽ cho ra 1 mảng tăng dần (một cáh kiểm tra khác)

    // 3. Cách kiểm tra BST một cách hợp lệ

    // - Sai lầm thường gặp : node.left.val < node.val < node.right.val là không đủ . Vì cây con phải bên dưới có thể chứa giá trị lớn hơn node hiện tại 
    // - Giải pháp đúng : Duyệt cây với khoảng cho phép (min , max) cho mỗi node 
        // + Ban đầu min = - infinity , max = infinity 
        // + Tại node hiện tại giá trị node phải nằm trong khoảng (min , max)
        // + khi đi sang cây con trái -> cập nhật max = node.val (vì tất cả node bên trái phải nhỏ hơn node hiện tại)
        // + Khi đi sang cây con phải -> cập nhật min = node.val (vì tất cả node bên phải phải lớn hơn node hiện tại)

// Bài tập bắt buộc