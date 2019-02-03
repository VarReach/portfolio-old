'use strict';

/* global store */

const def = (function() {
    function handleEmailLink() {
        $('.js-email-link').click(event => {
            event.preventDefault();
            const text = $(event.currentTarget).data('clipboard-text');
    
            // Creates a temporary text-area from which to grab said text, then attempts to copy to the clipboard.
            let textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
    
            //for timeout to hide tooltip after x time.
            const hideFunc = function() {
                $(event.currentTarget).next('span.tooltip').addClass('hidden');
            };
    
            //attempt to copy to clipboard, if fails default to direct link
            try {
                document.execCommand('copy');
                $(event.currentTarget).next('span.tooltip').removeClass('hidden');
                setTimeout(hideFunc, 4000);
            } catch(err) {
                console.log('Oops. Copying failed. Employing back-up.');
                window.open('mailto:derareich@gmail.com');
            }
    
            document.body.removeChild(textArea);
        });
    }
    
    function handleMainMenuToggle() {
        $('#js-show-menu-button').click(function(event) {
            event.preventDefault();
            $('.js-main-menu').removeClass('hidden');
            $('.js-main-menu').slideDown(50, () => {
                $('.menu-container').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
                }, 800);
            });
            $('body').addClass('noscroll');
        });
        $('#js-hide-menu-button').click(function(event) {
            event.preventDefault();
            $('.js-main-menu').slideUp(50, () => {
                $('.menu-container').hide();
                $('.js-main-menu').addClass('hidden');
                $('body').removeClass('noscroll');
            });
        });
    }

    function getProjectLink(project, projectPage) {
        const title = project.title;
        const url = projectPage ? `${project.url}.html` : `project_pages/${project.url}.html`;
        return `<li><a href="${url}" class="menu-sub-link">${title}</a></li>`;
    }

    function populateMenu(projectPage) {
        const projects = store.projects;
        $('#js-menu-project-links').html(projects.map(project => {
            return getProjectLink(project, projectPage);
        }).join(''));
    }

    function fadeInMain() {
        $('main').fadeIn(250);
    }

    function main() {
        handleMainMenuToggle();
        handleEmailLink();
    }

    return {
        main,
        populateMenu,
        getProjectLink,
        fadeInMain,
    };
}());
