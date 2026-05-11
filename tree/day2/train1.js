// Bài 1 : Same Tree (leet code #100) - Dễ 

// Đề bài : Cho 2 cây nhị phân p và q kiểm tra xem chúng có giống hệt nhau về cấu trúc và giá trị không 

class nodeTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

    function sameTree(root1 , root2){
        if(root1 === null && root2 === null) return true;
        if(root1 === null || root2 === null) return false;
        if(root1.value !== root2.value) return false;

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

    function isSymmetric(root){
        if(!root) return true;
        return isMinnor(root.left , root.right);
    }

    function isMinnor(a , b){
        if(a === null & b === null) return true;
        if(a === null || b === null) return false;
        if(a.value !== b.value) return false;

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