let projectLinks = document.querySelectorAll('[data-target-slug]');
let projectImages = document.querySelectorAll('[data-slug]');

projectLinks.forEach(link => {
    link.addEventListener('mouseover', function(e) {
        let id = link.getAttribute('data-target-slug');
        let target = document.querySelector('[data-slug="' + id + '"]');
        target.classList.add('project-image--active');
    });
    link.addEventListener('mouseout', function(e) {
        let id = link.getAttribute('data-target-slug');
        let target = document.querySelector('[data-slug="' + id + '"]');
        target.classList.remove('project-image--active');
    });
});
