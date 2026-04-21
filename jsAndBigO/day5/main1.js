// Hàng đợi và ngăn xếp : 2  cấu trúc dữ liệu cơ bản 

    // stack : ngăn xếp 
        // - cấu trúc dữ liệu này xây dựng dựa trên nguyên tắc LIFO (last in first out) : phần tử được thêm vào đầu tiên sẽ được lấy ra sau cùng và
        // phần tử được thêm vào sau cùng sẽ được lấy ra đầu tiên
        // -> hình dung như 1 chồng bát dựng đứng mỗi chiếc bát là 1 dữ liệu khi thêm dữ liệu mới sẽ đặt lên đầu chồng và khi lấy ra sẽ lấy từ đầu chồng 

        // - các thao tác cơ bản : 
            // + thêm vào đỉnh : push(element)
            // + lấy ra từ đỉnh : pop()
            // + xem mà không lấy dữ liệu : peek()
            // + kiểm tra ngăn xếp rỗng : isEmpty()
            // -> các thao tác trên độ phức tạp sẽ là O(1) : chỉ thông qua 1 vài thao tác có thể thêm/xóa phần tử 

    // queue : hàng đợi 
        // - cấu trúc dữ liệu này xây dựng dựa trên nguyên tắc FIFO (first in first out) : phần tử được thêm vào đầu tiên sẽ được lấy ra đầu tiên và
        // phần tử thêm vào sau cùng sẽ được lấy ra sau  cùng 
        // -> hình dung như 1 hàng người đang xếp hàng người xếp trước sẽ được lấy hàng trước và người xếp sau sẽ được lấy hàng sau 

        // - các thao tác cơ bản : 
            // + thêm vào cuối hàng đợi : enqueue(element)
            // + lấy từ đầu hàng đợi : dequeue()
            // + xem mà không lấy dữ liệu : front()
            // + kiểm tra hàng đợi rỗng : isEmpty()
            // -> các thao tác trên độ phức tạp là O(1)

    // xây dựng cấu trúc dữ liệu 
    // stack : ngăn xếp được định nghĩa bằng mảng

    class stackArray{
        constructor(){
            this.items = [];
        }

        push(element){
            this.items.push(element);
        }

        pop(){
            if(this.items.length === 0) return null;
            return this.items.pop();
        }

        peek(){
            if(this.items.length === 0) return null;
            return this.items[this.items.length - 1];
        }

        isEmpty(){
            if(this.items.length === 0) return true;
            return false;
        }

        size(){
            return this.items.length;
        }

        show(){
            return this.items;
        }
    }

    let stack1 = new stackArray();
    console.log(stack1.isEmpty());
    stack1.push(1);
    stack1.push(2);
    stack1.push(3);
    console.log(stack1.pop());
    console.log(stack1.show());

    // queue : hàng đợi được định nghĩa bằng mảng

    class queueArray{
        constructor(){
            this.items = [];
        }

        enqueue(element){
            this.items.push(element);
        }

        dequeue(){
            if(this.items.length === 0) return null;
            return this.items.shift();
        }

        front(){
            if(this.items.length === 0) return null;
            return this.items[0];
        }

        isEmpty(){
            if(this.items.length === 0) return true;
            return false;
        }

    }

    // - ngăn xếp : là cấu trúc dữ liệu lưu trữ dữ liệu dựa trên nguyên tắc LIFO (last in first out) -> các dữ liệu được thêm vào sau cùng sẽ được lấy ra đầu tiên
    // - hàng đợi : là cấu trúc dữ liệu lưu trữ dữ liệu dựa trên nguyên tắc FIFO (first in first out) -> các dữ liệu được thêm vào đầu tiên sẽ được lấy ra đầu tiên

    // - cài đặt ngăn xếp với mảng : tiện lợi khi sử dụng sẵn các phương thức có sẵn của mảng -> mảng của js mảng động
        // -> các thao tác cơ bản như thêm/xóa phần tử đều có độ phức tạp O(1)
    // - cài đặt hàng đợi với mảng : tiện lợi khi sử dụng sẵn các phương thức có sẵn của mảng
        // -> thao tác thêm độ phức tạp là O(1) : thêm vào cuối mảng , với thao tác xóa độ phức tạp O(n) -> vì xóa ở đầu mảng lúc này phải dịch chuyển các phần tử còn lại
        

