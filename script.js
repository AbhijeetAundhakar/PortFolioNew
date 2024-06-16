document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('.section');
    var navLinks = document.querySelectorAll('nav ul li a');
    var animatedSections = document.querySelectorAll('.about, .experience, #projects .row, #projects .card, .info-icons, .haveQuestion, .social-icons, #certificates .row, #certificates .card');

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

        // Check visibility of animated sections
        animatedSections.forEach(checkVisibility);
    });

    function checkVisibility(section) {
        const rect = section.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        
        if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
            section.classList.add('visible');
        }
    }

    // Initial check for visibility on page load
    animatedSections.forEach(checkVisibility);

    let linkedInButton = document.querySelector('.aboutButton');
    linkedInButton.addEventListener('click', function () {
        window.open('https://www.linkedin.com/in/abhijeet-aundhakar-986393200/', '_blank');
    });
   
    let linkedInButtonHome = document.querySelector('#linkedInButton');
    linkedInButtonHome.addEventListener('click', function () {
        window.open('https://www.linkedin.com/in/abhijeet-aundhakar-986393200/', '_blank');
    });

    let githubButtonHome = document.querySelector('#githubButton');
    githubButtonHome.addEventListener('click', function () {
        window.open('https://github.com/AbhijeetAundhakar', '_blank');
    });
});
