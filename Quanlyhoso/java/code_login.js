$(document).ready(function () {
    const api = '/api.aspx';

    $('#loginForm').submit(function (event) {
        event.preventDefault(); // Ngăn không cho form gửi đi

        var data_gui_di = {
            action: 'DANG_NHAP',
            TEN_TAI_KHOAN: $('.input-tentaikhoan').val(),
            MAT_KHAU: $('.input-matkhau').val()
        };

        console.log(    );

        // Xử lý đăng nhập ở đây, ví dụ:
        $.post(api, data_gui_di, function (data) {
            var json = JSON.parse(data);
            var noidung = "";
            if (json.ok == 1) {
                for (var item of json.data) {
                    
                    noidung += `
                    <img src="IMG/avatar1.png" alt="Avatar" id="avatar" style="max-width :50px;">
                    <p><strong>Tên tài khoản:</strong>${item.HO_TEN}</p>
                    <p><strong>Email:</strong> ${item.EMAIL}</p>
                    <p><strong>Địa chỉ:</strong>${item.DIA_CHI}</p>
                    <button class="btn-danger btn-dang-xuat">Đăng xuất</button>` ;          
                }
                sessionStorage.setItem('userInfo', noidung);
                window.location.href = 'index.html';
           
            } else {
                alert("Đăng nhập thất bại!!!");
               
            }
        }).fail(function () {
            alert("Có lỗi xảy ra trong quá trình đăng nhập.");
        });
    });
});
