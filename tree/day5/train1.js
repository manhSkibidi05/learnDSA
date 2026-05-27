// Bài tập bắt buộc 
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Bài 1 : LCA trong BST (leetcode #235) - Dễ 
// Đề bài : Cho 1 BST và 2 node p và q -> tìm LCA của chúng (Không nhất thiết p và q khác nhau)

    function lowestCommonAncestorBst(root , p , q){
        if(root.val === p || root.val === q) return root;
        else if(root.val > p && root.val > q) return lowestCommonAncestorBst(root.left , p , q);
        else if(root.val < p && root.val < q) return lowestCommonAncestorBst(root.right , p , q);
        else return root;
    }

    const root1 = new TreeNode(5);
    root1.left = new TreeNode(3);
    root1.right = new TreeNode(8);
    root1.left.left = new TreeNode(2);
    root1.left.right = new TreeNode(4);
    root1.right.left = new TreeNode(7);
    root1.right.right = new TreeNode(10);
    root1.right.right.left = new TreeNode(9);
    root1.right.right.right = new TreeNode(12);

    console.log(lowestCommonAncestorBst(root1 , 10 , 7))

// Bài 2 : LCA trong cây nhị phân thường (leetcode #236) - trung bình 
// Đề bài : Cho cây nhị phân (không có tính chất BST) -> tìm LCA của p và q 

    function findLCA(root , p , q){
        // kiểm tra điều kiện dừng -> root = null trả về null
        if(root === null) return null;
        // nếu root = p hoặc q -> trả về root 
        if(root === p || root === q) return root;

        // left là cây con bên trái -> gọi đệ quy chạy xuống node cuối 
        const left = findLCA(root.left , p , q);
        // right là cây con bên phải -> gọi đệ quy chạy xuống node cuối 
        const right = findLCA(root.right , p , q);

        // điều kiện sau khi đệ quy gặp điều kiện dừng ở cả 2 cây con 
        // nếu cả trái và phải đều khác null -> 
        if(left !== null && right !== null) return root;
        if(left !== null) return left;
        if(right !== null) return right;

        return null;
    }

    const root = new TreeNode(3);
    root.left = new TreeNode(5);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(6);
    root.left.right = new TreeNode(2);
    root.right.left = new TreeNode(0);
    root.right.right = new TreeNode(8);
    root.left.right.left = new TreeNode(7);
    root.left.right.right = new TreeNode(4);

    const p = root.left; // 5
    const q = root.right; // 1
    console.log(findLCA(root, p, q).val); // 3

    


    // - Các bước xử lí khi gặp bài toán khó : 
    // 1. Hiểu rõ vấn đề - Đặt câu hỏi ngược 
        // + input là gì ? 
        // + output trả về cần có dạng như thế nào ?
        // + nếu đề bài nói về các CTDL hay GT hãy nhắc lại định nghĩa và tính chất của nó 
    // 2 . Tìm bài toán con - Áp dụng đệ quy hoặc quy hoạch động 
        // + có thể chia bài toán thành các phần nhỏ hơn cùng dạng không ? 
        // -> nếu là cây thường đệ quy xử lý xong cây con trái rồi phải 
        // -> nếu có cấu trúc lặp lại nghĩ đến quy hoạch động hoặc memoization
    // 3. Liệt kê ra các trường hợp có thể xảy ra 
        // + đây là bước quan trọng nhất -> hãy vẽ các tình huống có thể xảy ra và xử lí từng cái 1 
    // 4. Viết code cho trường hợp đơn giản nhất rồi mở rộng
        // + bắt đầu từ trường hợp cơ bản (base case) 
        // + sau đó mở rộng dần lên các trường hợp phức tạp hơn 
    // 5. Tối ưu và tổng kết công thức cho các dạng bài 
        // + ghi lại dạng bài 
        // + ghi lại cách giải chung cho dạng bài đó
        // + ghi lại cạm bẫy thường gặp 