/**
 * Câu 4: Validation
 */ 
function Validation() {
    /**
 * đặt mảng validation
 */
 var chuoiTB = ["Vui lòng nhập thông tin",
 "Vui lòng nhập lương từ 1.000.000 đến 20.000.000 VNĐ",
 "Vui lòng nhập số giờ làm từ 80 đến 200",
 "Vui lòng nhập số",
 "Vui lòng nhập bằng chữ",
 "Vui lòng nhập đúng (Ví dụ: cuongvo@gmail.com)",
 "Vui lòng nhập mật khẩu chứa ít nhất một chữ viết Hoa, số và ký tự đặc biệt",
 "Vui lòng nhập ngày theo dạng tháng/ngày/năm (mm/dd/yyyy)"] 




this.kiemTraDoDaiTaiKhoan = function(minlength,maxlength) {
    var _taiKhoan = getEle("tknv").value;
    var tbTK = getEle("tbTKNV");
    var number = /^[0-9]+$/;
    if(_taiKhoan === "") {
        tbTK.style.display = "block";
        tbTK.innerHTML = "Vui lòng nhập thông tin";
        return false;
    } else if(!_taiKhoan.match(number)) {
        tbTK.style.display = "block";
        tbTK.innerHTML = "Vui lòng chỉ nhập số";
        return false;
    } else if(_taiKhoan.match(number)) {
            if(_taiKhoan.length < minlength || maxlength < _taiKhoan.length) {
                tbTK.style.display = "block";
                tbTK.innerHTML = "Bạn vui lòng nhập từ " + minlength + " đến " + maxlength + " ký số.";
                return false;
            } else {
                tbTK.style.display = "none";
                return true;
            }
    } 
}
this.kiemTraChucVu = function() {
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

this.kiemTraNhap = function(idField,min,max,idTB,TB1,TB2,TB3) {
    var valueField = getEle(idField).value;
    var mangTB = getEle(idTB);
    if(valueField === "") {
        mangTB.style.display = "block";
        mangTB.innerHTML = chuoiTB[TB1];
        return false;
    } else if(!valueField.match(number)) {
        mangTB.style.display = "block";
        mangTB.innerHTML = chuoiTB[TB3];
        return false;
    } else if(valueField < min || valueField > max) {
        mangTB.style.display = "block";
        mangTB.innerHTML = chuoiTB[TB2];
        return false;
    } else {
        mangTB.style.display = "none";
        return true;
    }
}

this.kiemTraKieu = function(idField,idCheck,idTB,TB1,TB2) {
    var valueField = getEle(idField).value;
    var mangTB = getEle(idTB);
    if(valueField === "") {
        mangTB.style.display = "block";
        mangTB.innerHTML = chuoiTB[TB1];
        return false;
    } else if(!valueField.match(idCheck)) {
        mangTB.style.display = "block";
        mangTB.innerHTML = chuoiTB[TB2];
        return false;
    } else {
        mangTB.style.display = "none";
        return true;
    }

}

// this.kiemTraHopLy = function() {
//             kiemTraDoDaiTaiKhoan(8,16) + 
//             kiemTraNhap("luongCB",1000000,20000000,"tbLuongCB",0,1,3) + 
//             kiemTraNhap("gioLam",80,200,"tbGiolam",0,2,3) + 
//             kiemTraChucVu("chucvu") + 
//             kiemTraKieu("name",text,"tbTen",0,4) +
//             kiemTraKieu("email",email,"tbEmail",0,5) +
//             kiemTraKieu("password",password,"tbMatKhau",0,6) +
//             kiemTraKieu("datepicker",date,"tbNgay",0,7);
// }

}
 