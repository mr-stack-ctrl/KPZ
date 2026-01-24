(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-150px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);


// adding footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })

// adding nav 
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navBar').innerHTML = data;
    })


// highlight active

// adding nav
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navBar').innerHTML = data;

        // highlight active (RUN after navbar loads)
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

        navLinks.forEach(link => {
            const linkPage = link.getAttribute("href");
            if (linkPage === currentPage) {
                link.classList.add("active");
            }
        });
    });


// show toggle 
function showToggleBar(message, type) {
    const bar = document.getElementById("toggleBar");
    const msg = document.getElementById("toggleMsg");

    msg.textContent = message;
    bar.className = "toggle-bar " + type;

    bar.style.top = "0";

    setTimeout(() => {
        bar.style.top = "-60px";
    }, 5000);
}


//
function sendMail() {
    var email = document.getElementById("footerEmailInput").value;

    if (validateEmail(email)) {
        showToggleBar("You’re registered! We’ll get in touch with you shortly.", "success");
    } else {
        showToggleBar("Please enter the valid email !", "error");
    }


}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function isAlphabetWithSpaces(text) {
    const re = /^[A-Za-z ]+$/;
    return re.test(text);
}



// contact  us 
function messageSent() {
  var nameContact = document.getElementById("nameContact").value.trim();
  var emailContact = document.getElementById("emailContact").value.trim();
  var subjectContact = document.getElementById("subjectContact").value.trim();
  var messageContact = document.getElementById("messageContact").value.trim();

  // Name validation
  if (nameContact === "" || !isAlphabetWithSpaces(nameContact)) {
    showToggleBar("Please enter a valid name.", "error");
    return;
  }

  // Email validation
  if (emailContact === "" || !validateEmail(emailContact)) {
    showToggleBar("Please enter a valid email address.", "error");
    return;
  }

  // Subject validation
  if (subjectContact === "" || !isAlphabetWithSpaces(subjectContact)) {
    showToggleBar("Please enter a valid subject.", "error");
    return;
  }

  // Message validation
  if (messageContact === "" || messageContact.length < 10) {
    showToggleBar("Please enter a valid message (at least 10 characters).", "error");
    return;
  }

  // If everything is valid
  showToggleBar("Message sent successfully! We will contact you shortly.", "success");

  // CLEAR ALL INPUT FIELDS
  document.getElementById("nameContact").value = "";
  document.getElementById("emailContact").value = "";
  document.getElementById("subjectContact").value = "";
  document.getElementById("messageContact").value = "";
}






