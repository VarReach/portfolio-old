'use strict';

/* global def store*/

function populatePage() {
    const projects = store.projects;
    projects.forEach(project => {
        const title = project.title;
        const subHeader = project.sub_header;
        const type = project.type;
        const url = project.url;
        $('main').append(`
            <section>
                <span class="project-topic">${type}</span>
                <a href="project_pages/${url}.html" class="project-header-link js-project-hover"><h2>${title}</h2></a>
                <hr>
                <h5>${subHeader}</h5>
            </section>
        `);
    });
}

function applyHoverCssChanges(target) {
    const targets = $(target).closest('main').find('h1, span, a, h5').not(target);
    $('hr').css('border-color', '#171717');
    $('footer').css('border-color', '#171717');
    targets.css('transition', 'color 0.5s');
    targets.addClass('js-transparent-text');
}

function removeHoverCssChanges(target) {
    const targets = $(target).closest('main').find('h1, span, a, h5').not(target);
    $('hr').css('border-color', '#bcbcbc');
    $('footer').css('border-color', '#bcbcbc');
    targets.removeClass('js-transparent-text');
}

function handleProjectHover() {
    $('.js-project-hover').mouseenter(event => {
        $('body').css('background-color', '#171717');
        applyHoverCssChanges(event.currentTarget);
    });

    $('.js-project-hover').mouseleave(event => {
        $('body').css('background-color', '#ebebeb');
        removeHoverCssChanges(event.currentTarget);
    });
}


function initialize() {
    def.main();
    def.populateMenu(false);
    populatePage();
    handleProjectHover();
    def.fadeInMain();
}

$(initialize);
