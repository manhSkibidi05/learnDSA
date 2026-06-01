// Luyện tập về Binary tree 

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
    
// Bài 1 : Inorder Successor in BST (leetcode #285)
// Đề bài : Tìm node kế tiếp của 1 node p trong BST theo thứ tự inorder 

// input : 1 BST , 1 node nằm trong BST đó -> outpput : 1 node kế tiếp của node đã cho bằng cách duyệt inorder 
// -> cách duyệt inorder : duyệt cây con trái -> node hiện tại -> cây con phải 

    function inorderFindBst(root , p){
        let result = null;
        while(root){
            if(p < root.val){
                result = root;
                root = root.left;
            }else{
                root = root.right;
            }
        }
        return result;
    }

    let root2 = new nodeTree(5);
    root2.left = new nodeTree(3);
    root2.right = new nodeTree(7);
    root2.left.right = new nodeTree(4);
    root2.left.left = new nodeTree(1);
    root2.right.left = new nodeTree(6);
    root2.right.right = new nodeTree(11);

    console.log(inorderFindBst(root2 , 11));

    // 1 . Độ phức tạp thời gian và không gian của phép duyệt inorder trên cây nhị phân có n node là bao nhiêu ?
    // -> O(n)  thời gian , O(h) không gian : h là chiều cao của cây .

    // 5 . Duyệt BFS có thể thay thế bằng DFS không ? Khi nào nên dùng BFS thay vì DFS 
    // -> BFS dùng hàng đợi phù hợp khi duyệt theo tầng (tìm đường đi ngắn nhất ) , DFS dùng ngăn xếp tiết kiệm bộ nhớ hơn với cây sâu nhưng gây tràn
    // stack nếu cây quá sâu 

// Bài 2 : Binary tree zigzag level order traversal (leetcode #103)
// Đề bài : Duyệt cây theo tầng , nhưng xen kẽ : tầng 0 từ trái sang phải , tầng 1 từ phải sang trái ...

    function bfsZigzag(root){
        let queue = [];
        queue.push(root);

        let result = [];
        let leftToRight = true;
        while(queue.length === 0){
            let levelSize = queue.length;
            let level = [];
            for(let i = 0 ; i < levelSize ; i++){
                const node = queue.shift();
                if(leftToRight) level.push(node.val);
                else level.unshift(node.val);
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            result.push(level);
            leftToRight = !leftToRight;
        }
        return result;
    }

    