import faceimg from './lib/facebook.png';
import twitterimg from './lib/twitter.png';
import instragramimg from './lib/instagram.png';

export const Content = document.getElementById('content');
Content.classList.add('p-0', 'mt-container');

export const Container = document.createElement('div');
Container.classList.add('container', 'p-0');
Content.appendChild(Container);

export const navBar = document.createElement('nav');
Content.appendChild(navBar);

export const ulNavb = document.createElement('ul');
ulNavb.classList.add('nav', 'nav-tabs', 'justify-content-center', 'fixed-top', 'container', 'rounded-top', 'bg-navbar');
navBar.appendChild(ulNavb);

export const navItem1 = document.createElement('li');
navItem1.classList.add('nav-item');
ulNavb.appendChild(navItem1);

export const Home = document.createElement('a');
Home.classList.add('nav-link', 'active', 'text-dark');
Home.href = '#';
Home.textContent = 'Home';
navItem1.appendChild(Home);

export const navItem2 = document.createElement('li');
navItem2.classList.add('nav-item');
ulNavb.appendChild(navItem2);

export const Menu = document.createElement('a');
Menu.classList.add('nav-link', 'text-white');
Menu.href = '#';
Menu.textContent = 'Menu';
navItem2.appendChild(Menu);

export const navItem3 = document.createElement('li');
navItem3.classList.add('nav-item');
ulNavb.appendChild(navItem3);

export const Contact = document.createElement('a');
Contact.classList.add('nav-link', 'text-white');
Contact.href = '#';
Contact.textContent = 'Contact';
navItem3.appendChild(Contact);

const bottomnav = document.createElement('nav');
bottomnav.classList.add('bg-dark', 'w-100', 'mt-2', 'mb-0', 'p-4');
bottomnav.style.height = '100px';
Content.appendChild(bottomnav);

const bottomcontainer = document.createElement('div');
bottomcontainer.classList.add('container', 'd-flex', 'justify-content-center');
bottomnav.appendChild(bottomcontainer);

const face = new Image();
face.src = faceimg;
face.classList.add('m-2');
bottomcontainer.appendChild(face);

const twitter = new Image();
twitter.src = twitterimg;
twitter.classList.add('m-2');
bottomcontainer.appendChild(twitter);

const instagram = new Image();
instagram.src = instragramimg;
instagram.classList.add('m-2');
bottomcontainer.appendChild(instagram);

bottomnav.innerHTML += '<p class="m-1 text-center bg-dark text-white" >©2020 JAAR. All rights reserved. Powered by Twenty Twenty Advertising Inc.</p>';
