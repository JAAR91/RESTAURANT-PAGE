import {
  Home, Menu, Contact, homeContent, menuContent, contactContent,
} from './page-elements.js';
import './style.css';

function homeClick() {
  Home.classList.add('active', 'text-dark');
  Home.classList.remove('text-white');
  Menu.classList.remove('active', 'text-dark');
  Menu.classList.add('text-white');
  Contact.classList.remove('active', 'text-dark');
  Contact.classList.add('text-white');
  homeContent.classList.remove('d-none');
  menuContent.classList.add('d-none');
  contactContent.classList.add('d-none');
}

function menuClick() {
  Menu.classList.add('active', 'text-dark');
  Menu.classList.remove('text-white');
  Home.classList.remove('active', 'text-dark');
  Home.classList.add('text-white');
  Contact.classList.remove('active', 'text-dark');
  Contact.classList.add('text-white');
  menuContent.classList.remove('d-none');
  homeContent.classList.add('d-none');
  contactContent.classList.add('d-none');
}

function ContactClick() {
  Contact.classList.add('active', 'text-dark');
  Contact.classList.remove('text-white');
  Home.classList.remove('active', 'text-dark');
  Home.classList.add('text-white');
  Menu.classList.remove('active', 'text-dark');
  Menu.classList.add('text-white');
  contactContent.classList.remove('d-none');
  menuContent.classList.add('d-none');
  homeContent.classList.add('d-none');
}

Home.addEventListener('click', homeClick);

Menu.addEventListener('click', menuClick);

Contact.addEventListener('click', ContactClick);