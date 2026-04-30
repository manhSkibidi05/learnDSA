// 1 . Làm quen với đệ quy trên cây 

// -> mục tiêu : hiểu cách đệ quy hoạt động trên cây nhị phân qua 2 bài tập kinh điển (easy)

// 2. Lý thuyết trọng tâm 

    // - cấu trúc 1 node trên cây nhị phân 

    class treeNode{
        constructor(val , left = null , right = null){
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    // - đệ quy trên cây - công thức tổng quát 

    function solve(root){
        // 1.base case 
        if(root === null) return;

        // 2. gọi tiếp đệ quy trên cây con trái và phải 
        const leftResult = solve(root.left);
        const rightResult = solve(root.right);

        // 3. kết hợp kết quả từ trái/phải với node hiện tại 
        return combine(root.val , leftResult , rightResult);

    }

    // - duyệt cây theo chiều sâu (DFS)
        // + Preorder (node -> left -> right)
        // + Inorder (left -> node -> right)
        // + Postorder (left -> right -> node)

// 3. biểu diễn trong JS 
    
    class nodeTree{
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    const root = new nodeTree(5);
    root.left = new nodeTree(10);
    root.right = new nodeTree(15);
    root.left.left = new nodeTree(20);
    root.left.right = new nodeTree(25);
    root.right.left = new nodeTree(30);
    root.right.right = new nodeTree(35);

// 4. chi tiết về : duyệt cây theo chiều sâu (DFS) trên cây nhị phân 

    // - DFS là cách duyệt cây mà ở mỗi node , bạn cố gắng đi sâu xuống nhánh con trước khi quay lui để duyệt các nhánh khác 
    // - Có 3 thứ tự duyệt chính : Preorder , Inorder , Postorder -> tất cả đều dựa trên đệ quy (hoặc stack)

    // 1. Preorder (Node -> left -> right)
        // - Thứ tự thăm : 
        // 1. Thăm node hiện tại (xử lí giá trị của nó)
        // 2. duyệt cây con bên trái (đệ quy)
        // 3. duyệt cây con bên phải (đệ quy)

        function preorder(root){
            if(root === null) return;
            console.log(root.value);
            preorder(root.left);
            preorder(root.right);
        }

        preorder(root);

        // - ứng dụng : + tạo bản sao cây + ghi lại cấu trúc cây để lưu trữ + tính toán biểu thức tiền tố 

    // 2. Inorder (left -> node -> right)
        // - Thự tự thăm :
        // 1. duyệt cây con trái 
        // 2. thăm node hiện tại 
        // 3. duyệt cây con phải 

        function inorder(root){
            if(root === null) return;
            inorder(root.left);
            console.log(root.value);
            inorder(root.right);
        }
        console.log(`-------`)
        inorder(root);

        // - ứng dụng : + cây nhị phân tìm kiếm(BST) -> duyệt inorder cho ra mảng tăng dần + lấy dữ liệu đã sắp xếp từ BST

    // 3. Postorder (left -> right -> node)
        // - Thứ tự thăm : 
        // 1. duyệt cây con trái
        // 2. duyệt cây con phải
        // 3. thăm node hiện tại (sau khi duyệt hết con cháu)

        function postorder(root){
            if(root === null) return;
            postorder(root.left);
            postorder(root.right);
            console.log(root.value);
        }
        console.log(`-------`)
        postorder(root);

        // - ứng dụng : + tính chiều cao cây (cần biết chiều cao con trước) + xóa cây (xóa con trước rồi mới xóa cha) + tính toán biểu thức hậu tố (postfix)

    // 4. Cách duyệt bằng stack 

        function preorderIterative(root) {
        if (!root) return;
        const stack = [root];
        while (stack.length) {
            const node = stack.pop();
            console.log(node.val);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
    }