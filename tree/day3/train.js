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

    // hàm thêm tất cả giá trị của node trên 1 cấp (1 hàng) vào 1 mảng rồi thêm mảng con vào 1 mảng lớn 
    function levelOrder(root){
        // sử dụng hàng đợi
        let hangDoi = new Queue();
        // thêm cây (root của cây : node đầu tiên của cây) vào hàng đợi 
        hangDoi.enqueue(root);
        // hàm kết quả cuối
        let result = [];
        // vòng lặp kết thúc khi hàng đợi rỗng
        while(!hangDoi.isEmpty()){
            // kích thước hiện tại của hàng đợi
            let size = hangDoi.items.length;
            // mảng con chứa các giá trị node trên 1 hàng 
            let newArr = [];
            // dựa vào kích thước hiện tại của hàng đợi -> sẽ thêm số giá trị bằng với kích thước hiện tại 
            // vì lúc này chỉ thêm vào mảng giá trị cùng hàng -> khi thêm bao nhiêu phần tử trong 1 lần duyệt thì xóa bấy nhiêu 
            for(let i = 1 ; i <= size ; i++){
                // node = phần tử xóa 
                let node = hangDoi.dequeue();
                // thêm giá trị phần tử đó vào mảng con
                newArr.push(node.value);
                // kiểm tra null -> nếu không null thêm vào hàng đợi 
                if(node.left) hangDoi.enqueue(node.left);
                if(node.right) hangDoi.enqueue(node.right);
            }
            // thêm mảng con vào mảng lơn
            result.push(newArr);
            // trong 1 phiên duyệt xóa số phần tử = số phần tử thêm vào của phiên trước vì với 1 phiên sẽ thêm tất cả node con của node đó
        }
        return result;
    }
    console.log(levelOrder(root1))
    