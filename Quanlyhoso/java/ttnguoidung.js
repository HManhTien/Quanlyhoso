document.addEventListener("DOMContentLoaded", function () {
    const avatar = document.getElementById("avatar");
    const userInfo = document.getElementById("user-info");

    // Lấy dữ liệu từ sessionStorage và đưa vào .user-info
    var userInfo2 = sessionStorage.getItem('userInfo');
    if (userInfo2) {
        $('.user-info').html(userInfo2);
    }

    // Xử lý sự kiện click vào avatar để hiển thị/ẩn thông tin người dùng
    avatar.addEventListener("click", function () {
        if (userInfo.style.display === "none" || userInfo.style.display === "") {
            userInfo.style.display = "block";
        } else {
            userInfo.style.display = "none";
        }
    });

    // Xử lý sự kiện click để đăng xuất
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-dang-xuat")) {
            // Xử lý đăng xuất ở đây (ví dụ: xóa thông tin đăng nhập khỏi sessionStorage)
            sessionStorage.removeItem('userInfo');
            // Chuyển hướng đến trang đăng nhập hoặc trang khác
            window.location.href = 'login.html'; // Thay đổi đường dẫn nếu cần
        }
    });

    // Ẩn thông tin người dùng khi nhấp ra ngoài
    document.addEventListener("click", function (event) {
        if (!avatar.contains(event.target) && !userInfo.contains(event.target)) {
            userInfo.style.display = "none";
        }
    });
});
