// queue tối ưu với obj -> các thao tác đều có độ phức tạp O(1)
// -> sử dụng 2 con trỏ 2 đầu hàng đợi nắm vị trí index trong mảng

class queueArray{
    constructor(){
        this.items = [];
        this.frontIndex = 0;
        this.rearIndex = 0;
    }

    enqueue(element){
        this.items[this.rearIndex] = element;
        this.rearIndex++;
    }

    dequeue(){
        if(this.isEmpty()) return null;
        let element = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        if(this.isEmpty()){
            this.frontIndex = 0;
            this.rearIndex = 0;
        }
        return element;
    }

    peek(){
        if(this.isEmpty()) return null;
        return this.items[this.frontIndex];
    }

    isEmpty(){
        return this.rearIndex === this.frontIndex;
    }

    size(){
        return this.rearIndex - this.frontIndex;
    }

    peekAll(){
        let arrPeek = [];
        for(let i = this.frontIndex ; i < this.rearIndex ; i++){
            arrPeek.push(this.items[i]);
        }
        return arrPeek;
    }
}

let queue = new queueArray();
queue.enqueue(35);
queue.enqueue(36);
queue.enqueue(37);
queue.enqueue(38);
console.log(queue.dequeue());
console.log(queue.peekAll());