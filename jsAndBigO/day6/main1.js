// Linked List : Danh sách liên kết 
    // - Linked list là một cấu trúc dữ liệu tuyến tính , trong đó các phần tử (được gọi là 1 node) không lưu trữ liên kết nhau trong bộ nhớ như mảng 
    // - Mỗi node bao gồm : + giá trị (value / data) + con trỏ next trỏ đến node tiếp theo 

    // - so sánh với mảng : 
        // - mảng : + truy cập giá trị theo chỉ số : O(1) 
            // + thêm/xóa ở đầu : O(n) -> dịch chuyển các phần tử còn lại
            // + thêm/xóa ở cuối : O(1)
            // + thêm/xóa ở giữa : O(n) -> duyệt đến giữa mảng 
            // + bộ nhớ liên tục ít overhead hơn

        // - linked list : + truy cập theo chỉ số : O(n) -> phải duyệt từ đầu danh sách
            // + thêm/xóa ở đầu : O(1) -> cập nhật lại head
            // + thêm/xóa ở cuối : O(n) -> duyệt đến cuối danh sách nếu có con trỏ tail -> O(1)
            // + thêm/xóa ở giữa : O(1) -> nếu có node trước
            // + bộ nhớ phân tán cần thêm bộ nhớ cho con trỏ

    // - các loại danh sách liên kết :
        // 1. danh sách liên kết đơn : mỗi node có 1 con trỏ trỏ đến node tiếp theo
        // 2. danh sách liên kết đôi : mỗi node có 2 con trỏ  1 con trỏ trỏ đến node tiếp theo và 1 con trỏ trỏ đến node trước đó
        // 3. danh sách liên kết vòng : lúc này node cuối cùng sẽ trỏ lại về đầu 

// 1.Danh sách liên kết đơn

    // - định nghĩa 1 node :

    class node{
        constructor(data){
            this.data = data;
            this.next = null;
        }
    }

    // - định nghĩa 1 danh sách liên kết đơn :

    class linkedList{
        constructor(){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }

        addFirst(data){
            const newNode = new node(data);
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            }else{
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length++;
            return newNode;
        }

        addLast(data){
            const newNode = new node(data);
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            }else{
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
            return newNode;
        }

        removeFirst(){
            if(!this.head) return null;

            let removed = this.head;
            this.head = this.head.next;
            this.length--;

            if(this.length === 0) this.tail = null;
            return removed;
        }

        removeLast(){
            if(!this.head) return null;

            let removed = this.tail;
            if(this.length === 1){
                this.tail = null;
                this.head = null;
                return removed;
            }

            let current = this.head;
            while(current.next.next !== null){
                current = current.next;
            }
            current.next = null;
            this.tail = current;
            this.length--;
            
            return removed;
        }

        findNode(data){
            if(!this.head) return null;
            
            let current = this.head;
            while(current.data !== data && current.next !== null){
                current = current.next;
            }

            if(current.data !== data ) return null;
            return current;
        }

        removeData(data){
            if(!this.head) return null;

            if(this.head.data === data){
                let removed = this.head;
                this.head = this.head.next;
                removed.next = null;
                this.length--;
                return removed;
            }

            let current = this.head;
            while(current.next !== null && current.next.data !== data  ){
                current = current.next;
            }

            if(current.next === null) return null;

            if(current.next.data === this.tail.data){
                let removed = this.tail;
                this.tail = current;
                this.tail.next = null;
                removed.next = null;
                this.length--;
                return removed;
            }

            let removed = current.next;
            current.next = current.next.next;
            removed.next = null;
            this.length--;
            return removed;
        }

        toArray(){
            let arr = [];
            let current = this.head;

            while(current){
                arr.push(current.data);
                current = current.next;
            }
            return arr;
        }

        size(){
            return this.length;
        }

        isEmpty(){
            return this.length === 0;
        }
    }

    const list = new linkedList();

    list.addLast(1);   // 1
    list.addLast(2);   // 1 -> 2
    list.addFirst(0);  // 0 -> 1 -> 2
    console.log(list.toArray()); // [0, 1, 2]

    list.removeFirst();          // Xóa 0 -> [1, 2]
    list.removeLast();           // Xóa 2 -> [1]
    list.addLast(3);              // [1, 3]
    list.removeData(1);         // [3]
    console.log(list.toArray()); // [3]
    console.log(list.size());    // 1


    // Bài tập 1 : Reverse a Linked List (LeetCode #206)

    // đề bài : Cho head của một singly linked list, hãy đảo ngược linked list và trả về head mới.
    
    const dslk = new linkedList();
    dslk.addFirst(1);
    dslk.addFirst(5);
    dslk.addFirst(30);
    dslk.addFirst(7);
    dslk.addFirst(4);
    console.log(dslk.toArray());
    
    function reverseList(list){
        if(!list.head) return null;

        let current = list.head;
        let preC = null;
        let nextC = current;

        while(current){
            nextC = current.next;
            current.next = preC;
            preC = current;
            current = nextC;
        }
        list.head = preC;
        return list;
    }

    console.log(reverseList(dslk).toArray());
    