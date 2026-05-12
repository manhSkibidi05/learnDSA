// Bài tập bắt buộc 

    // Bài 1 : Binary Tree level oreder travelsal (leetcode #102) - Trung bình 

    // Đề bài : Cho cây nhị phân trả về mảng 2 chiều chứa giá trị các node theo từng tầng mỗi tầng 1 mảng con

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

    function levelOrder(root){
        let hangDoi = new Queue();
        hangDoi.enqueue(root);

        let result = [];
        while(!hangDoi.isEmpty()){
            let size = hangDoi.items.length;
            let newArr = [];

            for(let i = 1 ; i <= size ; i++){
                let node = hangDoi.dequeue();
                newArr.push(node.value);
                if(node.left) hangDoi.enqueue(node.left);
                if(node.right) hangDoi.enqueue(node.right);
            }
            result.push(newArr);
        }
        return result;
    }
    console.log(levelOrder(root1))
    