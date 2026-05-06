// Binary tree

    class nodeTree{
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    let root1 = new nodeTree(3);
    root1.left = new nodeTree(9);
    root1.right = new nodeTree(20);
    root1.left.left = new nodeTree(15);
    root1.left.right = new nodeTree(7);

// Bài 1 : Maximum depth of binary tree

// Đề bài : Cho 1 cây nhị phân , tính chiều cao (độ sâu lớn nhất) của nó 

    function maxDepth(root){
        if(!root) return 0;
        let leftDepth = maxDepth(root.left);
        let rightDepth = maxDepth(root.right);
        return 1 + Math.max(leftDepth , rightDepth);
    }

    console.log(maxDepth(root1));

// Bài 2 : Invert binary tree 

// Đề bài : Đảo ngược cây nhị phân (đổi vị trí left và right ở mọi node )
    
    function invertBinaryTree(root){
        if(!root) return;
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
        invertBinaryTree(root.left);
        invertBinaryTree(root.right);
        return root;
    }

    console.log(invertBinaryTree(root1));