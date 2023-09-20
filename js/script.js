// Добијте референца кон копчетата користејќи document.getElementById или друг селектор
var signUpButton = document.getElementById("myButton"); // Заменете "myButton" со точниот ID на вашето копче

// Додајте event listener за кликнување на копчето
signUpButton.addEventListener("click", function() {
    // Пренасочете ја страницата на "contact.html"
    window.location.href = "contact.html";
});
var signUpButton = document.getElementById("Button"); // Заменете "myButton" со точниот ID на вашето копче

// Додајте event listener за кликнување на копчето
signUpButton.addEventListener("click", function() {
    // Пренасочете ја страницата на "contact.html"
    window.location.href = "index-about.html";
});



//se uste ne e funkcionolno 


document.getElementById("submitButton").addEventListener("click", function() {
    // Овде се додава кодот за собирање на податоците од формата
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Креирање на објект за податоци за испратка на серверот (пр. AJAX)
    var data = {
        email: email,
        phone: phone,
        message: message
    };

    // Пратете ги податоците на серверскиот скрипт (пр. PHP) за обработка
    fetch("process-form.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.text())
    .then(data => {
        // Во овој дел можете да обработите одговорот од серверот, ако е потребно
        console.log(data);
        alert("Вашата порака е испратена!");
    })
    .catch(error => {
        console.error("Настана грешка при испраќањето на формата:", error);
    });
});
