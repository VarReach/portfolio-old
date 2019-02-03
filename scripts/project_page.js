'use strict';

/* global def store*/
function getSkillsImages(skillsArr) {
    return skillsArr.map(skill => {
        return `<img class="skill-logo" src="../Images/${skill}Logo.png" alt="${skill} Logo">`;
    }).join('');
}

function getImages(imagesArr) {
    return imagesArr.map(image => {
        const tag = image.tag ? `<p>${image.tag}</p>` : '';
        const isArray = Array.isArray(image.attr);
        if (isArray) {
            const string = image.attr.map(i => {
                return `<img src="../Images/${i.url}" alt="${i.alt}">`;
            }).join('');
            return `
                <div class="project-image-holder">
                    ${string}
                </div>
                ${tag}
            `;
        } else {
            return `<div class="project-image-holder">
            <img src="../Images/${image.attr.url}" alt="${image.attr.alt}">
            </div>
            ${tag}`;
        }
    }).join('');
}

function populatePage() {
    const projects = store.projects;
    const projectIndex = $('main').data('project-index');
    const project = projects[projectIndex];
    
    const title = project.title;
    const subHeader = project.sub_header;
    const description = project.description;
    const skills = getSkillsImages(project.skills);
    const links = project.links;
    const images = getImages(project.images);
    const projectLinks = projects.map(project => def.getProjectLink(project, true)).join('');
    $('main').html(`
        <header role="banner">
            <a href="../index.html" class="header-link home-link"><i class="fa fa-angle-left" aria-hidden="true"></i> home/</a>
            <h2>${title}</h2>
            <hr />
            <div>
                ${skills}
            </div>
        </header>
        <section>
            <h5>${subHeader}</h5>
            <p>
            ${description}
            </p>
            <hr />
            <ul>
                <li><a href="${links.repo}" class="menu-sub-link">Repository <i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                <li><a href="${links.live}" class="menu-sub-link">Live Demo <i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
            </ul>
            <hr />
            <section class="project-images">
                ${images}
            </section>
        </section>
        <section>
            <hr/>
            <ul>
                ${projectLinks}
            </ul>
        </section>
    `);
}


function initialize() {
    def.main();
    def.populateMenu(true);
    populatePage();
    def.fadeInMain();
}

$(initialize);
