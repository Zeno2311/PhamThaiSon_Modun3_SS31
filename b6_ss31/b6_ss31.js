function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const correctUsername = "huanrose@gmail.com";
    const correctPassword = "123456";
    if (username === correctUsername && password === correctPassword) {
        console.log("Đăng nhập thành công!");
    } else {
        console.log("Đăng nhập thất bại!");
    }
}