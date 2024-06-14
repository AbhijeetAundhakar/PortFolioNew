document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('.section');
    var navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function () {
        var currentSection = '';

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
});

function redirectToGithub() {
    window.open('https://github.com/AbhijeetAundhakar', '_blank');
}

function redirectToLinkedIn() {
    window.open('http://linkedin.com/in/abhijeet-aundhakar-986393200/', '_blank');
}
