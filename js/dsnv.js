function DanhSachNhanVien() {
    this.arr = [];

    this.themNV = function(nv) {
        this.arr.push(nv)    
    };
    
    this.timViTriNV = function(taiKhoan) {
        var index = -1;
        this.arr.forEach(function(item, i) {
            if(item.taiKhoan === taiKhoan) {
                index = i;
            }
        });
        return index;
    };

    this.xoaNV = function(taiKhoan) {
        var index = this.timViTriNV(taiKhoan)
        if(index !== -1) {
            this.arr.splice(index,1);
        }
    };

    this.suaNV = function(taiKhoan) {
        var index = this.timViTriNV(taiKhoan);
        if(index !== -1) {
            return this.arr[index];
        }
        return null;
    };

    this.capNhat = function(nv) {
        var index = this.timViTriNV(nv.taiKhoan);
        if(index !== -1) {
            this.arr[index] = nv;
        }
    };

    this.timKiem = function(keyword) {
        /**
         0 tạo mangTimKiem = [];
         1 duyệt mảng array
         2 nếu item.hoTen trùng với keyword
            => thêm NV dc tìm thấy vào mangTimKiem
         3 trả về mảngTimKiem
         */
         var mangTimKiem = [];
         this.arr.forEach(function(item) {
             if(item.xepLoai.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                 mangTimKiem.push(item);
             }
         });
         return mangTimKiem;
    };
}