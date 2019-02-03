'use strict';

const store = (function() {
    const projects = [
        { 
            title: 'Bookmarks Manager',
            url: 'bookmark_manager',
            sub_header: 'Save your favorite websites with this bookmark manager',
            skills: ['HTML','CSS','Javascript','jQuery'],
            description: 'Built using HTML5, CSS, Javascript and jQuery. Uses Ajax and JSON to handle API requests. In collaboration with <a href="https://github.com/paypay43" class="header-link">Payman Kossari</a>.',
            type: 'web application',
            links: {
                repo: 'https://github.com/VarReach/alex-payman-bookmark-app',
                live: 'https://varreach.github.io/alex-payman-bookmark-app/',
            },
            images: [
                { 
                    attr: { url: 'bookmark_manager/1.png', alt: 'Base view of the bookmark web app' },
                    tag: 'The base view of the Bookmark Manager. State-management is used to populate the application.'
                },
                {
                    attr: { url: 'bookmark_manager/2.png', alt: 'Adding a new bookmark view' },
                    tag: 'When adding a bookmark, validation is done server-side. Upon confirmation, the client-side state is updated and a render function is called.'
                },
                {
                    attr: { url: 'bookmark_manager/3.png', alt: 'Editing a bookmark view' },
                    tag: 'Users can also edit a bookmark: changing the title, url, rating and description.',
                }
            ]
        },
        { 
            title: 'Quiz Application',
            url: 'quiz_app',
            sub_header: 'Test your Sci-Fi television knowledge!',
            skills: ['HTML','CSS','Javascript','jQuery'],
            description: 'Built using HTML5, CSS, Javascript and jQuery. In collaboration with <a href="https://github.com/jonkleinpet" class="header-link">Jon Kleinpeter</a>.',
            type: 'web application',
            links: {
                repo: 'https://github.com/VarReach/alex-jon-quiz',
                live: 'https://varreach.github.io/alex-jon-quiz/',
            },
            images: [
                { 
                    attr: { url: 'quiz_app/1.png', alt: 'Base view of the quiz app' },
                    tag: 'The base view of the Quiz with stylings heavily inspired by <a href="http://easyrocketstudio.com/" class="tag-link">Easyrocketstudio</a>.'
                },
                { 
                    attr: [
                        {
                            url: 'quiz_app/2.png',
                            alt: 'Question view of the quiz',
                        },
                        {
                            url: 'quiz_app/3.png',
                            alt: 'Immediate response to your answer view',
                        }
                    ],
                    tag: 'Answering a question is easy! A client just needs to click on the appropriate response, then click on the submit button. The quiz provides immediate feedback on your answer along with a bit of trivia. <br/><br/> Behind the scenes, the state is updated and the dom then rendered based on your score, current question and whether you are to be answering or receiving feedback on a question.'
                },
                { 
                    attr: { url: 'quiz_app/4.png', alt: 'Final view of the quiz app, shows your score' },
                    tag: 'The final view of the quiz. Scores your score out of ten, along with an image of a medal based on your performance. If you did poorly, you can always try again!'
                },
            ]
        }
    ];

    return {
        projects,
    }
}());
