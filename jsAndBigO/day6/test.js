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
            this.head = newNode
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

}


function removeListElement(value , list){
    let dummy = new node(0);
    let current = dummy;
    current.next = list;
    
    while(current.next){
        if(current.next.value === value){
            current.next = current.next.next;
        }else{
            current = current.next;
        }
    }
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

console.log(removeListElement(5 , newList.head))