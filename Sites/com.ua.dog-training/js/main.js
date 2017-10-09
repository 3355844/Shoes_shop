window.onload = function () {
    document.title = "Кинолгический Центр";
    // logo
    var logo_text = document.getElementById("logoText");
    var logo_img = document.getElementById("logoImg");
    var img = document.createElement("img");
    img.src = "img/logo.png";
    logo_img.appendChild(img);
    logo_text.innerHTML = "Кинологический центр Юрия Лучко";
    // menu
    var menu_home = document.getElementById("home");
    var menu_about = document.getElementById("about");
    var menu_puppies = document.getElementById("puppies");
    var menu_news = document.getElementById("news");
    var menu_dogFood = document.getElementById("dogFood");
    var menu_contacts = document.getElementById("contacts");
    menu_home.innerHTML = "ГЛАВНАЯ";
    menu_about.innerHTML = "О ПИТОМНИКЕ";
    menu_puppies.innerHTML = "ЩЕНКИ";
    menu_news.innerHTML = "НОВОСТИ";
    menu_dogFood.innerHTML = "КОРМА";
    menu_contacts.innerHTML = "КОНТАКТЫ";
    // content
    var content = document.getElementById("content");
    for (var i = 0; i < 20;
         i++
    ) {
        var p = document.createElement("P");
        var text = document.createTextNode("This is Text Node" + " " + i);
        p.appendChild(text);
        content.appendChild(p);
    }
    // left bar
    var leftBar = document.getElementById("leftBar");
    var services = document.createElement("div");
    var textService = document.createTextNode("Service Button");
    services.setAttribute("class", "buttons");
    services.id = "services";
    services.appendChild(textService);
    leftBar.appendChild(services);
    // right content
    var rightBar = document.getElementById("rightBar");
    var commentForm = document.createElement("form");
    commentForm.setAttribute("class", "comment_form");
    var formArea = document.createElement("textarea");
    formArea.id = "message";
    formArea.setAttribute("placeholder", "Please Enter message");
    rightBar.appendChild(formArea);
    var submitName = document.createTextNode("Send Message");
    var formSubmit = document.createElement("a");
    formSubmit.appendChild(submitName);
    formSubmit.setAttribute("class", "buttons");
    formSubmit.setAttribute("href", "#");
    rightBar.appendChild(formSubmit);
};