const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');
var x = document.getElementById("g");


btnHam.addEventListener('click', function() {
    if (btnHam.className !== "") {
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTimes.addEventListener('click', function() {
    if (btnHam.className !== "") {
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ((username == "") && (username == "")) {
        alert("Não prencheu o dados.");
    } else {

        if ((username == "João Monteiro") && (password == "1234")) {
            alert("login succesfull");
            location.href = "index.html";


        } else {

            if ((username == "David Gates") && (password == "4321")) {
                alert("login succesfull");
                location.href = "indexT.html";
            } else {
                alert("login failed");
            }

        }
    }
}

function sing() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ((username == "") && (username == "")) {
        alert("Não prencheu o dados.");
    } else {
        if ((username != "David Gates") && (username != "João Monteiro")) {
            alert("Tudo em ordem a inciar o FitLink, mas falta o pagamento.");
            location.href = "pay.html";
        } else {
            alert("Utilizador já em uso.");
        }
    }
}

function singi() {
    alert("Tudo confimado. Bem-vindo ao FitLink");
    location.href = "index.html";

}

$('.video-btn').click(function() {
    $('.video-popup').fadeIn();
    $('#iframeHolder').html('');
    var link = $(this).attr("link");
    $('#iframeHolder').html('<iframe src="' + link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});
$('.close-video').click(function() {
    $('.video-popup').fadeOut();
    $('#iframeHolder').html('');
});