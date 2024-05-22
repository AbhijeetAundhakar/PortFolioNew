window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.section');
    var navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function() {
        var currentSection = '';

        sections.forEach(function(section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(l => l.classList.remove('active')); // Remove active from all links
            this.classList.add('active'); // Add active to the clicked link
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });
});

function redirectToGithub() {
    window.open('https://github.com/AbhijeetAundhakar','_blank');
}

function redirectToLinkedIn() {
    window.open('http://linkedin.com/in/abhijeet-aundhakar-986393200/', '_blank');
}

document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.getElementById('navbar-toggler');
    var navbarCollapse = document.getElementById('navbarNav');
  
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('collapse');
      navbarCollapse.classList.toggle('show'); // Add smooth animation
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
      var navLinks = document.querySelectorAll('.nav-link');

      navLinks.forEach(function(navLink) {
          navLink.addEventListener('click', function() {
              // Remove 'active' class from all nav links
              navLinks.forEach(function(link) {
                  link.classList.remove('active');
              });

              // Add 'active' class to the clicked nav link
              this.classList.add('active');
          });
      });
  });
