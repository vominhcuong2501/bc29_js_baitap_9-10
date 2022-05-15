// Câu 3: tạo lớp đối tượng NhanVien
function NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _chucVu, _luongCB, _gioLam) {
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.chucVu = _chucVu;
    this.luongCB = _luongCB;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";

// Câu 5: Xây dựng phương thức tính tổng lương cho đối tượng nhân viên:
    this.tinhLuong = function() {
        if(this.chucVu === "Sếp") {
            this.tongLuong = parseFloat(this.luongCB) * 3;
        } else if(this.chucVu === "Trưởng phòng") {
            this.tongLuong = parseFloat(this.luongCB) * 2;
        } else {
            this.tongLuong = parseFloat(this.luongCB);
        }
    };

// Câu 6: Xây dựng phương thức xếp loại cho đối tượng nhân viên:
    this.xepLoai = function() {
        if(this.gioLam >= 192) {
            this.xepLoai = "Xuất sắc";
        } else if(this.gioLam >= 176) {
            this.xepLoai = "giỏi";
        } else if(this.gioLam >= 160) {
            this.xepLoai = "Khá";
        } else {
            this.xepLoai = "Trung bình";
        }
    };
}
