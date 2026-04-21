// danh sách liên kết 
    // - là cấu trúc dữ liệu tuyến tính (là mỗi dữ liệu sẽ có 2 dữ liệu bên cạnh trừ dữ liệu ở đầu và ở cuối ) mỗi dữ liệu được lưu trữ dưới dạng 1 node 
    // một node này bao gồm dữ liệu và 1 con trỏ đang trỏ đến node tiếp theo trong danh sách.
    // - khác với mảng dữ liệu được lưu trữ liên tục , danh sách liên kết mỗi node nằm rải rác mọi nơi liên kết thông qua con trỏ

    // - các thao tác cơ bản với danh sách liên kết :
        // + thêm/xóa ở đầu : chỉ cần thay đổi con trỏ head -> độ phức tạp O(1) 
        // + thêm/xóa ở cuối : phải duyệt đến cuối danh sách -> độ phức tạp O(n)
        // + lấy dữ liệu dựa trên chỉ số : phải duyệt đến chỉ số đó -> độ phức tạp O(n)

    // - các loại danh sách liên kết :
        // + danh sách liên kết đơn : có con trỏ head ở đầu danh sách trỏ đến node đầu 
        // + danh sách liên kết đôi : mỗi node có 2 con trỏ trỏ vào phần tử trước nó và phần tử sau nó
        // + danh sách liên kết vòng : node cuối của dslk trỏ về đầu dslk 
