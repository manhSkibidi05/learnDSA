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

    function preorder(root , arr){
        if(root === null) return;
        arr.push(root.value);
        preorder(root.left , arr);
        preorder(root.right , arr);
    }

    let arr1 = [];
    preorder(root1 ,arr1 );
    console.log(arr1)


// deepseek

function preorder(root, result = []) {
    if (!root) return result;
    result.push(root.val);
    preorder(root.left, result);
    preorder(root.right, result);
    return result;
}

function inorder(root, result = []) {
    if (!root) return result;
    inorder(root.left, result);
    result.push(root.val);
    inorder(root.right, result);
    return result;
}

function postorder(root, result = []) {
    if (!root) return result;
    postorder(root.left, result);
    postorder(root.right, result);
    result.push(root.val);
    return result;
}