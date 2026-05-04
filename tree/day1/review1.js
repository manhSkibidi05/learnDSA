// Cấu trúc dữ liệu : Cây 

    // - Cây : là cấu trúc dữ liệu phi tuyến tính dữ liệu được lưu trữ dưới dạng 1 node (1 node chứa dữ liệu và có thể chứa con trỏ tới cây con)

    // - Các từ khóa thường được sử dụng đối với cây :
        // + root (rễ) : là node đầu tiên của cây không có node cha
        // + leaf (lá) : là node cuối cùng của cây không có node con
        // + edge (cạnh) : là kết nối giữa 2 node
        // + height (độ cao) : là khoảng cách giữa node hiện tại đối với lá sâu nhất dưới nó (khoảng cách tính bằng số cạnh)
        // + depth (độ sâu) : là khoảng cách giữa node hiện tại đối với rễ của cây 

    // - Các loại cây phổ biến :
        // + cây nhị phân : Mỗi node trong cây nhị phân chỉ có <= 2 con 

        class treeNode{
            constructor(value){
                this.value = value;
                this.left = null;
                this.right = null;
            }
        }
        const root1 = new treeNode(5);
        root1.left = new treeNode(10);
        root1.right = new treeNode(15);
        root1.left.left = new treeNode(20);
        root1.left.right = new treeNode(25);

        // + các cách duyệt cây nhị phân : Duyệt cây theo chiều sâu Depth-first Search (DFS)
            // - Duyệt cây theo chiều sâu là cách duyệt mà ở mỗi node sẽ cố gắng đi sâu xuống nhánh con trước khi quay lui để duyệt các nhánh khác 
            // - Có 3 thứ tự duyệt chính : Preorder , Inorder , Postorder 

            // + Preorder : trước khi duyệt tới node kế tiếp sẽ lấy giá trị tại node hiện tại trước 

            function preorder(root){
                if(root === null) return;
                console.log(root.value);
                preorder(root.left);
                preorder(root.right);
            }
            preorder(root1);

            // + Inorder: duyệt hết đến node trái là lá của cây rồi mới bắt đầu lấy giá trị tại node hiện tại 
            // -> duyệt xong node bên trái của cây rồi mới lấy giá trị node hiện tại sau đó duyệt node bên phải 

            function inorder(root){
                if(root === null) return;
                inorder(root.left);
                console.log(root.value);
                inorder(root.right);
            }
            inorder(root1);

            // + Postorder: duyệt xong node bên trái và xong node bên phải rồi mới lấy giá trị của node hiện tại 
            // -> duyệt hết node con rồi mới đến node cha 

            function postorder(root){
                if(root === null) return;
                postorder(root.left);
                postorder(root.right);
                console.log(root.value);
            }
            postorder(root1);