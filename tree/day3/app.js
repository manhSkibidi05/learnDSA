// Tuần 1 - Ngày 3 : BFS - Duyệt cây theo tầng (level-order Traversal)

    // -> Cách duyệt BFS (Breadth-first search) khác hoàn toàn với DFS , sử dụng hàng đợi thay vì ngăn xếp 
    // -> Cách duyệt BFS theo từng tầng (level) từ gốc xuống lá , từ trái sang phải đây là nền tảng cho nhiều bài toán như tìm đường đi ngắn nhất , kiểm tra cây hoàn hảo

// - Lý thuyết trọng tâm 
// - BFS là gì ? 
    // + Duyệt lần lượt các tầng : Tầng 0 (gốc) , tầng 1 , tầng 2...
    // + Trong mỗi tầng , duyệt từ trái sang phải 
    // + Khác với DFS (đi sâu xuống nhánh ) , BFS sử dụng hàng đợi 

// - Thuật toán BFS cơ bản : 
    // 1. Khởi tạo hàng đợi rỗng , đưa root vào hàng đợi 
    // 2. Lặp khi hàng đợi không rỗng 
        // + lấy node ở đầu hàng đợi ra
        // + Thăm node đó (in , lưu vào arr)
        // + Nếu node có con trái -> đưa con trái vào queue
        // + Nếu node có con phải -> đưa con phải vào queue

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

    class Queue{
        constructor(){
            this.items = [];
        }

        enqueue(value){
            this.items.push(value);
        }

        dequeue(){
            let deleted = this.items.shift();
            return deleted;
        }

        isEmpty(){
            if(this.items.length === 0) return true;
            return false;
        }
    }

    function bfs(root){
        let hangDoi = new Queue();
        hangDoi.enqueue(root);
        while(!hangDoi.isEmpty()){
            let node = hangDoi.dequeue();
            console.log(node.value);
            if(node.left) hangDoi.enqueue(node.left);
            if(node.right) hangDoi.enqueue(node.right);
        }
    }
    bfs(root1);