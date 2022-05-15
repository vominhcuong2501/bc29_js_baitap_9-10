var dsnv = new DanhSachNhanVien();
getLocalStorage();

/**
 * đặt biến
 */
function getEle(id) {
    return document.getElementById(id);
}

/**
 * Câu 1: In ra table danh sách nhân viên
 */
getEle("btnInDS").onclick = function() {
    // Nhân viên 1
        content += "<tr>";
        content +=  "<td> 1 </td>";
        content +=  "<td> Lê Minh Tùng </td>";
        content +=  "<td> mingtung@gmail.com </td>";
        content +=  "<td> 08/04/2019 </td>";
        content +=  "<td> Trưởng Phòng </td>";
        content +=  "<td> 10.000.000 </td>";
        content +=  "<td> Khá </td>";
        content += "</tr>";
        getEle("tableDanhSach").innerHTML = content;
}

/**
 * Lấy thông tin từ form
 */
function layThongTinNV() {
    var _taiKhoan = getEle("tknv").value;
    var _hoTen = getEle("name").value;
    var _email = getEle("email").value;
    var _matKhau = getEle("password").value;
    var _ngayLam = getEle("datepicker").value;
    var _chucVu = getEle("chucvu").value;
    var _luongCB = getEle("luongCB").value*1;
    var _gioLam = getEle("gioLam").value*1;


    // tạo đối tượng nhanVien từ lớp đối tượng NhanVien
    var nhanVien = new NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _chucVu, _luongCB, _gioLam);

    // tính tongLuong
    nhanVien.tinhLuong();

    // xét xepLoai
    nhanVien.xepLoai();

    return nhanVien;
}

/**
 * Câu 2: Thêm nhân viên mới
 */
getEle("btnThemNV").onclick = function() {
    // kiểm tra dự liệu nhập
    //kiemTraHopLy();

    var nhanVien = layThongTinNV();
    // thêm nhân viên
    dsnv.themNV(nhanVien);

    taoBang(dsnv.arr);
    setLocalStorage();
}

function taoBang(data) {
    var content = "";
    data.forEach(function(item) {
        content += "<tr>";
        content +=  "<td>" + item.taiKhoan + "</td>";
        content +=  "<td>" + item.hoTen + "</td>";
        content +=  "<td>" + item.email + "</td>";
        content +=  "<td>" + item.ngayLam + "</td>";
        content +=  "<td>" + item.chucVu + "</td>";
        content +=  "<td>" + item.tongLuong + "</td>";
        content +=  "<td>" + item.xepLoai + "</td>";
        content += "</tr>";
    });
    getEle("tableDanhSach").innerHTML = content;
}

// lưu dữ kiện trên trình duyệt
function setLocalStorage() {
    // convert from JSON to String (chuyển công thức sang chuỗi)
    var string = JSON.stringify(dsnv.arr);
    // lưu xuống localstorage
    localStorage.setItem("DSNV", string);
}

function getLocalStorage() {
    if(localStorage.getItem("DSNV")) {
        var dataString = localStorage.getItem("DSNV");
        // convert from string to JSON (chuyển chuỗi sang công thức)
        var dataJSON = JSON.parse(dataString);
        dsnv.arr = dataJSON;
        taoBang(dsnv.arr);
    }   
}


