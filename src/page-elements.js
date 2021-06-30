import banner from './banner.jpg';
import faceimg from './facebook.png';
import twitterimg from './twitter.png';
import instragramimg from './instagram.png';
import gmailicon from './gmail.png';
import facebook from './facebookbig.png';
import twitterbig from './twitterbig.png';
import instagrambig from './instagrambig.png';
import phone from './telephone.png';

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

export const homeContent = document.createElement('div');
homeContent.classList.add('w-100', 'bg-white', 'p-0');
Container.appendChild(homeContent);

export const menuContent = document.createElement('div');
menuContent.classList.add('w-100', 'd-none', 'p-5', 'bg-dark');
Container.appendChild(menuContent);

export const contactContent = document.createElement('div');
contactContent.classList.add('w-100', 'bg-white', 'd-none', 'row', 'm-0');

Container.appendChild(contactContent);

const bannerContainer = document.createElement('div');
bannerContainer.classList.add('position-relative');
homeContent.appendChild(bannerContainer);

const Banner = new Image();
Banner.src = banner;
Banner.classList.add('w-100', 'm-0', 'banner');
bannerContainer.appendChild(Banner);

const titleContainer = document.createElement('div');
titleContainer.classList.add('position-absolute', 'top-50', 'start-50', 'translate-middle', 'bg-title', 'rounded-3', 'shadow', 'p-4', 'border');
bannerContainer.appendChild(titleContainer);

const Title = document.createElement('h1');
Title.classList.add('text-white', 'tf-restaurant', 'text-center');
Title.textContent = "Welcome to JAAR's";
titleContainer.appendChild(Title);

const subTitle = document.createElement('h1');
subTitle.classList.add('text-white', 'text-center', 'tf-restaurant');
subTitle.textContent = 'Restaurant';
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

menuContent.innerHTML += `<div class="bg-dark w-100 row">
    <p class="text-white text-center tf-restaurant fs-1 col-12">--------------------THE--------------------</p>
    <p class="text-white text-center tf-restaurant fs-1 col-12 border-bottom pb-3">MENU</p>
    <div class="col-4 p-2 m-0">
        <div class="border-menu rounded-3 m-1">
            <p class="text-dark text-center m-0 p-1 bg-menu fs-3 tf-restaurant">APPETIZER</p>
            <div class="row">
                <p class="text-menu px-4 py-2 col-9 tf-restaurant">GARLIC BREAD</p>
                <p class="text-menu px-4 py-2 col-2 tf-restaurant">5</p>
                <p class="text-menu px-4 py-2 col-9 tf-restaurant">CARPACCIO</p>
                <p class="text-menu px-4 py-2 col-2 tf-restaurant">7</p>
                <p class="text-menu px-4 py-2 col-9 tf-restaurant">OLIVES/CHIPS</p>
                <p class="text-menu px-4 py-2 col-2 tf-restaurant">5</p>
            </div>
        </div>

        <div class="border-menu m-1 rounded-3">
            <p class="text-dark text-center m-0 p-1 bg-menu fs-3 tf-restaurant">pasta</p>
            <div class="row">
                <p class="text-menu px-4 py-2 col-9 tf-restaurant">PASTA BOLOGNESE</p>
                <p class="text-menu px-4 py-2 col-2 tf-restaurant">15</p>
                <p class="text-menu px-4 py-2 col-9 tf-restaurant">ITALIAN RAVIOLI</p>
                <p class="text-menu px-4 py-2 col-2 tf-restaurant">15</p>
                <p class="text-menu px-4 py-2 col-9 tf-restaurant">PASTA CARBONARA</p>
                <p class="text-menu px-4 py-2 col-2 tf-restaurant">15</p>
                <p class="text-menu px-4 py-2 col-9 tf-restaurant">LASGANA</p>
                <p class="text-menu px-4 py-2 col-2 tf-restaurant">20</p>
            </div>
        </div>

        <div class="bg-menu border-menu rounded-3 m-1">
            <p class="text-DARK tf-restaurant fs-8 text-center w-100 fw-bold">open hour</p>
            <p class="text-DARK tf-restaurant fs-8 text-center w-100 fw-bold">5 to 10</p>
            <p class="text-DARK tf-restaurant fs-8 text-center w-100 fw-bold">pm</p>
        </div>
    </div>
    <div class="col-8 p-2 row">
        
        <div class="col-12 row m-0 p-0">
            <div class="border-menu p-0 m-1 rounded-3">
                <p class="text-menu text-center m-0 p-0 fs-3 tf-restaurant border-menu rounded-top">OUR FAVORITE MENU/$22</p>
                <p class="text-menu text-center m-2 p-0 fs-5 tf-restaurant">steak minute</p>
                <p class="text-menu text-center m-2 p-0 fs-5 tf-restaurant">crispy chicken</p>
                <p class="text-menu text-center m-2 p-0 fs-5 tf-restaurant">whole grilled sea bass</p>
            </div>
        </div>

        <div class="col-12 row m-0 p-0">
            <div class="col-6 p-1 m-0">
                <div class="border-menu p-0 m-0 rounded-3">
                    <p class="text-dark text-center m-0 p-3 bg-menu fs-3 tf-restaurant">pizza</p>
                    <div class="row">
                        <p class="text-menu px-4 py-2 col-9 tf-restaurant">marguerita</p>
                        <p class="text-menu px-4 py-2 col-2 tf-restaurant">15</p>
                        <p class="text-menu px-4 py-2 col-9 tf-restaurant">porsciuto e funghi</p>
                        <p class="text-menu px-4 py-2 col-2 tf-restaurant">15</p>
                        <p class="text-menu px-4 py-2 col-9 tf-restaurant">bresaola</p>
                        <p class="text-menu px-4 py-2 col-2 tf-restaurant">15</p>
                        <p class="text-menu px-4 py-2 col-9 tf-restaurant">salsiccia e cipolla</p>
                        <p class="text-menu px-4 py-2 col-2 tf-restaurant">12</p>
                        <p class="text-menu px-4 py-2 col-9 tf-restaurant">vegetariana</p>
                        <p class="text-menu px-4 py-2 col-2 tf-restaurant">12</p>
                    </div>
                </div>

                <div class="border-menu p-0 my-1 mx-0 rounded-3 row">
                    <p class="text-menu text-center m-0 p-2 fs-3 tf-restaurant border-menu rounded-top col-12">burger</p>
                    <p class="text-menu m-0 p-2 fs-5 tf-restaurant col-9">cheese burger</p>
                    <p class="text-menu px-4 py-2 col-2 tf-restaurant col-2">10</p>
                    <p class="text-menu m-0 p-2 fs-5 tf-restaurant col-9">halloumi burger</p>
                    <p class="text-menu px-4 py-2 col-2 tf-restaurant col-2">10</p>
                </div>
            </div>

            <div class="col-6 p-1 m-0">
                <div class="bg-menu border-menu rounded-3">
                    <p class="text-DARK p-1 m-0 col-9 tf-restaurant fs-8 text-center w-100 fw-bold">BEST</p>
                    <p class="text-DARK p-1 m-0 col-9 tf-restaurant fs-8 text-center w-100 fw-bold">TASTE</p>
                </div>

                <div class="border-menu p-0 mx-0 my-1 rounded-3 row">
                    <p class="text-menu text-center text-vertical fs-3 m-0 p-1 tf-restaurant border-menu rounded-start col-2">ice cream</p>
                    <div class="col-10 row">
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">bourbon vanilla</p>
                        <p class="text-menu px-4 py-1 col-2 m-0 tf-restaurant col-2">5</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">chocolate cookie</p>
                        <p class="text-menu px-4 py-1 col-2 m-0 tf-restaurant col-2">5</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">mango sorbet</p>
                        <p class="text-menu px-4 py-1 col-2 m-0 tf-restaurant col-2">5</p>
                    </div>
                </div>

                <div class="border-menu p-0 mx-0 my-1 rounded-3 row">
                    <p class="text-menu text-center text-vertical fs-3 m-0 p-1 tf-restaurant border-menu rounded-start col-2">fresh drink</p>
                    <div class="col-10 row">
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">very berry</p>
                        <p class="text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2">3</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">cirtus peach</p>
                        <p class="text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2">3</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">passion juice</p>
                        <p class="text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2">3</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">fresh and fruity</p>
                        <p class="text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2">3</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">pineapple paradise</p>
                        <p class="text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2">3</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">ginger fizz</p>
                        <p class="text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2">3</p>
                        <p class="text-menu m-0 p-2 fs-6 tf-restaurant col-9">coffe shake</p>
                        <p class="text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2">3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>`;

const contactTitlecontainer = document.createElement('div');

contactTitlecontainer.classList.add('contacttitleimage', 'position-relative', 'm-0', 'p-0', 'col-12');

contactContent.appendChild(contactTitlecontainer);

contactTitlecontainer.innerHTML += `<div class="position-absolute start-50 top-50 translate-middle">
    <p class="text-center text-white fs-5 m-0 mt-5">Got a Question?</p>
    <p class="text-dark fs-1 text-center tf-restaurant m-0">Contact Us</p>
    <p class="text-center fs-6 m-0">We are here to help and asnwer any question you might have. We look forward to hear from you.</p>
</div>`;

const contactinfocontainer = document.createElement('div');
contactContent.appendChild(contactinfocontainer);

contactinfocontainer.innerHTML += '<p class="text-center m-3 fs-4">Click on any of the following links</p>';

const contactinfo = document.createElement('div');
contactinfo.classList.add('w-100', 'bg-light', 'd-flex', 'justify-content-center', 'rounded', 'my-2');
contactinfocontainer.appendChild(contactinfo);

const link = document.createElement('a');
link.href = '#';

const gmaili = new Image();
gmaili.classList.add('m-3');
gmaili.src = gmailicon;
link.appendChild(gmaili);

contactinfo.appendChild(link);

const facebookicon = new Image();
facebookicon.classList.add('m-3');
facebookicon.src = facebook;
link.appendChild(facebookicon);

contactinfo.appendChild(link);

const twittericon = new Image();
twittericon.classList.add('m-3');
twittericon.src = twitterbig;
link.appendChild(twittericon);

contactinfo.appendChild(link);

const instragramicon = new Image();
instragramicon.classList.add('m-3');
instragramicon.src = instagrambig;
link.appendChild(instragramicon);

contactinfo.appendChild(link);

contactinfocontainer.innerHTML += '<p class="text-center m-3 fs-4">Or contact us to</p>';

const phonecontainer = document.createElement('div');
phonecontainer.classList.add('d-flex', 'justify-content-center');
contactinfocontainer.appendChild(phonecontainer);

const telephonicon = new Image();
telephonicon.classList.add('m-3');
telephonicon.src = phone;

phonecontainer.appendChild(telephonicon);

phonecontainer.innerHTML += `<div class="d-flex flex-column">
    <p>Call the main office on:</p>
    <p>1938 West 4th Avenue Vancouver, BC V6J 1M5</p>
    <p>To number:</p>
    <a class="link-info text-decoration-none" href="#">Tel. 555-5555-5555</a>
</div>`;
