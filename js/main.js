var dsnv = new DanhSachNhanVien();
var validation = new Validation();
getLocalStorage();

/**
 * đặt biến
 */
function getEle(id) {
    return document.getElementById(id);
}

getEle("btnThem").onclick = function() {
    getEle("btnThemNV").style.display = "block";
    getEle("btnCapNhat").style.display = "none";
}
/**
 * đặt reset
 */
function reset() {
    getEle("tknv").value = "";
    getEle("name").value = "";
    getEle("email").value = "";
    getEle("password").value = "";
    getEle("datepicker").value = "";
    getEle("chucvu").value = "Chọn chức vụ";
    getEle("luongCB").value = "";
    getEle("gioLam").value = "";
}

/**
 * Lấy thông tin từ form
 */
function layThongTinNV(isAdd) {
    var _taiKhoan = getEle("tknv").value;
    var _hoTen = getEle("name").value;
    var _email = getEle("email").value;
    var _matKhau = getEle("password").value;
    var _ngayLam = getEle("datepicker").value;
    var _chucVu = getEle("chucvu").value;
    var _luongCB = getEle("luongCB").value*1;
    var _gioLam = getEle("gioLam").value*1;

     // flag (cờ) isValid true: hợp lệ / false: không hợp lệ
     var isValid = true;

     // Check validation
     var text = /^[a-zA-z]+$/; 
     var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     var password =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
     var date = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/; 
     var number = /^[0-9]+$/;
    if(isAdd) {
        isValid &= validation.kiemTraDoDaiTaiKhoan(_taiKhoan,8,16,number,"tbTKNV",0,3,5) && validation.kiemTraMaNV(_taiKhoan,"tbTKNV",9,dsnv.arr);
    }
     isValid &= validation.kiemTraKieu(_hoTen,text,"tbTen",0,4);
     isValid &= validation.kiemTraKieu(_email,email,"tbEmail",0,6);
     isValid &= validation.kiemTraKieu(_matKhau,password,"tbMatKhau",0,7);
     isValid &= validation.kiemTraKieu(_ngayLam,date,"tbNgay",0,8);
     isValid &= validation.kiemTraChucVu("chucvu","tbChucVu",10);
     isValid &= validation.kiemTraNhap("luongCB",1000000,20000000,number,"tbLuongCB",0,3,1);
     isValid &= validation.kiemTraNhap("gioLam",80,200,number,"tbGiolam",0,3,2);
     
     // check isValid
     if(!isValid) return;

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
    var nhanVien = layThongTinNV(true);
    if(nhanVien) {
        // thêm nhân viên
        dsnv.themNV(nhanVien);    
        taoBang(dsnv.arr);
        reset();
        setLocalStorage();
    }
}

/**
 * Tạo bảng xuất ra màn hình
 */
function taoBang(data) {
    var content = "";
    data.forEach(function(item) {
        content += `
        <tr>
            <td>${item.taiKhoan}</td>
            <td>${item.hoTen}</td>
            <td>${item.email}</td>
            <td>${item.ngayLam}</td>
            <td>${item.chucVu}</td>
            <td>${item.tongLuong}</td>
            <td>${item.xepLoai}</td>
            <td>
                <button class = "btn btn-info" data-toggle="modal"
                data-target="#myModal" onclick = "suaNV('${item.taiKhoan}')">Sửa</button>
                <button class = "btn btn-danger" onclick = "xoaNV('${item.taiKhoan}')">Xóa</button>

            </td>
        </tr>
        `;
    });
    getEle("tableDanhSach").innerHTML = content;
}

/**
 * Câu 7: Xóa nhân viên
 */
function xoaNV(id) {
    dsnv.xoaNV(id);
    taoBang(dsnv.arr);
    setLocalStorage();
}

/**
 * Sửa nhân viên
 */
function suaNV(id) {
    var nv = dsnv.suaNV(id);
    if(nv) {
        getEle("tknv").value = nv.taiKhoan;
        getEle("name").value = nv.hoTen;
        getEle("email").value = nv.email;
        getEle("password").value = nv.matKhau;
        getEle("datepicker").value = nv.ngayLam;
        getEle("chucvu").value = nv.chucVu;
        getEle("luongCB").value = nv.luongCB;
        getEle("gioLam").value = nv.gioLam;
    }
    getEle("tknv").disabled = true;
    getEle("btnThemNV").style.display = "none";
    getEle("btnCapNhat").style.display = "block";
}

/**
 * Câu 8: Cập nhật nhân viên
 */
getEle("btnCapNhat").onclick = function() {
    var nhanVien = layThongTinNV(false);
    dsnv.capNhat(nhanVien);
    taoBang(dsnv.arr);
    setLocalStorage();
}

/**
 * Câu 9: Tìm kiếm nhân viên theo Xếp loại
 */
getEle("btnTimNV").onclick = function() {
        var keyword = getEle("searchName").value;
        var mangTimKiem = dsnv.timKiem(keyword);
        taoBang(mangTimKiem);
    getEle("searchName").addEventListener("keyup",function() {
        taoBang(dsnv.arr)
    })
}

/**
 * lưu dữ kiện trên trình duyệt
 */ 
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


