export const Content = document.getElementById('content');
Content.classList.add('container', 'position-relative', 'p-0', 'mt-container');
    
export const navBar = document.createElement('nav');
Content.appendChild(navBar);

export const ulNavb = document.createElement('ul');
ulNavb.classList.add('nav', 'nav-tabs', 'justify-content-center', 'fixed-top', 'pt-2', 'container','rounded-top', 'mt-1', 'bg-navbar');
navBar.appendChild(ulNavb);

export const navItem1 = document.createElement('li');
navItem1.classList.add('nav-item');
ulNavb.appendChild(navItem1);

export const Home = document.createElement('a');
Home.classList.add('nav-link', 'active', 'link-dark');
Home.href = '#';
Home.textContent = 'Home';
navItem1.appendChild(Home);

export const navItem2 = document.createElement('li');
navItem2.classList.add('nav-item');
ulNavb.appendChild(navItem2);

export const Menu = document.createElement('a');
Menu.classList.add('nav-link', 'link-dark');
Menu.href = '#';
Menu.textContent = 'Menu';
navItem2.appendChild(Menu);

export const navItem3 = document.createElement('li');
navItem3.classList.add('nav-item');
ulNavb.appendChild(navItem3);

export const Contact = document.createElement('a');
Contact.classList.add( 'nav-link','link-dark');
Contact.href = '#';
Contact.textContent = 'Contact';
navItem3.appendChild(Contact);

export const homeContent = document.createElement('div');
homeContent.classList.add('w-100', 'bg-white');
homeContent.style.height = '700px';
homeContent.textContent = 'im home';
Content.appendChild(homeContent);

export const menuContent = document.createElement('div');
menuContent.classList.add('w-100', 'bg-white', 'd-none');
menuContent.style.height = '700px';
menuContent.textContent = 'im menu';
Content.appendChild(menuContent);

export const contactContent = document.createElement('div');
contactContent.classList.add('w-100', 'bg-white', 'd-none');
contactContent.style.height = '700px';
contactContent.textContent = 'im content';
Content.appendChild(contactContent);



