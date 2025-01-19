function register() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    alert('Đăng kí thành công! Tên đăng nhập: ' + username + ', Email: ' + email);
  }
  
  function login() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    alert('Đăng nhập thành công! Tên đăng nhập: ' + username);
  }
  