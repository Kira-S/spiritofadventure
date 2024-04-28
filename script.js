function Input(){
login_ok = false;
password = "";
password = prompt("Пароль","");
password = password.toLowerCase();
if (password=="вперёд к приключениям!") {
 login_ok = true;
 window.location = "main.html";
}
else {
  alert("Неверный пароль!");
  window.location = "404.html";
}
}

Input()
