// Tuần 1 - Ngày 7 : Ôn tập các kiến thức đã học về cây nhị phân 

// 1 . Cấu trúc cây nhị phân 

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

// 2. Các cách duyệt cây nhị phân 

    // 2.1. Duyệt theo chiều sâu - DFS : depth first search
    // - Cách duyệt này sẽ đi sâu xuống node con bên trái trước rồi mới quay lại với node con bên phải 
    // - Sử dụng đệ quy (ngăn xếp) đối với cách duyệt này có 3 hình thức phổ biến : preorder , inorder , postorder 

    // - preorder : phương pháp duyệt này giúp thao tác với node hiện tại trước sau đó đi sâu node con trái rồi mới đến node con phải

    function preorder(root){
        if(!root) return;
        console.log(root.val)
        preorder(root.left);
        preorder(root.right);
    }
    preorder(root1);
    
    // - inorder : phương pháp duyệt này sẽ duyệt node cây con trái trước rồi node hiện tại sau cùng là cây con phải

    function inorder(root){
        if(!root) return;
        inorder(root.left);
        console.log(root.val);
        inorder(root.right);
    }
    console.log(`----------`);
    inorder(root1);

    // - postorder : phương pháp duyệt này duyệt node cây con trái trước sau đó đến node cây con phải cuối cùng mới đến node hiện tại 

    function postorder(root){
        if(!root) return;
        postorder(root.left);
        postorder(root.right);
        console.log(root.val);
    }
    console.log(`----------`);
    postorder(root1);

    // - Bài tập : Maximum depth of binary tree (leetcode #104) - Dễ 
    // Đề bài : Cho 1 cây nhị phân -> tính chiều cao của cây (độ sâu lớn nhất của cây) biết độ sâu của root = 1

    function maxDepth(root){
        if(!root) return 0;
        let nodeLeft = maxDepth(root.left);
        let nodeRight = maxDepth(root.right);
        return Math.max(nodeLeft , nodeRight) + 1;
    }
    console.log(`----------`);
    console.log(maxDepth(root1))

    // 2.2. Duyệt theo chiều rộng - BFS 
    // - Cách duyệt này sẽ duyệt tất cả các node trên cùng 1 hàng (level) xong trước rồi mới đến hàng kế tiếp 
    // - Sử dụng hàng đợi đối với cách duyệt này 

    function bfs(root){
        let queue = [];
        queue.push(root);

        while(queue.length !== 0){
            let node = queue.shift();
            console.log(node.val)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    console.log(`----------`);
    bfs(root1);

// 3.Cây nhị phân tìm kiếm - BST : binary search tree

    // - Tính chất : cây nhị phân tìm kiếm luôn có giá trị ở node hiện tại nhỏ hơn node con phải và lơn hơn node con trái 

    // - Kiểm tra cây nhị phân có phải cây nhị phân tìm kiếm hay không : Sử dụng 2 đối số min , max -> giá trị của node hiện tại phải luôn nằm trong khoảng này
    // -> Khi sang cây con trái cập nhật max , sang cây con phải cập nhật min

    function isBST(root , min = -Infinity , max = Infinity){
        if(!root) return true;
        if(root.val < min || root.val > max) return false;
        let nodeLeft = isBST(root.left , min , root.val);
        let nodeRight = isBST(root.right , root.val , max);
        return nodeLeft && nodeRight;
    }
    console.log(`----------`);
    let root2 = new nodeTree(5);
    root2.left = new nodeTree(3);
    root2.right = new nodeTree(7);
    console.log(isBST(root1));
    console.log(isBST(root2));

// - Với bài toán cây nhị phân sử dụng đệ quy : 
// + xác định yêu cầu đề bài đầu ra , đầu vào , cần các CTDL hay giải thuật bắt buộc hãy nêu tính chất của nó 
// + xác định trường hợp đơn giản nhất đối với bài toán đó 
// + xác định các trường hợp khác xảy ra 
// + Hình dung khi đệ quy sẽ duyệt hết  cây con trái rồi mới đến cây con phải -> duyệt hết node con bên trái xong node con bên phải
// + Kết hợp điều kiện khi đệ quy kết thúc 
// + Tối ưu hóa bài toán 