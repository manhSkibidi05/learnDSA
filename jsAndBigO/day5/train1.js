// cài đặt ngăn xếp 

class stackArray{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.isEmpty()) return null
        return this.items.pop();
    }

    isEmpty(){
        if(this.items.length === 0) return true;
        return false;
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    show(){
        return this.items;
    }
    
    size(){
        return this.items.length ;
    }
}

    // Bài 1 : đảo ngược chuỗi dùng stack 

    function reverseString(string){
        const stack = new stackArray();
        let reverse = ``;
        for(let char of string){
            stack.push(char);
        }
        while(!stack.isEmpty()){
            reverse += stack.pop();
        }
        return reverse;
    }
    console.log(reverseString(`hello`));

    // Bài 2 : kiểm tra dấu ngoặc mở rộng 

    function isValid(string){
        const stack = new stackArray();
        for(let char of string){
            switch(char){
                case `{` : case `<` : case `[` :
                    stack.push(char);
                    break;
                case `}` :
                    if(stack.pop() !== `{`) return false;
                    break;
                case `>` :
                    if(stack.pop() !== `<`) return false;
                    break;
                case `]` :
                    if(stack.pop() !== `[`) return false;
                    break;
                default :
                    break;
            }
        }
        if(!stack.isEmpty()){
            return false;
        }
        return true;
    }

    console.log(isValid(`{{{{[[`));

    // Bài 3 : tính giá trị biểu thức hậu tố 

    function evalRPN(tokens){
        const stack = new stackArray();
        for(token of tokens){
            if(token.match(/[0-9]/)){
                stack.push(token);
            }
            if(token.match(/[+,-,*,/]/)){
                if(stack.size() <= 1){
                    return 0;
                }
                let a = stack.pop();
                let b = stack.pop();
                let result = 0;
                switch(token){
                    case `+`:
                        result = Number.parseInt(a) + Number.parseInt(b);
                        break;
                    case `-`:
                        result = Number.parseInt(a) - Number.parseInt(b);
                        break;
                    case `*`:
                        result = Number.parseInt(a) * Number.parseInt(b);
                        break;
                    case `/`:
                        result = Number.parseInt(a) / Number.parseInt(b);
                        break;
                }
                stack.push(result.toString())
            }
        }
        return stack.peek();
    }

    console.log(evalRPN(`5235+/+`));

    // Bài 4 : sắp xếp giảm dần tử đỉnh xuống đáy

    function sortStack(original) {
        let temp = [];
        while(original.length){
            let current = original.pop();
            while(temp[temp.length - 1] > current){
                original.push(temp.pop());
            }
            temp.push(current);
        }

        while(temp.length){
            original.push(temp.pop());
        }
        return original;
    }

    
    // Test
    let stack = [5, 4,9,2,4, 1,2,4]; // đỉnh là 4
    sortStack(stack);
    console.log(stack); // [1, 2, 4, 5]

    // Bài 5 : triển khai queue bằng 2 stack

    class myQueue{
        constructor(){
            this.original = [];
            this.temp = [];
        }

        enqueue(element){
            while(this.original.length){
                this.temp.push(this.original.pop());
            }
            this.original.push(element);
            while(this.temp.length){
                this.original.push(this.temp.pop())
            }
        }

        dequeue(){
            if(!this.isEmpty()) return null;
            return this.original.pop();
        }

        peek(){
            if(!this.isEmpty()) return null;
            return this.original[this.original.length - 1];
        }

        isEmpty(){
            return this.original.length;
        }

        show(){
            return this.original
        }
    }

    const hangDoi = new myQueue();
    hangDoi.enqueue(1);
    hangDoi.enqueue(2);
    hangDoi.enqueue(3);
    hangDoi.enqueue(4);
    hangDoi.enqueue(5);
    console.log(hangDoi.dequeue());
    hangDoi.enqueue(10);
    console.log(hangDoi.peek());
    console.log(hangDoi.show());

    // Bài 6 : sinh số nhị phân từ 1 đến n dùng queue 

    function generateBinaryNumber(n){
        const queue = [];
        const result = [];
        queue.push(`1`);
        for(let i = 0 ; i <= n ; i++ ){
            let binary = queue.shift();
            result.push(binary);
            queue.push(binary + `0`);
            queue.push(binary + `1`);
        }
        return result;
    }
    console.log(generateBinaryNumber(7));