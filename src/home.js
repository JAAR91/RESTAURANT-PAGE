import banner from './lib/banner.jpg';
import { Container } from './page-elements.js';

const homeContent = document.createElement('div');
homeContent.classList.add('w-100', 'bg-white', 'p-0');
Container.appendChild(homeContent);

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

export default homeContent;