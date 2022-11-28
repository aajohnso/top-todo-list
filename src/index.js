import {todoHeaderSetup,todoSidebarSetup,todoMainSetup} from './modules/pageElementSetup.js';

todoInit();

function todoInit() {
    document.body.appendChild(todoHeaderSetup());
    document.body.appendChild(todoSidebarSetup());
    document.body.appendChild(todoMainSetup());
}