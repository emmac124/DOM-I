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

const logo = document.querySelector("#logo-img");
logo.setAttribute('src', 'img/logo.png');

const headerNav = document.querySelector('nav a');
const nav1 = headerNav.nextElementSibling;
const nav2 = nav1.nextElementSibling;
const nav3 = nav2.nextElementSibling;
const nav4 = nav3.nextElementSibling;
const nav5 = nav4.nextElementSibling;
const nav6 = nav5.nextElementSibling;

nav1.textContent = 'Services';
nav2.textContent = 'Product';
nav3.textContent = 'Vision';
nav4.textContent = 'Features';
nav5.textContent = 'About';
nav6.textContent = 'Contact';


const firstSection = document.querySelector('.cta');
const textAndButton = firstSection.querySelector('.cta-text');
const largeText = textAndButton.querySelector('h1');
const firstButton = textAndButton.querySelector('button');
largeText.textContent = "DOM IS AWESOME";
firstButton.textContent = 'Get Started';
console.log(textAndButton);


// const firstSection = document.querySelector('.cta-text');
// const largeText = firstSection.querySelector('h1');
// const firstButton = firstSection.querySelector('button');
// largeText.textContent = 'DOM IS AWESOME';
// firstButton.textContent = 'Get Started';

