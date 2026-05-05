// Bài tập vận dụng các phương pháp duyệt cây (DFS - preorder/inorder/postorder)

// Bài 1 : duyệt cây và in ra mảng 

// đề bài : cho 1 cây nhị phân , hãy viết hàm trả về mảng các giá trị theo thứ tự preorder , inorder , postorder

    class nodeTree{
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    let root1 = new nodeTree(`A`);
    root1.left = new nodeTree(`B`);
    root1.right = new nodeTree(`C`);
    root1.left.left = new nodeTree(`D`);
    root1.left.right = new nodeTree(`E`);

    function preorder(root , arr = []){
        if(root === null) return arr;
        arr.push(root.value);
        preorder(root.left , arr);
        preorder(root.right , arr);
        return arr;
    }

    console.log(preorder(root1));
    
    function inorder(root , arr = []){
        if(root === null) return arr;
        inorder(root.left , arr);
        arr.push(root.value);
        inorder(root.right , arr);
        return arr;
    }

    console.log(inorder(root1));

    function postorder(root , arr = []){
        if(root === null) return arr;
        postorder(root.left ,arr);
        postorder(root.right , arr);
        arr.push(root.value);
        return arr;
    }

    console.log(postorder(root1));

// Bài 2 : tìm node thứ k theo thứ tự inorder 

// Đề bài : cho 1 cây nhị phân tìm kiếm (BST) và số nguyên k -> tìm giá trị tại node thứ k khi duyệt cây = inorder
    const root2 = new nodeTree(5);
    root2.left = new nodeTree(3);
    root2.right = new nodeTree(6);
    root2.left.left = new nodeTree(2);
    root2.left.right = new nodeTree(4);

    function inorderFindK(root , k){
        let count = 0;
        let result = null;

        function recursive(node){
            if(node === null || result !== null) return;
            recursive(node.left);
            count++;
            if(count === k) result = node.value;
            recursive(node.right);
        }

        recursive(root);
        return result;
    }

    console.log(inorderFindK(root2 , 5))

// Bài 4 : inorder successor in BST 

// Đề bài : cho 1 BST và 1 node p -> tìm node kế tiếp của p trong thứ tự inorder 

    function inorderFindNextP(root , p){
        let check = false;
        let result = null;

        function recursive(node){
            if(node === null || result !== null) return;
            recursive(node.left);
            if(check) {
                result = node.value;
                check = false;
            } 
            if(p === node.value) check = true;
            recursive(node.right);
        }
        recursive(root);
        return result;
    }

    console.log(inorderFindNextP(root2,6));

// Bài 5 : Tính giá trị biểu thức từ cây biểu thức (Postorder)

// Đề bài : Cho cây biểu thức nhị phân 

