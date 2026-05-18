// - Cây nhị phân là : Cấu trúc dữ liệu phi tuyến tính lưu trữ dữ liệu dưới dạng 1 node 
// -> 1 node có thể chứa node con trái và phải và chứa dữ liệu của node đó

    class nodeBinaryTree{
        constructor(val){
            this.value = val;
            this.left = null;
            this.right = null;
        }
    }
    let root1 = new nodeBinaryTree(1);
    root1.left = new nodeBinaryTree(2);
    root1.right = new nodeBinaryTree(3);
    root1.left.left = new nodeBinaryTree(4);
    root1.left.right = new nodeBinaryTree(5);

// - Cách duyệt cây nhị phân :
    // + DFS (depth first search) : duyệt đi sâu xuống nhanh con trước sau đó quay lại nhánh cha 
    // -> DFS tổng cộng 3 cách duyệt nhưng đều mang cách duyệt đi sâu xuống nhánh trước chỉ thay đổi vị trí thao tác với giá trị 
        // - preorder : thao tác với node hiện tại trước khi sang node tiếp theo 
        // -> thao tác với node cha rồi mới đến node con 1 bên : sử dụng đệ quy 

        function preorder(root){
            if(!root) return;
            console.log(root.value);
            preorder(root.left);
            preorder(root.right);
        }
        console.log(`Duyệt preorder : `)
        preorder(root1);

        // - inorder : đi sâu xuống 1 nhánh rồi mới thao tác với node tại nhánh đó rồi thao tác node hiện tại xong mới thao tác với nhánh còn lại
        // -> thao tác với 1 node con 1 bên trước rồi mới thao tác node cha : sử dụng đệ quy 
        
        function inorder(root){
            if(!root) return;
            inorder(root.left);
            console.log(root.value);
            inorder(root.right)
        }
        console.log(`Duyệt inorder : `);
        inorder(root1)

        // - postorder : đi sâu xuống 1 nhánh rồi thao tác với nhánh đó rồi thao tác với nhánh còn lại xong mới tới nhánh hiện tại 
        // -> thao tác với node con trước rồi mới đến node cha : sử dụng đệ quy 

        function postorder(root){
            if(!root) return;
            inorder(root.left);
            inorder(root.right);
            console.log(root.value);
        }
        console.log(`Duyệt postorder : `)
        postorder(root1);

    // + BFS (breadth first search) : Duyệt đi hết các node của 1 cấp độ rồi mới đến cấp độ kế tiếp 
    // -> 1 cấp độ là số node trên cùng 1 hàng duyệt hết hàng trên xong mới tới hàng dưới từ trái sang phải 
    // -> sử dụng hàng đợi để duyệt 

    class Queue{
        constructor(){
            this.items = [];
        }

        enqueue(val){
            this.items.push(val);
        }

        dequeue(){
            let deleted = this.items.shift();
            return deleted;
        }
    }

    function breadthFirstSearch(root){
        let queue = new Queue();
        queue.enqueue(root);

        while(queue.items.length !== 0){
            let node = queue.dequeue();
            console.log(node.value);
            if(node.left) queue.enqueue(node.left);
            if(node.right) queue.enqueue(node.right);
        }
    }
    console.log(`Duyệt theo BFS : `)
    breadthFirstSearch(root1);
