// Lý thuyết cơ bản về cây 

    // - cây là cấu trúc dữ liệu phi tuyến tính mỗi phần tử lưu trữ dưới dạng 1 node (chứa dữ liệu và có thể chứa con trỏ tới node con)

    // - các thành phần trong 1 cây có 
        // + root (rễ cây) : node đầu tiên không có cha
        // + leaf (lá cây) : node có cha nhưng không có con -> node ở vị trí sâu nhất
        // + edge (cạnh) : liên kết giữa 2 node 
        // + height (chiều cao) :  là số cạnh từ node đang tính đến vị trí lá sâu nhất dưới nó -> vị trí lá sẽ có chiều cao = 0
        // + depth (độ sâu) : là số cạnh từ node đang tính đến root -> vị trí root sẽ có độ sâu = 0

    // - các dạng cây hay sử dụng :
        // + cây nhị phân : cây này có node cố định có <= 2 con (left và right)
        // + cây nhị phân tìm kiếm  

    // - vd : 1 node trong cây nhị phân
    class nodeTree{
        constructor(value){
            this.value = value
            this.left = null;
            this.right = null;
        }
    }
    // - vd : biều diễn cây nhị phân trong js
    let root = new nodeTree(10);
    root.left = new nodeTree(5);
    root.right = new nodeTree(15);
    root.left.left = new nodeTree(20);
    root.left.right = new nodeTree(25);
    root.right.left = new nodeTree(30);


