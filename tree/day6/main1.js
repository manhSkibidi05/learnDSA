// Tuần 1 - Ngày 6 : Binary Tree Maximum Path Sum (leetCode #124)

    // - Lý thuyết trọng tâm : 
    // + Đề bài (leetcode #124) :
    // - Cho 1 cây nhị phân (các node có thể có giá trị nguyên , có thể âm ) . Một đường đi là dãy các node trong cây , mỗi node nối với node tiếp theo qua cạnh cha
    // con . Đường đi có thể bắt đầu và kết thúc ở bất kì node nào , không nhất thiết phải qua gốc . Hãy tìm tổng lớn nhất của 1 đường đi 


    // Các bước cần làm khi gặp bài toán khó : 
    // + B1 : Hiểu rõ đề bài xác định đầu ra (bài toán cho gì), đầu vào (cần trả về gì) của bài toán , nếu có yêu cầu sử dụng CTDL hoặc GT hãy nêu lại định nghĩa và tính chất
    // + B2 : Tìm bài toán con sử dụng quy hoạch động / đệ quy -> có thể chia bài toán lớn thành nhỏ hơn cùng dạng không 
    // + B3 : Liệt kê các trường hợp có thể xảy ra -> đây là bước quan trọng nhất vẽ các tình huống có thể xảy ra và xử lí chúng
    // + B4 : Viết code cho trường hợp cơ bản rồi mở rộng ra
    // + B5 : Ghi lại công thức chung sau khi giải quyết được bài toán và tối ưu nó

    // Bài tập bắt buộc 

    class TreeNode {
        constructor(val, left = null, right = null) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    // Bài 1 : Binary Tree Maximum Path Sum (leetCode #124)

    var maxPathSum = function(root) {
        
        let maxSum = -Infinity;
    
        function maxGain(node) {
            if (node === null) return 0;
            
            const leftGain = Math.max(maxGain(node.left), 0);
            const rightGain = Math.max(maxGain(node.right), 0);
            
            const currentPathSum = node.val + leftGain + rightGain;
            maxSum = Math.max(maxSum, currentPathSum);
            
            return node.val + Math.max(leftGain, rightGain);
        }
        
        maxGain(root);
        return maxSum;
    };
