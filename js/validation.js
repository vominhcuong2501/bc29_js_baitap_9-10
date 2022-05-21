/**
 * Câu 4: Validation
 */ 
function Validation() {
    /**
 * đặt mảng validation
 */
 var chuoiTB = ["*Vui lòng nhập thông tin",
 "*Vui lòng nhập lương từ 1.000.000 đến 20.000.000 VNĐ",
 "*Vui lòng nhập số giờ làm từ 80 đến 200",
 "*Vui lòng nhập số",
 "*Vui lòng nhập bằng chữ",
 "*Vui lòng nhập từ 8 đến 16 ký tự",
 "*Vui lòng nhập đúng (Ví dụ: cuongvo@gmail.com)",
 "*Nhập mật khẩu chứa ít nhất một chữ viết Hoa, số và ký tự đặc biệt (ví dụ: Cuong@96)",
 "*Vui lòng nhập ngày theo dạng tháng/ngày/năm (mm/dd/yyyy)",
 "*Mã nhân viên đã tồn tại",
 "*Vui lòng chọn chức vụ"];

this.kiemTraDoDaiTaiKhoan = function(value,minlength,maxlength,idCheck,errorID,mess1,mess2,mess3) {
    if(value === "") {
        getEle(errorID).style.display = "block";
        getEle(errorID).innerHTML = chuoiTB[mess1];
        return false;
    } else if(!value.match(idCheck)) {
        getEle(errorID).style.display = "block";
        getEle(errorID).innerHTML = chuoiTB[mess2];
        return false;
    } else if(value.match(idCheck)) {
            if(value.trim().length < minlength || maxlength < value.trim().length) {
                getEle(errorID).style.display = "block";
                getEle(errorID).innerHTML = chuoiTB[mess3];
                return false;
            } else {
                getEle(errorID).style.display = "none";
                return true;
            }
    } 
}
this.kiemTraChucVu = function(value,errorID,mess1) {
    if(getEle(value).selectedIndex !== 0) {
        getEle(errorID).style.display = "none";
        return true;
    } else {
        getEle(errorID).style.display = "block";
        getEle(errorID).innerHTML = chuoiTB[mess1];
        return false;
    }
}

this.kiemTraNhap = function(idField,min,max,idCheck,errorID,mess1,mess2,mess3) {
    var idField = getEle(idField).value;
    if(idField === "") {
        getEle(errorID).style.display = "block";
        getEle(errorID).innerHTML = chuoiTB[mess1];
        return false;
    } else if(!idField.match(idCheck)) {
        getEle(errorID).style.display = "block";
        getEle(errorID).innerHTML = chuoiTB[mess2];
        return false;
    } else if(idField < min || idField > max) {
        getEle(errorID).style.display = "block";
        getEle(errorID).innerHTML = chuoiTB[mess3];
        return false;
    } else {
        getEle(errorID).style.display = "none";
        return true;
    }
}

this.kiemTraKieu = function(value,idCheck,errorID,mess1,mess2) {
    if(value === "") {
        getEle(errorID).style.display = "block";
        getEle(errorID).innerHTML = chuoiTB[mess1];
        return false;
    } else if(!value.match(idCheck)) {
        getEle(errorID).style.display = "block";
        getEle(errorID).innerHTML = chuoiTB[mess2];
        return false;
    } else {
        getEle(errorID).style.display = "none";
        return true;
    }
}

this.kiemTraMaNV = function(value,errorID,mess1,arr) {
    var isStatus = true;
    arr.forEach(function(item) {
        if(item.taiKhoan === value) {
            isStatus = false;
        }
    });
    if(isStatus) {
            getEle(errorID).style.display = "none";
            getEle(errorID).innerHTML = "";
            return true;
        }
            getEle(errorID).style.display = "block";
            getEle(errorID).innerHTML =  chuoiTB[mess1];
            return false;
    };
}
 