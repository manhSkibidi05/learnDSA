// Cấu trúc cây nhị phân 

    class nodeTree{
            constructor(value){
                this.val = value;
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

// 4. LCA của 1 cây nhị phân - lowest common ancestor 

    // - Bài toán cổ điển giúp tìm kiếm tổ tiên gần nhất của 2 node trong cùng 1 cây nhị phân (có thể là BST) 
    // -> tổ tiên gần nhất của 2 node là chung node cha tính cả trường hợp node cha là  1 trong 2 node đang tìm 
    // -> sử dụng đệ quy để tìm kiếm 

    // Bài 4.1 : Cho 1 BST viết hàm tìm LCA của 1 cây nhị phân tìm kiếm findLCA(root , p , q) -> tìm tổ tiên gần nhất của 2 node của cây nhị phân tìm kiếm 

    function findLCA(root , p , q){
        if(!root) return null;
        if(root.val === p || root.val === q) return root.val;
        if(root.val > p && root.val > q) return findLCA(root.left , p  , q);
        if(root.val < p && root.val < q) return findLCA(root.right , p , q);
        return root.val;
    }
    let root2 = new nodeTree(3);
    root2.left = new nodeTree(1);
    root2.right = new nodeTree(5);
    root2.right.left = new nodeTree(4);
    root2.right.right = new nodeTree(9);
    
    console.log(findLCA(root2 , 4 , 9))

    // Bài 4.2 : Cho 1 cây nhị phân thường viết hàm lcaBinaryTree(root ,p , q) -> tìm tổ tiên gần nhất của 2 node trên cây nhị phân thường 

    function lcaBinaryTree(root , p , q){
        if(!root) return null;
        if(root.val === p || root.val === q ) return root.val;
        let leftNode =  lcaBinaryTree(root.left , p , q);
        let rightNode = lcaBinaryTree(root.right , p , q);

        if(leftNode && !rightNode) return leftNode; 
        if(rightNode && !leftNode) return rightNode;
        if(leftNode && rightNode) return root.val;

    }
    console.log(lcaBinaryTree(root1 , 6 , 8));

// 5. Maximum Path Sum - Bài toán giúp tìm ra chuỗi có tổng giá trị lớn nhất trong 1 cây nhị phân  

    // - Chuỗi trong cây nhị phân là các node có liên kết với nhau qua cạnh , chuỗi này có thể bắt đầu và kết thúc ở bất kì node nào miễn là khi đạt được giá trị lớn nhất
    // -> sử dụng đệ quy để duyệt toàn bộ node trong cây tìm ra chuỗi giá trị lớn nhất 

    function max(root){
        let result = -Infinity;
        function maxPathSum(node){
            if(!node) return 0;

            let leftNode = maxPathSum(node.left);
            let rightNode = maxPathSum(node.right);
            
            let maxNode = Math.max(node.val+leftNode , node.val+rightNode , node.val+leftNode+rightNode);
            if(maxNode >= result){ 
                result = maxNode;
            } 
            return maxNode;
        }
        maxPathSum(root);
        return result;
    }
    
    let root3 = new nodeTree(-10);
    root3.left = new nodeTree(9);
    root3.right = new nodeTree(20);
    root3.right.left = new nodeTree(15);
    root3.right.right = new nodeTree(7);

    console.log(max(root3));