function getEle(id) {
    return document.getElementById(id);
}

/**
 * Câu 1: In ra table danh sách nhân viên
 */
getEle("btnInDS").onclick = function() {
    // Nhân viên 1
    var tr_1 = document.createElement("tr");
    var td_1_1 = document.createElement("td");
    td_1_1.innerHTML = 4;
    tr_1.appendChild(td_1_1);
    var td_1_2 = document.createElement("td");
    td_1_2.innerHTML = "Lê Minh Tùng";
    tr_1.appendChild(td_1_2);
    var td_1_3 = document.createElement("td");
    td_1_3.innerHTML = "minhtung@gmail.com";
    tr_1.appendChild(td_1_3);
    var td_1_4 = document.createElement("td");
    td_1_4.innerHTML = "01/01/2017";
    tr_1.appendChild(td_1_4);
    var td_1_5 = document.createElement("td");
    td_1_5.innerHTML = "Sếp";
    tr_1.appendChild(td_1_5);
    var td_1_6 = document.createElement("td");
    td_1_6.innerHTML = 10000000;
    tr_1.appendChild(td_1_6);
    var td_1_7 = document.createElement("td");
    td_1_7.innerHTML = "Giỏi";
    tr_1.appendChild(td_1_7);
    getEle("tableDanhSach").appendChild(tr_1);

    // Nhân viên 2
    var tr_2 = document.createElement("tr");
    var td_2_1 = document.createElement("td");
    td_2_1.innerHTML = 5;
    tr_2.appendChild(td_2_1);
    var td_2_2 = document.createElement("td");
    td_2_2.innerHTML = "Đoàn Anh Duy";
    tr_2.appendChild(td_2_2);
    var td_2_3 = document.createElement("td");
    td_2_3.innerHTML = "tanhung@gmail.com";
    tr_2.appendChild(td_2_3);
    var td_2_4 = document.createElement("td");
    td_2_4.innerHTML = "01/01/2018";
    tr_2.appendChild(td_2_4);
    var td_2_5 = document.createElement("td");
    td_2_5.innerHTML = "Trưởng phòng";
    tr_2.appendChild(td_2_5);
    var td_2_6 = document.createElement("td");
    td_2_6.innerHTML = 9000000;
    tr_2.appendChild(td_2_6);
    var td_2_7 = document.createElement("td");
    td_2_7.innerHTML = "Khá";
    tr_2.appendChild(td_2_7);
    getEle("tableDanhSach").appendChild(tr_2);

    // Nhân viên 3
    var tr_3 = document.createElement("tr");
    var td_3_1 = document.createElement("td");
    td_3_1.innerHTML = 6;
    tr_3.appendChild(td_3_1);
    var td_3_2 = document.createElement("td");
    td_3_2.innerHTML = "Đoàn Anh Duy";
    tr_3.appendChild(td_3_2);
    var td_3_3 = document.createElement("td");
    td_3_3.innerHTML = "anhduy@gmail.com";
    tr_3.appendChild(td_3_3);
    var td_3_4 = document.createElement("td");
    td_3_4.innerHTML = "01/01/2019";
    tr_3.appendChild(td_3_4);
    var td_3_5 = document.createElement("td");
    td_3_5.innerHTML = "Nhân viên";
    tr_3.appendChild(td_3_5);
    var td_3_6 = document.createElement("td");
    td_3_6.innerHTML = 8000000;
    tr_3.appendChild(td_3_6);
    var td_3_7 = document.createElement("td");
    td_3_7.innerHTML = "Trung bình";
    tr_3.appendChild(td_3_7);
    getEle("tableDanhSach").appendChild(tr_3);


}

/**
 * Câu 2: Thêm nhân viên mới
 */
getEle("btnThemNV").onclick = function() {
    var _taiKhoan = getEle("tknv").value;
    var _hoTen = getEle("name").value;
    var _email = getEle("email").value;
    var _ngayLam = getEle("datepicker").value;
    var _chucVu = getEle("chucvu").value;
    var _luongCB = getEle("luongCB").value*1;
    var _gioLam = getEle("gioLam").value*1;
    var _luong = 0;
    var _loai = "";

    // xét loại
    if(_gioLam >= 192) {
        _loai = "Xuất sắc";
    } else if(_gioLam >= 176) {
        _loai = "Giỏi";
    } else if(_gioLam >= 160) {
        _loai = "Khá";
    } else {
        _loai = "Trung bình";
    };

    // xét lương
    if(_chucVu = "Sếp") {
        _luong = _luongCB * 3;
    } else if(chucVu = "Trường phòng") {
        _luong = _luongCB * 2;
    } else {
        _luong = _luongCB;
    }

    // nhân viên mới
    var themNV = [_taiKhoan,_hoTen,_email,_ngayLam,_chucVu,_luong,_loai];
        var tr = document.createElement("tr");
        var td_0 = document.createElement("td");
        td_0.innerHTML = themNV[0];
        tr.appendChild(td_0);
        var td_1 = document.createElement("td");
        td_1.innerHTML = themNV[1];
        tr.appendChild(td_1);
        var td_2 = document.createElement("td");
        td_2.innerHTML = themNV[2];
        tr.appendChild(td_2);
        var td_3 = document.createElement("td");
        td_3.innerHTML = themNV[3];
        tr.appendChild(td_3);
        var td_4 = document.createElement("td");
        td_4.innerHTML = themNV[4];
        tr.appendChild(td_4);
        var td_5 = document.createElement("td");
        td_5.innerHTML = themNV[5];
        tr.appendChild(td_5);
        var td_6 = document.createElement("td");
        td_6.innerHTML = themNV[6];
        tr.appendChild(td_6);
        getEle("tableDanhSach").appendChild(tr);
}
function getEle(id) {
    return document.getElementById(id);
}

/**
 * Câu 3: Tạo đối tượng nhân viên với thông tin lấy từ form người dùng nhập vào.
 */
function HienThiThongTin() {
    var _taiKhoan = getEle("tknv").value;
    var _hoTen = getEle("name").value;
    var _email = getEle("email").value;
    var _matKhau = getEle("password").value
    var _ngayLam = getEle("datepicker").value;
    var _chucVu = getEle("chucvu").value;
    var _luongCB = getEle("luongCB").value*1;
    var _gioLam = getEle("gioLam").value*1;

    // tạo đối tường
    var nhanVien = {
        // property: thuộc tính
        tenId: _taiKhoan,
        hoTen: _hoTen,
        email: _email,
        password: _matKhau,
        ngayLam: _ngayLam,
        luongCB: _luongCB,
        chucVu: _chucVu,
        gioLam: _gioLam,
        luong: 0,
    
        // method: phương thức
        tinhTongLuong: function() {
            if(this.chucVu === "Sếp") {
                this.luong = this.luongCB * 3;
            } else if(this.chucVu === "Trường phòng") {
                this.luong = this.luongCB * 2;
            } else {
                this.luong = this.luongCB;
            }
        },
        xepLoai: function() {
            if(this.gioLam >= 192) {
                return "Xuất sắc";
            } else if(this.gioLam >= 176) {
                return "giỏi";
            } else if(this.gioLam >= 160) {
                return "Khá";
            } else {
                return "Trung bình";
            }
        },
    }
    nhanVien.tinhTongLuong();
    var loai = nhanVien.xepLoai();

    getEle("tk").innerHTML = nhanVien.tenId;
    getEle("ten").innerHTML = nhanVien.hoTen;
    getEle("mail").innerHTML = nhanVien.email;
    getEle("ngayThangNam").innerHTML = nhanVien.ngayLam;
    getEle("viTri").innerHTML = nhanVien.chucVu;
    getEle("mucLuong").innerHTML = nhanVien.luong;
    getEle("loai").innerHTML = loai;
}

/**
 * Câu 4: Validation
 */ 
    var _taiKhoan = getEle("tknv").value;
    var _hoTen = getEle("name").value;
    var _email = getEle("email").value;
    var _matKhau = getEle("password").value;
    var _ngayLam = getEle("datepicker").value;
    var _chucVu = getEle("chucvu").value;
    var _luongCB = getEle("luongCB").value*1;
    var _gioLam = getEle("gioLam").value*1;

function KiemTraDoDaiTaiKhoan(idText,minlength,maxlength) {
    var _taiKhoan = getEle("tknv").value;
    var number = /^(?=.*[0-9]).*$/;
    var tbTK = getEle("tbTKNV");
    if(_taiKhoan === "") {
        tbTK.style.display = "block";
        tbTK.innerHTML = "Vui lòng nhập tài khoản";
        return false;
    } else if(_taiKhoan.match(number)) {
        tbTK.style.display = "none";
        return true;
    } else if(_taiKhoan.length < minlength || maxlength < _taiKhoan.length) {
        tbTK.style.display = "block";
        tbTK.innerHTML = "Bạn vui lòng nhập từ " + minlength + " đến " + maxlength + " ký số.";
        return false;
    } else {
        tbTK.style.display = "block";
        tbTK.innerHTML = "Vui lòng chỉ nhập số";
        return false;
    }
}

function KiemTraTenNV(idtag) {
    var _hoTen = getEle("name").value;
    var tbTen = getEle("tbTen");
    var text = /^[a-zA-z]+$/; 
    if(_hoTen === "") {
        tbTen.style.display = "block";
        tbTen.innerHTML = "Vui lòng nhập tên";
        return false;
    } else if(_hoTen.match(text)) {
        tbTen.style.display = "none";
        return true;
    } else {
        tbTen.style.display = "block";
        tbTen.innerHTML = "Vui lòng nhập bằng chữ";
        return false;
    }
}

function KiemTraEmail(email) {
    var _email = getEle("email").value;
    var tbEmail = getEle("tbEmail");
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(_email === "") {
        tbEmail.style.display = "block";
        tbEmail.innerHTML = "Vui lòng nhập email";
        return false;
    } else if(_email.match(email)) {
        tbEmail.style.display = "none";
        return true;
    } else {
        tbEmail.style.display = "block";
        tbEmail.innerHTML = "Vui lòng nhập đúng (Ví dụ: cuongvo@gmail.com)";
        return false;
    }
}

function KiemTraMatKhau(idPassword) {
    var check =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var _matKhau = getEle("password").value;
    var tbMatKhau = getEle("tbMatKhau");
    if(_matKhau === "") {
        tbMatKhau.style.display = "block";
        tbMatKhau.innerHTML = "Vui lòng nhập mật khẩu";
        return false;
    } else if(_matKhau.match(check)) {
        tbMatKhau.style.display = "none";
        return true;
    } else {
        tbMatKhau.style.display = "block";
        tbMatKhau.innerHTML = "Vui lòng nhập mật khẩu chứa ít nhất một chữ viết Hoa, số và ký tự đặc biệt";
        return false;
    }
}

function KiemTraNgay(day) {
    var _ngayLam = getEle("datepicker").value;
    var ngay = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/; 
    var tbNgay = getEle("tbNgay");
    if(_ngayLam === "") {
        tbNgay.style.display = "block";
        tbNgay.innerHTML = "Vui lòng nhập ngày theo dạng tháng/ngày/năm (mm/dd/yyyy)";
        return false;
    } else if(_ngayLam.match(ngay)) {
        tbNgay.style.display = "none";
        return true;
    } else {
        tbNgay.style.display = "block";
        tbNgay.innerHTML = "Vui lòng nhập ngày theo dạng tháng/ngày/năm (mm/dd/yyyy)";
        return false;
    }
}

function KiemTraLuongCB(luongCB,min,max) {
    var _luongCB = getEle("luongCB").value*1;
    var number = /^(?=.*[0-9]).*$/;
    var tbLuongCB = getEle("tbLuongCB");
    if(_luongCB = "") {
        tbLuongCB.style.display = "block";
        tbLuongCB.innerHTML = "Vui lòng nhập lương";
        return false;
    } else if(_luongCB.match(number)) {
        tbLuongCB.style.display = "none";
        return true;
    } else if(_luongCB < min || _luongCB > max) {
        tbLuongCB.style.display = "block";
        tbLuongCB.innerHTML = "Vui lòng nhập lương từ "+ min + " đến "+ max + " VNĐ";
        return false;
    } else {
        tbLuongCB.style.display = "block";
        tbLuongCB.innerHTML = "Vui lòng nhập số";
        return false;
    }
}

function KiemTraChucVu() {
    var _chucVu = getEle("chucvu");
    var tbChucVu = getEle("tbChucVu");
    if(_chucVu.selectedIndex === 0) {
        tbChucVu.style.display = "block";
        tbChucVu.innerHTML = "Vui lòng chọn chức vụ";
        return false;
    } else {
        tbChucVu.style.display = "none";
        return true;
    }
}

function KiemTraGioLam(gioLam,min,max) {
    var _gioLam = getEle("gioLam").value*1;
    var number = /^(?=.*[0-9]).*$/;
    var tbGiolam = getEle("tbGiolam");
    if(_gioLam = "") {
        tbGiolam.style.display = "block";
        tbGiolam.innerHTML = "Vui lòng nhập giờ làm";
        return false;
    } else if(_gioLam.match(number)) {
        tbGiolam.style.display = "none";
        return true;
    } else if(_gioLam < min || _gioLam > max) {
        tbGiolam.style.display = "block";
        tbGiolam.innerHTML = "Vui lòng nhập giờ làm từ "+ min + " đến "+ max;
        return false;
    } else  {
        tbGiolam.style.display = "block";
        tbGiolam.innerHTML = "Vui lòng nhập số";
        return false;
    }
}

function KiemTraHopLy() {
    return KiemTraDoDaiTaiKhoan("tknv",8,16) + KiemTraTenNV("name") + KiemTraEmail("email") + KiemTraMatKhau(password) + KiemTraNgay("datepicker") + KiemTraLuongCB("luongCB",1000000,20000000) + KiemTraChucVu("chucvu") + KiemTraGioLam("gioLam",80,200);
}



