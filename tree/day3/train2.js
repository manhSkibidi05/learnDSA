// Bài tập bắt buộc 

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

// Bai 2 : Binary tree level order traversal 2 (leetcode #107) - easy
// Đề bài : thêm các node trên cùng 1 hàng vào 1 mảng con sau đó thêm vào mảng to -> trả về mảng to chứa các mảng con chứa node cùng hàng (level)

    function leverOrder2(root){
        let queue = new Queue();
        let results = [];
        queue.enqueue(root)

        while(!queue.isEmpty()){
            let size = queue.items.length;
            let newArr = [];
            for(let i = 0 ; i < size ; i++){
                let node = queue.dequeue();
                newArr.push(node.value);
                if(node.left) queue.enqueue(node.left);
                if(node.right) queue.enqueue(node.right);
            }
            results.push(newArr);
            
        }
        return results.reverse();
    }
    console.log(leverOrder2(root1));

// Bài 3 : Binary tree right side view (leetcode #109) - medium
// Đề bài : in ra các node nhìn từ bên phải -> node cuối cùng mỗi tầng nhìn từ bên phải sang thêm vào mảng trả về mảng đó 

    function nodeRightView(root){
        let results = [];
        let queue = new Queue();
        queue.enqueue(root);

        while(!queue.isEmpty()){
            let size = queue.items.length;
            for(let i = 1 ; i <= size ; i++){
                let node = queue.dequeue();
                if(i === size) results.push(node.value);
                if(node.left) queue.enqueue(node.left);
                if(node.right) queue.enqueue(node.right);
            }
        }
        return results;
    }
    console.log(nodeRightView(root1));

