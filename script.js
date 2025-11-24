console.log("Website 707-MSSV đã tải thành công!");

// Hàm hỗ trợ: format số kiểu tiền VND
function formatVND(num) {
    return num.toLocaleString("vi-VN") + "₫";
}

// Hàm kiểm tra email hợp lệ
function validateEmail(email) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

// Hàm scroll lên đầu trang
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Demo: cảnh báo khi người dùng rời khỏi trang
window.addEventListener("beforeunload", function (e) {
    e.returnValue = "Bạn có chắc muốn rời trang?";
});

// Demo nhỏ: hiển thị giờ hiện tại ở console
setInterval(() => {
    const now = new Date();
    console.log("Giờ hệ thống:", now.toLocaleTimeString());
}, 60000);
