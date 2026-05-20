// Tuần 1 - Ngày 4 : Bài tập luyện tập về BST (Cây nhị phân tìm kiếm )
    class nodeTree{
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    let root2 = new nodeTree(5);
    root2.left = new nodeTree(3);
    root2.right = new nodeTree(7);
    root2.left.left = new nodeTree(1);
    root2.left.right = new nodeTree(4);
    root2.right.right = new nodeTree(10);
    // root2.right.left = new nodeTree(6);

// Bài 1 : Kiểm tra mảng có phải là duyệt inorder của BST không (Dễ)
// Đề bài : Cho 1 mảng số nguyên -> kiểm tra xem có phải duyệt inorder từ BST không 
// -> kiểm tra xem mảng sắp xếp từ bé đến lớn hay không 

    function isInorderBst(arr){
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i] > arr[i+1]) return false
        }
        return true;
    }
    console.log(isInorderBst([5,3,1,2,4]));
    console.log(isInorderBst([1,2,3,4,5]));

// Bài 2 : Tìm node gần nhất với giá trị cho trước (trung bình)
// Đề bài : Cho 1 BST và 1 val target -> tìm giá trị của node có chênh lệch tuyệt đối với target là nhỏ nhất 
// -> tìm giá trị gần = với giá trị target trong BST

    function nearValBst(root , target , nearest = Infinity , result = 0){
        if(!root) return result;
        if(Math.abs(root.value - target) <= nearest){
            nearest = Math.abs(root.value - target);
            result = root.value;
        } 
        if(target < root.value){
            return nearValBst(root.left , target , nearest , result);
        }else{
            return nearValBst(root.right , target , nearest , result);
        }
    }
    console.log(nearValBst(root2 , 5));

// Bài 3 : Xóa node trong BST (leetcode #450) - trung bình 
// Đề bài : Cho 1 BST và một giá trị key , xóa node có giá trị = key khỏi BST (nếu tồn tại) và trả về root mới 

    function deleteValBst(root , key){
        if(!root) return null;
        if(root.value === key){
            if(!root.left && !root.right) return  null;
            if(!root.left) return root.right;
            if(!root.right) return root.left;

        }
        if(key < root.value) root.left = deleteValBst(root.left , key);
        else root.right = deleteValBst(root.right , key);
        return root;
    }
    console.log(deleteValBst(root2 , 7));

// Bài 4 : Chuyển mảng đã sắp xếp thành BST cân bằng (leetCode #108) - dễ / trung bình
// Đề bài : Cho 1 mảng đã xắp xếp tăng dần -> chuyển thành BST cân bằng (chênh lệch chiều cao 2 con không quá 1)

    function sortedArrayToBst(){

    }


// Bài 5 : Kiểm tra hai BST có giống nhau không - dễ
// Đề bài : Cho 2 BST không nhất thiết cân bằng -> kiểm tra chúng có cùng tập giá trị (bỏ qua  cấu trúc)

    function sameValuesBst(root1 , root2){
        if(!root1 || !root2) return false;
        if(!root1 && !root2) return true;
        let checkL = sameValuesBst(root1.left , root2.left);
        if(root1.value !== root2.value) return false;
        let checkR = sameValuesBst(root1.right , root2.right);
        return checkL && checkR;
    }
    let rootA = new nodeTree(4);
    rootA.left = new nodeTree(2);
    rootA.right = new nodeTree(7);

    let rootB = new nodeTree(4);
    rootB.left = new nodeTree(2);
    rootB.right = new nodeTree(7);

    console.log(sameValuesBst(rootA , rootB))