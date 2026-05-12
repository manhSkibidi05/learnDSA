// - 2 Cây trùng nhau và cây đối xứng nhị phân 
    // + 2 Cây trùng nhau nhị phân : là 2 cây giống nhau về cả cấu trúc và giá trị từng node 
    // -> sử dụng đệ quy để giải quyết bài toán , độ phức tạp : 0(n) do n node của cây duyệt toàn bộ số node của 2 cây rồi so sánh giá trị và cấu trúc 
    
    // + Cây đối xứng nhị phân : là cây cấu trúc node con trái là ảnh phản chiếu của node con phải -> khi chia đôi cây đặt lên nhau thì không lệch 
    // -> sử dụng đệ quy để giải quyết bài toán , độ phức tạp : 0(n/2) vì chỉ phải duyệt nửa số phần tử node của cây mỗi lần duyệt sẽ so sánh giá trị giữa 2 cây đã chia  


// Bài 1 : Same Tree (leet code #100) - Dễ 

// Đề bài : Cho 2 cây nhị phân p và q kiểm tra xem chúng có giống hệt nhau về cấu trúc và giá trị không 

class nodeTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

    // đầu vào : 2 cây
    function sameTree(root1 , root2){
        // kiểm tra 2 cây = null -> cả 2 cây = null trả về true vì lúc này root đang là lá 
        if(root1 === null && root2 === null) return true;
        // nếu 1 trong 2 trả về null -> sai cấu trúc cây trả về false
        if(root1 === null || root2 === null) return false;
        // kiểm tra giá trị hiện tại 2 cây -> sai trả về false
        if(root1.value !== root2.value) return false;
        // trả về đệ quy cho node con tiếp theo -> so sánh giá trị trả về của cả 2 nhánh nếu 1 nhánh false -> 2 cây khác nhau 
        // cả 2 nhánh true -> 2 cây giống nhau tại nhánh đó
        return sameTree(root1.left , root2.left) && sameTree(root1.right , root2.right);
    }

    let p = new nodeTree(5);
    p.left = new nodeTree(10);
    p.right = new nodeTree(15);
    p.left.right = new nodeTree(20);
    p.left.left = new nodeTree(25);
    let q = new nodeTree(5);
    q.left = new nodeTree(10);
    q.right = new nodeTree(15);
    q.left.right = new nodeTree(24);
    q.left.left = new nodeTree(25);

    console.log(sameTree(p , q));

// Bài 2 : Symmetric Tree (leetcode #101) - Dễ / trung bình 

// Đề bài : Cho 1 cây nhị phân , kiểm tra xem nó có dối xứng qua trục giữa hay không 

    // chia nhỏ bài toàn thành 2 hàm 
    // hàm 1 kiểm tra cây đối xứng chia 1 cây 2 nhánh thành 2 cây khác nhau 
    function isSymmetric(root){
        if(!root) return true;
        return isMinnor(root.left , root.right);
    }

    // so sánh đối xứng 2 cây mới 
    function isMinnor(a , b){
        // kiểm tra 2 cây cùng trả về null 
        if(a === null & b === null) return true;
        // kiểm tra 1 cây có trả về null lẻ
        if(a === null || b === null) return false;
        // kiểm tra giá trị của 2 cây 
        if(a.value !== b.value) return false;
        // vì đối xứng nên kiểm tra đệ quy của nhánh trái cây a = nhánh phải cây b , nhánh phải cây a và nhánh trái cây b -> cả 2 đều trả về true đối xứng nhánh đó
        return isMinnor(a.left , b.right) && isMinnor(a.right , b.left);
    }

    let root1 = new nodeTree(5);
    root1.left = new nodeTree(10);
    root1.right = new nodeTree(10);
    root1.left.right = new nodeTree(25);
    root1.left.left = new nodeTree(30);
    root1.right.right = new nodeTree(30);
    root1.right.left = new nodeTree(25);

    console.log(isSymmetric(p));
    console.log(isSymmetric(root1));