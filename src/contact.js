import gmailicon from './lib/gmail.png';
import facebook from './lib/facebookbig.png';
import twitterbig from './lib/twitterbig.png';
import instagrambig from './lib/instagrambig.png';
import phone from './lib/telephone.png';
import { Container } from './page-elements.js';

const contactContent = document.createElement('div');
contactContent.classList.add('w-100', 'bg-white', 'd-none', 'row', 'm-0');
Container.appendChild(contactContent);

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

export default contactContent;