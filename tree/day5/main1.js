// Tuần 1 - Ngày 5 : Lowest Common Ancestor (LCA) - Tổ tiên chung thấp nhất 

    //- Bài toán cổ điển và quan trọng : Tìm tổ tiên chung gần nhất (lowest common ancestor - LCA) của 2 node trong cây nhị phân 
    //-> Đây là ứng dụng đẹp của đệ quy và tư duy duyệt cây 

    // - Lý thuyết trọng tâm 
    // + LCA là gì ?
        // - Cho 1 cây nhị phân (có thể là BST) và 2 node p và q
        // - LCA là node sâu nhất (xa gốc nhất ) mà có cả p và q là con cháu (bao gồm chính nó có thể là b hoặc q)

    // + 2 dạng bài bắt buộc phải làm :
    // 1. LCA trên BST 
    // 2. LCA trên cây nhị phân thường 