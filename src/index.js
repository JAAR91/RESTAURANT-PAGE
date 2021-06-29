import {Content, Home, Menu,Contact, homeContent, menuContent, contactContent} from "./page-elements";
import './style.css';

function homeClick() {
    Home.classList.add('active');
    Menu.classList.remove('active');
    Contact.classList.remove('active');
    homeContent.classList.remove('d-none');
    menuContent.classList.add('d-none');
    contactContent.classList.add('d-none');
};

function menuClick () {
    Menu.classList.add('active');
    Home.classList.remove('active');
    Contact.classList.remove('active');
    menuContent.classList.remove('d-none');
    homeContent.classList.add('d-none');
    contactContent.classList.add('d-none');
};

function ContactClick() {
    Contact.classList.add('active');
    Home.classList.remove('active');
    Menu.classList.remove('active');
    contactContent.classList.remove('d-none');
    menuContent.classList.add('d-none');
    homeContent.classList.add('d-none');
};

Home.addEventListener('click',homeClick);

Menu.addEventListener('click',menuClick);

Contact.addEventListener('click',ContactClick);