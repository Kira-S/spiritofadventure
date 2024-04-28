function Input(){
login_ok = false;
user_name = "";
password = "";
user_name = prompt("Логин","");
user_name = user_name.toLowerCase();
password = prompt("Пароль","");
password = password.toLowerCase();
if (user_name=="admin" && password=="newyear") {
 login_ok = true;
 window.location = "main.html";
}
else {
  (login_ok==false);
  alert("Неверный логин или пароль!");
  window.location = "404.html";
}
}

Input()
