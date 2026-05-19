// Bài 1 : Validate Binary Search Tree (leetCode #98) - Trung bình 
// Đề bài : Cho 1 cây nhị phân , kiểm tra xem nó có phải là BST hợp lệ hay không

class nodeTree{
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    let root1 = new nodeTree(1);
    root1.left = new nodeTree(2);
    root1.right = new nodeTree(3);
    root1.left.right = new nodeTree(5);
    root1.left.left = new nodeTree(4);
    root1.right.left = new nodeTree(6);
    root1.right.right = new nodeTree(7);
    root1.right.right.right = new nodeTree(8);

    let root2 = new nodeTree(5);
    root2.left = new nodeTree(3);
    root2.right = new nodeTree(7);
    root2.left.left = new nodeTree(1);
    root2.left.right = new nodeTree(4);
    root2.right.right = new nodeTree(10);
    root2.right.left = new nodeTree(6);

    function isBST(root , min = -Infinity , max = Infinity){
        if(!root) return true;
        if(root.value < min || root.value > max) return false;
        return isBST(root.left , min , root.value) && isBST (root.right , root.value , max);
    }
    console.log(isBST(root1));
    console.log(isBST(root2));

// Bài 2 : Search in a Binary Search Tree (leetCode #700) - Dễ 
// Đề bài : Cho 1 BST và giá trị val -> tìm node có giá trị = val , nếu không có trả về null 

    function searchValBST(root , val){
        if(!root) return null;
        if(root.value === val) return root;
        if(root.value > val) return searchValBST(root.left , val);
        else return searchValBST(root.right , val);
    }
    console.log(searchValBST(root2 , 4))

// Bài 3 : Insert into a Binary Search tree (leetCode #701) - trung bình 
// Đề bài : Chèn 1 giá trị vào BST (giả sử giá trị chưa tồn tại ) -> trả về root sau khi chèn 

    function insertValBST(root , val){
        
    }