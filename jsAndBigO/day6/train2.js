// Bài tập luyện tập với danh sách liên kết

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
            return;
        }
        
    }

    // Bài 1 : merge two sorted lists

    // đề bài : Cho hai danh sách liên kết đã được sắp xếp tăng dần. Hãy hợp nhất chúng thành một danh sách mới cũng sắp xếp tăng dần và trả về head.

    function mergeTwoSortLists(list1 , list2){
         // Tạo node giả để dễ xử lý
        const dummy = new node(0);
        let current = dummy;

        // Duyệt đồng thời cả hai list
        while (list1 !== null && list2 !== null) {
            if (list1.value <= list2.value) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        // Nếu một list đã hết, gắn nốt list còn lại
        if (list1 !== null) {
            current.next = list1;
        } else {
            current.next = list2;
        }

        // Bỏ qua node giả
        return dummy.next;
    }

    let listDau = new linkedList();
    listDau.addFirst(9);
    listDau.addFirst(6);
    listDau.addFirst(2);

    let listSau = new linkedList();
    listSau.addFirst(5);
    listSau.addFirst(4);
    listSau.addFirst(1);

    console.log(mergeTwoSortLists(listDau.head ,listSau.head));

    // Bài 2 : remove duplicates from sortes list

    // đề bài : Cho một danh sách liên kết đã được sắp xếp. Hãy xóa tất cả các node trùng lặp (chỉ giữ lại một lần xuất hiện đầu tiên)

    function removeDuplicates(list){
        if(!list) return null;

        let current = list;
        let removed = current.next;

        while(removed && current){
            if(current.value === removed.value){
                current.next = current.next.next;
                if(current.value === current.next.value){
                    removed= removed.next;
                    current.next = removed.next;
                }
            }
            if(current.next === null){
                break;
            }
            current = current.next;
            removed = current.next;
        }
        return list;
    }

    let newList = new linkedList();
    newList.addFirst(4)
    newList.addFirst(3)
    newList.addFirst(3)
    newList.addFirst(3)
    newList.addFirst(2)
    newList.addFirst(2)
    newList.addFirst(1)
    newList.addFirst(1)
    newList.addFirst(1)
    
    console.log(removeDuplicates(newList.head));

    // Bài 3 : intersection of two linked list 

    // đề bài : Cho hai danh sách liên kết đơn. Tìm node giao nhau (node bắt đầu chung) của chúng. Nếu không có, trả về null.

    function getIntersectionNode(headA, headB) {
        if (!headA || !headB) return null;
        let pA = headA;
        let pB = headB;
        while (pA !== pB) {
            pA = pA === null ? headB : pA.next;
            pB = pB === null ? headA : pB.next;
        }
        return pA;
    }

    // Bài 4 : Palindrome linked list

    // đề bài : Kiểm tra một linked list có phải là palindrome (đọc xuôi ngược như nhau) hay không

    function isPalindrome(list){
        let slow = list;
        let fast = list;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        let current = slow.next;
        let preC = null;
        while(current){
            let nextC = current.next;
            current.next = preC;
            preC = current;
            current = nextC;
        }
        slow.next = preC;

        let now = list;
        while(slow.next){
            slow = slow.next;
            if(now.value !== slow.value){
                return false;
            }
            now = now.next;
        }
        return true;

    }

    const listDoiXung = new linkedList();
    listDoiXung.addFirst(2)
    listDoiXung.addFirst(1)
    listDoiXung.addFirst(3)
    listDoiXung.addFirst(1)
    listDoiXung.addFirst(2)

    console.log(isPalindrome(listDoiXung.head));

    // Bài 5 : linked list cycle II 

    

    