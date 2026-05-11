// Tuần 1 - Ngày 2 : Same Tree & Symmetric Tree (So sánh và đối xứng cây)

// - Lý thuyết trọng tâm 
    // 1 . So sánh 2 cây (samee tree) 
    // - Hai cây được gọi là giống hệt nhau nếu 
        // + Cả hai cây đểu rỗng 
        // + Cả 2 cây không rỗng , giá trị tại node hiện tại bằng nhau , cây con trái và cây con phải giống nhau
    // - Đây là một dạng đệ quy song song (duyệt đồng thời 2 cây)
    
    // 2. Cây đối xứng 
    // - Một cây nhị phân được gọi là đối xứng qua trục giữa (gương) nếu : cây con trái và cây con phải của gốc là hình ảnh phản chiếu của nhau
    // - Hai cây t1 và t2 là ảnh phản chiếu nên :
        // + Cả 2 đều rỗng 
        // + Giá trị của t1 bằng t2 , t1.left phản chiếu với t2.right và t1.right phản chiếu với t2.left

// - Bài tập bắt buộc 