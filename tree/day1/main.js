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

// 4. biểu diễn trong JS 
    
    class nodeTree{
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    const root = nodeTree(10);
    root.left = nodeTree(5);
    root.right = nodeTree(7);
    root.left.left = nodeTree(3);
    root.left.right = nodeTree(2);
    root.right.right = nodeTree(9);

