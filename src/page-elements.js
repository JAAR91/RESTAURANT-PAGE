import banner from './banner.jpg';
import faceimg from './facebook.png';
import twitterimg from './twitter.png';
import instragramimg from './instagram.png';

export const Content = document.getElementById('content');
Content.classList.add('p-0', 'mt-container');

export const Container = document.createElement('div');
Container.classList.add('container', 'p-0');
Content.appendChild(Container);
    
export const navBar = document.createElement('nav');
Content.appendChild(navBar);

export const ulNavb = document.createElement('ul');
ulNavb.classList.add('nav', 'nav-tabs', 'justify-content-center', 'fixed-top', 'container','rounded-top', 'bg-navbar');
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
Contact.classList.add( 'nav-link', 'text-white');
Contact.href = '#';
Contact.textContent = 'Contact';
navItem3.appendChild(Contact);

export const homeContent = document.createElement('div');
homeContent.classList.add('w-100', 'bg-white', 'p-0');
Container.appendChild(homeContent);

export const menuContent = document.createElement('div');
menuContent.classList.add('w-100', 'bg-white', 'd-none');
menuContent.style.height = '700px';
menuContent.textContent = 'im menu';
Container.appendChild(menuContent);

export const contactContent = document.createElement('div');
contactContent.classList.add('w-100', 'bg-white', 'd-none');
contactContent.style.height = '700px';
contactContent.textContent = 'im content';
Container.appendChild(contactContent);

const bannerContainer = document.createElement('div');
bannerContainer.classList.add('position-relative');
homeContent.appendChild(bannerContainer);

const Banner = new Image();
Banner.src = banner;
Banner.classList.add('w-100', 'm-0', 'banner');
bannerContainer.appendChild(Banner);

const titleContainer = document.createElement('div');
titleContainer.classList.add('position-absolute','top-50', 'start-50', 'translate-middle', 'bg-title', 'rounded-3', 'shadow', 'p-4', 'border');
bannerContainer.appendChild(titleContainer);

const Title = document.createElement('h1');
Title.classList.add('text-white','tf-restaurant', 'text-center');
Title.textContent = "Welcome to JAAR's";
titleContainer.appendChild(Title);

const subTitle = document.createElement('h1');
subTitle.classList.add('text-white', 'text-center','tf-restaurant');
subTitle.textContent = "Restaurant";
titleContainer.appendChild(subTitle);

titleContainer.innerHTML += `<p class="w-100 p-5 text-white fs-5 text-center">"Everything we do is a celebration of food – from
how we source our food and shellfish to serving
up new ways for you to enjoy it. Since 1968,
we’ve been committed to bringing you a
food experience you won’t find anywhere else. That's how we serve food Differently®"</p>`;

homeContent.innerHTML += `<div class="w-100 row p-0 m-0 rounded-bottom bg-dark">
    <div class="col-6 p-5">
        <div class="p-5">
            <p class="fs-1 text-white">Working Hours</p>
            <p class="text-muted fs-3">DINNER</p>
            <p class="text-muted fs-5">MON-THU 5:00PM – 10:00PM</p>
            <p class="text-muted fs-5">FRI – SAT   5:00PM – 10:30PM</p>
            <p class="text-muted fs-5">SUN             5:00PM – 10:00PM</p>
        </div>
    </div>
    <div class="col-6 p-5">
        <div class="p-5">
            <p class="text-white fs-1">Location</p>
            <p class="text-muted fs-3">1938 West 4th Avenue
            Vancouver, BC V6J 1M5</p>
        </div>
    </div>
</div>`;

const bottomnav = document.createElement('nav');
bottomnav.classList.add('bg-dark', 'w-100', 'mt-2', 'mb-0', 'p-4');
bottomnav.style.height = '100px';
Content.appendChild(bottomnav);

const bottomcontainer = document.createElement('div');
bottomcontainer.classList.add('container', 'd-flex','justify-content-center');
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


bottomnav.innerHTML += `<p class="m-1 text-center bg-dark text-white" >©2020 JAAR. All rights reserved. Powered by Twenty Twenty Advertising Inc.</p>`;




