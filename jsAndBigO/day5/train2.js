// Bài 7 : kiểm tra chuỗi đối xứng dùng stack và queue 

// dùng stack :

class stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.isEmpty()) return null;
        return this.items.pop();
    }

    isEmpty(){
        if(this.items.length === 0) return true;
        return false;
    }
}

function stackPalindrome(string){
    const nganXep = new stack();
    let stringValid = ``;
    let stringReverse = ``;
    for(let char of string){
        if(char.match(/[0-9A-Za-z]/)){
            nganXep.push(char);
            stringValid+=char;
        }
    }

    while(!nganXep.isEmpty()){
        stringReverse += nganXep.pop();
    }

    if(stringValid === stringReverse){
        return true;
    }
    return false;
}
console.log(stackPalindrome(`ab**c>? ic ba`));

// dùng queue :

class queue{
    constructor(){
        this.items = [];
        this.indexFront = 0;
        this.indexRear = 0;
    }

    enqueue(element){
        this.items[this.indexRear] = element;
        this.indexRear++;
    }

    dequeue(){
        if(this.isEmpty()) return null;
        let result = this.items[this.indexFront];
        delete this.items[this.indexFront];
        this.indexFront++;
        if(this.indexFront === this.indexRear){
            this.indexFront = 0;
            this.indexRear = 0;
        }
        return result;
    }

    size(){
        return this.indexRear - this.indexFront;
    }

    isEmpty(){
        if(this.indexFront === this.indexRear) return true;
        return false;
    }
}

function stackQueuePalindrome(string){
    let stackString = new stack();
    let queueString = new queue();

    for(let char of string){
        if(char.match(/[0-9a-zA-Z]/)){
            stackString.push(char);
            queueString.enqueue(char);
        }
    }
    
    while(queueString.size()){
        if(stackString.pop() !== queueString.dequeue()){
            return false;
        }
    }
    return true;

}

console.log(stackPalindrome(`ab**c>? ecec ba`));