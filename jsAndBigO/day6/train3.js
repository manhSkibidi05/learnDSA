// Bài 5 : linked cycle list 2

// đề bài : // đề bài : Cho một linked list có thể có chu trình. Hãy tìm node bắt đầu của chu trình. Nếu không có chu trình, trả về null.



// 1. tìm ra chu trình của 1 danh sách liên kết : chu trình là một node có next trỏ về node trước đó 

function  isListCycle(list){
    let slow = list;
    let fast = list;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            return true;
        }
    }
    return false;
}

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
        const newNode = new node(value);

        if(!this.head){
            this.head = newNode;
            return;
        } 

        newNode.next = this.head;
        this.head = newNode;
    }

    removeFirst(){
        if(!this.head) return null;

        let removed = this.head;
        this.head = this.head.next;
        return removed;
    }

    size(){
        let count = 0;
        let current = this.head;
        if(!this.head){
            return count;
        }

        while(current){
            count++;
            this.head = this.head.next;
        }
        return count;
    }

    toArray(){
        if(!this.head){
            return [];
        }
        let arr = [];
        let current = this.head;

        while(current){
            arr.push(current.value);
            current = current.next
        }
        return arr;
    }
}
// Bài 6 : remove linked list elements

// đề bài : xóa tất cả các node có giá trị bằng một giá trị cho trước 

// đầu vào : đầu của danh sách liên kết , giá trị bất kì 
// đầu ra : đầu danh sách liên kết với không có giá trị đã cho trước trong danh sách đầu vào 
function removeListElement(value , list){
    // khởi tạo node bù nhìn ở đầu danh sách với giá trị = 0 
    let dummy = new node(0);
    // khởi tạo biến current bằng với biến bù nhìn 
    let current = dummy;
    // biến hiện tại next trỏ đến đầu danh sách 
    current.next = list;
    
    // vòng lặp sẽ kết thúc khi current.next = null
    while(current.next){
        // kiểm tra giá trị tiếp theo của current có = giá trị value do người dùng nhập hay không 
        if(current.next.value === value){
            // nếu bằng sẽ thay đổi giá trị kế tiếp của current bằng tiếp của tiêp theo current
            current.next = current.next.next;
        }else{
            // nếu không dịch chuyển current lên 1 node
            current = current.next;
        }
    }
    // trả về dummy.next = đầu của dslk
    return dummy.next;
}

let newList = new linkedList();
newList.addFirst(7)
newList.addFirst(6)
newList.addFirst(6)
newList.addFirst(5)
newList.addFirst(5)
newList.addFirst(5)
newList.addFirst(2)
newList.addFirst(2)

console.log(removeListElement(5 , newList.head));


// Bài 7 : rotate list

// đề bài : xoay linked list sang phải k bước , mỗi bước xoay chuyển node cuối lên đầu 

// đầu vào : danh sách liên kết và số bước mà phải xoay -> k bước xoay = k phần tử được chuyển lên đầu danh sách
function rotateList(list , k){
    // biến dummy trỏ vào đầu của dslk
    let dummy = new node(0);
    let current = dummy;
    current.next = list.head;
    // biến đếm chạy
    let count = list.head;

    // tính ra kích thước của danh sách liên kết 
    let size = 0;
    while(count){
        size++;
        count = count.next;
    }

    // kiểm tra k hợp lệ 
    if(k > size){
        console.log(`k không hợp lệ `)
        return list.head;
    }
    
    // duyệt current cho tới trước vị trí sẽ được xoay lên đầu danh sách
    for(let i = 0 ; i < size - k ; i++){
        current = current.next;
        
    }
    // gán node được xoay đi bằng biến rotate
    let rotate = current.next;
    // giữ giá trị sẽ là đầu dslk
    let tail = rotate;
    while(rotate.next){
        // tìm đến node đang trỏ tới null (node cuối)
        rotate = rotate.next;
    }
    // cho node cuối đó trỏ tới đầu danh sách liên kết 
    rotate.next = dummy.next;
    // cập nhật lại đầu danh sách liên kết 
    list.head = tail;
    // trả về đầu danh sách liên kết sau khi xoay
    return list.head;
}
let newList2 = new linkedList();
newList2.addFirst(7)
newList2.addFirst(6)
newList2.addFirst(5)
newList2.addFirst(4)
newList2.addFirst(3)

console.log(rotateList(newList2 , 4));

// Bài 8 : Partition List

// đề bài : Cho một linked list và giá trị x. Hãy sắp xếp lại list sao cho tất cả node có giá trị nhỏ hơn x đều đứng trước các node có giá trị lớn hơn hoặc bằng x. 
// Thứ tự tương đối trong mỗi nhóm giữ nguyên.

function partitionList(list , x){
    let biggerList = new node(0);
    let smallerList = new node(0);
    let big = biggerList;
    let small = smallerList;
    let current = list;

    while(current){
        if(current.value >= x){
            big.next = current
            big = big.next;
        }else{
            small.next = current;
            small = small.next;
        }
        current = current.next;
    }
    big.next = null;
    small.next = biggerList.next;
    list = smallerList.next;
    return list;
}

let newList3 = new linkedList();
newList3.addFirst(2)
newList3.addFirst(5)
newList3.addFirst(2)
newList3.addFirst(3)
newList3.addFirst(4)
newList3.addFirst(1)

console.log(partitionList(newList3.head , 3));

