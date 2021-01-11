const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//nav bar and logo
const logo = document.querySelector("#logo-img");
logo.setAttribute('src', 'img/logo.png');

const headerNav = document.querySelectorAll('a');
headerNav[0].textContent = "Services";
headerNav[1].textContent = "Product";
headerNav[2].textContent = "Vision";
headerNav[3].textContent = "Features";
headerNav[4].textContent = "About";
headerNav[5].textContent = "Contact";

headerNav.forEach(link => link.style.color = "green");

//header text and image
const firstSection = document.querySelector('.cta-text');
const largeText = firstSection.querySelector('h1');
const firstButton = firstSection.querySelector('button');
const mainImg = document.querySelector('#cta-img');
largeText.innerHTML = "DOM <br> IS <br> AWESOME";
firstButton.textContent = 'Get Started';
mainImg.setAttribute('src', '../img/header-img.png');

//main content
const mainSectionH4 = document.querySelectorAll('.text-content h4');
const mainSectionP = document.querySelectorAll('.text-content p');

mainSectionH4[0].textContent = 'Features';
mainSectionP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

mainSectionH4[1].textContent = 'About';
mainSectionP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src','img/mid-page-accent.jpg');

mainSectionH4[2].textContent = 'Services';
mainSectionP[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

mainSectionH4[3].textContent = 'Product';
mainSectionP[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

mainSectionH4[4].textContent = 'Vision';
mainSectionP[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//Contact
const contactInfoH4 = document.querySelector('.contact h4');
const contactInfoP = document.querySelectorAll('.contact p');
contactInfoH4.textContent = 'Contact';
contactInfoP[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA";
contactInfoP[1].textContent = "1 (888) 888-8888";
contactInfoP[2].textContent = "sales@greatidea.io";

//footer
const footerCopyright = document.querySelector('footer p');
footerCopyright.textContent = "Copyright Great Idea! 2018";

//prepend and appendChild
const settings = document.createElement('a');
settings.textContent = 'Settings';
settings.href = "#";
settings.style.color = "green";
document.querySelector('nav').appendChild(settings);

const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = "#";
blogLink.style.color = "green";
document.querySelector('nav').prepend(blogLink);

const wholeDoc = document.querySelector('body');
wholeDoc.style.backgroundColor = "lightgray";
