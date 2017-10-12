var regForm, logo_text, logo_img, img, menu_home, menu_about, menu_puppies, menu_news, menu_dogFood, menu_contacts,
    content, leftBar, rightBar, commentForm, loginWindow, rightMenu, divMenu, enter, regWin, login;

window.onload = function () {
    document.title = "Кинолгический Центр";

    // logo

    logo_text = document.getElementById("logoText");
    logo_img = document.getElementById("logoImg");
    img = document.createElement("img");
    img.src = "img/logo.png";
    logo_img.appendChild(img);
    logo_text.innerHTML = "Site";

    // menu

    menu_home = document.getElementById("home");
    menu_about = document.getElementById("about");
    menu_puppies = document.getElementById("puppies");
    menu_news = document.getElementById("news");
    menu_dogFood = document.getElementById("dogFood");
    menu_contacts = document.getElementById("contacts");
    menu_home.innerHTML = "ГЛАВНАЯ";
    menu_about.innerHTML = "О ПИТОМНИКЕ";
    menu_puppies.innerHTML = "ЩЕНКИ";
    menu_news.innerHTML = "НОВОСТИ";
    menu_dogFood.innerHTML = "КОРМА";
    menu_contacts.innerHTML = "КОНТАКТЫ";

    // content

    content = document.getElementById("content");
    for (var i = 0; i < 20;
         i++
    ) {
        var p = document.createElement("P");
        var text = document.createTextNode("This is Text Node" + " " + i);
        p.appendChild(text);
        content.appendChild(p);
    }

    // left bar

    // rightMenu = document.getElementById("left_bar_menu");
    // divMenu = rightMenu.getElementsByTagName('div');
    // divMenu.style.display = "none";

    leftBar = document.getElementById("leftBar");

    // right content

    rightBar = document.getElementById("rightBar");

    // Registration Window
    regWin = document.getElementById("regWin");
    enter = document.getElementById("enter");
    if (login !== undefined) {
        enter.innerHTML = login;
    }
    regForm = document.getElementById("register_form");
    regForm.style.display = "none";

    // Login Window

    loginWindow = document.getElementById("login_win");
    loginWindow.style.display = "none";

    // Hide left menu elements

    hideAllLeftMenu();


};

function register() {
    login = document.getElementById("login").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // alert(login + email + password);
    regWin.style.display = "none";
    enter.value = login;
}

function hideAllLeftMenu() {
    var allElements = document.getElementsByClassName("left_bar_menu");
    for (var j = 0; j < allElements.length; j++) {
        var allMenu = allElements[j].getElementsByTagName("div");
        for (var i = 0; i < allMenu.length; i++) {
            allMenu[i].style.display = "none";
        }
    }
}

function hideLeftMenuWithOutThis(menu) {
    var allElements = document.getElementsByClassName("left_bar_menu");
    for (var j = 0; j < allElements.length; j++) {
        var element = allElements[j];
        var allMenu = element.getElementsByTagName("div");
        console.log(element.id);
        if (menu === element.id) {
        } else {
            for (var i = 0; i < allMenu.length; i++) {
                if (menu === allMenu[i].id) {
                } else {
                    allMenu[i].style.display = "none";
                }
            }
        }
    }
}

function showMenu(menu) {
    var menuPart = document.getElementById(menu).getElementsByTagName("div");
    hideLeftMenuWithOutThis(menu);
    for (var i = 0; i < menuPart.length; i++) {
        var divMenuPart = menuPart[i];
        if (divMenuPart.style.display === "none") {
            divMenuPart.style.display = "block";
        } else {
            divMenuPart.style.display = "none";
        }
    }
}

function showRegForm() {
    if (regForm.style.display === "none") {
        regForm.style.display = "block";
        loginWindow.style.display = "none";
    } else {
        regForm.style.display = "none";
    }
}

function showLoginForm() {
    if (loginWindow.style.display === "none") {
        loginWindow.style.display = "block";
        regForm.style.display = "none";
    } else {
        loginWindow.style.display = "none";
    }
}

function addComment() {
    var email = document.getElementById("email_message");
    var text_message = document.getElementById("text_message");
    if (text_message.value === "" || email.value === "") {
        alert("Please enter your Message");
        return;
    }
    var name = "Guest";
    var comments = document.getElementById("comments");
    var sender = document.createElement("h4");
    var date = new Date();
    sender.innerHTML = name + "-" + date.toLocaleTimeString() + " : " + date.toLocaleDateString();
    var message = document.createElement("a");
    message.text = " :" + text_message.value;
    sender.appendChild(message);
    comments.insertBefore(sender, comments.firstElementChild);
    var message_from = document.getElementById("message_form");
    message_from.reset();

}

function regWin() {
    alert("Reg form will be here");
}