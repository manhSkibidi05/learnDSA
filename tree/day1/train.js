// 3. Bài tập bắt buộc 

    // Bài 1 : maximum depth of binary tree (leetcode #104)

    // đề bài : cho 1 cây nhị phân , tính chiều cao (độ sâu lớn nhất) của nó độ sâu của node gốc là 1 

    function depthest(root){
        if(root === null) return 0;

        const depthestLeft = depthest(root.left);
        const depthestRight = depthest(root.right);

        return 1 + Math.max(depthestLeft , depthestRight);
    }

    // Bài 2 : invert binary tree (leetcode #226)

    // đề bài : đảo ngược cây nhị phân (swap left và right của mọi node)