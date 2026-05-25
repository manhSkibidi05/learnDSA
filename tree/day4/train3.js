class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Bài 3 : Xóa 1 node trong  BST
// Đề bài : Xóa 1 node dựa trên giá trị cho trước -> nếu node không có con gán = null , node có 1 con đẩy node con lên node hiện tại 
// node có 2 con đẩy tìm node nhỏ nhất bên phải (hoặc lớn nhất bên trái ) đẩy giá trị đó lên rồi xóa node con đó 

function deleteNode(root, key) {
    if (!root) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Tìm thấy node cần xóa
        // TH1: Node lá hoặc chỉ có 1 con
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // TH2: Node có 2 con → tìm inorder successor (nhỏ nhất bên phải)
        let successor = root.right;
        while (successor.left) successor = successor.left;
        root.val = successor.val;
        // Xóa node successor (nó có 0 hoặc 1 con phải)
        root.right = deleteNode(root.right, successor.val);
    }
    return root;
}

// Bài 4 : Chuyển mảng đã sắp xếp thành BST cân bằng 

// hàm chuyển mảng sắp xếp thành BST -> đầu vào là 1 mảng 
function sortedArrayToBST(nums) {
    // kiểm tra kích thước ban đầu mảng nếu = 0 -> trả về null
    if (!nums.length) return null;

    // khởi tạo 1 hàm với 2 tham số cần truyền -> left là vị trí đầu tiên : 0 , right vị trí cuối cùng mảng : length - 1
    function build(left, right) {
        // base case : khi left > right trả về null
        if (left > right) return null;
        // gán phần tử giữa = trái + phải chia đôi 
        const mid = Math.floor((left + right) / 2);
        // tạo node mới = giá trị tại node ở giữa 
        const node = new TreeNode(nums[mid]);
        // gán node con bên trái = đệ quy khoảng cách từ vị trí đầu đến giữa 
        node.left = build(left, mid - 1);
        // gán node con bên phải = đệ quy khoảng cách từ vị trí giữa đến cuối 
        node.right = build(mid + 1, right);
        return node;
    }

    return build(0, nums.length - 1);
}

// Bài 5 : Kiểm tra 2 cây có giống nhau không 

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}