// Bài tập luyện tập về linkedlist 

// Bài 1 : tìm node ở giữa 

// Đề bài : cho head , tìm node ở giữa -> nếu có 2 node ở giữa trả về node thứ hai 

class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
    }

    addFirst(value){
        const newNode = new node(value)
        if(!this.head){
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
        return;
    }

    removeFirst(){
        if(!this.head) return null;
        const removed = this.head;
        this.head = this.head.next;
        return removed;
    }

}

function middleNode(head){
    if(!head) return null;
    let fast = head;
    let slow = head;
    while(fast !== null && fast.next !== null ){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

const listFood = new linkedList();
listFood.addFirst(`takoyaki`);
listFood.addFirst(`ramen`);
listFood.addFirst(`phở`);
listFood.addFirst(`bánh tráng trộn`);
listFood.addFirst(`bún bò huế`);

console.log(middleNode(listFood.head));

// Bài 2 : phát hiện chu trình (linked list cycle )

// đề bài : kiểm tra linked list có chứa chu trình hay không -> chu trình trong danh sách liên kết xảy ra khi một node trỏ lại node đã xuất hiện trước đó tạo ra vòng lặp

function hasCycle(head){
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow){
            return true;
        }
    }
    return false;
}
console.log(hasCycle(listFood.head));

// Bài 3 : xóa node thứ N từ cuối 

// đề bài : xóa node thứ N tính từ cuối lên 

function removeNthFromEnd(head , n){
    let current = head;
    let currentNth = head;
    
    for(let i = 1 ; i <= n ; i++){
        currentNth = currentNth.next;
    }

    while(currentNth.next){
        currentNth = currentNth.next;
        current = current.next;
    }
    let removed = current.next;
    current.next = current.next.next;
    return removed;
}

const numbers = new linkedList();
numbers.addFirst(6);
numbers.addFirst(5);
numbers.addFirst(4);
numbers.addFirst(3);
numbers.addFirst(2);
numbers.addFirst(1);

// console.log(removeNthFromEnd(numbers.head , 4))

function removeNthFromEnd2(head, n) {
    if (!head) return null;
    
    let dummy = new node(0); // node giả giúp xử lý xóa head dễ dàng
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    
    // Đưa first đi trước n+1 bước
    for (let i = 0; i <= n; i++) {
        first = first.next;
        if (!first && i < n) return head; // n quá lớn
    }
    
    while (first) {
        first = first.next;
        second = second.next;
    }
    
    second.next = second.next.next;
    return dummy.next;
}
console.log(removeNthFromEnd2(numbers.head , 4))
